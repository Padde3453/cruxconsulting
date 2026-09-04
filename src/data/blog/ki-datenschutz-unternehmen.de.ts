// German article body (original language) for blog post #9
// "KI und Datenschutz im Unternehmen: Der Risiko-Check von 0 bis 10"

export const contentDe = `
<p class="lead">Die entscheidende Frage lautet nicht: Welches KI-Modell ist das beste? Sondern: Welche Daten darf dieses Modell in unserem konkreten Betriebsmodell sehen – und wer behält die Kontrolle darüber?</p>

<div class="callout callout--blue">
  <strong class="callout-title">Die Kurzantwort</strong>
  <p>Eine Corporate-Lizenz ist ein wichtiger Baustein, aber kein Freifahrtschein. Für die Sicherheit zählen Datenfluss, Vertrag, Aufbewahrung, Zugriffe, Integrationen und die konkrete Konfiguration. Ein Tunnel schützt den Transport – er macht einen Cloud-Anbieter nicht automatisch zu einem lokalen System.</p>
</div>

<p>Viele Unternehmen in Deutschland, Österreich und der Schweiz stehen vor demselben Dilemma: Die Fachbereiche wollen mit modernen KI-Modellen arbeiten, während Geschäftsführung, IT und Datenschutz verhindern müssen, dass Kundendaten, Personalinformationen oder vertrauliche Unternehmenspläne unkontrolliert in fremde Systeme gelangen. Die gute Nachricht: Datenschutz und moderne KI schließen sich nicht aus. Die schlechte: Eine Corporate-Lizenz allein löst die Aufgabe nicht.</p>

<p>Dieser Beitrag ordnet die wichtigsten Möglichkeiten auf einer Skala von 0 bis 10 ein – von extrem riskant bis extrem sicher. Verglichen werden öffentliche Chatbots, Enterprise-Angebote von OpenAI, Gemini, Grok und Anthropic, direkte APIs, private Cloud- und Dedicated-Setups, Together AI mit einem eigenen Tunnel sowie Open-Source-Modelle auf der eigenen Infrastruktur.</p>

<div class="callout">
  <strong class="callout-title">Kurzfazit für Entscheider</strong>
  <p>Für die meisten Unternehmen ist eine sauber konfigurierte Enterprise- oder API-Lösung mit Auftragsverarbeitungsvertrag, klarer Region, kurzer oder keiner Speicherung, SSO/RBAC und deaktivierten Drittanbieter-Connectors ein sinnvoller Ausgangspunkt. Je sensibler die Daten, desto eher verschiebt sich die Empfehlung zu einer dedizierten privaten Umgebung oder zu lokal betriebenen Open-Source-Modellen.</p>
</div>

<h2>1. Was muss bei KI eigentlich geschützt werden?</h2>

<p>Datenschutz wird oft zu eng verstanden. Es geht nicht nur um Namen, E-Mail-Adressen oder Kundennummern. Auch Gesprächsverläufe, IP-Adressen, Bewerbungsunterlagen, Support-Tickets, Vertragsinhalte, Quellcode, Preislisten, Lieferkonditionen, Produkt-Roadmaps und interne Prognosen können schutzwürdig sein. Ein Dokument bleibt nicht deshalb unkritisch, weil der Name darin fehlt.</p>

<p>Die Datenschutzkonferenz weist darauf hin, dass personenbezogene Daten entlang des gesamten KI-Lebenszyklus betrachtet werden müssen: beim Upload, bei der Verarbeitung, in Protokollen, in Vektordatenbanken, bei Backups und bei der Löschung. Auch pseudonymisierte oder aus Texten erzeugte Embeddings können weiterhin einen Personenbezug haben.</p>

<p>Für Geschäftsgeheimnisse gilt zusätzlich: Selbst wenn keine DSGVO betroffen ist, kann ein Datenabfluss wirtschaftlich oder wettbewerbsrechtlich relevant sein. Ein Anbieter darf Daten zwar vertraglich nicht zum Training verwenden – trotzdem muss geklärt sein, ob sie für Abuse Monitoring, Support, Backups, Drittanbieter-Tools oder Suchfunktionen gespeichert und zugänglich gemacht werden.</p>

<div class="callout callout--blue">
  <strong class="callout-title">Vier Fragen vor jeder Freigabe</strong>
  <ol>
    <li>Welche Daten verlassen unser Unternehmen?</li>
    <li>Wer kann sie sehen oder weiterverarbeiten?</li>
    <li>Wie lange bleiben sie gespeichert?</li>
    <li>Können wir Nutzung, Zugriff, Löschung und Vorfall nachvollziehbar nachweisen?</li>
  </ol>
</div>

<h2>2. Die Risikoklassifikation von 0 bis 10</h2>

<p>Die Skala bewertet nicht die Intelligenz eines Modells und auch nicht den Ruf eines Anbieters. Sie bewertet, wie viel Kontrolle ein Unternehmen in einem konkreten Betriebsmodell über Daten und Sicherheitsmaßnahmen hat. Der gleiche Anbieter kann deshalb je nach Produkt, Vertrag und Einstellung in unterschiedlichen Klassen landen.</p>

<p>Die Skala ist eine praxisnahe Sicherheits- und Kontrollskala, keine rechtliche Zertifizierung. Ein Wert von 10 bedeutet nicht, dass ein System risikofrei ist – nur, dass Datenflüsse und Schutzmaßnahmen im jeweiligen Szenario maximal kontrollierbar angelegt sind.</p>

<div class="table-wrap">
  <table class="crux-table crux-table--score-first">
    <thead>
      <tr>
        <th scope="col">Score</th>
        <th scope="col">Cluster</th>
        <th scope="col">Typische Situation</th>
        <th scope="col">Geeignete Daten</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="score">0–2</td>
        <td>Extrem riskant</td>
        <td>Öffentlicher oder privater Consumer-Account; sensible Daten werden ohne Freigabe, Vertrag und klare Löschregeln eingegeben.</td>
        <td>Keine sensiblen Unternehmens- oder Personendaten.</td>
      </tr>
      <tr>
        <td class="score">3–4</td>
        <td>Niedrige Kontrolle</td>
        <td>Unklare API-/SaaS-Konfiguration, unbekannte Aufbewahrung, viele Drittanbieter oder private Workarounds.</td>
        <td>Allenfalls öffentliche oder synthetische Testdaten.</td>
      </tr>
      <tr>
        <td class="score">5–6</td>
        <td>Bedingt vertretbar</td>
        <td>Corporate-Arbeitsbereich oder Standard-Cloud-API mit DPA und Trainingsausschluss, aber noch offenen Fragen bei Region, Logs, Connectors oder Berechtigungen.</td>
        <td>Interne Informationen nach Freigabe und Datenminimierung.</td>
      </tr>
      <tr>
        <td class="score">7–8</td>
        <td>Gut kontrollierbar</td>
        <td>Enterprise/API mit klarer Rollenverteilung, kurzer oder keiner Speicherung, EU-/EWR-Verarbeitung, SSO, Zugriffskontrollen und vorgeschaltetem Gateway.</td>
        <td>Viele geschäftliche Daten; personenbezogene Daten nur nach Prüfung.</td>
      </tr>
      <tr>
        <td class="score">9–10</td>
        <td>Extrem sicher angelegt</td>
        <td>Dedizierte oder lokal betriebene Inferenz, segmentierte Infrastruktur, strikte Zugriffskontrolle, geprüfte Modelle, lokale RAG-Datenbank, Audit und – wenn nötig – Offline-Betrieb.</td>
        <td>Sehr sensible Daten; immer abhängig von Umsetzung und Governance.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout--warning">
  <strong class="callout-title">Wichtig</strong>
  <p>Ein hoher Score ersetzt keine Rechtsgrundlage, keine Datenschutz-Folgenabschätzung und keine Sicherheitsprüfung. Er ist ein Entscheidungsrahmen, damit Unternehmen Architektur- und Freigabeentscheidungen nachvollziehbar treffen können.</p>
</div>

<h2>3. Die wichtigsten Betriebsmodelle im direkten Vergleich</h2>

<p>Die folgende Übersicht ist die zentrale Entscheidungshilfe dieses Beitrags. Die Werte sind Bandbreiten, weil sich das Risiko durch Konfiguration, Datenklasse und Integrationen deutlich verändern kann.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Betriebsmodell</th>
        <th scope="col">Score</th>
        <th scope="col">Einordnung</th>
        <th scope="col">Worauf kommt es an?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Öffentlicher Gratis-Chatbot</td>
        <td class="score">0–2</td>
        <td>Höchstes Risiko für sensible Inhalte</td>
        <td>Keine Unternehmensdaten eingeben; nur öffentliches oder künstliches Material.</td>
      </tr>
      <tr>
        <td>Enterprise-Chatoberfläche</td>
        <td class="score">5–7</td>
        <td>Gute Governance möglich</td>
        <td>DPA/AVV, kein Training, SSO, Rollen, Retention und Connectors ausdrücklich prüfen.</td>
      </tr>
      <tr>
        <td>Direkte SOTA-API</td>
        <td class="score">7–8</td>
        <td>Kontrollierbarer Datenfluss</td>
        <td>Gateway für Redaction, Region, Logs und Modellrouting; zustandsbehaftete Endpunkte prüfen.</td>
      </tr>
      <tr>
        <td>Private Cloud / Dedicated Inference</td>
        <td class="score">8–9</td>
        <td>Hohe Isolation</td>
        <td>Single-Tenant, private Netzwerkpfade, EU-Region, klare Support- und Subprozessorenregeln.</td>
      </tr>
      <tr>
        <td>Together AI Standard + eigener Tunnel</td>
        <td class="score">5–6</td>
        <td>Transport geschützt, Daten bleiben extern</td>
        <td>Tunnel verbessert Zugangskontrolle, ändert aber nicht die Sichtbarkeit beim Inferenzanbieter.</td>
      </tr>
      <tr>
        <td>Together AI Dedicated / private</td>
        <td class="score">8–9</td>
        <td>Cloud mit deutlich mehr Kontrolle</td>
        <td>Dedicated, ZDR, Region und private Networking müssen vertraglich und technisch aktiv sein.</td>
      </tr>
      <tr>
        <td>Open-Source-Modell auf Firmenserver</td>
        <td class="score">8</td>
        <td>Daten bleiben im eigenen Verantwortungsbereich</td>
        <td>Server, Logs, Backups, Modellquelle, Updates und RAG-Zugriffe konsequent absichern.</td>
      </tr>
      <tr>
        <td>Open-Source-Modell isoliert/offline</td>
        <td class="score">9–10</td>
        <td>Maximale Datensouveränität</td>
        <td>Sinnvoll für besonders sensible Daten; Offline-Betrieb erschwert Updates und Monitoring.</td>
      </tr>
      <tr>
        <td>Hybrides Routing nach Datenklasse</td>
        <td class="score">6–9</td>
        <td>Pragmatische Kombination</td>
        <td>Sensible Inhalte lokal, weniger kritische Aufgaben in geprüfter Cloud; Router darf nicht umgangen werden.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Die rote Linie verläuft nicht zwischen Cloud und On-Premise. Sie verläuft zwischen kontrolliertem und unkontrolliertem Datenfluss. Ein gut abgesicherter Cloud-Service kann sicherer sein als ein schlecht administrierter eigener Server. Umgekehrt kann ein vollständig lokales System die stärkste technische Datengrenze schaffen – aber nur, wenn auch die eigene Infrastruktur professionell betrieben wird.</p>

<h2>4. SOTA-Modelle mit Corporate-Lizenz: Was ändert sich wirklich?</h2>

<p>OpenAI, Gemini, Grok und Anthropic bieten Unternehmens- und API-Produkte mit deutlich besseren Schutzmechanismen als kostenlose Consumer-Zugänge. Typische Bausteine sind: kein Training mit Kundendaten als Standard, Auftragsverarbeitungsbedingungen, SSO, Rollen, Audit-Logs, Verschlüsselung und teilweise regionale Verarbeitung. Diese Bausteine müssen aber aktiv ausgewählt, richtig konfiguriert und dokumentiert werden.</p>

<p>Wer nur den Markennamen betrachtet, vergleicht am falschen Punkt. Für den Datenschutz ist entscheidend, ob Sie eine Chatoberfläche, einen API-Endpunkt, eine Dateiablage, einen Agenten mit Tools oder eine eingebettete Suchfunktion nutzen. Jede zusätzliche Funktion kann neue Speicherorte, Subprozessoren und Berechtigungen einführen.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Anbieter / Zugang</th>
        <th scope="col">Typischer Score</th>
        <th scope="col">Datenschutzperspektive</th>
        <th scope="col">Primär prüfen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>OpenAI</td>
        <td><span class="cell-note">Enterprise/API</span><span class="score">typischerweise 7–8</span></td>
        <td>Geschäftsdaten werden nach den aktuellen Business-Regeln standardmäßig nicht zum Training verwendet. Bei der API sind Standard-Logs und eligible ZDR-/Retention-Optionen zu unterscheiden; Chat, Dateien und stateful Funktionen können eigene Speicherregeln haben.</td>
        <td>Business- und API-Datenschutz; Your Data / Data Residency</td>
      </tr>
      <tr>
        <td>Google Gemini</td>
        <td><span class="cell-note">Workspace/Cloud</span><span class="score">typischerweise 7–8</span></td>
        <td>Workspace- und Cloud-Umgebungen bieten Organisationsbindung, Admin-Kontrollen und – je nach Produkt – Datenregionen. Websuche, Maps, Notebook- und Drittanbieter-Integrationen können Datenpfade und Aufbewahrung verändern.</td>
        <td>Workspace AI Privacy Hub; Gemini Data Governance</td>
      </tr>
      <tr>
        <td>Anthropic Claude</td>
        <td><span class="cell-note">Commercial/API</span><span class="score">typischerweise 6–8</span></td>
        <td>Kommerzielle Eingaben werden nach den aktuellen Standardregeln nicht zum Training verwendet. ZDR, Retention und regionale Verarbeitung hängen vom Vertrag, Modell und Endpunkt ab; die öffentlich dokumentierte API-Geo kann global/US sein.</td>
        <td>Commercial Terms; API Data Retention; Data Residency</td>
      </tr>
      <tr>
        <td>xAI Grok</td>
        <td><span class="cell-note">Business/API</span><span class="score">typischerweise 5–8</span></td>
        <td>Die Consumer-Privacy-Policy ist nicht die API-Regelung. Für Business/API sind DPA, Subprozessoren, Transfers außerhalb Europas, Aufbewahrung und ein eventuelles ZDR-Setting im konkreten Vertrag zu prüfen.</td>
        <td>Enterprise FAQ; DPA; Subprocessor List</td>
      </tr>
      <tr>
        <td>Microsoft Copilot</td>
        <td><span class="cell-note">M365-Umgebung</span><span class="score">typischerweise 7–8</span></td>
        <td>Starke Tenant- und Identitätsbindung, Sensitivity Labels und Auditierbarkeit. Prompts und Antworten können für Audit/eDiscovery im Tenant gespeichert werden; Websuche und Drittanbieter-Tools sind separat zu bewerten.</td>
        <td>Copilot Privacy; Enterprise Data Protection</td>
      </tr>
      <tr>
        <td>AWS Bedrock</td>
        <td><span class="cell-note">Private Cloud</span><span class="score">typischerweise 8–9</span></td>
        <td>AWS dokumentiert, dass Modellanbieter keinen Zugriff auf Bedrock-Prompts und -Logs erhalten. VPC-Endpunkte, IAM, KMS, CloudTrail und regionale Profile geben zusätzliche Kontrolle; globale Cross-Region-Profile müssen bewusst gewählt werden.</td>
        <td>Bedrock Data Protection; VPC Endpoints</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Die Werte sind keine Anbieter-Rangliste. Sie zeigen, welches Niveau ein sauber konfiguriertes Modell erreichen kann. Ein nicht verwalteter Account desselben Anbieters fällt sofort in eine niedrigere Klasse.</p>

<h2>5. Echte Entscheidungsfragen aus der Praxis</h2>

<h3>Darf ich ChatGPT mit Kundendaten nutzen?</h3>
<p>Nicht pauschal ja und nicht pauschal nein. Es kommt darauf an, ob Ihr Unternehmen für den konkreten Zweck eine Rechtsgrundlage hat, ob der Anbieter als Auftragsverarbeiter eingebunden ist, ob die Daten notwendig und minimiert sind und ob Aufbewahrung, Zugriff, Löschung und Drittlandtransfer beherrscht werden. In einem privaten Gratiszugang lautet die praktische Antwort für Kundendaten: nein. In einer geprüften Enterprise- oder API-Umgebung kann die Verarbeitung vertretbar sein – nach Freigabe des konkreten Use-Cases.</p>

<h3>Sind Corporate-Lizenzen automatisch DSGVO-konform?</h3>
<p>Nein. Eine Corporate-Lizenz schafft meist bessere Vertrags- und Administrationsmöglichkeiten. Sie beantwortet aber nicht automatisch die Fragen nach Zweck, Rechtsgrundlage, Datenminimierung, Speicherfrist, Drittlandtransfer oder menschlicher Kontrolle. DSGVO-Konformität ist eine Eigenschaft des gesamten Prozesses.</p>

<h3>Werden meine Prompts für das Training verwendet?</h3>
<p>Bei vielen kommerziellen Angeboten lautet die Standardeinstellung für Business/API-Daten heute: kein Training mit Kundeneingaben. Trotzdem sollten Sie die konkrete Produktdokumentation und den Vertrag prüfen. Training ist nur ein Teil des Risikos. Logs, Abuse Monitoring, Feedback, Supportzugriff, Dateiablagen, Caches, Backups und verbundene Tools können Daten ebenfalls verarbeiten.</p>

<h3>Ist eine API sicherer als die Chatoberfläche?</h3>
<p>Eine API ist nicht automatisch sicherer, bietet aber mehr Möglichkeiten für Governance: zentrale Redaction, Datenklassifizierung, Modellrouting, IP-Allowlisting, kurze Retention, eigene Protokolle und eine Sperre für bestimmte Tools. Eine Enterprise-Chatoberfläche kann dagegen bei SSO, Rollen, Audit und Nutzerakzeptanz überlegen sein. Entscheidend ist, ob die Oberfläche oder API in eine kontrollierte Unternehmensarchitektur eingebettet ist.</p>

<h3>Ist ein Server in der EU automatisch datenschutzsicher?</h3>
<p>Nein. Der Standort ist ein Faktor, kein Gütesiegel. Ein EU-Server kann schlecht abgesichert, falsch berechtigt oder unzureichend protokolliert sein. Umgekehrt kann ein US-Anbieter mit EU-Datenregion, passenden Vertragsklauseln und ergänzenden Maßnahmen ein vertretbares Szenario ermöglichen. Für Transfers in Drittländer sind Angemessenheitsbeschluss, SCCs, zusätzliche Maßnahmen und die tatsächliche Zugriffsmöglichkeit zu prüfen.</p>

<h3>Schützt ein VPN oder Tunnel meine Daten vor dem KI-Anbieter?</h3>
<p>Nein. Ein Tunnel schützt den Weg zwischen Ihrem Client und dem Tunnel-Endpunkt. Der Inferenzanbieter erhält die Anfrage normalerweise weiterhin im Klartext, weil er sie sonst nicht bearbeiten kann. Ein Tunnel kann dennoch sehr sinnvoll sein: Er zentralisiert Authentifizierung, DLP, Logging, Routing, Rate Limits und die Auswahl zugelassener Modelle. Er erhöht also die Governance, ersetzt aber keine Anbieterprüfung.</p>

<h3>Ist Open-Source-KI auf dem eigenen Server wirklich sicherer?</h3>
<p>Aus Sicht der Datenhoheit meistens ja: Die Anfrage muss das Unternehmen nicht verlassen, und der Modellanbieter erhält keinen Live-Zugriff. Das verschiebt Verantwortung aber nach innen. Das Unternehmen schützt nun selbst Server, Identitäten, Logs, Backups, Modellgewichte, Abhängigkeiten, Updates und Schnittstellen. Ein ungepatchter lokaler Server mit offenen Ports kann riskanter sein als eine professionell betriebene Cloud-Plattform.</p>

<h3>Kann RAG den Datenschutz verbessern?</h3>
<p>Ja, wenn RAG – Retrieval-Augmented Generation – richtig umgesetzt wird. Statt vertrauliche Dokumente in das Modelltraining zu übernehmen, werden relevante Inhalte zur Laufzeit abgerufen. Das erleichtert Aktualisierung und Löschung. Aber: Embeddings und Vektordatenbanken können weiterhin personenbezogene Daten enthalten. Berechtigungen müssen vor dem Abruf geprüft werden; das Sprachmodell selbst ist keine zuverlässige Zugriffskontrolle. RAG erhöht den Score nur, wenn Dokumente, Vektoren und Nutzerrechte sauber getrennt sind.</p>

<h3>Darf KI Personalentscheidungen vorbereiten?</h3>
<p>Nur mit besonderer Vorsicht – Stichwort EU AI Act. Bewerbungs-, Leistungs- oder Krankheitsdaten sind personenbezogen und teilweise besonders sensibel. Wenn KI Empfehlungen erzeugt, die Beschäftigte oder Bewerber erheblich beeinflussen, greifen erhebliche zusätzliche Anforderungen aus dem EU AI Act an Transparenz, menschliche Aufsicht und je nach Anwendungsfall an die Zulässigkeit automatisierter Entscheidungen. Ein Mensch, der nur noch den Vorschlag abnickt, ist keine wirksame Kontrolle.</p>

<h3>Welche KI ist für ein mittelständisches Unternehmen die richtige?</h3>
<p>Die Antwort hängt von der Datenklasse und dem Use-Case ab. Für öffentliche Marketingtexte reicht ein kontrollierter Cloud-Zugang. Für interne Richtlinien oder nicht-personenbezogene Dokumente ist eine Enterprise-Lösung mit DPA und SSO oft passend. Für HR, M&amp;A, Quellcode, Kundensupport mit Identitätsdaten oder strategische Produktinformationen sind ein dedizierter Zugang, ein lokales Modell oder ein hybrides Routing meist angemessener.</p>

<h2>6. Together AI mit Tunnel: sinnvoll, aber nicht lokal</h2>

<p>Together AI ist ein Beispiel für ein wichtiges Zwischenmodell: Ein Unternehmen nutzt Open-Source-Modelle, lässt die Inferenz aber von einem Cloud-Anbieter ausführen. Das kann technologisch flexibel sein, ist aus Datenschutzsicht jedoch weiterhin eine externe Verarbeitung.</p>

<h3>Was der Tunnel verbessert</h3>
<ul>
  <li>Zentrale Anmeldung statt vieler individueller API-Schlüssel.</li>
  <li>Redaction oder Pseudonymisierung, bevor ein Prompt den eigenen Verantwortungsbereich verlässt.</li>
  <li>Policy Enforcement: nur freigegebene Modelle, Datenklassen und Tools.</li>
  <li>Zentrale Protokollierung, Rate Limits, Sperrlisten und ein nachvollziehbarer Datenfluss.</li>
  <li>Routing: einfache Aufgaben in die Cloud, sensible Aufgaben auf ein lokales Modell.</li>
</ul>

<h3>Was der Tunnel nicht verbessert</h3>
<p>Together AI verarbeitet die Anfrage weiterhin, wenn sie zur Inferenz dorthin gesendet wird. Laut den aktuellen Anbieterangaben werden Inputs und Outputs standardmäßig nicht zum Training verwendet; temporäres Caching, Organisationseinstellungen, Passthrough zu Upstream-Providern und fehlende Regionswahl beim Standard-Serverless-Angebot müssen trotzdem geprüft werden. Dedicated Inference mit Single-Tenant-Isolation, ZDR, Region und privatem Networking kann deutlich höher eingeordnet werden.</p>

<div class="callout">
  <strong class="callout-title">Einfacher Merksatz</strong>
  <blockquote>
    <p>Tunnel = bessere Unternehmenssteuerung.<br />On-Premise = anderer Datenverantwortungsbereich.<br />Nur die zweite Aussage beschreibt echte lokale Datenhaltung.</p>
  </blockquote>
</div>

<h2>7. Open-Source-Modelle auf dem Firmenserver</h2>

<p>Ein lokal betriebenes Modell ist die direkteste Möglichkeit, Daten im eigenen Kontrollbereich zu halten. Die Anfrage geht nicht an OpenAI, Google, Anthropic, xAI oder Together AI. Das ist ein großer Vorteil für Geschäftsgeheimnisse und besonders schützenswerte personenbezogene Daten.</p>

<p>Trotzdem ist „lokal“ keine Abkürzung um Datenschutz und Informationssicherheit herum. Das Unternehmen bleibt verantwortlich für Zweck, Berechtigung, Löschung, Zugriff und Dokumentation. Außerdem entsteht eine eigene Lieferkette: Modellgewichte, Container, Inferenzserver, UI, Vektordatenbank und Plugins müssen auf Herkunft, Integrität und Updatefähigkeit geprüft werden.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Lokale Variante</th>
        <th scope="col">Score</th>
        <th scope="col">Stärke</th>
        <th scope="col">Pflichtkontrollen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Eigener Server, mit Internetzugang</td>
        <td class="score">8</td>
        <td>Sehr gute Datenhoheit, aber Angriffsfläche und Betriebsrisiko bleiben im Unternehmen.</td>
        <td>Netzsegmentierung, Patchen, IAM, Monitoring, Backups, Modellprüfung.</td>
      </tr>
      <tr>
        <td>Private EU-Cloud / eigener Tenant</td>
        <td class="score">8–9</td>
        <td>Starker Kontrollgewinn ohne vollständige eigene Hardware; Cloud- und Subprozessoren bleiben relevant.</td>
        <td>DPA, Region, private Endpoints, Schlüssel, Adminzugriffe, Logs.</td>
      </tr>
      <tr>
        <td>On-Premise, getrenntes Netz</td>
        <td class="score">9</td>
        <td>Datenpfad bleibt im Unternehmen; Betrieb und Updates müssen kontrolliert erfolgen.</td>
        <td>Physische Sicherheit, Identitäten, sichere Updates, Notfallbetrieb.</td>
      </tr>
      <tr>
        <td>Air-Gapped / vollständig offline</td>
        <td class="score">9–10</td>
        <td>Maximale Begrenzung externer Datenabflüsse; nicht automatisch sicher gegen Insider oder lokale Fehler.</td>
        <td>Medienkontrolle, Modellimport, Patchfenster, Rollen, Audit, Backup.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>RAG: der sinnvolle Mittelweg für interne Wissensassistenten</h3>

<p>Für viele KMU ist nicht das Training eines eigenen Modells das Ziel, sondern ein Assistent, der interne Dokumente findet und verständlich beantwortet. RAG kann dafür geeignet sein: Die Wissensbasis bleibt getrennt vom Grundmodell und kann aktualisiert oder gelöscht werden. Die Vektordatenbank ist aber ein schützenswertes System und darf keine Berechtigungen aushebeln.</p>

<ul>
  <li>Dokumente nur aus freigegebenen Quellen indexieren.</li>
  <li>Berechtigungen vor der Suche und vor der Ausgabe prüfen – nicht erst im Prompt.</li>
  <li>Mandanten, Abteilungen und besonders sensible Dokumente logisch und technisch trennen.</li>
  <li>Embeddings, Chatverläufe und Logs wie potenziell personenbezogene Daten behandeln.</li>
  <li>Löschung in Original, Index, Cache, Backup und Protokollen nachvollziehbar umsetzen.</li>
</ul>

<h2>8. Hybride KI: oft die pragmatischste Sicherheitsarchitektur</h2>

<p>Unternehmen müssen sich nicht zwischen „alles Cloud“ und „alles lokal“ entscheiden. Ein hybrides Modell kann den Schutzbedarf in die Architektur übersetzen. Eine lokale Datenklassifizierung oder ein Gateway entscheidet, welche Anfrage wohin darf. Öffentliche Inhalte und allgemeine Recherche können ein geprüftes SOTA-Modell nutzen. Interne, personenbezogene oder strategische Inhalte werden redigiert, pseudonymisiert oder lokal verarbeitet.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Datenklasse</th>
        <th scope="col">Beispiele</th>
        <th scope="col">Passendes Modell</th>
        <th scope="col">Mindestanforderung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Öffentlich</td>
        <td>Website-Texte, allgemeine Marktinformationen</td>
        <td>Cloud-SOTA mit Standardkontrollen</td>
        <td>Kein Personenbezug, keine Geheimnisse.</td>
      </tr>
      <tr>
        <td>Intern</td>
        <td>Richtlinien, Prozessbeschreibungen, interne FAQs</td>
        <td>Enterprise-Cloud oder private EU-Umgebung</td>
        <td>SSO, Rollen, Retention und Connectoren begrenzen.</td>
      </tr>
      <tr>
        <td>Vertraulich</td>
        <td>Preislisten, Angebote, Quellcode, Verträge</td>
        <td>Dediziert, private Cloud oder lokal</td>
        <td>Keine offenen Tools; Gateway und Vier-Augen-Freigabe.</td>
      </tr>
      <tr>
        <td>Hochsensibel</td>
        <td>Gesundheit, Personal, M&amp;A, besonders kritische IP</td>
        <td>Lokal, segmentiert oder offline</td>
        <td>Use-Case- und Rechtsprüfung vor Produktivbetrieb.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Der Router ist dabei ein sicherheitsrelevantes Bauteil. Wenn Mitarbeitende bei einem Fehler einfach einen anderen Cloud-Account verwenden können, existiert die Policy nur auf dem Papier. Freigaben müssen technisch erzwungen und regelmäßig geprüft werden.</p>

<h2>9. Was Unternehmen in DACH konkret prüfen sollten</h2>

<p>Eine Entscheidung für ein KI-Modell sollte wie eine kleine Beschaffungs- und Sicherheitsprüfung behandelt werden. Die folgenden Fragen sind bewusst verständlich formuliert und können als Freigabe-Checkliste verwendet werden.</p>

<ol>
  <li><strong>Use-Case beschreiben:</strong> Was soll die KI tun, wer nutzt sie und welche Entscheidung bleibt beim Menschen?</li>
  <li><strong>Daten klassifizieren:</strong> öffentlich, intern, vertraulich oder hochsensibel – inklusive Anhängen, Logs und Embeddings.</li>
  <li><strong>Datenfluss zeichnen:</strong> Client, Gateway, Modellanbieter, Subprozessoren, Speicher, Tools, Backups und Löschung.</li>
  <li><strong>Vertrag prüfen:</strong> DPA/AVV, Rolle des Anbieters, Zweckbindung, Training, Unterauftragsverarbeiter, Supportzugriff und Vorfallmeldung.</li>
  <li><strong>Region bewerten:</strong> Wo wird verarbeitet, wo gespeichert, wer kann aus welchem Land zugreifen und welcher Transfermechanismus gilt?</li>
  <li><strong>Aufbewahrung begrenzen:</strong> Retention, Abuse Logs, Feedback, Caches, Dateien, Chatverlauf und Backups getrennt betrachten.</li>
  <li><strong>Zugriffe minimieren:</strong> SSO, MFA, Rollen, Least Privilege, Tenant-Trennung und kein automatischer Zugriff auf das gesamte Laufwerk.</li>
  <li><strong>Ausgaben kontrollieren:</strong> Halluzinationen, Prompt Injection, Datenabfluss, sensible Ableitungen und unzulässige Entscheidungen testen.</li>
  <li><strong>Menschen verantwortlich halten:</strong> KI darf Entwürfe und Hinweise liefern; die verantwortliche Person prüft und entscheidet.</li>
  <li><strong>Dokumentieren und schulen:</strong> KI-Inventar, interne Richtlinie, Freigabeprozess, Schulungen und regelmäßige Neubewertung etablieren.</li>
</ol>

<div class="callout callout--blue">
  <strong class="callout-title">Was in eine KI-Richtlinie gehört</strong>
  <ul>
    <li>Erlaubte Tools und Konten</li>
    <li>Verbotene Datenklassen</li>
    <li>Freigabeweg für neue Use-Cases</li>
    <li>Umgang mit personenbezogenen Daten</li>
    <li>Regeln für Dateien, RAG und externe Tools</li>
    <li>Protokollierung und Löschung</li>
    <li>Meldeweg bei Fehlversand oder Datenabfluss</li>
    <li>Menschliche Kontrolle bei Entscheidungen</li>
  </ul>
</div>

<h2>10. Die häufigsten Denkfehler</h2>

<div class="table-wrap">
  <table class="crux-table crux-table--narrow">
    <thead>
      <tr>
        <th scope="col">Denkfehler</th>
        <th scope="col">Korrektur</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>„Wir haben einen Vertrag, also ist alles erlaubt.“</td>
        <td>Der Vertrag regelt den Anbieter. Zweck, Rechtsgrundlage, Datenminimierung und interne Berechtigungen bleiben Aufgabe des Unternehmens.</td>
      </tr>
      <tr>
        <td>„Die Daten liegen in Europa, also besteht kein Risiko.“</td>
        <td>Standort, Zugriffsmöglichkeiten, Subprozessoren und technische Absicherung müssen zusammen betrachtet werden.</td>
      </tr>
      <tr>
        <td>„Der Tunnel verschlüsselt die Daten, also sieht Together AI nichts.“</td>
        <td>Der Inferenzanbieter muss den Prompt zur Bearbeitung entschlüsseln können. Der Tunnel schützt vor allem den Transport und die Unternehmenssteuerung.</td>
      </tr>
      <tr>
        <td>„Open Source heißt automatisch sicher.“</td>
        <td>Offene oder frei verfügbare Gewichte können ungeprüfte Abhängigkeiten, unklare Lizenzen oder gefährliche Dateien enthalten.</td>
      </tr>
      <tr>
        <td>„RAG ist nur eine Suchfunktion.“</td>
        <td>RAG speichert Inhalte und Embeddings und muss deshalb wie ein eigenes Datenbanksystem mit Berechtigungen, Löschung und Monitoring behandelt werden.</td>
      </tr>
      <tr>
        <td>„Ein Mensch schaut am Ende kurz darüber.“</td>
        <td>Wirksame menschliche Kontrolle braucht Zeit, Informationen und echte Entscheidungskompetenz – besonders bei HR, Kundenbewertung und Risikofällen.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>11. Fazit: Sicherheit entsteht durch Architektur</h2>

<p>Für Entscheidungsträger in DACH gibt es keine einzelne „datenschutzkonforme KI“, die jede Aufgabe gleichermaßen löst. Es gibt passende Betriebsmodelle für unterschiedliche Datenklassen.</p>

<p>Die pragmatische Standardempfehlung für viele Unternehmen lautet: Ein verwalteter Enterprise- oder API-Zugang mit DPA/AVV, klarer Datenregion, Trainingsausschluss, möglichst kurzer Retention, SSO, Rollen, Audit und einem Gateway, das Datenklassen und Tools steuert. Das liegt – bei sauberer Umsetzung – typischerweise im Bereich 7 bis 8.</p>

<p>Für besonders vertrauliche oder stark regulierte Prozesse sind dedizierte private Umgebungen und lokal betriebene Open-Source-Modelle die kontrollierbarere Wahl. Sie können 8 bis 10 erreichen, verlangen aber konsequente IT-Sicherheit, Modell- und Lieferkettenprüfung sowie belastbare Betriebsprozesse.</p>

<p>Der wichtigste Gedanke bleibt: Ein eigener Server ist kein Selbstzweck, und ein SOTA-Modell ist kein Freibrief. Gute KI-Governance verbindet Schutzbedarf, Datenfluss, Vertrag und Technik. Genau dort liegt die Crux – der entscheidende Punkt, an dem aus KI-Euphorie eine belastbare Unternehmenslösung wird.</p>

<div class="callout">
  <strong class="callout-title">Nächster sinnvoller Schritt</strong>
  <p>Erstellen Sie ein KI-Inventar mit drei bis fünf realen Use-Cases, klassifizieren Sie die darin verarbeiteten Daten und zeichnen Sie den Datenfluss. Erst danach sollte die Entscheidung für Anbieter, Tunnel, private Cloud oder On-Premise fallen.</p>
</div>

<h2>12. Quellen und weiterführende Informationen</h2>

<p>Die Einordnung basiert auf offiziellen Leitlinien, Behördeninformationen und den öffentlich zugänglichen Datenschutz- und Sicherheitsangaben der genannten Anbieter. Produktbedingungen und Datenresidenzoptionen können sich ändern; vor einer Freigabe sollte die aktuelle Vertragsversion geprüft werden.</p>

<ol class="sources">
  <li><a href="https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf" target="_blank" rel="noopener noreferrer">Datenschutzkonferenz: Orientierungshilfe KI und Datenschutz</a> — Rollen, Datenflüsse, geschlossene/offene Systeme, Rechtsgrundlagen und Schutzmaßnahmen.</li>
  <li><a href="https://www.datenschutzkonferenz-online.de/media/oh/DSK-OH_KI-Systeme.pdf" target="_blank" rel="noopener noreferrer">Datenschutzkonferenz: Technische und organisatorische Maßnahmen für KI-Systeme</a> — Sicherheit über den gesamten KI-Lebenszyklus.</li>
  <li><a href="https://www.datenschutzkonferenz-online.de/media/oh/DSK_OH_RAG.pdf" target="_blank" rel="noopener noreferrer">Datenschutzkonferenz: RAG und Datenschutz</a> — RAG, Vektordatenbanken, Berechtigungen und Löschung.</li>
  <li><a href="https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en" target="_blank" rel="noopener noreferrer">EDPB: Opinion 28/2024 on certain data protection aspects related to AI models</a> — Anonymität, Rechtsgrundlage und Verantwortlichkeit bei KI-Modellen.</li>
  <li><a href="https://www.edpb.europa.eu/documents/recommendation/recommendations-012020-on-measures-that-supplement-transfer-tools-to_en" target="_blank" rel="noopener noreferrer">EDPB: Recommendations 01/2020 on supplementary transfer measures</a> — Drittlandtransfers und ergänzende technische Maßnahmen.</li>
  <li><a href="https://dsb.gv.at/kuenstlichebrintelligenz/kuenstliche-intelligenz-datenschutz" target="_blank" rel="noopener noreferrer">Österreichische Datenschutzbehörde: Künstliche Intelligenz und Datenschutz</a> — DSGVO, AI Act, Verantwortlichkeit und Transparenz.</li>
  <li><a href="https://www.edoeb.admin.ch/en/cross-border-transfer-of-personal-data" target="_blank" rel="noopener noreferrer">EDÖB/FDPIC: Cross-border transfer of personal data</a> — Schweizer Anforderungen und Schutzmechanismen bei Auslandtransfers.</li>
  <li><a href="https://openai.com/enterprise-privacy/" target="_blank" rel="noopener noreferrer">OpenAI: Enterprise Privacy / API Your Data</a> — Business-Datenschutz und Enterprise-Kontrollen.</li>
  <li><a href="https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub" target="_blank" rel="noopener noreferrer">Google Workspace: Generative AI Privacy Hub</a> — Workspace-Daten, Admin-Kontrollen und Grenzen einzelner Funktionen.</li>
  <li><a href="https://platform.claude.com/docs/en/manage-claude/api-and-data-retention" target="_blank" rel="noopener noreferrer">Anthropic: API Data Retention / Commercial Terms</a> — Retention, ZDR und kommerzielle Datenverarbeitung.</li>
  <li><a href="https://x.ai/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer">xAI: Enterprise DPA</a> — Verarbeiterrolle, Subprozessoren, Transfers und Löschung für Business/API.</li>
  <li><a href="https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" target="_blank" rel="noopener noreferrer">Microsoft: Microsoft 365 Copilot privacy</a> — Tenantbindung, Speicherung, Audit und Websuche.</li>
  <li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html" target="_blank" rel="noopener noreferrer">AWS: Bedrock data protection</a> — Zugriff der Modellanbieter, VPC, IAM und regionale Inferenz.</li>
  <li><a href="https://docs.together.ai/docs/privacy-and-security" target="_blank" rel="noopener noreferrer">Together AI: Privacy and Security</a> — Training, Caching, Standard- und Dedicated-Inference.</li>
  <li><a href="https://opensource.org/ai/open-source-ai-definition" target="_blank" rel="noopener noreferrer">Open Source Initiative: Open Source AI Definition</a> — Abgrenzung von Open Source und Open Weights.</li>
  <li><a href="https://huggingface.co/docs/hub/security-pickle" target="_blank" rel="noopener noreferrer">Hugging Face: Pickle scanning and security</a> — Risiken ausführbarer Modelldateien und sichere Formate.</li>
  <li><a href="https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/" target="_blank" rel="noopener noreferrer">OWASP: GenAI / LLM Top 10</a> — Prompt Injection, Datenabfluss, Supply Chain, Poisoning und Vektorrisiken.</li>
</ol>
`;
