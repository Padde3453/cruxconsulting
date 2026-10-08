import type { SolutionPage } from './types';
import { BLOG_PATHS, ROUTE_PATHS } from '../localizedRoutes';

const intentHypotheses = [
  'Ausschreibungsformulare automatisch ausfüllen',
  'RFP Automatisierung',
  'RFP Software',
  'Ausschreibungsmanagement Software',
];

export const tenderAutofillDe: SolutionPage = {
  id: 'tender-autofill',
  language: 'de',
  slug: 'ausschreibungsformulare-ausfuellen',
  path: ROUTE_PATHS.tenderAutofill.de,
  translationPath: ROUTE_PATHS.tenderAutofill.en,
  title: 'Ausschreibungsformulare mit KI vorbereiten | Crux Consulting',
  description:
    'Freigegebene Unternehmensdaten und frühere Antworten wiederverwenden, veraltete Angaben und offene Fragen erkennen und Antwortentwürfe zur fachlichen Prüfung erstellen.',
  h1: 'Ausschreibungsformulare mit KI vorbereiten',
  summary:
    'Viele Formulare und Fragebögen verlangen dieselben Standardinformationen in immer neuen Formaten. Das Auto-Fill des Ausschreibungsassistenten nutzt Ihre freigegebenen Unternehmensdaten und Antworten aus früheren Ausschreibungen, bereitet Entwürfe vor, markiert veraltete Angaben und offene Fragen – und übergibt alles zur fachlichen Freigabe. Ein Angebot wird dabei nicht automatisch eingereicht.',
  breadcrumbLabel: 'Ausschreibungsformulare vorbereiten',
  sections: [
    {
      heading: 'Dieselben Angaben, immer wieder neu',
      paragraphs: [
        'Firmendaten, Ansprechpartner, Referenzbeschreibungen, Angaben zu Qualitätssicherung oder Datenschutz: In fast jeder Ausschreibung werden ähnliche Informationen abgefragt – nur jedes Mal in einem anderen Formular und mit leicht anderer Formulierung. Das kostet Zeit und erhöht das Risiko, versehentlich veraltete Angaben zu übernehmen.',
      ],
    },
    {
      heading: 'Welche Daten genutzt werden',
      bullets: [
        'Unternehmensdaten und Nachweise, die Sie selbst pflegen und zur Verwendung freigegeben haben.',
        'Antworten aus früheren Ausschreibungen, die Sie als wiederverwendbar markiert haben.',
        'Projektbeschreibungen und Referenzen aus Ihrem freigegebenen Bestand.',
      ],
    },
    {
      heading: 'Was das Auto-Fill liefert',
      bullets: [
        'Antwortentwürfe für wiederkehrende Fragen, jeweils mit Hinweis auf die verwendete Quelle.',
        'Hinweise auf möglicherweise veraltete Angaben, etwa frühere Ansprechpartner, alte Kennzahlen oder abgelaufene Nachweise.',
        'Eine Liste der Fragen, für die es noch keine passende freigegebene Antwort gibt und die Ihr Team neu beantworten muss.',
      ],
    },
    {
      heading: 'So läuft es in der Praxis ab',
      ordered: true,
      bullets: [
        'Gemeinsam bauen wir aus Ihren freigegebenen Daten und früheren Ausschreibungen eine Wissensbasis auf.',
        'Sie laden ein neues Formular oder einen Fragebogen hoch.',
        'Der Assistent bereitet Entwürfe vor und markiert veraltete Angaben sowie unbeantwortete Fragen.',
        'Fachverantwortliche prüfen, ergänzen und geben die Antworten frei.',
        'Ihr Team stellt das Angebot fertig und reicht es über den vorgesehenen Weg selbst ein.',
      ],
    },
    {
      heading: 'Auto-Fill ist kein automatisch eingereichtes Angebot',
      paragraphs: [
        'Das Auto-Fill nimmt Ihrem Team die wiederkehrende Schreib- und Sucharbeit ab. Es entscheidet nicht über Inhalte, gibt keine Erklärungen in Ihrem Namen ab und reicht nichts ein. Die Verantwortung für jede Angabe und die finale Freigabe liegen bei Ihren Expertinnen und Experten.',
      ],
    },
  ],
  useCasesTitle: 'Typische Einsatzsituationen',
  useCases: [
    { title: 'Eigenerklärungen und Eignungsangaben', text: 'Wiederkehrende Unternehmens- und Eignungsangaben schneller und einheitlich vorbereiten.' },
    { title: 'Lieferanten- und Sicherheitsfragebögen', text: 'Standardfragen zu Organisation, Qualität oder Datenschutz auf Basis bereits freigegebener Antworten beantworten.' },
    { title: 'Wiederkehrende Textbausteine', text: 'Bewährte Beschreibungen von Leistungen und Referenzen als Ausgangspunkt für neue Angebote nutzen.' },
    { title: 'RFP-Fragenkataloge', text: 'Auch umfangreiche Fragenkataloge aus der Privatwirtschaft strukturiert vorbereiten.' },
  ],
  limits: {
    heading: 'Grenzen und menschliche Prüfung',
    points: [
      'Nicht jedes Formular, Portal oder Dateiformat lässt sich gleich gut vorbereiten. Welche Formate und Integrationen in Ihrem Fall funktionieren, klären wir vorab.',
      'Die Qualität der Entwürfe hängt davon ab, wie aktuell und vollständig Ihre freigegebenen Daten sind.',
      'Ausschreibungsspezifische Inhalte, etwa ein individuelles Konzept, entstehen nicht automatisch – Entwürfe sind ein Ausgangspunkt.',
      'Jede Antwort braucht vor der Abgabe eine fachliche Freigabe; die Verantwortung für den Inhalt bleibt beim Bieter.',
    ],
  },
  faqTitle: 'Häufige Fragen zum Auto-Fill',
  faqs: [
    {
      question: 'Reicht der Assistent Angebote automatisch ein?',
      answer: 'Nein. Er bereitet Entwürfe vor. Prüfung, Freigabe und Einreichung bleiben bei Ihrem Team.',
    },
    {
      question: 'Welche Antworten darf die KI verwenden?',
      answer: 'Nur Daten und Antworten, die Sie zur Wiederverwendung freigegeben haben. Fragen ohne passende freigegebene Antwort sollen als offen markiert und durch Ihr Team beantwortet werden. Prüfen Sie auch die vorgeschlagenen Antworten fachlich.',
    },
    {
      question: 'Was passiert mit veralteten Informationen?',
      answer: 'Angaben, die möglicherweise nicht mehr aktuell sind, werden markiert, damit Ihr Team sie vor der Verwendung prüft und in der Wissensbasis aktualisiert.',
    },
    {
      question: 'Funktioniert das mit unseren Formularen und Vergabeportalen?',
      answer: 'Das hängt vom konkreten Format ab. Wir prüfen es gerne an einem Ihrer echten Formulare in der Demo, statt pauschal jede Integration zu versprechen.',
    },
  ],
  relatedTitle: 'Weiterführend',
  related: [
    { label: 'Ausschreibungsassistent im Überblick', path: ROUTE_PATHS.tenderAssistant.de, description: 'Analyse, Projektmanagement und Auto-Fill in einer Lösung.' },
    { label: 'Ausschreibungen mit KI analysieren', path: ROUTE_PATHS.tenderAnalysis.de, description: 'Passung, Muss-Kriterien, Fristen und Nachweise strukturiert erfassen.' },
    { label: 'So sparen Sie Stunden bei RFP-Antworten – ohne Qualitätsverlust', path: BLOG_PATHS.saveHoursOnRfp('de'), description: 'Blogartikel: KI-gestützte RFP-Automatisierung in der Praxis.' },
  ],
  lastModified: '2026-10-08',
  editorial: { intentHypotheses },
};

export const tenderAutofillEn: SolutionPage = {
  id: 'tender-autofill',
  language: 'en',
  slug: 'tender-questionnaire-autofill',
  path: ROUTE_PATHS.tenderAutofill.en,
  translationPath: ROUTE_PATHS.tenderAutofill.de,
  title: 'AI Autofill for Tender Questionnaires | Crux Consulting',
  description:
    'Reuse approved company data and past answers, flag outdated information and unanswered questions, and draft answers for expert review before submission.',
  h1: 'Prepare tender questionnaires with AI',
  summary:
    'Many forms and questionnaires ask for the same standard information in ever-changing formats. The Tender Assistant’s auto-fill uses your approved company data and answers from past tenders to prepare drafts, flags outdated information and open questions – and hands everything over for expert sign-off. It does not submit a bid automatically.',
  breadcrumbLabel: 'Questionnaire autofill',
  sections: [
    {
      heading: 'The same information, over and over again',
      paragraphs: [
        'Company details, contacts, reference descriptions, statements on quality assurance or data protection: almost every tender asks for similar information – just in a different form and with slightly different wording each time. That costs time and increases the risk of accidentally reusing outdated details.',
      ],
    },
    {
      heading: 'Which data is used',
      bullets: [
        'Company data and evidence that you maintain and have approved for use.',
        'Answers from past tenders that you have marked as reusable.',
        'Project descriptions and references from your approved library.',
      ],
    },
    {
      heading: 'What auto-fill delivers',
      bullets: [
        'Draft answers to recurring questions, each with a note on the source used.',
        'Flags for information that may be outdated, such as former contacts, old figures or expired certificates.',
        'A list of questions with no suitable approved answer yet, which your team needs to answer from scratch.',
      ],
    },
    {
      heading: 'How it works in practice',
      ordered: true,
      bullets: [
        'Together we build a knowledge base from your approved data and past tenders.',
        'You upload a new form or questionnaire.',
        'The assistant prepares drafts and flags outdated information and unanswered questions.',
        'Subject-matter experts review, complete and approve the answers.',
        'Your team finalises the bid and submits it through the required channel.',
      ],
    },
    {
      heading: 'Auto-fill is not an automatically submitted bid',
      paragraphs: [
        'Auto-fill takes recurring writing and searching off your team’s plate. It does not decide on content, make declarations on your behalf or submit anything. Responsibility for every statement and the final sign-off rest with your experts.',
      ],
    },
  ],
  useCasesTitle: 'Typical situations',
  useCases: [
    { title: 'Self-declarations and eligibility details', text: 'Prepare recurring company and eligibility information faster and consistently.' },
    { title: 'Supplier and security questionnaires', text: 'Answer standard questions on organisation, quality or data protection based on previously approved answers.' },
    { title: 'Recurring text blocks', text: 'Use proven descriptions of services and references as a starting point for new bids.' },
    { title: 'RFP question catalogues', text: 'Prepare extensive private-sector question catalogues in a structured way.' },
  ],
  limits: {
    heading: 'Limits and human review',
    points: [
      'Not every form, portal or file format can be prepared equally well. We clarify upfront which formats and integrations work in your case.',
      'Draft quality depends on how current and complete your approved data is.',
      'Tender-specific content, such as an individual concept, is not created automatically – drafts are a starting point.',
      'Every answer needs expert sign-off before submission; responsibility for the content stays with the bidder.',
    ],
  },
  faqTitle: 'Frequently asked questions about auto-fill',
  faqs: [
    {
      question: 'Does the assistant submit bids automatically?',
      answer: 'No. It prepares drafts. Review, approval and submission remain with your team.',
    },
    {
      question: 'Which answers may the AI use?',
      answer: 'Only data and answers you have approved for reuse. Questions without a suitable approved answer should be flagged as open for your team to answer. Proposed answers still need expert review.',
    },
    {
      question: 'What happens to outdated information?',
      answer: 'Details that may no longer be current are flagged so your team checks them before use and updates the knowledge base.',
    },
    {
      question: 'Does it work with our forms and procurement portals?',
      answer: 'That depends on the specific format. We are happy to test it on one of your real forms during the demo rather than promise every integration upfront.',
    },
  ],
  relatedTitle: 'Further reading',
  related: [
    { label: 'Tender Assistant overview', path: ROUTE_PATHS.tenderAssistant.en, description: 'Analysis, project management and auto-fill in one solution.' },
    { label: 'Analyse tenders with AI', path: ROUTE_PATHS.tenderAnalysis.en, description: 'Capture fit, mandatory criteria, deadlines and required documents in a structured way.' },
    { label: 'How to Save Hours on RFP Responses Without Sacrificing Quality', path: BLOG_PATHS.saveHoursOnRfp('en'), description: 'Blog article: AI-assisted RFP automation in practice.' },
  ],
  lastModified: '2026-10-08',
  editorial: { intentHypotheses },
};
