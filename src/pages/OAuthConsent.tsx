import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

type AuthorizationDetails = {
  client?: { name?: string; client_name?: string; redirect_uris?: string[] } | null;
  redirect_url?: string;
  redirect_to?: string;
  scope?: string;
  scopes?: string[];
};

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;

const SCOPE_LABELS: Record<string, string> = {
  openid: "Confirm your identity",
  email: "Share your email address",
  profile: "Share your basic profile",
};

const Shell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-6 py-16">
    <SEO title="Authorize access — Crux Consulting" description="Review and approve access for a connected application." />
    <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">{children}</div>
  </div>
);

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";

  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("This authorization link is missing an authorization_id.");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const target = window.location.pathname + window.location.search;
        window.location.href = `/auth?next=${encodeURIComponent(target)}`;
        return;
      }
      if (!active) return;
      setEmail(sess.session.user.email ?? null);

      const { data, error: detailsError } = await oauth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (detailsError) {
        setError(detailsError.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  const decide = async (approve: boolean) => {
    setBusy(true);
    const { data, error: decisionError } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (decisionError) {
      setBusy(false);
      setError(decisionError.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  };

  if (error) {
    return (
      <Shell>
        <h1 className="text-2xl font-bold mb-3">Could not load this request</h1>
        <p className="text-gray-300 text-sm">{error}</p>
        <p className="text-gray-400 text-xs mt-4">
          Close this window and start the connection again from the application you were using.
        </p>
      </Shell>
    );
  }

  if (!details) {
    return (
      <Shell>
        <p className="text-gray-300">Loading authorization request…</p>
      </Shell>
    );
  }

  const clientName = details.client?.name ?? details.client?.client_name ?? "an application";
  const redirectUri = details.client?.redirect_uris?.[0];
  const scopes = details.scopes ?? (details.scope ? details.scope.split(/\s+/).filter(Boolean) : []);

  return (
    <Shell>
      <h1 className="text-2xl font-bold mb-2">Connect {clientName} to Crux Consulting</h1>
      <p className="text-gray-300 text-sm mb-6">
        This lets {clientName} use this app's tools as you.
      </p>

      <dl className="text-sm space-y-3 mb-6">
        <div>
          <dt className="text-gray-400">Signed in as</dt>
          <dd className="text-white">{email ?? "your account"}</dd>
        </div>
        {redirectUri && (
          <div>
            <dt className="text-gray-400">Returns to</dt>
            <dd className="text-white break-all">{redirectUri}</dd>
          </div>
        )}
      </dl>

      {scopes.length > 0 && (
        <ul className="text-sm text-gray-300 space-y-1 mb-6 list-disc pl-5">
          {scopes.map((scope) => (
            <li key={scope}>{SCOPE_LABELS[scope] ?? `Additional permission requested: ${scope}`}</li>
          ))}
        </ul>
      )}

      <p className="text-xs text-gray-400 mb-6">
        This does not bypass this app's permissions or backend policies.
      </p>

      <div className="flex gap-3">
        <Button variant="gradient" enableMouseGradient disabled={busy} onClick={() => decide(true)} className="flex-1">
          Approve
        </Button>
        <Button variant="secondary" disabled={busy} onClick={() => decide(false)} className="flex-1">
          Cancel connection
        </Button>
      </div>
    </Shell>
  );
};

export default OAuthConsent;
