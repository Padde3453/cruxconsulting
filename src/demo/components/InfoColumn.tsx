import { Plus, Minus } from "lucide-react";

interface InfoColumnProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const InfoColumn = ({ title, isExpanded, onToggle }: InfoColumnProps) => {
  return (
    <div className="info-column">
      <div className="column-header">
        <button className="toggle-button" onClick={onToggle} aria-label={isExpanded ? "Minimize" : "Expand"}>
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </button>
        <div className="vertical-title">{title}</div>
      </div>

      {isExpanded && (
        <div className="info-content">
          <div className="info-text">
            <h2>Willkommen</h2>
            <p>
              Dies ist eine <strong>Web-Demo</strong> für ein zweigeteiltes KI-Chatbot-System für die Lengermann
              Hoffmann Kanzlei. Es dient rein zur Veranschaulichung und zu einem ersten Test der möglichen
              Funktionalität und des Nutzererlebnisses.
            </p>
            <p>
              Da es sich um eine <strong>Demo</strong> handelt, kann es vorkommen, dass sich der Chat z.T. ungewöhnlich
              verhält und falsche Antworten liefert.
            </p>
            <p>Sie sehen drei Spalten, welche Sie jeweils minimieren und maximieren können.</p>

            <h3>Linke Spalte - Offener KI-Chat</h3>
            <p>
              <strong>Allgemeiner, sicherer interner Chat</strong>. Hat <strong>keinen</strong> Zugriff auf Kundendaten.
              Nutzen Sie diesen für allgemeine Fachfragen, momentan ist hier ein offenes KI-Modell am Werk, teilen Sie
              also bitte KEINE KUNDENSPEZIFISCHEN oder INTERNE INFORMATIONEN.
            </p>

            <h3>Mittlere Spalte - Ihr Steuer-Assistent</h3>
            <p>
              Dieser Chat simuliert einen Chat, welcher streng-gesichert, Zugriff auf Kundeninformationen hat und Sie
              dabei unterstützen soll, sehr schnell und einfach Kundeninformationen zu bekommen. Um Ihnen diese
              Funktionen zu zeigen, liegen diesem Chatbot frei erstellte Steuerbescheide und Belege zur Verfügung. Sie
              können sich die Unterlagen über diesen{" "}
              <a
                href="https://drive.google.com/drive/folders/10J-nLlEfBqYcqAp8uRLgEB2lG6s-W3-S?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK
              </a>{" "}
              ansehen.
            </p>

            <p>Beispielfragen welche Sie dem Assistenten stellen können:</p>
            <ul>
              <li>Welche Dokumente haben wir für die Kundin</li>
              <li>Was sind die Kern Daten aus dem Steuerbescheid</li>
              <li>Welches Finanzamt ist für den Kunden zuständig?</li>
              <li>Welche Belege liegen für die Kundin vor?</li>
              <li>Wie hoch ist die Steuernachzahlung?</li>
            </ul>

            <p>
              <strong>Feedback und Wünsche</strong> können Sie gerne über diesen{" "}
              <a href="https://forms.gle/yVBHHUyknrL28CJW7" target="_blank" rel="noopener noreferrer">
                LINK
              </a>{" "}
              einreichen.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoColumn;
