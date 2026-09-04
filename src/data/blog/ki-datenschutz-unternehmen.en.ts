// English article body (professionally edited translation) for blog post #9
// "AI and Data Protection in Companies: The 0-to-10 Risk Check"

export const contentEn = `
<p class="lead">The decisive question is not: Which AI model is the best? It is: Which data may this model see in our specific operating model – and who keeps control over it?</p>

<div class="callout callout--blue">
  <strong class="callout-title">The short answer</strong>
  <p>A corporate licence is an important building block, but not a free pass. What matters for security is the data flow, the contract, retention, access, integrations and the actual configuration. A tunnel protects the transport – it does not automatically turn a cloud provider into a local system.</p>
</div>

<p>Many companies in Germany, Austria and Switzerland face the same dilemma: business units want to work with modern AI models, while management, IT and data protection must prevent customer data, HR information or confidential business plans from leaking uncontrolled into third-party systems. The good news: data protection and modern AI are not mutually exclusive. The bad news: a corporate licence alone does not solve the task.</p>

<p>This article places the most important options on a scale from 0 to 10 – from extremely risky to extremely secure. It compares public chatbots, enterprise offerings from OpenAI, Gemini, Grok and Anthropic, direct APIs, private cloud and dedicated setups, Together AI with a company-owned tunnel, and open-source models on your own infrastructure.</p>

<div class="callout">
  <strong class="callout-title">Executive summary</strong>
  <p>For most companies, a properly configured enterprise or API solution with a data processing agreement, a clearly defined region, short or no retention, SSO/RBAC and disabled third-party connectors is a sensible starting point. The more sensitive the data, the more the recommendation shifts towards a dedicated private environment or locally operated open-source models.</p>
</div>

<h2>1. What actually needs to be protected when using AI?</h2>

<p>Data protection is often understood too narrowly. It is not only about names, e-mail addresses or customer numbers. Conversation histories, IP addresses, job applications, support tickets, contract contents, source code, price lists, delivery terms, product roadmaps and internal forecasts can also be worthy of protection. A document does not become harmless simply because a name is missing from it.</p>

<p>The German Data Protection Conference (Datenschutzkonferenz) points out that personal data must be considered along the entire AI lifecycle: at upload, during processing, in logs, in vector databases, in backups and at deletion. Even pseudonymised data or embeddings generated from text can still relate to identifiable persons.</p>

<p>For trade secrets, an additional rule applies: even where the GDPR is not affected, a data leak can be relevant economically or under competition law. A provider may be contractually barred from using data for training – but it still has to be clarified whether the data is stored and made accessible for abuse monitoring, support, backups, third-party tools or search functions.</p>

<div class="callout callout--blue">
  <strong class="callout-title">Four questions before every approval</strong>
  <ol>
    <li>Which data leaves our company?</li>
    <li>Who can see it or process it further?</li>
    <li>How long is it stored?</li>
    <li>Can we demonstrably trace usage, access, deletion and incidents?</li>
  </ol>
</div>

<h2>2. The risk classification from 0 to 10</h2>

<p>The scale does not rate the intelligence of a model, nor the reputation of a provider. It rates how much control a company has over data and security measures in a specific operating model. The same provider can therefore land in different classes depending on product, contract and configuration.</p>

<p>The scale is a practical security and control scale, not a legal certification. A score of 10 does not mean a system is risk-free – only that data flows and safeguards in that scenario are designed to be as controllable as possible.</p>

<div class="table-wrap">
  <table class="crux-table crux-table--score-first">
    <thead>
      <tr>
        <th scope="col">Score</th>
        <th scope="col">Cluster</th>
        <th scope="col">Typical situation</th>
        <th scope="col">Suitable data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="score">0–2</td>
        <td>Extremely risky</td>
        <td>Public or private consumer account; sensitive data is entered without approval, contract or clear deletion rules.</td>
        <td>No sensitive company or personal data.</td>
      </tr>
      <tr>
        <td class="score">3–4</td>
        <td>Low control</td>
        <td>Unclear API/SaaS configuration, unknown retention, many third parties or private workarounds.</td>
        <td>At most public or synthetic test data.</td>
      </tr>
      <tr>
        <td class="score">5–6</td>
        <td>Conditionally acceptable</td>
        <td>Corporate workspace or standard cloud API with DPA and training exclusion, but open questions on region, logs, connectors or permissions.</td>
        <td>Internal information after approval and data minimisation.</td>
      </tr>
      <tr>
        <td class="score">7–8</td>
        <td>Well controllable</td>
        <td>Enterprise/API with clearly assigned roles, short or no retention, EU/EEA processing, SSO, access controls and an upstream gateway.</td>
        <td>Many business data; personal data only after review.</td>
      </tr>
      <tr>
        <td class="score">9–10</td>
        <td>Designed to be extremely secure</td>
        <td>Dedicated or locally operated inference, segmented infrastructure, strict access control, vetted models, local RAG database, audit and – where necessary – offline operation.</td>
        <td>Highly sensitive data; always dependent on implementation and governance.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout--warning">
  <strong class="callout-title">Important</strong>
  <p>A high score does not replace a legal basis, a data protection impact assessment or a security review. It is a decision framework that helps companies make architecture and approval decisions in a traceable way.</p>
</div>

<h2>3. The main operating models in direct comparison</h2>

<p>The following overview is the central decision aid of this article. The values are ranges, because the risk can change significantly depending on configuration, data class and integrations.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Operating model</th>
        <th scope="col">Score</th>
        <th scope="col">Assessment</th>
        <th scope="col">What matters?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Public free chatbot</td>
        <td class="score">0–2</td>
        <td>Highest risk for sensitive content</td>
        <td>Do not enter company data; only public or synthetic material.</td>
      </tr>
      <tr>
        <td>Enterprise chat interface</td>
        <td class="score">5–7</td>
        <td>Good governance possible</td>
        <td>Explicitly verify DPA, no training, SSO, roles, retention and connectors.</td>
      </tr>
      <tr>
        <td>Direct SOTA API</td>
        <td class="score">7–8</td>
        <td>Controllable data flow</td>
        <td>Gateway for redaction, region, logs and model routing; check stateful endpoints.</td>
      </tr>
      <tr>
        <td>Private cloud / dedicated inference</td>
        <td class="score">8–9</td>
        <td>High isolation</td>
        <td>Single tenant, private network paths, EU region, clear support and sub-processor rules.</td>
      </tr>
      <tr>
        <td>Together AI Standard + own tunnel</td>
        <td class="score">5–6</td>
        <td>Transport protected, data remains external</td>
        <td>The tunnel improves access control but does not change visibility at the inference provider.</td>
      </tr>
      <tr>
        <td>Together AI Dedicated / private</td>
        <td class="score">8–9</td>
        <td>Cloud with significantly more control</td>
        <td>Dedicated, ZDR, region and private networking must be active contractually and technically.</td>
      </tr>
      <tr>
        <td>Open-source model on company server</td>
        <td class="score">8</td>
        <td>Data remains within your own area of responsibility</td>
        <td>Consistently secure server, logs, backups, model source, updates and RAG access.</td>
      </tr>
      <tr>
        <td>Open-source model isolated/offline</td>
        <td class="score">9–10</td>
        <td>Maximum data sovereignty</td>
        <td>Sensible for particularly sensitive data; offline operation makes updates and monitoring harder.</td>
      </tr>
      <tr>
        <td>Hybrid routing by data class</td>
        <td class="score">6–9</td>
        <td>Pragmatic combination</td>
        <td>Sensitive content local, less critical tasks in a vetted cloud; the router must not be bypassable.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The red line does not run between cloud and on-premise. It runs between controlled and uncontrolled data flow. A well-secured cloud service can be safer than a poorly administered server of your own. Conversely, a fully local system can create the strongest technical data boundary – but only if your own infrastructure is operated professionally.</p>

<h2>4. SOTA models with a corporate licence: what really changes?</h2>

<p>OpenAI, Gemini, Grok and Anthropic offer enterprise and API products with significantly better safeguards than free consumer access. Typical building blocks are: no training on customer data by default, data processing terms, SSO, roles, audit logs, encryption and, in some cases, regional processing. These building blocks must, however, be actively selected, configured correctly and documented.</p>

<p>Anyone who only looks at the brand name is comparing the wrong thing. For data protection, what matters is whether you use a chat interface, an API endpoint, a file storage, an agent with tools or an embedded search function. Every additional feature can introduce new storage locations, sub-processors and permissions.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Provider / access</th>
        <th scope="col">Typical score</th>
        <th scope="col">Data protection perspective</th>
        <th scope="col">Check first</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>OpenAI</td>
        <td><span class="cell-note">Enterprise/API</span><span class="score">typically 7–8</span></td>
        <td>Under the current business terms, business data is not used for training by default. For the API, standard logs must be distinguished from eligible ZDR/retention options; chat, files and stateful features may have their own storage rules.</td>
        <td>Business and API privacy; Your Data / Data Residency</td>
      </tr>
      <tr>
        <td>Google Gemini</td>
        <td><span class="cell-note">Workspace/Cloud</span><span class="score">typically 7–8</span></td>
        <td>Workspace and Cloud environments offer organisational binding, admin controls and – depending on the product – data regions. Web search, Maps, Notebook and third-party integrations can change data paths and retention.</td>
        <td>Workspace AI Privacy Hub; Gemini Data Governance</td>
      </tr>
      <tr>
        <td>Anthropic Claude</td>
        <td><span class="cell-note">Commercial/API</span><span class="score">typically 6–8</span></td>
        <td>Under the current default rules, commercial inputs are not used for training. ZDR, retention and regional processing depend on contract, model and endpoint; the publicly documented API geography may be global/US.</td>
        <td>Commercial Terms; API Data Retention; Data Residency</td>
      </tr>
      <tr>
        <td>xAI Grok</td>
        <td><span class="cell-note">Business/API</span><span class="score">typically 5–8</span></td>
        <td>The consumer privacy policy is not the API arrangement. For Business/API, the DPA, sub-processors, transfers outside Europe, retention and a possible ZDR setting must be checked in the specific contract.</td>
        <td>Enterprise FAQ; DPA; Subprocessor List</td>
      </tr>
      <tr>
        <td>Microsoft Copilot</td>
        <td><span class="cell-note">M365 environment</span><span class="score">typically 7–8</span></td>
        <td>Strong tenant and identity binding, sensitivity labels and auditability. Prompts and responses can be stored in the tenant for audit/eDiscovery; web search and third-party tools must be assessed separately.</td>
        <td>Copilot Privacy; Enterprise Data Protection</td>
      </tr>
      <tr>
        <td>AWS Bedrock</td>
        <td><span class="cell-note">Private cloud</span><span class="score">typically 8–9</span></td>
        <td>AWS documents that model providers do not get access to Bedrock prompts and logs. VPC endpoints, IAM, KMS, CloudTrail and regional profiles provide additional control; global cross-region profiles must be chosen deliberately.</td>
        <td>Bedrock Data Protection; VPC Endpoints</td>
      </tr>
    </tbody>
  </table>
</div>

<p>These values are not a provider ranking. They show the level a properly configured model can reach. An unmanaged account with the same provider immediately drops into a lower class.</p>

<h2>5. Real decision questions from practice</h2>

<h3>May I use ChatGPT with customer data?</h3>
<p>Not a blanket yes, and not a blanket no. It depends on whether your company has a legal basis for the specific purpose, whether the provider is engaged as a processor, whether the data is necessary and minimised, and whether retention, access, deletion and third-country transfers are under control. In a private free account, the practical answer for customer data is: no. In a vetted enterprise or API environment, processing can be acceptable – after approval of the specific use case.</p>

<h3>Are corporate licences automatically GDPR-compliant?</h3>
<p>No. A corporate licence usually creates better contractual and administrative options. But it does not automatically answer the questions of purpose, legal basis, data minimisation, retention period, third-country transfer or human oversight. GDPR compliance is a property of the entire process.</p>

<h3>Are my prompts used for training?</h3>
<p>For many commercial offerings, the default setting for business/API data today is: no training on customer inputs. Nevertheless, you should check the specific product documentation and the contract. Training is only one part of the risk. Logs, abuse monitoring, feedback, support access, file storage, caches, backups and connected tools can also process data.</p>

<h3>Is an API more secure than the chat interface?</h3>
<p>An API is not automatically more secure, but it offers more options for governance: central redaction, data classification, model routing, IP allowlisting, short retention, your own logs and the ability to block specific tools. An enterprise chat interface, on the other hand, can be superior in terms of SSO, roles, audit and user acceptance. What matters is whether the interface or API is embedded in a controlled corporate architecture.</p>

<h3>Is a server in the EU automatically data-protection-safe?</h3>
<p>No. Location is one factor, not a seal of quality. An EU server can be poorly secured, wrongly permissioned or insufficiently logged. Conversely, a US provider with an EU data region, suitable contractual clauses and supplementary measures can enable an acceptable scenario. For transfers to third countries, the adequacy decision, SCCs, additional measures and the actual possibility of access must be examined.</p>

<h3>Does a VPN or tunnel protect my data from the AI provider?</h3>
<p>No. A tunnel protects the path between your client and the tunnel endpoint. The inference provider normally still receives the request in plain text, because otherwise it could not process it. A tunnel can nevertheless be very useful: it centralises authentication, DLP, logging, routing, rate limits and the selection of approved models. It therefore increases governance, but does not replace provider due diligence.</p>

<h3>Is open-source AI on your own server really more secure?</h3>
<p>From a data sovereignty perspective, usually yes: the request does not have to leave the company, and the model provider gets no live access. But this shifts responsibility inwards. The company now protects servers, identities, logs, backups, model weights, dependencies, updates and interfaces itself. An unpatched local server with open ports can be riskier than a professionally operated cloud platform.</p>

<h3>Can RAG improve data protection?</h3>
<p>Yes, if RAG – Retrieval-Augmented Generation – is implemented correctly. Instead of feeding confidential documents into model training, relevant content is retrieved at runtime. This makes updating and deletion easier. But: embeddings and vector databases can still contain personal data. Permissions must be checked before retrieval; the language model itself is not a reliable access control. RAG only raises the score if documents, vectors and user rights are cleanly separated.</p>

<h3>May AI prepare HR decisions?</h3>
<p>Only with particular caution – keyword: EU AI Act. Application, performance or health data is personal and in some cases especially sensitive. If AI generates recommendations that significantly affect employees or applicants, substantial additional requirements from the EU AI Act apply regarding transparency, human oversight and, depending on the use case, the permissibility of automated decisions. A person who merely rubber-stamps the suggestion is not an effective control.</p>

<h3>Which AI is the right one for a mid-sized company?</h3>
<p>The answer depends on the data class and the use case. For public marketing copy, a controlled cloud access is sufficient. For internal policies or non-personal documents, an enterprise solution with DPA and SSO is often appropriate. For HR, M&amp;A, source code, customer support involving identity data or strategic product information, a dedicated access, a local model or hybrid routing is usually more appropriate.</p>

<h2>6. Together AI with a tunnel: sensible, but not local</h2>

<p>Together AI is an example of an important intermediate model: a company uses open-source models but has the inference executed by a cloud provider. This can be technologically flexible, but from a data protection perspective it is still external processing.</p>

<h3>What the tunnel improves</h3>
<ul>
  <li>Central sign-in instead of many individual API keys.</li>
  <li>Redaction or pseudonymisation before a prompt leaves your own area of responsibility.</li>
  <li>Policy enforcement: only approved models, data classes and tools.</li>
  <li>Central logging, rate limits, blocklists and a traceable data flow.</li>
  <li>Routing: simple tasks to the cloud, sensitive tasks to a local model.</li>
</ul>

<h3>What the tunnel does not improve</h3>
<p>Together AI still processes the request when it is sent there for inference. According to the provider's current statements, inputs and outputs are not used for training by default; temporary caching, organisation settings, passthrough to upstream providers and the lack of region selection in the standard serverless offering must nevertheless be checked. Dedicated inference with single-tenant isolation, ZDR, region and private networking can be rated significantly higher.</p>

<div class="callout">
  <strong class="callout-title">A simple rule of thumb</strong>
  <blockquote>
    <p>Tunnel = better corporate control.<br />On-premise = a different area of data responsibility.<br />Only the second statement describes genuinely local data storage.</p>
  </blockquote>
</div>

<h2>7. Open-source models on the company server</h2>

<p>A locally operated model is the most direct way to keep data within your own area of control. The request does not go to OpenAI, Google, Anthropic, xAI or Together AI. That is a major advantage for trade secrets and particularly sensitive personal data.</p>

<p>Nevertheless, "local" is not a shortcut around data protection and information security. The company remains responsible for purpose, authorisation, deletion, access and documentation. In addition, a supply chain of its own emerges: model weights, containers, inference servers, UI, vector database and plugins must be checked for origin, integrity and updatability.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Local variant</th>
        <th scope="col">Score</th>
        <th scope="col">Strength</th>
        <th scope="col">Mandatory controls</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Own server, with internet access</td>
        <td class="score">8</td>
        <td>Very good data sovereignty, but attack surface and operational risk remain within the company.</td>
        <td>Network segmentation, patching, IAM, monitoring, backups, model vetting.</td>
      </tr>
      <tr>
        <td>Private EU cloud / own tenant</td>
        <td class="score">8–9</td>
        <td>Strong gain in control without fully owning the hardware; cloud and sub-processors remain relevant.</td>
        <td>DPA, region, private endpoints, keys, admin access, logs.</td>
      </tr>
      <tr>
        <td>On-premise, segregated network</td>
        <td class="score">9</td>
        <td>Data path stays within the company; operation and updates must be controlled.</td>
        <td>Physical security, identities, secure updates, emergency operation.</td>
      </tr>
      <tr>
        <td>Air-gapped / fully offline</td>
        <td class="score">9–10</td>
        <td>Maximum limitation of external data outflows; not automatically safe against insiders or local errors.</td>
        <td>Media control, model import, patch windows, roles, audit, backup.</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>RAG: the sensible middle way for internal knowledge assistants</h3>

<p>For many SMEs, the goal is not to train a model of their own, but an assistant that finds internal documents and answers questions in an understandable way. RAG can be suitable for this: the knowledge base remains separate from the base model and can be updated or deleted. The vector database, however, is a system worthy of protection and must not undermine permissions.</p>

<ul>
  <li>Index documents only from approved sources.</li>
  <li>Check permissions before the search and before the output – not just in the prompt.</li>
  <li>Separate tenants, departments and particularly sensitive documents logically and technically.</li>
  <li>Treat embeddings, chat histories and logs as potentially personal data.</li>
  <li>Implement deletion traceably in the original, index, cache, backup and logs.</li>
</ul>

<h2>8. Hybrid AI: often the most pragmatic security architecture</h2>

<p>Companies do not have to choose between "everything cloud" and "everything local". A hybrid model can translate the protection requirement into the architecture. A local data classification or a gateway decides which request may go where. Public content and general research can use a vetted SOTA model. Internal, personal or strategic content is redacted, pseudonymised or processed locally.</p>

<div class="table-wrap">
  <table class="crux-table">
    <thead>
      <tr>
        <th scope="col">Data class</th>
        <th scope="col">Examples</th>
        <th scope="col">Suitable model</th>
        <th scope="col">Minimum requirement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Public</td>
        <td>Website copy, general market information</td>
        <td>Cloud SOTA with standard controls</td>
        <td>No personal data, no secrets.</td>
      </tr>
      <tr>
        <td>Internal</td>
        <td>Policies, process descriptions, internal FAQs</td>
        <td>Enterprise cloud or private EU environment</td>
        <td>Restrict SSO, roles, retention and connectors.</td>
      </tr>
      <tr>
        <td>Confidential</td>
        <td>Price lists, offers, source code, contracts</td>
        <td>Dedicated, private cloud or local</td>
        <td>No open tools; gateway and four-eyes approval.</td>
      </tr>
      <tr>
        <td>Highly sensitive</td>
        <td>Health, HR, M&amp;A, particularly critical IP</td>
        <td>Local, segmented or offline</td>
        <td>Use-case and legal review before going live.</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The router is a security-relevant component here. If employees can simply use a different cloud account when something fails, the policy exists only on paper. Approvals must be technically enforced and reviewed regularly.</p>

<h2>9. What companies in the DACH region should specifically check</h2>

<p>A decision in favour of an AI model should be treated like a small procurement and security review. The following questions are deliberately phrased in plain language and can be used as an approval checklist.</p>

<ol>
  <li><strong>Describe the use case:</strong> What should the AI do, who uses it, and which decision stays with a human?</li>
  <li><strong>Classify the data:</strong> public, internal, confidential or highly sensitive – including attachments, logs and embeddings.</li>
  <li><strong>Map the data flow:</strong> client, gateway, model provider, sub-processors, storage, tools, backups and deletion.</li>
  <li><strong>Review the contract:</strong> DPA, role of the provider, purpose limitation, training, sub-processors, support access and incident notification.</li>
  <li><strong>Assess the region:</strong> Where is data processed, where is it stored, who can access it from which country, and which transfer mechanism applies?</li>
  <li><strong>Limit retention:</strong> consider retention, abuse logs, feedback, caches, files, chat history and backups separately.</li>
  <li><strong>Minimise access:</strong> SSO, MFA, roles, least privilege, tenant separation and no automatic access to the entire drive.</li>
  <li><strong>Control outputs:</strong> test for hallucinations, prompt injection, data leakage, sensitive inferences and impermissible decisions.</li>
  <li><strong>Keep humans accountable:</strong> AI may provide drafts and hints; the responsible person reviews and decides.</li>
  <li><strong>Document and train:</strong> establish an AI inventory, an internal policy, an approval process, training and regular reassessment.</li>
</ol>

<div class="callout callout--blue">
  <strong class="callout-title">What belongs in an AI policy</strong>
  <ul>
    <li>Permitted tools and accounts</li>
    <li>Prohibited data classes</li>
    <li>Approval path for new use cases</li>
    <li>Handling of personal data</li>
    <li>Rules for files, RAG and external tools</li>
    <li>Logging and deletion</li>
    <li>Reporting path for misdirected data or data leakage</li>
    <li>Human oversight of decisions</li>
  </ul>
</div>

<h2>10. The most common misconceptions</h2>

<div class="table-wrap">
  <table class="crux-table crux-table--narrow">
    <thead>
      <tr>
        <th scope="col">Misconception</th>
        <th scope="col">Correction</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>"We have a contract, so everything is allowed."</td>
        <td>The contract governs the provider. Purpose, legal basis, data minimisation and internal permissions remain the company's responsibility.</td>
      </tr>
      <tr>
        <td>"The data is stored in Europe, so there is no risk."</td>
        <td>Location, access possibilities, sub-processors and technical safeguards must be considered together.</td>
      </tr>
      <tr>
        <td>"The tunnel encrypts the data, so Together AI sees nothing."</td>
        <td>The inference provider must be able to decrypt the prompt in order to process it. The tunnel primarily protects transport and corporate control.</td>
      </tr>
      <tr>
        <td>"Open source automatically means secure."</td>
        <td>Open or freely available weights can contain unverified dependencies, unclear licences or dangerous files.</td>
      </tr>
      <tr>
        <td>"RAG is just a search function."</td>
        <td>RAG stores content and embeddings and must therefore be treated like a database system of its own, with permissions, deletion and monitoring.</td>
      </tr>
      <tr>
        <td>"A human takes a quick look at the end."</td>
        <td>Effective human oversight requires time, information and genuine decision-making authority – especially in HR, customer assessment and risk cases.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>11. Conclusion: security comes from architecture</h2>

<p>For decision-makers in the DACH region, there is no single "GDPR-compliant AI" that solves every task equally well. There are suitable operating models for different data classes.</p>

<p>The pragmatic default recommendation for many companies is: a managed enterprise or API access with DPA, a clear data region, training exclusion, retention as short as possible, SSO, roles, audit and a gateway that controls data classes and tools. When implemented properly, this typically falls within the 7 to 8 range.</p>

<p>For particularly confidential or heavily regulated processes, dedicated private environments and locally operated open-source models are the more controllable choice. They can reach 8 to 10, but demand rigorous IT security, model and supply chain vetting, and robust operational processes.</p>

<p>The most important thought remains: a server of your own is not an end in itself, and a SOTA model is not a blank cheque. Good AI governance connects protection needs, data flow, contract and technology. That is exactly where the crux lies – the decisive point at which AI enthusiasm becomes a robust enterprise solution.</p>

<div class="callout">
  <strong class="callout-title">Sensible next step</strong>
  <p>Create an AI inventory with three to five real use cases, classify the data processed in them and map the data flow. Only then should the decision for a provider, tunnel, private cloud or on-premise be made.</p>
</div>

<h2>12. Sources and further information</h2>

<p>This assessment is based on official guidelines, information from supervisory authorities and the publicly available data protection and security statements of the providers mentioned. Product terms and data residency options can change; the current contract version should be reviewed before any approval.</p>

<ol class="sources">
  <li><a href="https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf" target="_blank" rel="noopener noreferrer">Datenschutzkonferenz: Orientierungshilfe KI und Datenschutz</a> — Roles, data flows, closed/open systems, legal bases and safeguards (German).</li>
  <li><a href="https://www.datenschutzkonferenz-online.de/media/oh/DSK-OH_KI-Systeme.pdf" target="_blank" rel="noopener noreferrer">Datenschutzkonferenz: Technische und organisatorische Maßnahmen für KI-Systeme</a> — Security across the entire AI lifecycle (German).</li>
  <li><a href="https://www.datenschutzkonferenz-online.de/media/oh/DSK_OH_RAG.pdf" target="_blank" rel="noopener noreferrer">Datenschutzkonferenz: RAG und Datenschutz</a> — RAG, vector databases, permissions and deletion (German).</li>
  <li><a href="https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en" target="_blank" rel="noopener noreferrer">EDPB: Opinion 28/2024 on certain data protection aspects related to AI models</a> — Anonymity, legal basis and accountability for AI models.</li>
  <li><a href="https://www.edpb.europa.eu/documents/recommendation/recommendations-012020-on-measures-that-supplement-transfer-tools-to_en" target="_blank" rel="noopener noreferrer">EDPB: Recommendations 01/2020 on supplementary transfer measures</a> — Third-country transfers and supplementary technical measures.</li>
  <li><a href="https://dsb.gv.at/kuenstlichebrintelligenz/kuenstliche-intelligenz-datenschutz" target="_blank" rel="noopener noreferrer">Austrian Data Protection Authority: Artificial Intelligence and Data Protection</a> — GDPR, AI Act, accountability and transparency (German).</li>
  <li><a href="https://www.edoeb.admin.ch/en/cross-border-transfer-of-personal-data" target="_blank" rel="noopener noreferrer">FDPIC (Switzerland): Cross-border transfer of personal data</a> — Swiss requirements and safeguards for transfers abroad.</li>
  <li><a href="https://openai.com/enterprise-privacy/" target="_blank" rel="noopener noreferrer">OpenAI: Enterprise Privacy / API Your Data</a> — Business privacy and enterprise controls.</li>
  <li><a href="https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub" target="_blank" rel="noopener noreferrer">Google Workspace: Generative AI Privacy Hub</a> — Workspace data, admin controls and limits of individual features.</li>
  <li><a href="https://platform.claude.com/docs/en/manage-claude/api-and-data-retention" target="_blank" rel="noopener noreferrer">Anthropic: API Data Retention / Commercial Terms</a> — Retention, ZDR and commercial data processing.</li>
  <li><a href="https://x.ai/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer">xAI: Enterprise DPA</a> — Processor role, sub-processors, transfers and deletion for Business/API.</li>
  <li><a href="https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" target="_blank" rel="noopener noreferrer">Microsoft: Microsoft 365 Copilot privacy</a> — Tenant binding, storage, audit and web search.</li>
  <li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html" target="_blank" rel="noopener noreferrer">AWS: Bedrock data protection</a> — Model provider access, VPC, IAM and regional inference.</li>
  <li><a href="https://docs.together.ai/docs/privacy-and-security" target="_blank" rel="noopener noreferrer">Together AI: Privacy and Security</a> — Training, caching, standard and dedicated inference.</li>
  <li><a href="https://opensource.org/ai/open-source-ai-definition" target="_blank" rel="noopener noreferrer">Open Source Initiative: Open Source AI Definition</a> — Distinction between open source and open weights.</li>
  <li><a href="https://huggingface.co/docs/hub/security-pickle" target="_blank" rel="noopener noreferrer">Hugging Face: Pickle scanning and security</a> — Risks of executable model files and safe formats.</li>
  <li><a href="https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/" target="_blank" rel="noopener noreferrer">OWASP: GenAI / LLM Top 10</a> — Prompt injection, data leakage, supply chain, poisoning and vector risks.</li>
</ol>
`;
