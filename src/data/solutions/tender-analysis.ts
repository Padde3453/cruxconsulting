import type { SolutionPage } from './types';
import { BLOG_PATHS, ROUTE_PATHS } from '../localizedRoutes';

const intentHypotheses = [
  'Ausschreibungen analysieren KI',
  'Ausschreibungsunterlagen automatisch auswerten',
  'KI Ausschreibungsassistent',
];

export const tenderAnalysisDe: SolutionPage = {
  id: 'tender-analysis',
  language: 'de',
  slug: 'ausschreibungen-analysieren',
  path: ROUTE_PATHS.tenderAnalysis.de,
  translationPath: ROUTE_PATHS.tenderAnalysis.en,
  title: 'Ausschreibungen mit KI analysieren | Crux Consulting',
  description:
    'Ausschreibungsunterlagen strukturiert auswerten: Passung und Muss-Kriterien prüfen, Anforderungen, Fristen und Nachweise als Aufgaben erfassen – mit menschlicher Prüfung.',
  h1: 'Ausschreibungen mit KI analysieren',
  summary:
    'Der Ausschreibungsassistent von Crux liest die Vergabeunterlagen zusammen mit Ihrem freigegebenen Unternehmensprofil, schätzt die Passung zu Ihren Fähigkeiten ein und macht aus Anforderungen, Fristen und geforderten Nachweisen eine überprüfbare Aufgabenliste. Die Entscheidung über die Teilnahme und die Kontrolle wichtiger Angaben an den Originaldokumenten bleiben bei Ihrem Team.',
  breadcrumbLabel: 'Ausschreibungen analysieren',
  sections: [
    {
      heading: 'Wofür die Analyse gedacht ist',
      paragraphs: [
        'Ausschreibungen sind lang, verteilen wichtige Angaben über viele Dokumente und schließen Angebote schon bei kleinen formalen Fehlern aus. Bevor Ihr Team Tage in ein Angebot investiert, sollte klar sein, ob die Ausschreibung zu Ihrem Unternehmen passt und ob alle Muss-Kriterien erfüllbar sind.',
        'Die KI-gestützte Analyse beschleunigt diese erste Einschätzung und strukturiert anschließend die Bearbeitung – sie ist Arbeitsgrundlage, nicht Ersatz für das fachliche Urteil Ihres Teams.',
      ],
    },
    {
      heading: 'Was Sie bereitstellen',
      bullets: [
        'Die Ausschreibungsunterlagen: Leistungsbeschreibung, Bewerbungsbedingungen, Formblätter und Anlagen – auch in unterschiedlichen Dateiformaten und als Scan.',
        'Ein von Ihnen freigegebenes Unternehmensprofil mit Leistungen, Referenzen, Qualifikationen und verfügbaren Kapazitäten.',
        'Optional eigene Ausschlusskriterien, zum Beispiel Regionen oder Leistungsbereiche, in denen Sie grundsätzlich nicht anbieten.',
      ],
    },
    {
      heading: 'Was Sie erhalten',
      bullets: [
        'Eine begründete Einschätzung der Passung: welche Anforderungen gut, teilweise oder nicht durch Ihr Profil abgedeckt erscheinen.',
        'Eine Übersicht der Muss-Kriterien und Eignungsanforderungen mit Verweis auf die Fundstelle in den Unterlagen.',
        'Fristen und Termine, etwa für Bieterfragen, Angebotsabgabe und Bindefrist.',
        'Eine Liste der geforderten Nachweise, Erklärungen und Formblätter.',
        'Konkrete Aufgaben mit Bezug zur jeweiligen Anforderung, die Sie im Team verteilen und abhaken können.',
      ],
    },
    {
      heading: 'So läuft es in der Praxis ab',
      ordered: true,
      bullets: [
        'Sie laden die Ausschreibungsunterlagen hoch; Ihr Unternehmensprofil ist bereits hinterlegt.',
        'Der Assistent erstellt eine erste Einschätzung der Passung und listet Muss-Kriterien, Fristen und Nachweise auf.',
        'Ihr Team prüft die wichtigsten Punkte an den Originaldokumenten und trifft die Go/No-Go-Entscheidung.',
        'Bei einem Go werden die Anforderungen zu Aufgaben, die Sie Verantwortlichen zuordnen.',
        'Während der Bearbeitung werden die Dokumente regelmäßig gegen die Anforderungsliste abgeglichen, damit offene Punkte sichtbar bleiben.',
      ],
    },
  ],
  useCasesTitle: 'Typische Einsatzsituationen',
  useCases: [
    { title: 'Erste Sichtung', text: 'Neue Ausschreibungen schneller einordnen, statt jede einzelne vollständig durchzulesen, bevor klar ist, ob sie relevant ist.' },
    { title: 'Go/No-Go-Entscheidung', text: 'Eine nachvollziehbare Begründung als Grundlage für die Entscheidung im Team – inklusive der Punkte, die noch geklärt werden müssen.' },
    { title: 'Übergabe an das Angebotsteam', text: 'Anforderungen, Fristen und Nachweise liegen strukturiert vor, sodass die Bearbeitung ohne langes Einlesen starten kann.' },
    { title: 'Vollständigkeitskontrolle', text: 'Vor der Abgabe prüfen, ob alle geforderten Nachweise und Formblätter berücksichtigt sind.' },
  ],
  limits: {
    heading: 'Grenzen und menschliche Prüfung',
    points: [
      'Die Analyse ersetzt keine rechtliche Prüfung der Vergabeunterlagen.',
      'KI kann Angaben übersehen oder falsch zuordnen. Wichtige Fakten wie Fristen, Ausschlusskriterien und geforderte Nachweise bestätigt Ihr Team an den Originaldokumenten.',
      'Die Passungseinschätzung ist nur so gut wie das hinterlegte Unternehmensprofil.',
      'Weder ein Zuschlag noch die Vollständigkeit eines Angebots kann garantiert werden. Die Teilnahmeentscheidung treffen Sie.',
    ],
  },
  faqTitle: 'Häufige Fragen zur Analyse',
  faqs: [
    {
      question: 'Ersetzt die Analyse das Lesen der Unterlagen?',
      answer: 'Nein. Sie verschafft einen schnellen, strukturierten Überblick und zeigt, wo die relevanten Stellen stehen. Entscheidende Angaben prüft Ihr Team weiterhin im Originaldokument.',
    },
    {
      question: 'Welche Dateiformate kann der Assistent verarbeiten?',
      answer: 'Viele gängige Dateitypen, auch gescannte Dokumente. Ob ein bestimmtes Format oder ein Export aus einem Vergabeportal zuverlässig funktioniert, klären wir am besten an einem echten Beispiel in der Demo.',
    },
    {
      question: 'Wo werden die Ausschreibungsdaten verarbeitet?',
      answer: 'Alle Dienste werden in Europa gehostet, und jeder Kunde erhält eine eigene Datenbank.',
    },
    {
      question: 'Wie hängt die Analyse mit dem Auto-Fill zusammen?',
      answer: 'Die Analyse klärt, ob und wie Sie anbieten. Das Auto-Fill bereitet danach wiederkehrende Angaben in Formularen und Fragebögen auf Basis Ihrer freigegebenen Daten vor.',
    },
  ],
  relatedTitle: 'Weiterführend',
  related: [
    { label: 'Ausschreibungsassistent im Überblick', path: ROUTE_PATHS.tenderAssistant.de, description: 'Analyse, Projektmanagement und Auto-Fill in einer Lösung.' },
    { label: 'Ausschreibungsformulare mit KI vorbereiten', path: ROUTE_PATHS.tenderAutofill.de, description: 'Freigegebene Daten und frühere Antworten wiederverwenden – mit fachlicher Freigabe.' },
    { label: 'Ausschreibungen: In der Theorie großartig, in der Praxis herausfordernd', path: BLOG_PATHS.tendersTheoryVsReality('de'), description: 'Blogartikel: Warum Ausschreibungen für viele Unternehmen so aufwendig sind.' },
  ],
  lastModified: '2026-10-08',
  editorial: { intentHypotheses },
};

export const tenderAnalysisEn: SolutionPage = {
  id: 'tender-analysis',
  language: 'en',
  slug: 'tender-analysis',
  path: ROUTE_PATHS.tenderAnalysis.en,
  translationPath: ROUTE_PATHS.tenderAnalysis.de,
  title: 'AI Tender Analysis for Companies | Crux Consulting',
  description:
    'Analyse tender documents in a structured way: check fit and mandatory criteria, turn requirements, deadlines and required documents into tasks – with human review.',
  h1: 'Analyse tenders with AI',
  summary:
    'The Crux Tender Assistant reads the tender documents together with your approved company profile, assesses the fit with your capabilities and turns requirements, deadlines and required documents into a checkable task list. The bid/no-bid decision and verifying key facts against the source documents stay with your team.',
  breadcrumbLabel: 'Tender analysis',
  sections: [
    {
      heading: 'What the analysis is for',
      paragraphs: [
        'Tenders are long, spread important details across many documents and exclude bids for small formal mistakes. Before your team invests days in a bid, it should be clear whether the tender fits your company and whether every mandatory criterion can be met.',
        'AI-assisted analysis speeds up this first assessment and then structures the work. It is a working basis, not a replacement for your team’s professional judgement.',
      ],
    },
    {
      heading: 'What you provide',
      bullets: [
        'The tender documents: statement of work, conditions of participation, forms and annexes – including different file formats and scans.',
        'An approved company profile covering services, references, qualifications and available capacity.',
        'Optionally, your own exclusion criteria, such as regions or service areas you never bid for.',
      ],
    },
    {
      heading: 'What you get',
      bullets: [
        'A reasoned fit assessment: which requirements appear well, partly or not covered by your profile.',
        'An overview of mandatory and eligibility criteria with a reference to where they appear in the documents.',
        'Deadlines and dates, for example for bidder questions, submission and the bid validity period.',
        'A list of required evidence, declarations and forms.',
        'Concrete tasks linked to each requirement that you can assign and tick off within your team.',
      ],
    },
    {
      heading: 'How it works in practice',
      ordered: true,
      bullets: [
        'You upload the tender documents; your company profile is already stored.',
        'The assistant produces a first fit assessment and lists mandatory criteria, deadlines and required documents.',
        'Your team checks the key points against the source documents and makes the bid/no-bid decision.',
        'If you bid, the requirements become tasks that you assign to owners.',
        'While you work, documents are regularly checked against the requirement list so open items stay visible.',
      ],
    },
  ],
  useCasesTitle: 'Typical situations',
  useCases: [
    { title: 'First screening', text: 'Classify new tenders faster instead of reading each one in full before knowing whether it is relevant.' },
    { title: 'Bid/no-bid decision', text: 'A traceable rationale as the basis for the team decision – including the points that still need clarification.' },
    { title: 'Handover to the bid team', text: 'Requirements, deadlines and required documents are already structured, so work can start without lengthy reading-in.' },
    { title: 'Completeness check', text: 'Check before submission that all required evidence and forms have been covered.' },
  ],
  limits: {
    heading: 'Limits and human review',
    points: [
      'The analysis does not replace a legal review of the tender documents.',
      'AI can miss or misattribute details. Your team confirms key facts such as deadlines, exclusion criteria and required evidence against the source documents.',
      'The fit assessment is only as good as the company profile it is based on.',
      'Neither winning a contract nor the completeness of a bid can be guaranteed. The decision to bid is yours.',
    ],
  },
  faqTitle: 'Frequently asked questions about the analysis',
  faqs: [
    {
      question: 'Does the analysis replace reading the documents?',
      answer: 'No. It gives you a fast, structured overview and shows where the relevant passages are. Your team still checks decisive details in the source document.',
    },
    {
      question: 'Which file formats can the assistant handle?',
      answer: 'Many common file types, including scanned documents. Whether a specific format or an export from a procurement portal works reliably is best checked with a real example during the demo.',
    },
    {
      question: 'Where is tender data processed?',
      answer: 'All services are hosted in Europe, and every customer receives their own database.',
    },
    {
      question: 'How does the analysis relate to auto-fill?',
      answer: 'The analysis clarifies whether and how you bid. Auto-fill then prepares recurring answers in forms and questionnaires based on your approved data.',
    },
  ],
  relatedTitle: 'Further reading',
  related: [
    { label: 'Tender Assistant overview', path: ROUTE_PATHS.tenderAssistant.en, description: 'Analysis, project management and auto-fill in one solution.' },
    { label: 'Prepare tender questionnaires with AI', path: ROUTE_PATHS.tenderAutofill.en, description: 'Reuse approved data and past answers – with expert sign-off.' },
    { label: 'Tenders: Great in Theory, Tough on Companies in Reality', path: BLOG_PATHS.tendersTheoryVsReality('en'), description: 'Blog article: why tenders are so demanding for many companies.' },
  ],
  lastModified: '2026-10-08',
  editorial: { intentHypotheses },
};
