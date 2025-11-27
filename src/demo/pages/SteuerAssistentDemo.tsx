import { useState } from "react";
import TaxChatColumn from "../components/TaxChatColumn";
import InfoColumn from "../components/InfoColumn";
import "../styles/steuer-assistent.css";

const SteuerAssistentDemo = () => {
  const [expandedColumns, setExpandedColumns] = useState({
    left: true,
    middle: true,
    right: true,
  });

  const toggleColumn = (column: "left" | "middle" | "right") => {
    setExpandedColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const getColumnClass = (column: "left" | "middle" | "right") => {
    const expanded = expandedColumns[column];
    const expandedCount = Object.values(expandedColumns).filter(Boolean).length;

    if (!expanded) return "column-minimized";
    if (expandedCount === 1) return "column-full";
    if (expandedCount === 2) return "column-half";
    return "column-third";
  };

  return (
    <div className="steuer-assistent-page">
      <div className="columns-container">
        <div className={`column column-left ${getColumnClass("left")}`}>
          <TaxChatColumn
            title="Offener KI-Chat"
            webhookUrl="https://n8n-j4ogc84ccogk8gwogc8s88cc.crux-consulting.ai/webhook/905230cf-b689-4677-aa0d-b8fb6255f730"
            isExpanded={expandedColumns.left}
            onToggle={() => toggleColumn("left")}
            colorTheme="left"
          />
        </div>

        <div className={`column column-middle ${getColumnClass("middle")}`}>
          <TaxChatColumn
            title="Steuer-Assistent"
            webhookUrl="https://n8n-j4ogc84ccogk8gwogc8s88cc.crux-consulting.ai/webhook/db7e7d5c-eb77-41e7-9688-47f0f5b0d66d"
            isExpanded={expandedColumns.middle}
            onToggle={() => toggleColumn("middle")}
            colorTheme="middle"
          />
        </div>

        <div className={`column column-right ${getColumnClass("right")}`}>
          <InfoColumn
            title="Anleitungen und Bemerkungen"
            isExpanded={expandedColumns.right}
            onToggle={() => toggleColumn("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default SteuerAssistentDemo;
