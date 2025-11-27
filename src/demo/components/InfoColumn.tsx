import { Plus, Minus } from 'lucide-react';

interface InfoColumnProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const InfoColumn = ({ title, isExpanded, onToggle }: InfoColumnProps) => {
  return (
    <div className="info-column">
      <div className="column-header">
        <button
          className="toggle-button"
          onClick={onToggle}
          aria-label={isExpanded ? 'Minimize' : 'Expand'}
        >
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </button>
        <div className="vertical-title">{title}</div>
      </div>

      {isExpanded && (
        <div className="info-content">
          <div className="info-text">
            <h2>Willkommen</h2>
            <p>
              Hier finden Sie Anleitungen und wichtige Bemerkungen zur Nutzung
              des Steuer-Assistenten.
            </p>
            <p>
              Weitere Inhalte werden in Kürze hinzugefügt.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoColumn;
