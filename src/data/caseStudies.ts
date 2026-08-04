export type CaseStudyFieldBlock = {
  type?: undefined;
  label: string;
  value: string;
};

export type CaseStudyParagraphBlock = {
  type: 'paragraph';
  text: string;
};

export type CaseStudySubheadingBlock = {
  type: 'subheading';
  text: string;
  level?: 3 | 4;
};

export type CaseStudyListBlock = {
  type: 'list';
  items: string[];
  ordered?: boolean;
};

export type CaseStudyLinkedParagraphBlock = {
  type: 'linked-paragraph';
  before: string;
  linkLabel: string;
  href: string;
  after: string;
};

export type CaseStudyRichParagraphBlock = {
  type: 'rich-paragraph';
  segments: Array<
    | { text: string }
    | { strong: string }
    | { linkLabel: string; href: string }
  >;
};

export type CaseStudyQuoteBlock = {
  type: 'quote';
  text: string;
};

export type CaseStudyComparisonTableBlock = {
  type: 'comparison-table';
  columns: Array<{
    heading: string;
    headingLevel?: 3 | 4;
    lead?: string;
    items: string[];
    note?: string;
  }>;
};

export type CaseStudyMatrixTableBlock = {
  type: 'matrix-table';
  headers: string[];
  rows: Array<
    Array<{
      label?: string;
      text: string;
    }>
  >;
};

export type CaseStudyRichBlock =
  | CaseStudyParagraphBlock
  | CaseStudySubheadingBlock
  | CaseStudyListBlock
  | CaseStudyLinkedParagraphBlock
  | CaseStudyRichParagraphBlock
  | CaseStudyQuoteBlock
  | CaseStudyComparisonTableBlock
  | CaseStudyMatrixTableBlock;

export type CaseStudyBlock = CaseStudyFieldBlock | CaseStudyRichBlock;

export type CaseStudySource = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  id: string;
  label: string;
  blocks: CaseStudyBlock[];
};

export type CaseStudy = {
  slug: string;
  shortName: string;
  initials: string;
  title: string;
  pageTitle?: string;
  href: string;
  indexSummary: string;
  cardSummary: string;
  aiUse: string;
  humanCheckpoint: string;
  evidenceSource: string;
  reconstructionFinding: string;
  primaryRecord: string;
  sourceUrl: string;
  sourceSummary?: string;
  sources?: CaseStudySource[];
  introduction?: CaseStudyRichBlock[];
  sections: CaseStudySection[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'doctronic-utah-ai-pilot',
    shortName: 'Doctronic',
    initials: 'DO',
    title:
      'Doctronic: The System Preserves a Physician’s Name, Not Physician Judgment',
    pageTitle:
      'Doctronic: The System Preserves a Physician’s Name, Not Physician Judgment',
    href: '/case-studies/doctronic-utah-ai-pilot/',
    indexSummary:
      'Utah permits Doctronic’s AI to authorize qualifying prescription renewals while a physician remains the prescriber of record whether or not that physician reviews the individual decision. The name supplies attribution, not evidence of physician judgment.',
    cardSummary:
      'Utah permits Doctronic’s AI to authorize qualifying prescription renewals while a physician remains the prescriber of record whether or not that physician reviews the individual decision. The name supplies attribution, not evidence of physician judgment.',
    aiUse: 'AI prescription renewals',
    humanCheckpoint: 'Phased clinical review',
    evidenceSource: 'Provider reports and review samples',
    reconstructionFinding: 'Named responsibility not demonstrated',
    primaryRecord: 'Doctronic Utah AI pilot agreement',
    sourceUrl:
      'https://commerce.utah.gov/wp-content/uploads/2026/01/Doctronic-Final-Agreement.pdf',
    sourceSummary:
      'Utah agreement, state announcement, company terms, privacy notice, and external security assessment',
    sources: [
      {
        label: 'Utah–Doctronic Regulatory Mitigation Agreement',
        href: 'https://commerce.utah.gov/wp-content/uploads/2026/01/Doctronic-Final-Agreement.pdf',
      },
      {
        label: 'Utah and Doctronic Announce AI Prescription-Renewal Partnership',
        href: 'https://commerce.utah.gov/2026/01/06/news-release-utah-and-doctronic-announce-groundbreaking-partnership-for-ai-prescription-medication-renewals/',
      },
      {
        label: 'Doctronic Terms of Service',
        href: 'https://www.doctronic.ai/terms-of-service/',
      },
      {
        label: 'Doctronic Privacy and Security Notice',
        href: 'https://www.doctronic.ai/privacy-policy/',
      },
      {
        label:
          'Mindgard: Doctronic Is Now Accepting New Patients—and Unsafe Instructions',
        href: 'https://mindgard.ai/blog/doctronic-is-now-accepting-new-patients-and-unsafe-instructions',
      },
    ],
    introduction: [
      {
        type: 'paragraph',
        text: 'Utah authorized Doctronic’s artificial intelligence system to renew certain existing prescriptions without requiring a physician to review every decision.',
      },
      {
        type: 'paragraph',
        text: 'The system can collect information from a patient, evaluate whether a prescription remains appropriate, and send the renewal authorization to a Utah pharmacist. After an initial rollout period, the agreement permits most renewals to proceed without individual physician review.',
      },
      {
        type: 'paragraph',
        text: 'Doctronic’s current terms still designate a licensed physician as the prescriber of record and establish a physician-patient relationship—even when that physician does not review the individual renewal.',
      },
      {
        type: 'paragraph',
        text: 'That is the responsibility problem at the center of this case.',
      },
      {
        type: 'paragraph',
        text: 'The system preserves a physician’s name after physician judgment has left the decision. If a patient is harmed, the presence of that name may make the outcome attributable. It does not prove who actually made, controlled, monitored, or permitted the decision that caused the harm.',
      },
    ],
    sections: [
      {
        id: 'what-utah-authorized',
        label: 'What Utah Authorized',
        blocks: [
          {
            type: 'subheading',
            text: 'The Regulatory Experiment',
          },
          {
            type: 'paragraph',
            text: 'In October 2025, the Utah Office of Artificial Intelligence Policy and the Utah Division of Professional Licensing entered into a regulatory mitigation agreement with Doctronic. Utah publicly launched the program in January 2026 as an experiment in AI-authorized prescription renewals.',
          },
          {
            type: 'subheading',
            text: 'What the AI Is Permitted to Do',
          },
          {
            type: 'paragraph',
            text: 'Under the agreement, Doctronic’s system can:',
          },
          {
            type: 'list',
            items: [
              'Verify the patient and the existing prescription',
              'Collect medical history and current symptoms',
              'Review medication information and potential interactions',
              'Determine whether the prescription is appropriate for renewal',
              'Send an approved renewal to a Utah pharmacist',
              'Escalate selected cases to a physician',
            ],
          },
          {
            type: 'paragraph',
            text: 'The patient may request human review, and a pharmacist can escalate a renewal for physician review. Doctronic also established criteria intended to identify cases the AI should not complete independently.',
          },
          {
            type: 'subheading',
            text: 'The Consequential Decision Remains With the AI',
          },
          {
            type: 'paragraph',
            text: 'Those safeguards do not change the central fact: Utah authorized the AI system to make a consequential clinical decision.',
          },
          {
            type: 'paragraph',
            text: 'This was not merely an AI system organizing information for a doctor. The system was authorized to decide whether a qualifying prescription should be renewed.',
          },
        ],
      },
      {
        id: 'physician-attribution',
        label: 'The Physician Can Own the Prescription Without Seeing the Decision',
        blocks: [
          {
            type: 'subheading',
            text: 'The Physician-Patient Relationship on Paper',
          },
          {
            type: 'subheading',
            text: 'What Doctronic’s Terms Establish',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s current terms state that a physician-patient relationship is established with the physician serving as the prescriber of record. They also state that this remains true whether or not the physician reviews an individual renewal.',
          },
          {
            type: 'subheading',
            text: 'What the Utah Agreement Permits',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'The Utah agreement reinforces that structure. It anticipates circumstances in which a physician employed or contracted by Doctronic:',
          },
          {
            type: 'list',
            items: [
              'Is named as the prescriber',
              'Acts in reliance on the AI system',
              'Does not communicate directly with the patient',
              'Does not communicate directly with another treating provider',
            ],
          },
          {
            type: 'subheading',
            text: 'Physician Attribution Is Not Physician Judgment',
          },
          {
            type: 'paragraph',
            text: 'The physician’s professional identity therefore remains attached to the prescription even when the physician did not personally evaluate the patient or review the AI’s decision.',
          },
          {
            type: 'paragraph',
            text: 'That is not the same thing as physician judgment.',
          },
          {
            type: 'paragraph',
            text: 'A name on a prescription establishes whose credentials were used to issue it. It does not establish that the named physician independently considered the evidence, agreed with the AI, or had any opportunity to stop the renewal before it reached the pharmacy.',
          },
          {
            type: 'paragraph',
            text: 'Doctronic converts AI decision-making into physician attribution.',
          },
        ],
      },
      {
        id: 'patient-consent',
        label: 'Patient Consent Does Not Transfer Responsibility',
        blocks: [
          {
            type: 'subheading',
            text: 'What the Patient Is Told',
          },
          {
            type: 'paragraph',
            text: 'Doctronic is not ElizaChat. Its consent structure is materially stronger.',
          },
          {
            type: 'paragraph',
            text: 'The Utah agreement requires patients to receive a clear disclosure that artificial intelligence will be used before they access the renewal service. Patients must acknowledge the disclosure, may request physician review, and may submit complaints directly to Utah regulators.',
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s current terms also distinguish the Utah prescription-renewal service from its general informational chatbot. The company treats the renewal service as clinical care, recognizes the applicable professional standards, and does not apply its general chatbot liability limitation to these prescription decisions.',
          },
          {
            type: 'paragraph',
            text: 'Those are meaningful controls. They do not transfer responsibility to the patient.',
          },
          {
            type: 'subheading',
            text: 'What the Patient Did Not Decide',
          },
          {
            type: 'paragraph',
            text: 'The patient did not:',
          },
          {
            type: 'list',
            items: [
              'Design the renewal criteria',
              'Select the AI model',
              'determine which clinical information the system would consider',
              'Validate the system’s monitoring process',
              'Decide when physician review could be reduced',
              'Approve the percentage of decisions sampled after deployment',
              'Decide that the remaining danger was acceptable',
            ],
          },
          {
            type: 'subheading',
            text: 'Consent Does Not Transfer Institutional Responsibility',
          },
          {
            type: 'paragraph',
            text: 'A patient can consent to receiving an AI-mediated service. That consent does not make the patient responsible for the institutional decisions that made the service available.',
          },
        ],
      },
      {
        id: 'declining-human-review',
        label: 'Human Review Declines as the System Expands',
        blocks: [
          {
            type: 'subheading',
            text: 'The Three-Stage Reduction in Physician Review',
          },
          {
            type: 'paragraph',
            text: 'The agreement reduces physician involvement as the number of completed renewals increases.',
          },
          {
            type: 'paragraph',
            text: 'The rollout follows three stages:',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'A physician reviews the first 250 renewals before the prescription is issued.',
              'Physicians review the next 1,000 renewals retrospectively.',
              'During full operation, physicians review a monthly sample of approximately 5% to 10% of renewals.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The progression is based on accumulated volume. The agreement does not establish a specific safety, accuracy, or physician-agreement threshold that Doctronic must meet before moving from one stage to the next.',
          },
          {
            type: 'subheading',
            text: 'Autonomy Increases With Volume',
          },
          {
            type: 'paragraph',
            text: 'That matters.',
          },
          {
            type: 'paragraph',
            text: 'The system does not earn greater autonomy by satisfying a stated safety standard. It receives greater autonomy as the number of completed transactions increases.',
          },
          {
            type: 'subheading',
            text: 'The Physician’s Name Remains',
          },
          {
            type: 'paragraph',
            text: 'Once the program reaches full operation, the agreement permits approximately 90% to 95% of renewals to proceed without individual physician review. The physician’s name remains attached throughout that transition.',
          },
          {
            type: 'paragraph',
            text: 'The human does not disappear from the paperwork. The human disappears from most of the decisions.',
          },
        ],
      },
      {
        id: 'ai-monitoring',
        label: 'AI Monitors the AI',
        blocks: [
          {
            type: 'subheading',
            text: 'The Automated Evaluator',
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s proposal describes a monitoring system that reviews patient interactions continuously. It includes an automated evaluator—described as an “LLM as a judge”—intended to detect problems, assess performance, and support real-time correction.',
          },
          {
            type: 'subheading',
            text: 'Internal Monitoring Is Not Independent Oversight',
          },
          {
            type: 'paragraph',
            text: 'Automated monitoring may detect patterns that limited human sampling would miss. But another AI system observing the first AI is not independent oversight.',
          },
          {
            type: 'paragraph',
            text: 'Doctronic selects the monitoring system, defines what it should detect, determines how its findings are interpreted, and controls the records it produces. The same organization operates the clinical system, monitors it, measures its performance, and reports the results to Utah.',
          },
          {
            type: 'paragraph',
            text: 'The phrase “LLM as a judge” describes an internal technical function. It does not create an independent judge.',
          },
          {
            type: 'subheading',
            text: 'Shared Blind Spots Remain Possible',
          },
          {
            type: 'paragraph',
            text: 'If both systems share blind spots, accept manipulated inputs, or evaluate success using incomplete criteria, continuous monitoring can continuously confirm the wrong thing. The existence of a monitoring model is not evidence that the model can detect the failures that matter.',
          },
        ],
      },
      {
        id: 'external-test',
        label: 'An External Test Challenged the Human-Review Assumption',
        blocks: [
          {
            type: 'subheading',
            text: 'What Mindgard Tested',
          },
          {
            type: 'paragraph',
            text: 'In March 2026, Mindgard published the results of an external security assessment involving Doctronic’s general chatbot and physician-consultation workflow.',
          },
          {
            type: 'subheading',
            text: 'What the Research Did Not Establish',
          },
          {
            type: 'paragraph',
            text: 'The researchers did not test the Utah prescription-renewal service. They did not request or fill an actual prescription, access real patient records, or interfere with a real consultation. Their controlled test involved a different part of Doctronic’s system, and the OxyContin scenario they used falls outside the Utah renewal program.',
          },
          {
            type: 'paragraph',
            text: 'The distinction is important. The research does not prove that the Utah renewal workflow was compromised.',
          },
          {
            type: 'subheading',
            text: 'What the Research Did Challenge',
          },
          {
            type: 'paragraph',
            text: 'It does, however, challenge an assumption on which the Utah program depends: that human review reliably corrects an unsafe AI output.',
          },
          {
            type: 'paragraph',
            text: 'Mindgard reported that its researchers manipulated the chatbot’s instructions and caused it to generate a clinical summary recommending an unsafe medication change. The AI-generated record was then prepared for the physician handoff.',
          },
          {
            type: 'subheading',
            text: 'When the AI Controls the Reviewer’s Evidence',
          },
          {
            type: 'paragraph',
            text: 'A physician reviewing an AI-generated clinical record is not necessarily reviewing independent evidence. The AI may have already selected, summarized, organized, and framed the information the physician receives.',
          },
          {
            type: 'paragraph',
            text: 'A physician agreeing with that record does not prove the physician independently reached the same judgment.',
          },
          {
            type: 'paragraph',
            text: 'This matters because the Utah agreement measures physician review and agreement as evidence of system performance. Unless the reviewer receives an independent record or conducts an independent assessment, agreement may measure the AI’s influence over the reviewer rather than the accuracy of the original decision.',
          },
          {
            type: 'paragraph',
            text: 'Human review cannot validate an AI decision when the AI controls the evidence the human receives.',
          },
          {
            type: 'subheading',
            text: 'The Reporting Response Becomes Part of the Record',
          },
          {
            type: 'paragraph',
            text: 'Mindgard also reported attempting to disclose the issue to Doctronic before publication. According to the researchers, support tickets were routed internally but closed while they continued to consider the matter unresolved.',
          },
          {
            type: 'paragraph',
            text: 'That does not establish how Doctronic ultimately assessed or remediated the reported weaknesses. It does show why complaint intake, internal review, and automated ticket closure must become part of the reconstruction record. A reporting channel is not a control if a consequential warning can enter the system without producing a provable response.',
          },
        ],
      },
      {
        id: 'responsibility-split',
        label:
          'If a Patient Is Harmed, Responsibility Is Split Before the Investigation Begins',
        blocks: [
          {
            type: 'subheading',
            text: 'How Authority Is Distributed',
          },
          {
            type: 'paragraph',
            text: 'The Utah arrangement distributes authority across several actors:',
          },
          {
            type: 'subheading',
            text: 'Utah',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Utah authorized the regulatory experiment but expressly denied that the agreement constituted an endorsement.',
          },
          {
            type: 'subheading',
            text: 'Doctronic',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Doctronic designed, operates, maintains, and monitors the system.',
          },
          {
            type: 'subheading',
            text: 'The AI Systems',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'The AI evaluates the patient information and makes the renewal decision.',
          },
          {
            type: 'paragraph',
            text: 'A second AI monitors the first system’s interactions.',
          },
          {
            type: 'subheading',
            text: 'The Physician and Pharmacist',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'A licensed physician remains the prescriber of record.',
          },
          {
            type: 'paragraph',
            text: 'The pharmacist receives and dispenses the authorized renewal.',
          },
          {
            type: 'subheading',
            text: 'The Patient',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'The patient experiences the physical consequences.',
          },
          {
            type: 'subheading',
            text: 'How Responsibility Is Assigned After Harm',
          },
          {
            type: 'subheading',
            text: 'Utah’s Position',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'The agreement places responsibility for operating and monitoring the system on Doctronic. It also protects Utah’s Office of Artificial Intelligence Policy and Division of Professional Licensing from claims connected to Doctronic’s operation of the program.',
          },
          {
            type: 'subheading',
            text: 'Doctronic’s Terms',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s current terms preserve professional standards for the renewal service and recognize that malpractice or professional-negligence claims may arise. They generally limit liability to the available professional or technology insurance coverage.',
          },
          {
            type: 'paragraph',
            text: 'Insurance may determine what money is available after harm. It does not determine what happened.',
          },
          {
            type: 'subheading',
            text: 'An Error Label Is Not a Responsibility Finding',
          },
          {
            type: 'paragraph',
            text: 'Neither “AI error” nor “physician error” would be an adequate responsibility finding. One would blame the technology without examining the institutions controlling it. The other could attach the entire outcome to a physician whose credentials were used even though the physician may never have reviewed the decision.',
          },
        ],
      },
      {
        id: 'evidence-control',
        label: 'Doctronic Controls the Evidence Needed to Explain the Renewal',
        blocks: [
          {
            type: 'subheading',
            text: 'Evidence Designed for Traceability',
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s evidence design is stronger than many public AI pilots.',
          },
          {
            type: 'subheading',
            text: 'Monthly Reports to Utah',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'The agreement contemplates logged and reviewable decision points. Doctronic must provide Utah with monthly information that includes renewal volume, physician-review activity, physician agreement rates, complaints, known adverse outcomes, and selected record excerpts.',
          },
          {
            type: 'subheading',
            text: 'Medical Records and Audit Logs',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s current privacy notice also says it retains medical records, AI-generated summaries, prescription records, and audit logs for at least seven years. It allows patients to request their records and says the company tracks data provenance where technically possible.',
          },
          {
            type: 'subheading',
            text: 'The Provider Controls the Record',
          },
          {
            type: 'paragraph',
            text: 'That creates the possibility of tracing a disputed renewal.',
          },
          {
            type: 'paragraph',
            text: 'It does not create independent possession of the evidence.',
          },
          {
            type: 'paragraph',
            text: 'Doctronic generates the records, stores them, selects the monitoring technology, produces the reports, and initially determines whether an event qualifies as an error, complaint, adverse outcome, or control failure. Utah receives reports and can request additional information, but that is not the same as an independent investigator continuously holding the underlying evidence.',
          },
          {
            type: 'subheading',
            text: 'What an Outside Reviewer May Not Be Able to Recover',
          },
          {
            type: 'paragraph',
            text: 'The public agreement also does not establish whether an outside reviewer could recover:',
          },
          {
            type: 'list',
            items: [
              'The exact model and version used for a particular renewal',
              'The governing system instructions',
              'The complete patient interaction',
              'Every tool call and external record consulted',
              'The output of the monitoring model',
              'Any corrections or changes made after the decision',
              'The reason the system did or did not escalate',
              'The information presented to a reviewing physician',
              'The physician’s independent reasoning, if any',
            ],
          },
          {
            type: 'subheading',
            text: 'Traceable Is the Evidentiary Ceiling',
          },
          {
            type: 'paragraph',
            text: 'The surviving record may make the renewal traceable. It does not make the decision reproducible.',
          },
          {
            type: 'paragraph',
            text: 'A later investigator may be able to reconstruct what information entered the system, what the system produced, and which actors controlled the process. The investigator may not be able to rerun the system and prove that it would make the same decision again.',
          },
          {
            type: 'paragraph',
            text: 'Traceable is the evidentiary ceiling.',
          },
        ],
      },
      {
        id: 'what-reconstruction-could-establish',
        label: 'What Responsibility Reconstruction Could Establish',
        blocks: [
          {
            type: 'subheading',
            text: 'What the Public Record Could Establish',
          },
          {
            type: 'linked-paragraph',
            before: '',
            linkLabel: 'Evidence-Based Responsibility Reconstruction℠',
            href: '/blog/evidence-based-responsibility-reconstruction/',
            after:
              ' begins with the consequential conduct and follows the surviving record outward.',
          },
          {
            type: 'paragraph',
            text: 'For a disputed Doctronic renewal, the public record could help establish:',
          },
          {
            type: 'list',
            items: [
              'That Utah authorized the AI renewal program',
              'That Doctronic controlled the system and its operating conditions',
              'That the AI was permitted to authorize qualifying renewals',
              'That a physician was named as the prescriber of record',
              'Whether the patient requested human review',
              'Whether the system or pharmacist escalated the case',
              'Whether a physician reviewed the renewal',
              'What reports Doctronic provided to Utah',
              'What complaints or adverse outcomes Doctronic recorded',
            ],
          },
          {
            type: 'subheading',
            text: 'What the Public Record Does Not Establish',
          },
          {
            type: 'paragraph',
            text: 'The public record does not yet establish:',
          },
          {
            type: 'list',
            items: [
              'Who approved the clinical thresholds used by the AI',
              'Who determined that the automated monitoring system was sufficient',
              'Who independently validated the “LLM as a judge”',
              'Who approved reducing physician review to a 5%–10% sample',
              'Whether physician reviewers formed judgments independently of AI-generated summaries',
              'What evidence Utah possessed outside Doctronic’s reports',
              'Who decided the remaining risk to patients was acceptable',
              'Whether the weaknesses reported by Mindgard affected any component used in the Utah service',
              'Whether those weaknesses were independently verified as resolved',
            ],
          },
          {
            type: 'subheading',
            text: 'The Unanswered Questions Are the Responsibility Record',
          },
          {
            type: 'paragraph',
            text: 'Those unanswered questions are not peripheral. They are the responsibility record.',
          },
        ],
      },
      {
        id: 'responsibility-reconstruction-finding',
        label: 'Responsibility Reconstruction Finding',
        blocks: [
          {
            type: 'subheading',
            text: 'The Responsibility Chain',
          },
          {
            type: 'subheading',
            text: 'Utah Authorized',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Utah authorized the experiment.',
          },
          {
            type: 'subheading',
            text: 'Doctronic Designed and Operates',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'Doctronic designed and operates the system.',
          },
          {
            type: 'subheading',
            text: 'The AI Decides and Monitors',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'An AI system makes the renewal decision.',
          },
          {
            type: 'paragraph',
            text: 'Another AI system monitors the first.',
          },
          {
            type: 'subheading',
            text: 'The Physician Is Named',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'A physician’s name remains attached whether or not the physician reviews the decision.',
          },
          {
            type: 'subheading',
            text: 'The Patient Receives the Outcome',
            level: 4,
          },
          {
            type: 'paragraph',
            text: 'The patient receives the medical outcome.',
          },
          {
            type: 'subheading',
            text: 'Attribution Does Not Establish Judgment',
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s design does not eliminate human and institutional responsibility. It makes that responsibility harder to see by preserving the appearance of a traditional physician decision after judgment has been delegated to an AI system.',
          },
          {
            type: 'paragraph',
            text: 'The physician’s name makes the prescription attributable. It does not prove physician involvement.',
          },
          {
            type: 'paragraph',
            text: 'The patient’s consent makes participation authorized. It does not transfer responsibility for the design.',
          },
          {
            type: 'paragraph',
            text: 'Utah’s agreement makes the program legally operable. It does not establish that Utah independently verified every control on which patient safety depends.',
          },
          {
            type: 'paragraph',
            text: 'Doctronic’s logs may make the conduct traceable. They do not make Doctronic an independent investigator of its own system.',
          },
          {
            type: 'subheading',
            text: 'Naming the Error Is Not Owning Responsibility',
          },
          {
            type: 'paragraph',
            text: 'If a patient is harmed, naming an AI error, a physician, or a technical failure will not answer the responsibility question. The investigation must establish who authorized the governing conditions, who determined the controls were sufficient, who monitored the system, who could have intervened, whether anyone exercised that authority, and what evidence survives to prove each connection.',
          },
          {
            type: 'paragraph',
            text: 'The system preserves a physician’s name. Responsibility reconstruction must determine whether physician judgment was ever there.',
          },
          {
            type: 'paragraph',
            text: 'Naming the error is not owning responsibility.',
          },
        ],
      },
    ],
  },
  {
    "slug": "elizachat-utah-ai-pilot",
    "shortName": "ElizaChat",
    "initials": "EC",
    "title": "ElizaChat: Institutional Authorization Is Not Student Consent",
    "pageTitle": "ElizaChat: Institutional Authorization Is Not Student Consent",
    "href": "/case-studies/elizachat-utah-ai-pilot/",
    "indexSummary": "Utah and participating schools authorize generative AI mental-health conversations for students, while ElizaChat controls the threshold that determines whether a student reaches a human. Student acknowledgement does not transfer responsibility for those institutional decisions.",
    "cardSummary": "Utah and participating schools authorize generative AI mental-health conversations for students, while ElizaChat controls the threshold that determines whether a student reaches a human. Student acknowledgement does not transfer responsibility for those institutional decisions.",
    "aiUse": "Student mental-health conversations",
    "humanCheckpoint": "Risk-triggered clinical escalation",
    "evidenceSource": "Company records after a report or complaint",
    "reconstructionFinding": "Provider controls the intervention threshold",
    "primaryRecord": "ElizaChat Utah AI pilot agreement",
    "sourceUrl": "https://commerce.utah.gov/wp-content/uploads/2024/11/Signed-Elizachat-Agreement-November-2024.pdf",
    "sourceSummary": "Utah agreement, company terms, privacy policy, school-district materials, and state pilot description",
    "sources": [
      {
        "label": "ElizaChat regulatory mitigation agreement",
        "href": "https://commerce.utah.gov/wp-content/uploads/2024/11/Signed-Elizachat-Agreement-November-2024.pdf"
      },
      {
        "label": "ElizaChat Terms of Service",
        "href": "https://elizachat.com/terms"
      },
      {
        "label": "ElizaChat Privacy Policy",
        "href": "https://elizachat.com/privacy"
      },
      {
        "label": "ElizaChat for School Districts",
        "href": "https://www.elizachat.com/for-schools/school-districts"
      },
      {
        "label": "Utah’s ElizaChat pilot description",
        "href": "https://commerce.utah.gov/ai/regulatory-relief/authorized-ai-pilots/elizachat/"
      }
    ],
    "introduction": [
      {
        "type": "paragraph",
        "text": "ElizaChat markets its platform to school districts as continuous AI mental-health support for students, including evenings, weekends, and holidays when counselors are unavailable. The company says students who need immediate help are automatically escalated to human counselors."
      },
      {
        "type": "paragraph",
        "text": "Utah authorized ElizaChat to test that promise in participating school districts. Schools decide whether to provide the system. ElizaChat decides when a student’s behavior qualifies for human intervention. The company’s terms allow a school to accept the service on behalf of parents."
      },
      {
        "type": "paragraph",
        "text": "The student does not design the system, approve the intervention threshold, select the underlying AI, authorize the Utah pilot, or negotiate the terms governing what happens after harm."
      },
      {
        "type": "paragraph",
        "text": "Yet the student bears the consequences."
      },
      {
        "type": "linked-paragraph",
        "before": "This case applies ",
        "linkLabel": "Evidence-Based Responsibility Reconstruction℠",
        "href": "/blog/evidence-based-responsibility-reconstruction/",
        "after": " to the public record surrounding ElizaChat: the state agreement authorizing the pilot, ElizaChat’s school-facing claims, its Terms of Service, and its Privacy Policy. No individual injury is needed to see the structure. The governing documents already establish where authority sits and where consequences are sent if harm occurs."
      }
    ],
    "sections": [
      {
        "id": "what-utah-authorized",
        "label": "What Utah Authorized",
        "blocks": [
          {
            "type": "subheading",
            "text": "A Three-Phase Student Rollout"
          },
          {
            "type": "paragraph",
            "text": "Utah’s Office of Artificial Intelligence Policy authorized ElizaChat to make its AI mental-health application available through participating school districts."
          },
          {
            "type": "paragraph",
            "text": "Section VI(H) establishes a three-phase rollout:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Utah receives access as a trusted tester.",
              "ElizaChat provides the application to a limited group of students selected by the company and reviewed by the state.",
              "With Utah’s written approval, ElizaChat expands access across participating Utah school districts."
            ]
          },
          {
            "type": "paragraph",
            "text": "The state did not merely observe an existing commercial product. It authorized the conditions under which the system could be introduced to students and retained control over whether deployment could expand."
          },
          {
            "type": "subheading",
            "text": "The Public Safety Promise"
          },
          {
            "type": "paragraph",
            "text": "ElizaChat describes the system as an AI-powered mental-health support platform for students. Its school-district page promises continuous access, clinically informed support, and automatic escalation to human counselors when students need immediate help."
          },
          {
            "type": "paragraph",
            "text": "Utah describes the pilot as having built-in risk assessments, immediate escalation to trusted adults, parental consent, and ongoing oversight."
          },
          {
            "type": "paragraph",
            "text": "The public promise is clear: the AI provides support, identifies danger, and brings in a human when necessary."
          },
          {
            "type": "paragraph",
            "text": "The responsibility problem begins with who decides that intervention is necessary."
          },
          {
            "type": "subheading",
            "text": "A Named Corporate Authorization"
          },
          {
            "type": "paragraph",
            "text": "ElizaChat CEO Dave Barney signed the agreement on November 15, 2024."
          },
          {
            "type": "paragraph",
            "text": "That signature identifies the executive who committed the company to the pilot. It does not establish who designed the risk threshold, who validated it, or who approved expansion at each phase. But the agreement was not an anonymous technical arrangement. It was an institutional act executed by a named corporate officer."
          }
        ]
      },
      {
        "id": "elizachat-decides-when-a-student-reaches-a-human",
        "label": "ElizaChat Decides When a Student Reaches a Human",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Agreement Gives ElizaChat the Threshold"
          },
          {
            "type": "paragraph",
            "text": "Section XVI(A) states:"
          },
          {
            "type": "quote",
            "text": "“Users who demonstrate high risk behavior, as determined by Participant,” must be connected promptly with ElizaChat’s clinical team, emergency contacts, and a licensed psychologist or therapist."
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "The words "
              },
              {
                "strong": "“as determined by Participant”"
              },
              {
                "text": " control the safeguard."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "ElizaChat is not simply operating the communication system. It decides whether a student has crossed the threshold that brings outside human judgment into the interaction."
          },
          {
            "type": "matrix-table",
            "headers": [
              "If ElizaChat classifies the student as high risk",
              "If ElizaChat does not classify the student as high risk"
            ],
            "rows": [
              [
                {
                  "text": "The escalation process activates."
                },
                {
                  "text": "The escalation process does not activate."
                }
              ],
              [
                {
                  "text": "Clinical personnel and emergency contacts may be notified."
                },
                {
                  "text": "A counselor, parent, school official, or emergency contact may never be notified."
                }
              ],
              [
                {
                  "text": "The system creates an escalation record."
                },
                {
                  "text": "The missed student may leave no escalation record at all."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The existence of a human escalation process does not establish that students who need intervention will receive it. It establishes only that ElizaChat has a process for students whom ElizaChat identifies."
          },
          {
            "type": "subheading",
            "text": "The System Decides Whether Its Own Safeguard Begins"
          },
          {
            "type": "subheading",
            "text": "What the Agreement Identifies",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Schedule B identifies an NLU system that filters inputs and outputs and a training loop involving a clinical advisory board. That is more methodological information than a bare claim that safeguards exist."
          },
          {
            "type": "paragraph",
            "text": "It is not validation."
          },
          {
            "type": "subheading",
            "text": "What the Public Record Does Not Validate",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The public record provides no demonstrated accuracy rate, false-negative rate, independent study, or evidence showing how the system performs when students express danger indirectly, ambiguously, sarcastically, or in language the system was not trained to recognize."
          },
          {
            "type": "paragraph",
            "text": "The central control therefore depends on the system correctly recognizing the condition that is supposed to trigger supervision."
          }
        ]
      },
      {
        "id": "disclosure-is-not-student-consent",
        "label": "Disclosure Is Not Student Consent",
        "blocks": [
          {
            "type": "subheading",
            "text": "What the Agreement Requires Students to Acknowledge"
          },
          {
            "type": "paragraph",
            "text": "Section VI(G) requires ElizaChat to disclose that:"
          },
          {
            "type": "list",
            "items": [
              "The application uses generative AI.",
              "The system is undergoing testing and may not function as intended.",
              "Student data will be used in specified ways."
            ]
          },
          {
            "type": "paragraph",
            "text": "A user must acknowledge receiving those disclosures before accessing the application."
          },
          {
            "type": "paragraph",
            "text": "That is a click-through acknowledgement. It is not evidence that the student meaningfully chose the institutional arrangement."
          },
          {
            "type": "subheading",
            "text": "What the Student Never Decided"
          },
          {
            "type": "paragraph",
            "text": "By the time the student sees the disclosure, Utah has authorized the pilot, the school has chosen to provide the system, ElizaChat has established the operating conditions, and the adults involved have determined that the student will encounter the technology."
          },
          {
            "type": "matrix-table",
            "headers": [
              "What the student can acknowledge",
              "What the student did not control"
            ],
            "rows": [
              [
                {
                  "text": "That the application uses generative AI"
                },
                {
                  "text": "Whether the school adopted it"
                }
              ],
              [
                {
                  "text": "That the system is being tested"
                },
                {
                  "text": "Whether students should be the test population"
                }
              ],
              [
                {
                  "text": "That the system may not work as intended"
                },
                {
                  "text": "Which failures were considered acceptable"
                }
              ],
              [
                {
                  "text": "How the company says data will be used"
                },
                {
                  "text": "Which model, threshold, monitoring process, and escalation design govern the interaction"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Disclosure is not choice. Acknowledging that an AI system may fail is not the same as authorizing its use in a school mental-health setting. Clicking a box does not transfer the institutional decision to the student."
          },
          {
            "type": "paragraph",
            "text": "ElizaChat’s Terms of Service also allow a school or district to accept the terms on behalf of students’ parents and provide consent for collecting student information. The terms assign parents responsibility for their minor children’s conduct whether or not the parent authorized that conduct."
          },
          {
            "type": "paragraph",
            "text": "The structure converts authorization by Utah, the school, and ElizaChat into purported consent by the person with the least control over the arrangement."
          },
          {
            "type": "quote",
            "text": "Institutional authorization is converted into purported student consent, while the consequences are transferred to the student."
          }
        ]
      },
      {
        "id": "a-harm-reporting-duty-still-depends-on-elizachat-recognizing-the-harm",
        "label": "A Harm-Reporting Duty Still Depends on ElizaChat Recognizing the Harm",
        "blocks": [
          {
            "type": "subheading",
            "text": "Utah Created a Broader 24-Hour Reporting Duty"
          },
          {
            "type": "paragraph",
            "text": "The agreement does not limit all reporting to whether ElizaChat crossed into the licensed practice of mental-health therapy."
          },
          {
            "type": "paragraph",
            "text": "Section VI(I)(3) separately requires ElizaChat to notify the Office within 24 hours of incidents that result in harm to a user’s health, safety, or financial well-being."
          },
          {
            "type": "paragraph",
            "text": "That broader duty matters. A student or parent also retains the right to bring a claim against ElizaChat. Schedule A(F) makes clear that Utah’s enforcement relief does not eliminate claims by individual users or their parents or guardians."
          },
          {
            "type": "paragraph",
            "text": "The agreement therefore does not erase every remedy after harm."
          },
          {
            "type": "subheading",
            "text": "ElizaChat Still Controls the First Classification"
          },
          {
            "type": "subheading",
            "text": "When ElizaChat Recognizes Harm",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The reporting obligation begins only when the event is recognized as harm."
          },
          {
            "type": "subheading",
            "text": "When ElizaChat Does Not Recognize Harm",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "If ElizaChat fails to classify a student as high risk, no escalation may occur. If the company does not learn of a later injury, does not connect it to the interaction, or does not classify the event as reportable harm, the 24-hour notice does not generate itself."
          },
          {
            "type": "matrix-table",
            "headers": [
              "What the agreement requires",
              "What remains unresolved"
            ],
            "rows": [
              [
                {
                  "text": "ElizaChat must report known harm within 24 hours."
                },
                {
                  "text": "How harm that ElizaChat failed to detect becomes known to Utah."
                }
              ],
              [
                {
                  "text": "Utah may inspect records after a complaint or suspected incident."
                },
                {
                  "text": "How Utah discovers students who were never escalated and never complained."
                }
              ],
              [
                {
                  "text": "ElizaChat must address identified failures and attempt to prevent recurrence."
                },
                {
                  "text": "Who independently determines whether the failure was identified completely."
                }
              ],
              [
                {
                  "text": "Students and parents retain the right to seek a remedy."
                },
                {
                  "text": "Whether they possess the records needed to prove what happened."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The error in the earlier framing would be to say a broader reporting duty does not exist. It does."
          },
          {
            "type": "paragraph",
            "text": "The actual failure is more important: the duty still depends on the same company-controlled recognition process that governs escalation."
          },
          {
            "type": "subheading",
            "text": "A Separate Licensing Incident Is Not the Same as Student Harm"
          },
          {
            "type": "paragraph",
            "text": "Schedule A also defines an incident around whether ElizaChat enters the licensed practice of mental-health therapy. When the Office or Division determines that the application crossed that professional boundary, ElizaChat receives time to correct the problem and must address resulting harm."
          },
          {
            "type": "paragraph",
            "text": "That process protects a licensing boundary. The 24-hour provision addresses broader harm. Neither provision establishes an independent mechanism for discovering an injured student whom ElizaChat never identified as high risk."
          },
          {
            "type": "paragraph",
            "text": "A missed escalation might later be called a classification error, an inaccurate output, a monitoring failure, or unexpected AI behavior. Each label could describe part of the event."
          },
          {
            "type": "paragraph",
            "text": "None would establish who owned the decisions that produced it."
          }
        ]
      },
      {
        "id": "responsibility-moves-away-from-the-students-decision-makers",
        "label": "Responsibility Moves Away From the Student’s Decision-Makers",
        "blocks": [
          {
            "type": "subheading",
            "text": "Authority and Consequences Are Distributed Differently"
          },
          {
            "type": "matrix-table",
            "headers": [
              "Actor",
              "Authority or control",
              "Position after harm"
            ],
            "rows": [
              [
                {
                  "text": "Utah"
                },
                {
                  "text": "Authorized the pilot, reviewed the rollout, and could approve expansion"
                },
                {
                  "text": "Disclaims endorsement and receives protection from claims arising from ElizaChat’s operation"
                }
              ],
              [
                {
                  "text": "School district"
                },
                {
                  "text": "Chose whether to provide the system and could accept terms on behalf of parents"
                },
                {
                  "text": "Did not design the AI or control its internal classifications"
                }
              ],
              [
                {
                  "text": "ElizaChat"
                },
                {
                  "text": "Designed and operated the system, controlled the intervention threshold, and held the operating evidence"
                },
                {
                  "text": "Its terms attempt to limit responsibility for AI outputs and resulting losses"
                }
              ],
              [
                {
                  "text": "Parent or guardian"
                },
                {
                  "text": "May receive notice or be represented by the school’s acceptance"
                },
                {
                  "text": "May not have directly authorized the arrangement and lacks control over the system"
                }
              ],
              [
                {
                  "text": "Student"
                },
                {
                  "text": "Supplies the sensitive information and experiences the system’s decision"
                },
                {
                  "text": "Bears the consequences despite controlling none of the institutional conditions"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Authority remains institutional. Risk does not."
          },
          {
            "type": "subheading",
            "text": "Utah’s Relief Is Narrower Than a Complete Immunity"
          },
          {
            "type": "paragraph",
            "text": "Utah’s agreement says the pilot is not a state endorsement or approval of ElizaChat’s technology. ElizaChat must protect the Office and the Division of Professional Licensing from claims, losses, and expenses arising from the work."
          },
          {
            "type": "paragraph",
            "text": "But Schedule A(F) preserves claims brought by students and their parents or guardians against ElizaChat. Utah’s regulatory relief concerns enforcement of the licensed-therapy boundary; it does not immunize ElizaChat from individual claims."
          },
          {
            "type": "paragraph",
            "text": "That precision strengthens the responsibility finding. Utah authorized the operating conditions. ElizaChat retained responsibility for the system. Students retained a possible remedy. None of those facts establishes that an injured family would possess enough evidence to reconstruct the failure."
          },
          {
            "type": "subheading",
            "text": "ElizaChat’s Terms Narrow the Practical Path"
          },
          {
            "type": "paragraph",
            "text": "ElizaChat’s terms describe the company as a technology platform rather than a healthcare provider. They say the service is not appropriate for emergencies, warn that AI outputs may be inaccurate, and place reliance on those outputs at the user’s risk."
          },
          {
            "type": "paragraph",
            "text": "The terms attempt to limit responsibility for AI inputs and outputs, exclude categories of damages, cap total responsibility under the terms, require individual arbitration, and prohibit class and representative proceedings."
          },
          {
            "type": "paragraph",
            "text": "The right to bring a claim is therefore not the same as a clear path to proving a claim."
          }
        ]
      },
      {
        "id": "elizachat-controls-the-evidence-needed-to-explain-what-happened",
        "label": "ElizaChat Controls the Evidence Needed to Explain What Happened",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Company Holds the Interaction Record"
          },
          {
            "type": "paragraph",
            "text": "ElizaChat collects account information, conversations, device information, usage activity, emergency-contact information, and system interactions. Its Privacy Policy says relevant conversation context may be shared with school officials, parents, law enforcement, or other authorities when the company determines reporting is necessary."
          },
          {
            "type": "paragraph",
            "text": "The company also controls the operating evidence:"
          },
          {
            "type": "list",
            "items": [
              "What the student entered.",
              "What the AI returned.",
              "How the conversation was classified.",
              "Whether a safety threshold activated.",
              "Whether an alert was generated.",
              "Who received the alert.",
              "Whether a clinician became involved.",
              "What ElizaChat reported to Utah.",
              "Which excerpts were selected as examples of successful or unsuccessful behavior."
            ]
          },
          {
            "type": "subheading",
            "text": "The Evidence Rules Do Not Establish Independent Possession"
          },
          {
            "type": "subheading",
            "text": "Utah’s Access Begins After Visibility",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Utah may request records after a complaint or an action reasonably likely to qualify as an incident. That access begins after the potential failure becomes visible to Utah. The agreement does not give Utah an independent mechanism for discovering students whom ElizaChat failed to identify."
          },
          {
            "type": "subheading",
            "text": "The Retention Rule Is Not Clear",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The public documents also provide different descriptions of what evidence survives. ElizaChat’s Terms of Service say some user content and health information may remain after account termination or deletion. Its Privacy Policy says account deletion permanently erases associated data except for information previously disclosed through mandated reporting."
          },
          {
            "type": "paragraph",
            "text": "Those statements do not establish a reliable preservation rule for an investigation after harm."
          },
          {
            "type": "subheading",
            "text": "Private Disputes Can Conceal Patterns",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Individual arbitration can fragment the evidence further. A student’s dispute may remain private and separated from similar claims. That makes it harder for families, schools, researchers, or the public to identify a pattern that ElizaChat can see across its records."
          },
          {
            "type": "paragraph",
            "text": "ElizaChat’s explanation would be evidence. Utah’s review would be evidence. A school’s account would be evidence. None should be accepted as the responsibility finding."
          }
        ]
      },
      {
        "id": "what-the-public-record-establishes-and-what-remains-unresolved",
        "label": "What the Public Record Establishes—and What Remains Unresolved",
        "blocks": [
          {
            "type": "matrix-table",
            "headers": [
              "What the public record establishes",
              "What remains unresolved"
            ],
            "rows": [
              [
                {
                  "text": "Utah authorized the pilot and controlled phased expansion."
                },
                {
                  "text": "Which individual approved expansion at each phase and what evidence supported that decision."
                }
              ],
              [
                {
                  "text": "Participating school districts determined whether students would receive access."
                },
                {
                  "text": "Which school officials accepted the deployment conditions and what parents were told."
                }
              ],
              [
                {
                  "text": "Dave Barney signed the agreement for ElizaChat."
                },
                {
                  "text": "Who designed, validated, and approved the high-risk threshold."
                }
              ],
              [
                {
                  "text": "ElizaChat controlled the threshold that determines when a student reaches a human."
                },
                {
                  "text": "The threshold’s false-negative rate and performance across different forms of student expression."
                }
              ],
              [
                {
                  "text": "The agreement identifies an NLU filter and clinical-advisory-board training loop."
                },
                {
                  "text": "The model, model version, configuration, external services, validation record, and independent testing."
                }
              ],
              [
                {
                  "text": "ElizaChat created and held the operating record."
                },
                {
                  "text": "Whether an outside investigator could recover the complete record after harm."
                }
              ],
              [
                {
                  "text": "Students and parents retained the right to bring claims against ElizaChat."
                },
                {
                  "text": "Whether they could obtain enough evidence to prove the responsibility chain."
                }
              ],
              [
                {
                  "text": "ElizaChat had a 24-hour duty to report harm."
                },
                {
                  "text": "How Utah would discover harm that ElizaChat failed to recognize or report."
                }
              ],
              [
                {
                  "text": "Utah, ElizaChat, and schools all exercised institutional authority before deployment."
                },
                {
                  "text": "Who formally accepted the remaining risk to students."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "These are not peripheral questions. They are the connections required to establish who controlled the conditions under which the AI acted."
          },
          {
            "type": "paragraph",
            "text": "Where those connections cannot be recovered, responsibility remains unresolved by design."
          }
        ]
      },
      {
        "id": "responsibility-reconstruction-finding",
        "label": "Responsibility Reconstruction Finding",
        "blocks": [
          {
            "type": "paragraph",
            "text": "ElizaChat presents human escalation as the safeguard protecting students. But ElizaChat controls the threshold that decides whether the safeguard begins."
          },
          {
            "type": "paragraph",
            "text": "Utah authorized the pilot, approved the structure, and retained oversight authority. It did not accept responsibility for operating the technology."
          },
          {
            "type": "paragraph",
            "text": "Schools chose whether to introduce the system and could accept terms on behalf of parents. They did not design the AI or control its internal risk decisions."
          },
          {
            "type": "paragraph",
            "text": "ElizaChat operated the system, controlled the intervention threshold, and held the evidence. Its terms nevertheless attempted to narrow its responsibility for inaccurate outputs and resulting harm."
          },
          {
            "type": "paragraph",
            "text": "Students controlled none of those institutional decisions."
          },
          {
            "type": "paragraph",
            "text": "The structure does not produce a clear accountable owner after harm. It produces a sequence of institutions pointing to the next actor, a technical label describing the failure, and a student left with the consequences."
          },
          {
            "type": "quote",
            "text": "Naming the event a missed escalation or classification error would explain the mechanism of failure. It would not establish who authorized the threshold, who validated it, who permitted deployment, or who accepted the risk to students. Naming the error is not owning responsibility."
          },
          {
            "type": "paragraph",
            "text": "Evidence-Based Responsibility Reconstruction℠ is necessary because the agreement, the terms, the privacy policy, and the company’s incident report would each show only part of the responsibility chain. The process must reconstruct how authority, control, consent, evidence, and risk were distributed across Utah, ElizaChat, the school, the parents, and the student."
          },
          {
            "type": "paragraph",
            "text": "The final finding is not that no one participated."
          },
          {
            "type": "paragraph",
            "text": "It is that the institutions with authority retained control, while the student who did not authorize or meaningfully consent to the system was left to absorb its failure."
          }
        ]
      }
    ]
  },
  {
    "slug": "dentacor-utah-ai-pilot",
    "shortName": "Dentacor",
    "initials": "DE",
    "title": "Dentacor: Lack of Access Is Not Consent to Reduced Dentist Supervision",
    "pageTitle": "Dentacor: Lack of Access Is Not Consent to Reduced Dentist Supervision",
    "href": "/case-studies/dentacor-utah-ai-pilot/",
    "indexSummary": "Utah permits treatment to proceed without dentist review when a hygienist and AI agree on a radiograph. Patients’ lack of dental access is used to justify reduced supervision, while agreement cannot detect an error shared by both reviewers.",
    "cardSummary": "Utah permits treatment to proceed without dentist review when a hygienist and AI agree on a radiograph. Patients’ lack of dental access is used to justify reduced supervision, while agreement cannot detect an error shared by both reviewers.",
    "aiUse": "AI-assisted dental radiographs",
    "humanCheckpoint": "Dentist review after disagreement",
    "evidenceSource": "Provider reports and complaint-triggered review",
    "reconstructionFinding": "Technology actor missing from the responsibility record",
    "primaryRecord": "Dentacor Utah AI pilot agreement",
    "sourceUrl": "https://commerce.utah.gov/wp-content/uploads/2025/06/Dentacor-Mitigation-Agreement.pdf",
    "sourceSummary": "Utah agreement and pilot materials, Dentacor materials, state reporting, and comparative FDA records",
    "sources": [
      {
        "label": "Dentacor Regulatory Mitigation Agreement",
        "href": "https://commerce.utah.gov/wp-content/uploads/2025/06/Dentacor-Mitigation-Agreement.pdf"
      },
      {
        "label": "Utah’s Dentacor Pilot Description",
        "href": "https://commerce.utah.gov/ai/regulatory-relief/authorized-ai-pilots/dentacor/"
      },
      {
        "label": "Nate Wilson’s Dentacor Pilot Announcement",
        "href": "https://www.linkedin.com/posts/medicaid-advocate_dentacor-is-now-the-first-medical-provider-activity-7335519060719230979-lNGl"
      },
      {
        "label": "Dentacor Public Website",
        "href": "https://dentacor.com/"
      },
      {
        "label": "Dentacor Leadership Team",
        "href": "https://dentacor.com/leadership-team/"
      },
      {
        "label": "Utah Department of Commerce 2025 Year in Review",
        "href": "https://commerce.utah.gov/2026/01/07/year-in-review-the-utah-department-of-commerces-2025-highlights/"
      },
      {
        "label": "Videa FDA-Clearance Announcement",
        "href": "https://www.videa.ai/news/videahealth-dental-ai-solution-receives-fda-510-k-clearance-establishing-industry-wide-benchmark-for-clinical-accuracy"
      },
      {
        "label": "FDA 510(k) Record for Videa Dental AI",
        "href": "https://www.accessdata.fda.gov/cdrh_docs/pdf25/K251002.pdf"
      }
    ],
    "introduction": [
      {
        "type": "paragraph",
        "text": "Dentacor is a mobile dental-care provider founded in 2021. Its public website describes a conventional clinical model: hygienists collect images and information, and a Dentacor dentist creates the patient’s diagnosis and treatment plan."
      },
      {
        "type": "paragraph",
        "text": "Utah authorized a different model."
      },
      {
        "type": "paragraph",
        "text": "Under a 12-month regulatory mitigation agreement, Dentacor’s dental hygienists may diagnose specified conditions with the concurrence of an AI radiograph tool instead of working under the general supervision of a dentist. If the hygienist and AI agree, treatment can proceed without dentist review. If they disagree, the case is escalated."
      },
      {
        "type": "paragraph",
        "text": "The pilot is directed toward people experiencing homelessness, poverty, addiction, and limited access to Medicaid dentists. Patients must consent after being told that no dentist is supervising the procedure and that a hygienist does not have the same training or professional scope as a dentist."
      },
      {
        "type": "paragraph",
        "text": "The AI system replacing that supervision is never identified."
      },
      {
        "type": "paragraph",
        "text": "The public agreement does not name its developer, vendor, product, model, version, validation study, or party responsible for retaining its technical records."
      },
      {
        "type": "paragraph",
        "text": "This is the responsibility problem: Utah used an access crisis to authorize reduced dentist supervision for patients with the fewest alternatives, while leaving the technology actor outside the public record."
      }
    ],
    "sections": [
      {
        "id": "what-utah-authorized",
        "label": "What Utah Authorized",
        "blocks": [
          {
            "type": "subheading",
            "text": "The AI Can Stand In for Dentist Supervision"
          },
          {
            "type": "linked-paragraph",
            "before": "The ",
            "linkLabel": "Dentacor regulatory mitigation agreement",
            "href": "https://commerce.utah.gov/wp-content/uploads/2025/06/Dentacor-Mitigation-Agreement.pdf",
            "after": " permits Dentacor-employed hygienists to diagnose:"
          },
          {
            "type": "list",
            "items": [
              "Periodontal disease",
              "Complete edentulism",
              "Complete anodontia"
            ]
          },
          {
            "type": "paragraph",
            "text": "With the AI system’s concurrence, the hygienist may perform:"
          },
          {
            "type": "list",
            "items": [
              "Scaling and root planing",
              "Installation and fitting of full dentures"
            ]
          },
          {
            "type": "paragraph",
            "text": "Dentacor calls this a dual-verification protocol."
          },
          {
            "type": "subheading",
            "text": "If the Hygienist and AI Disagree",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The case is escalated to a licensed dentist."
          },
          {
            "type": "subheading",
            "text": "If the Hygienist and AI Agree",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Treatment may proceed without a dentist reviewing the diagnosis."
          },
          {
            "type": "paragraph",
            "text": "The AI therefore helps determine whether a dentist enters the case. It is not merely organizing information for a professional. Its concurrence removes the escalation that would otherwise bring a dentist into the decision."
          },
          {
            "type": "linked-paragraph",
            "before": "Utah’s ",
            "linkLabel": "public pilot description",
            "href": "https://commerce.utah.gov/ai/regulatory-relief/authorized-ai-pilots/dentacor/",
            "after": " says the AI supports rather than replaces professional judgment. The operative agreement permits AI concurrence in place of dentist supervision for the authorized work."
          },
          {
            "type": "subheading",
            "text": "Consent Does Not Identify the AI"
          },
          {
            "type": "paragraph",
            "text": "The agreement requires patients to consent after being told that no dentist is supervising the procedure and that the hygienist does not have the full training or professional scope of a dentist."
          },
          {
            "type": "paragraph",
            "text": "Separately, Dentacor must not misrepresent the use of the AI radiograph tool or its ability to diagnose a dental condition. That is a duty not to misrepresent the technology, not an express requirement to identify the system or explain its specific limitations."
          },
          {
            "type": "paragraph",
            "text": "The patient does not select the AI, validate its performance, establish the escalation threshold, or decide that the remaining risk is acceptable."
          },
          {
            "type": "paragraph",
            "text": "Disclosure does not transfer those institutional decisions to the patient."
          }
        ]
      },
      {
        "id": "the-ai-has-no-public-identity",
        "label": "The AI Has No Public Identity",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Agreement Names a Function, Not a System"
          },
          {
            "type": "paragraph",
            "text": "The agreement repeatedly refers to an “AI-assisted radiograph diagnostic tool.” It does not identify:"
          },
          {
            "type": "list",
            "items": [
              "The AI developer or vendor",
              "The product, model, or version",
              "Its regulatory status",
              "Its diagnostic thresholds",
              "Its validation evidence",
              "Who controls software updates",
              "Who retains the technical logs",
              "How responsibility is divided between Dentacor and the technology provider"
            ]
          },
          {
            "type": "paragraph",
            "text": "Dentacor’s proposal claims that AI radiograph tools have surpassed diagnostic benchmarks associated with junior dentists. It does not identify the benchmark, cite the supporting evidence, or establish that the system used in this pilot achieved that performance."
          },
          {
            "type": "paragraph",
            "text": "A general claim about dental AI cannot validate an unidentified product."
          },
          {
            "type": "subheading",
            "text": "The Silence Is Not an Industry Default"
          },
          {
            "type": "paragraph",
            "text": "Dental AI companies routinely identify their systems and regulatory status."
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "Videa, for example, publicly identifies its dental AI products and FDA clearances and says its technology analyzes more than 500 million X-rays annually. FDA records identify the manufacturer, product, intended uses, supported image types, patient populations, and operating limitations. They also describe the system as an aid to trained professionals rather than a replacement for professional diagnosis. "
              },
              {
                "linkLabel": "Videa’s FDA-clearance announcement",
                "href": "https://www.videa.ai/news/videahealth-dental-ai-solution-receives-fda-510-k-clearance-establishing-industry-wide-benchmark-for-clinical-accuracy"
              },
              {
                "text": ", "
              },
              {
                "linkLabel": "FDA 510(k) record",
                "href": "https://www.accessdata.fda.gov/cdrh_docs/pdf25/K251002.pdf"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "The Dentacor record provides none of that information."
          },
          {
            "type": "paragraph",
            "text": "Because the tool is unnamed, the public cannot determine whether it was validated or cleared for the role Utah authorized—or whether that role exceeds its intended use."
          },
          {
            "type": "subheading",
            "text": "Dentacor Is Visible; the Technology Provider Is Not"
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "Dentacor’s "
              },
              {
                "linkLabel": "website",
                "href": "https://dentacor.com/"
              },
              {
                "text": " presents a mobile dental-care company. Its "
              },
              {
                "linkLabel": "leadership page",
                "href": "https://dentacor.com/leadership-team/"
              },
              {
                "text": " identifies dental, provider-services, operations, and information-technology leadership. It does not identify an AI product, AI development team, clinical AI validation function, or outside technology partner."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "Utah may have reviewed private information about Dentacor’s technical capability. The public responsibility record does not show it."
          },
          {
            "type": "paragraph",
            "text": "A healthcare provider can license a third-party AI product. But when that system helps remove a dentist from a clinical decision, its developer becomes part of the responsibility chain."
          },
          {
            "type": "paragraph",
            "text": "Governance surrounds the deployment. It does not visibly reach the technology."
          }
        ]
      },
      {
        "id": "lack-of-access-becomes-the-reason-to-reduce-supervision",
        "label": "Lack of Access Becomes the Reason to Reduce Supervision",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Same Need Justifies and Supplies the Test"
          },
          {
            "type": "paragraph",
            "text": "Dentacor describes untreated dental disease among vulnerable Utah residents as a moral and clinical emergency. It identifies homelessness, chronic pain, addiction, poverty, and the shrinking number of dentists accepting Medicaid."
          },
          {
            "type": "linked-paragraph",
            "before": "In his ",
            "linkLabel": "public announcement",
            "href": "https://www.linkedin.com/posts/medicaid-advocate_dentacor-is-now-the-first-medical-provider-activity-7335519060719230979-lNGl",
            "after": ", Dentacor CEO Nate Wilson presented the pilot as using AI to restore access and dignity rather than optimize profits."
          },
          {
            "type": "paragraph",
            "text": "The need is real. The conflict lies in what that need is being used to justify."
          },
          {
            "type": "paragraph",
            "text": "The pilot does not add AI on top of ordinary dentist supervision. It permits AI concurrence to replace that supervision."
          },
          {
            "type": "paragraph",
            "text": "A patient with reliable access to a dentist can reject the arrangement and obtain care elsewhere. A patient experiencing pain, homelessness, or limited Medicaid access may effectively be choosing between AI-assisted care without dentist supervision and no treatment."
          },
          {
            "type": "paragraph",
            "text": "The patient’s lack of alternatives becomes:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "The problem Dentacor claims to solve.",
              "The reason Utah relaxes the supervision requirement.",
              "The condition making participation more likely.",
              "The source of evidence used to evaluate the model."
            ]
          },
          {
            "type": "quote",
            "text": "Lack of access is converted into consent to reduced supervision, while the patient bears the clinical consequences."
          },
          {
            "type": "subheading",
            "text": "The Evidence Is Intended to Support Expansion"
          },
          {
            "type": "paragraph",
            "text": "Dentacor estimates that the model could double the number of patients served without increasing staff. Its proposal describes the pilot as a possible national blueprint for shelters, rural communities, tribal communities, and other care deserts."
          },
          {
            "type": "paragraph",
            "text": "The patients receive access. Dentacor receives greater capacity and evidence supporting expansion."
          },
          {
            "type": "paragraph",
            "text": "Before that model can be treated as a blueprint, the record must establish which AI produced the results, whether the system changed during the pilot, how often dentists reviewed its decisions, and whether agreement between the AI and hygienists was independently verified."
          }
        ]
      },
      {
        "id": "dual-verification-does-not-prove-independent-judgment",
        "label": "Dual Verification Does Not Prove Independent Judgment",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Control Detects Disagreement, Not Shared Error"
          },
          {
            "type": "paragraph",
            "text": "The agreement does not say whether the hygienist records a diagnosis before seeing the AI output or whether the AI can influence the hygienist’s conclusion."
          },
          {
            "type": "paragraph",
            "text": "It also does not establish whether:"
          },
          {
            "type": "list",
            "items": [
              "The AI and hygienist can share the same image-quality failure",
              "Confidence scores are preserved",
              "Agreement is later reviewed by a dentist",
              "False agreement is measured",
              "The system distinguishes uncertainty from a negative finding"
            ]
          },
          {
            "type": "paragraph",
            "text": "If the AI and hygienist disagree, the safeguard works as described: a dentist enters the case."
          },
          {
            "type": "paragraph",
            "text": "If they agree incorrectly, no escalation occurs."
          },
          {
            "type": "paragraph",
            "text": "Both could misread the same radiograph, miss the same condition, or reach agreement because the AI influenced the human reviewer. Counting agreement would not distinguish independent confirmation from shared error or automation bias."
          },
          {
            "type": "paragraph",
            "text": "“Dual verification” names the safeguard. It does not prove that two independent judgments occurred."
          }
        ]
      },
      {
        "id": "dentacor-controls-the-initial-evidence",
        "label": "Dentacor Controls the Initial Evidence",
        "blocks": [
          {
            "type": "subheading",
            "text": "Compliance Exists Around the Pilot"
          },
          {
            "type": "paragraph",
            "text": "Dentacor must use licensed hygienists, obtain patient consent, train participating staff, maintain privacy and cybersecurity protections, monitor the pilot, and report monthly to Utah."
          },
          {
            "type": "paragraph",
            "text": "The reports cover patient volume, demographics, AI efficacy, escalations, complaints, system errors, and adverse outcomes. Third-party researchers approved by Utah may review them, but independent review is not required."
          },
          {
            "type": "paragraph",
            "text": "Dentacor therefore operates the pilot, collects the evidence, evaluates the AI’s performance, and supplies the initial account to Utah."
          },
          {
            "type": "subheading",
            "text": "Utah Has Announced Success Without Publishing the Evidence"
          },
          {
            "type": "linked-paragraph",
            "before": "In its ",
            "linkLabel": "2025 Year in Review",
            "href": "https://commerce.utah.gov/2026/01/07/year-in-review-the-utah-department-of-commerces-2025-highlights/",
            "after": ", the Utah Department of Commerce said early Dentacor data indicated that the care was of exceptionally high quality."
          },
          {
            "type": "paragraph",
            "text": "The public statement does not provide the underlying data, accuracy measure, disagreement rate, dentist-review rate, false-negative rate, adverse outcomes, or identity of an independent evaluator."
          },
          {
            "type": "paragraph",
            "text": "A favorable conclusion has entered the public record without the evidence needed to reconstruct how it was reached."
          },
          {
            "type": "paragraph",
            "text": "The agreement also says Utah may request records after a complaint or an action reasonably likely to constitute an incident “as described in Schedule A.” Schedule A does not appear to define an incident."
          },
          {
            "type": "paragraph",
            "text": "If a patient does not know that a diagnosis was wrong, no complaint may be filed. If no one recognizes the event as an incident, Dentacor’s internal record may remain the only account."
          },
          {
            "type": "paragraph",
            "text": "The unnamed AI provider may separately control the model version, confidence score, inference record, update history, and evidence of similar failures. The agreement does not establish whether Dentacor can compel that provider to preserve or produce those records."
          }
        ]
      },
      {
        "id": "if-a-patient-is-harmed-responsibility-is-already-split",
        "label": "If a Patient Is Harmed, Responsibility Is Already Split",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Responsibility Chain"
          },
          {
            "type": "subheading",
            "text": "Utah",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Utah authorized the reduced-supervision model, approved the testing structure, and can terminate the mitigation. The agreement says the pilot is not a state endorsement."
          },
          {
            "type": "subheading",
            "text": "Dentacor",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Dentacor selected or integrated the AI, employs the hygienists, operates the pilot, monitors performance, and creates the reports."
          },
          {
            "type": "paragraph",
            "text": "The agreement explicitly preserves the patient’s right to seek available remedies from Dentacor if harm results from the AI tool. Dentacor must also protect Utah’s Office of Artificial Intelligence Policy and Division of Professional Licensing from claims and losses arising from the pilot."
          },
          {
            "type": "paragraph",
            "text": "The agreement therefore places the visible financial responsibility on Dentacor and away from Utah while leaving the unnamed AI provider outside that allocation."
          },
          {
            "type": "subheading",
            "text": "The Hygienist",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The hygienist performs the clinical assessment, confirms the diagnosis, and provides the treatment. The hygienist is named, licensed, and professionally visible."
          },
          {
            "type": "subheading",
            "text": "The AI Provider",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The AI provider may have developed, validated, updated, and logged the system whose concurrence allowed treatment to proceed. That organization does not appear in the public agreement."
          },
          {
            "type": "subheading",
            "text": "The Patient",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The patient experiences the clinical outcome without having selected the system, approved the supervision change, or evaluated the safeguards."
          },
          {
            "type": "paragraph",
            "text": "Calling a later failure an AI error, hygienist error, poor radiograph, or missed escalation would not establish who chose the system, validated it, controlled its updates, monitored shared errors, or accepted the remaining risk."
          }
        ]
      },
      {
        "id": "what-the-public-record-establishes-vs-what-remains-unresolved",
        "label": "What the Public Record Establishes vs. What Remains Unresolved",
        "blocks": [
          {
            "type": "matrix-table",
            "headers": [
              "What the Public Record Establishes",
              "What Remains Unresolved"
            ],
            "rows": [
              [
                {
                  "label": "Authorization",
                  "text": "Utah authorized Dentacor’s pilot and reduced the dentist-supervision requirement for specified diagnoses and procedures."
                },
                {
                  "label": "Technology identity",
                  "text": "The AI developer, product, model, and version are not named."
                }
              ],
              [
                {
                  "label": "AI role",
                  "text": "AI concurrence can allow diagnosis and treatment to proceed without dentist review."
                },
                {
                  "label": "Regulatory status",
                  "text": "The record does not show whether the tool was cleared or validated for the role Utah authorized."
                }
              ],
              [
                {
                  "label": "Human role",
                  "text": "A licensed hygienist performs the assessment, confirms the diagnosis, and provides the treatment."
                },
                {
                  "label": "Independent judgment",
                  "text": "The record does not show whether the hygienist reaches a conclusion before seeing the AI output."
                }
              ],
              [
                {
                  "label": "Escalation",
                  "text": "Disagreement or uncertainty sends the case to a licensed dentist."
                },
                {
                  "label": "Shared error",
                  "text": "The record does not show how agreement between the hygienist and AI is checked for accuracy."
                }
              ],
              [
                {
                  "label": "Consent",
                  "text": "Patients must consent after receiving disclosures about the absence of dentist supervision and the hygienist’s training gap."
                },
                {
                  "label": "Meaningful choice",
                  "text": "The record does not establish what alternatives are realistically available to patients unable to obtain conventional dental care."
                }
              ],
              [
                {
                  "label": "Operation",
                  "text": "Dentacor operates, monitors, and maintains the pilot."
                },
                {
                  "label": "Technical control",
                  "text": "The record does not identify who controls model updates, thresholds, validation, or technical logs."
                }
              ],
              [
                {
                  "label": "Reporting",
                  "text": "Dentacor submits monthly reports covering efficacy, escalations, complaints, errors, and adverse outcomes."
                },
                {
                  "label": "Independent evidence",
                  "text": "Independent review is not required, and the underlying performance data have not been published."
                }
              ],
              [
                {
                  "label": "Financial responsibility",
                  "text": "Patients retain available remedies against Dentacor, and Dentacor protects Utah from claims arising from the pilot."
                },
                {
                  "label": "Technology-provider responsibility",
                  "text": "The unnamed AI provider does not appear in the public allocation of responsibility."
                }
              ],
              [
                {
                  "label": "Public conclusion",
                  "text": "Utah has described the pilot’s early care as exceptionally high quality."
                },
                {
                  "label": "Supporting proof",
                  "text": "The public record does not provide the measures or evidence supporting that conclusion."
                }
              ],
              [
                {
                  "label": "Intended expansion",
                  "text": "Dentacor presents the model as a possible blueprint for other underserved communities."
                },
                {
                  "label": "Risk acceptance",
                  "text": "The record does not identify who determined that the remaining risk to patients was acceptable."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The institutional authorization is traceable."
          },
          {
            "type": "paragraph",
            "text": "The technology responsibility is not."
          }
        ]
      },
      {
        "id": "responsibility-reconstruction-finding",
        "label": "Responsibility Reconstruction Finding",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Utah authorized reduced dentist supervision."
          },
          {
            "type": "paragraph",
            "text": "Dentacor designed and operates the workflow."
          },
          {
            "type": "paragraph",
            "text": "A licensed hygienist supplies the visible human judgment."
          },
          {
            "type": "paragraph",
            "text": "An unnamed AI provides the concurrence required for treatment to proceed."
          },
          {
            "type": "paragraph",
            "text": "A dentist enters only when the hygienist and AI disagree or identify uncertainty."
          },
          {
            "type": "paragraph",
            "text": "Dentacor creates the initial performance record. Utah receives that account and has already described the early care as exceptionally high quality."
          },
          {
            "type": "paragraph",
            "text": "Patients with limited alternatives receive the treatment and bear the consequences."
          },
          {
            "type": "paragraph",
            "text": "Dentacor’s mission may be sincere, and the access crisis is real. Neither fact completes the responsibility record."
          },
          {
            "type": "paragraph",
            "text": "A moral purpose does not identify the AI."
          },
          {
            "type": "paragraph",
            "text": "A consent form does not validate the system."
          },
          {
            "type": "paragraph",
            "text": "A disagreement process does not detect shared error."
          },
          {
            "type": "paragraph",
            "text": "A monthly report does not create independent evidence."
          },
          {
            "type": "quote",
            "text": "Utah authorized an unnamed AI to stand in for dentist supervision for patients least able to obtain a dentist. The patients are named as the beneficiaries, but the technology actor remains missing from the responsibility record."
          },
          {
            "type": "paragraph",
            "text": "Lack of access is not consent to reduced supervision."
          },
          {
            "type": "paragraph",
            "text": "If a patient is harmed, naming the event an AI error, a hygienist error, or an unexpected outcome will not establish who authorized, validated, controlled, monitored, and permitted the conditions that produced it."
          },
          {
            "type": "paragraph",
            "text": "Naming the error is not owning responsibility."
          }
        ]
      }
    ]
  },
  {
    "slug": "legion-health-utah-ai-pilot",
    "shortName": "Legion Health",
    "initials": "LH",
    "title": "Legion Health: The AI Decides Whether a Psychiatric Refill Reaches a Clinician",
    "pageTitle": "Legion Health: The AI Decides Whether a Psychiatric Refill Reaches a Clinician",
    "href": "/case-studies/legion-health-utah-ai-pilot/",
    "indexSummary": "Legion’s AI can authorize a qualifying psychiatric refill and decide whether risk or ambiguity requires clinician review. A physician’s name remains attached, but the name does not prove case-level physician judgment.",
    "cardSummary": "Legion’s AI can authorize a qualifying psychiatric refill and decide whether risk or ambiguity requires clinician review. A physician’s name remains attached, but the name does not prove case-level physician judgment.",
    "aiUse": "AI psychiatric medication refills",
    "humanCheckpoint": "AI-triggered escalation and phased review",
    "evidenceSource": "Refill packets, review samples, and provider reports",
    "reconstructionFinding": "Attribution does not establish physician judgment",
    "primaryRecord": "Legion Health AI Mitigation Agreement",
    "sourceUrl": "https://commerce.utah.gov/wp-content/uploads/2026/03/Legion-Agreement.pdf",
    "sourceSummary": "Utah agreement, state pilot page, company terms, and partnered company interview",
    "sources": [
      {
        "label": "Legion Health AI Mitigation Agreement",
        "href": "https://commerce.utah.gov/wp-content/uploads/2026/03/Legion-Agreement.pdf"
      },
      {
        "label": "Utah’s Legion Health pilot page",
        "href": "https://commerce.utah.gov/ai/regulatory-relief/authorized-ai-pilots/ai-legion-health/"
      },
      {
        "label": "Legion Health Terms of Service",
        "href": "https://legionhealth.com/terms-of-service/"
      },
      {
        "label": "Healthcare AI Guy: Company Deep Dive—Legion Health",
        "href": "https://www.healthcareaiguy.com/p/company-deep-dive-legion-health"
      }
    ],
    "introduction": [
      {
        "type": "paragraph",
        "text": "Legion Health is not building a clinical tool for physicians. It is building a clinic whose operating architecture assumes that work performed through software should eventually be executable by an LLM."
      },
      {
        "type": "paragraph",
        "text": "Legion describes itself as putting its technology identity ahead of its care-delivery identity. Its internal rule is that “anything a human can do, an LLM has to be able to read and eventually do as well.”"
      },
      {
        "type": "paragraph",
        "text": "Utah has now authorized one consequential step along that path. Legion’s AI may determine whether a patient qualifies for a psychiatric medication renewal, authorize the renewal, and transmit it to a pharmacy without a clinician reviewing the individual decision first."
      },
      {
        "type": "rich-paragraph",
        "segments": [
          {
            "text": "This case applies "
          },
          {
            "linkLabel": "Evidence-Based Responsibility Reconstruction℠",
            "href": "/blog/evidence-based-responsibility-reconstruction/"
          },
          {
            "text": " to the signed Utah agreement, Legion’s proposal, the state’s public description of the pilot, Legion’s Terms of Service, and a partnered company interview describing its AI architecture."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "The responsibility problem is not hidden:"
      },
      {
        "type": "quote",
        "text": "The AI does not merely decide whether medication should be renewed. It decides whether the patient’s case reaches a clinician at all."
      }
    ],
    "sections": [
      {
        "id": "what-utah-authorized",
        "label": "What Utah Authorized",
        "blocks": [
          {
            "type": "subheading",
            "text": "The AI Can Complete the Renewal"
          },
          {
            "type": "paragraph",
            "text": "The signed agreement authorizes Legion’s “Mental Health Refill Autopilot” to renew a limited group of existing, non-controlled psychiatric medications."
          },
          {
            "type": "paragraph",
            "text": "The system may:"
          },
          {
            "type": "list",
            "items": [
              "Verify the patient and prescription.",
              "Collect information about efficacy, side effects, allergies, clinical changes, and symptoms.",
              "Screen for conditions requiring escalation.",
              "Determine whether the request is eligible.",
              "Authorize the renewal.",
              "Transmit it to the patient’s pharmacy."
            ]
          },
          {
            "type": "paragraph",
            "text": "This is not an AI recommendation awaiting a physician’s decision. When the request falls within scope and the system detects no risk or ambiguity, the AI completes the renewal."
          },
          {
            "type": "subheading",
            "text": "The Scope Is Narrow but the Decision Is Consequential"
          },
          {
            "type": "paragraph",
            "text": "The pilot excludes controlled substances, benzodiazepines, antipsychotics, lithium, valproate, clozapine, new prescriptions, dose changes, medication switches, and renewals requiring new laboratory work or an ECG."
          },
          {
            "type": "paragraph",
            "text": "It includes commonly used medications for depression, anxiety, panic disorder, PTSD, OCD, insomnia, and related conditions. Automated renewals are limited to ten between provider reviews or six months, whichever occurs first."
          },
          {
            "type": "paragraph",
            "text": "Those boundaries reduce the number of eligible cases. They do not change who makes the decision inside those boundaries."
          },
          {
            "type": "subheading",
            "text": "Patients and Pharmacists Must Be Told AI Is Acting"
          },
          {
            "type": "paragraph",
            "text": "Before the AI engages with a Utah patient about a renewal, Legion must disclose that the patient is interacting with generative AI, explain how the patient’s information and correspondence will be used or shared, identify the temporary Utah program, and obtain an acknowledgement. Patients may request human review."
          },
          {
            "type": "paragraph",
            "text": "Pharmacists must be told that the renewal was generated by AI and receive a direct way to contact Legion and Utah."
          },
          {
            "type": "paragraph",
            "text": "Those are meaningful disclosures. They make the AI’s participation visible. They do not establish which model made the decision, who approved its operating rules, or who is responsible for the design. A patient’s acknowledgement authorizes participation; it does not transfer responsibility for the system."
          },
          {
            "type": "subheading",
            "text": "Utah Created a Named-Prescriber Structure"
          },
          {
            "type": "paragraph",
            "text": "Schedule A allows an affiliated professional entity or provider to rely on Legion’s AI “solely by being the named prescriber” without interacting directly with the patient or another healthcare provider."
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "Utah’s public explanation says each refill is approved by a licensed physician, either directly or "
              },
              {
                "strong": "“vicariously through the AI system’s protocol.”"
              }
            ]
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "That word—"
              },
              {
                "strong": "vicariously"
              },
              {
                "text": "—carries the responsibility structure."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "The physician’s professional authority remains attached to the prescription even when the physician did not review the individual renewal."
          }
        ]
      },
      {
        "id": "clinician-in-the-loop-does-not-mean-case-level-review",
        "label": "“Clinician in the Loop” Does Not Mean Case-Level Review",
        "blocks": [
          {
            "type": "subheading",
            "text": "Human Review Declines as the Pilot Advances"
          },
          {
            "type": "matrix-table",
            "headers": [
              "Phase",
              "Human involvement",
              "Advancement condition"
            ],
            "rows": [
              [
                {
                  "text": "Phase A"
                },
                {
                  "text": "A Utah-licensed clinician reviews the first 250 requests before completion."
                },
                {
                  "text": "Reported concordance must exceed 98%."
                }
              ],
              [
                {
                  "text": "Phase B"
                },
                {
                  "text": "The AI may send renewals before the next 1,000 requests receive retrospective review."
                },
                {
                  "text": "Reported concordance must exceed 99%."
                }
              ],
              [
                {
                  "text": "Phase C"
                },
                {
                  "text": "Approximately 5%–10% of cases receive monthly sampling, with additional incident audits."
                },
                {
                  "text": "Ongoing reporting and oversight."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "During Phase A, a clinician can stop an individual renewal before it reaches the pharmacy."
          },
          {
            "type": "paragraph",
            "text": "During Phase B, the review occurs after the AI has acted. During Phase C, most individual decisions are not scheduled for clinician review at all."
          },
          {
            "type": "paragraph",
            "text": "The phrase “clinician in the loop” therefore describes the operating system as a whole. It does not establish that a clinician participated in a particular patient’s renewal."
          },
          {
            "type": "subheading",
            "text": "A Physician’s Name Is Not Evidence of Physician Judgment"
          },
          {
            "type": "paragraph",
            "text": "For an automated renewal, the named physician may not have:"
          },
          {
            "type": "list",
            "items": [
              "Seen the patient’s answers.",
              "Reviewed the refill packet.",
              "Evaluated the safety flags.",
              "Approved the individual renewal.",
              "Had an opportunity to intervene before transmission."
            ]
          },
          {
            "type": "paragraph",
            "text": "The name makes the prescription attributable to a licensed professional. It does not prove that the professional formed or adopted the judgment reflected in the prescription."
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "Legion’s design exposes the difference between "
              },
              {
                "strong": "having a human name on the outcome"
              },
              {
                "text": " and "
              },
              {
                "strong": "having evidence that a human made the decision"
              },
              {
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "id": "the-ai-decides-when-human-judgment-begins",
        "label": "The AI Decides When Human Judgment Begins",
        "blocks": [
          {
            "type": "subheading",
            "text": "Safety Screens Control Access to a Clinician"
          },
          {
            "type": "paragraph",
            "text": "Legion’s proposal establishes hard stops for conditions including:"
          },
          {
            "type": "list",
            "items": [
              "Suicidality or self-harm risk.",
              "Mania or hypomania.",
              "Pregnancy-related changes.",
              "New or worsening symptoms.",
              "Loss of medication efficacy.",
              "Severe adverse effects.",
              "Contraindications or prescription discrepancies."
            ]
          },
          {
            "type": "paragraph",
            "text": "If the system detects one of those conditions, encounters ambiguity, or cannot verify the patient or prescription, the request enters a clinician queue. Patients and pharmacists may also request escalation."
          },
          {
            "type": "paragraph",
            "text": "If the system detects no qualifying condition, the renewal proceeds."
          },
          {
            "type": "matrix-table",
            "headers": [
              "When the system detects risk or ambiguity",
              "When the system does not detect risk or ambiguity"
            ],
            "rows": [
              [
                {
                  "text": "The case is sent for clinician review."
                },
                {
                  "text": "The AI may authorize and transmit the renewal."
                }
              ],
              [
                {
                  "text": "A clinician can examine the chat log and medical record."
                },
                {
                  "text": "A clinician may never examine the individual case."
                }
              ],
              [
                {
                  "text": "The escalation creates a review record."
                },
                {
                  "text": "The absence of an escalation may be the only recorded safety result."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The human safeguard begins only after the automated system decides that human judgment is necessary."
          },
          {
            "type": "subheading",
            "text": "A Deterministic Rule Does Not Make Detection Deterministic"
          },
          {
            "type": "paragraph",
            "text": "The agreement says each hard stop is tested through deterministic unit tests and synthetic red-team scripts. Those tests can establish that a known trigger produces the expected action."
          },
          {
            "type": "paragraph",
            "text": "They do not establish that the system will correctly recognize every real patient statement that should activate the trigger."
          },
          {
            "type": "paragraph",
            "text": "A rule can reliably escalate a positive suicidality flag while the language system still fails to recognize that a patient’s words indicate suicidality. If the flag is never generated, the deterministic safeguard never begins."
          },
          {
            "type": "paragraph",
            "text": "Naming a missed escalation would identify the technical failure. It would not establish who designed the threshold, who validated it, who determined its performance was sufficient, or who accepted the risk of letting it control access to a clinician."
          }
        ]
      },
      {
        "id": "utah-authorized-a-system-not-a-stable-model",
        "label": "Utah Authorized a System, Not a Stable Model",
        "blocks": [
          {
            "type": "subheading",
            "text": "Legion’s Broader Architecture Uses Multiple Frontier Models"
          },
          {
            "type": "paragraph",
            "text": "In a November 2025 interview, Legion said its broader AI stack uses frontier models from OpenAI, Google, and Anthropic and switches among them as needed. The company said most of its performance comes from prompts and workflow design rather than a custom-trained model."
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "Legion also described an API-first architecture connecting LLMs to scheduling, billing, clinical records, patient support, and clinical workflows. The interview was presented in partnership with Legion, so it is evidence of the company’s stated design and strategy—not independent validation of its performance. "
              },
              {
                "linkLabel": "Legion Health interview",
                "href": "https://www.healthcareaiguy.com/p/company-deep-dive-legion-health"
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "The agreement does not identify which model or model version powers the Utah refill workflow. It does not establish whether the workflow uses one provider consistently or can move among providers."
          },
          {
            "type": "subheading",
            "text": "The Regulated System Has Multiple Moving Parts"
          },
          {
            "type": "paragraph",
            "text": "The operating system is not merely “the AI.” It includes:"
          },
          {
            "type": "quote",
            "text": "model + model version + prompts + deterministic rails + workflow logic + APIs + clinical data + escalation thresholds + vendor systems"
          },
          {
            "type": "subheading",
            "text": "What the Agreement Allows to Change",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The agreement allows deterministic-rail updates and prompt or template revisions informed by internal quality review. Formal amendments to the approved proposal require written approval from the parties."
          },
          {
            "type": "subheading",
            "text": "What the Agreement Does Not Answer",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The public record does not clearly establish:"
          },
          {
            "type": "list",
            "items": [
              "Whether replacing the underlying model counts as an amendment.",
              "Whether every replacement model must repeat Phase A.",
              "Who decides that two models are sufficiently equivalent.",
              "How silent updates by a model vendor are identified.",
              "How model-specific errors are separated from prompt, workflow, or data errors.",
              "Whether Utah receives notice before or after a material system change."
            ]
          },
          {
            "type": "paragraph",
            "text": "If the model changes while the named workflow remains the same, the regulated label may remain stable while the behavior beneath it changes."
          }
        ]
      },
      {
        "id": "the-concordance-percentage-does-not-measure-every-disagreement-equally",
        "label": "The Concordance Percentage Does Not Measure Every Disagreement Equally",
        "blocks": [
          {
            "type": "subheading",
            "text": "Legion Uses a Safety-Weighted Calculation"
          },
          {
            "type": "paragraph",
            "text": "The agreement classifies clinician comparisons as follows:"
          },
          {
            "type": "matrix-table",
            "headers": [
              "AI decision",
              "Clinician decision",
              "Classification",
              "Effect on advancement target"
            ],
            "rows": [
              [
                {
                  "text": "Refill"
                },
                {
                  "text": "Refill"
                },
                {
                  "text": "Concordant"
                },
                {
                  "text": "Included as agreement"
                }
              ],
              [
                {
                  "text": "Refill"
                },
                {
                  "text": "Escalate"
                },
                {
                  "text": "Discordant"
                },
                {
                  "text": "Counts against the target"
                }
              ],
              [
                {
                  "text": "Escalate"
                },
                {
                  "text": "Escalate"
                },
                {
                  "text": "Concordant"
                },
                {
                  "text": "Included as agreement"
                }
              ],
              [
                {
                  "text": "Escalate"
                },
                {
                  "text": "Refill"
                },
                {
                  "text": "Discordant"
                },
                {
                  "text": "Does not count against the target"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Excluding unnecessary escalations from the advancement penalty creates a conservative safety preference. That is a defensible design choice."
          },
          {
            "type": "paragraph",
            "text": "It also means that “98% concordance” or “99% concordance” is not ordinary agreement accuracy. One category of disagreement is omitted from the performance threshold."
          },
          {
            "type": "subheading",
            "text": "The Headline Percentage Cannot Stand Alone"
          },
          {
            "type": "subheading",
            "text": "Questions the Percentage Cannot Answer",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "A decision-maker needs the full matrix:"
          },
          {
            "type": "list",
            "items": [
              "How often did the AI renew when the clinician would have escalated?",
              "How often did the AI escalate when the clinician would have renewed?",
              "Which disagreements counted against advancement?",
              "Were clinicians reviewing independently, or did they see the AI’s decision and rationale first?",
              "Did the same disagreement pattern concentrate around a medication, symptom, model, or prompt version?"
            ]
          },
          {
            "type": "paragraph",
            "text": "The percentage describes a scoring rule. It does not by itself establish that the AI and clinicians agreed in 98% or 99% of all reviewed cases."
          }
        ]
      },
      {
        "id": "responsibility-is-split-across-the-clinic-the-platform-and-the-state",
        "label": "Responsibility Is Split Across the Clinic, the Platform, and the State",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Agreement Combines Entities That the Terms Separate"
          },
          {
            "type": "paragraph",
            "text": "Legion’s Terms of Service distinguish between two organizations:"
          },
          {
            "type": "matrix-table",
            "headers": [
              "Entity",
              "Publicly described role"
            ],
            "rows": [
              [
                {
                  "text": "Legion Health Inc."
                },
                {
                  "text": "Operates the platform and provides administrative and management services. It says it does not provide medical care or control clinical judgment."
                }
              ],
              [
                {
                  "text": "Legion Health PA"
                },
                {
                  "text": "Provides medical services through licensed clinicians."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The Utah agreement takes a stronger approach by naming Legion Health Inc. and Legion Health PA jointly as the “Participant.” Both are therefore parties to the state agreement. Jonathan Kole, M.D., signed for Legion Health PA, and Yash Patel signed for Legion Health Inc."
          },
          {
            "type": "paragraph",
            "text": "That prevents the pilot from being presented to Utah as the responsibility of only one side of the corporate structure. It still does not establish which entity performed each act after a specific failure."
          },
          {
            "type": "subheading",
            "text": "The Current Public Terms Describe a Different Prescription Sequence"
          },
          {
            "type": "paragraph",
            "text": "Legion’s Terms of Service, last updated in October 2025, say a prescription requires a provider consultation, a provider determination that the medication is appropriate, and a prescription written by that provider. The Utah agreement signed in March 2026 allows an AI-authorized renewal under a named prescriber who may not interact with the patient."
          },
          {
            "type": "rich-paragraph",
            "segments": [
              {
                "text": "The terms predate the pilot and may be revised before patients participate. As currently published, however, they do not explain the individual authority Utah has authorized the AI to exercise. "
              },
              {
                "linkLabel": "Legion Health Terms of Service",
                "href": "https://legionhealth.com/terms-of-service/"
              }
            ]
          },
          {
            "type": "subheading",
            "text": "Utah Remains in the Responsibility Chain"
          },
          {
            "type": "paragraph",
            "text": "Utah granted regulatory relief that makes the automated renewal structure possible. The agreement says Utah does not endorse Legion, requires Legion to protect the state from claims, and preserves legally available remedies for patients and third parties."
          },
          {
            "type": "paragraph",
            "text": "Those provisions allocate legal and financial positions after harm. They do not erase Utah’s authorizing act."
          },
          {
            "type": "paragraph",
            "text": "Utah decided that a physician could supply professional authority through an approved AI protocol without reviewing every prescription. Responsibility Reconstruction must retain that decision in the record."
          }
        ]
      },
      {
        "id": "legion-creates-evidence-and-plans-to-purge-some-of-it",
        "label": "Legion Creates Evidence—and Plans to Purge Some of It",
        "blocks": [
          {
            "type": "subheading",
            "text": "The Refill Packet Creates Traceability"
          },
          {
            "type": "paragraph",
            "text": "Every AI decision is supposed to produce a structured refill packet containing:"
          },
          {
            "type": "list",
            "items": [
              "Patient inputs.",
              "Rule checks.",
              "Safety flags.",
              "A decision rationale."
            ]
          },
          {
            "type": "paragraph",
            "text": "Legion must report volumes, dispositions, escalation reasons, clinician agreement, complaints, adverse outcomes, safety signals, and selected case excerpts to Utah. This is a stronger evidence design than a system that produces only a final prescription."
          },
          {
            "type": "paragraph",
            "text": "The packet may help establish what the system recorded and why it reported making the decision."
          },
          {
            "type": "paragraph",
            "text": "It is not necessarily the complete evidence needed to reconstruct the decision."
          },
          {
            "type": "subheading",
            "text": "The Audit Record Has an Expiration Problem"
          },
          {
            "type": "subheading",
            "text": "What Legion Plans to Preserve",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "The proposal says clinical records will follow Legion’s standard medical-record retention policy. Pilot-specific audit artifacts will be retained through the pilot and Utah’s closeout, then moved to reduced retention and purged."
          },
          {
            "type": "paragraph",
            "text": "The agreement does not state a precise public retention period for those audit artifacts."
          },
          {
            "type": "subheading",
            "text": "What Utah Receives",
            "level": 4
          },
          {
            "type": "paragraph",
            "text": "Utah’s monthly reports are treated as protected records. The state ordinarily receives de-identified data and redacted excerpts rather than complete chat logs. Legion therefore remains central to holding, selecting, explaining, and preserving much of the evidence."
          },
          {
            "type": "matrix-table",
            "headers": [
              "Evidence the agreement creates",
              "What remains uncertain after harm"
            ],
            "rows": [
              [
                {
                  "text": "Structured refill packet"
                },
                {
                  "text": "Whether it preserves the original inputs or only the system’s processed account of them"
                }
              ],
              [
                {
                  "text": "Model decision and rationale"
                },
                {
                  "text": "Whether the exact model and version can be identified later"
                }
              ],
              [
                {
                  "text": "Safety flags and rule checks"
                },
                {
                  "text": "Whether missed signals can be reconstructed from the complete interaction"
                }
              ],
              [
                {
                  "text": "Clinician comparison"
                },
                {
                  "text": "Whether the clinician formed an independent judgment"
                }
              ],
              [
                {
                  "text": "Monthly state report"
                },
                {
                  "text": "Whether Utah received full records or selected excerpts"
                }
              ],
              [
                {
                  "text": "Pilot audit artifacts"
                },
                {
                  "text": "Whether they still exist when a later injury or pattern becomes visible"
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Traceability exists only as long as the necessary record survives."
          }
        ]
      },
      {
        "id": "what-the-public-record-establishes-and-what-remains-unresolved",
        "label": "What the Public Record Establishes—and What Remains Unresolved",
        "blocks": [
          {
            "type": "matrix-table",
            "headers": [
              "What the public record establishes",
              "What remains unresolved"
            ],
            "rows": [
              [
                {
                  "text": "Utah authorized Legion’s AI to determine eligibility and complete qualifying psychiatric renewals."
                },
                {
                  "text": "Which individual approved the AI’s decision thresholds and determined they were sufficient."
                }
              ],
              [
                {
                  "text": "A named prescriber may supply authority without reviewing the patient’s individual case."
                },
                {
                  "text": "What the named physician knew, reviewed, or could have stopped."
                }
              ],
              [
                {
                  "text": "Human review declines from pre-issuance review to retrospective review and sampling."
                },
                {
                  "text": "Who authorized each transition and what complete evidence supported it."
                }
              ],
              [
                {
                  "text": "Safety flags determine whether the patient reaches a clinician."
                },
                {
                  "text": "The system’s false-negative rate for suicidality, mania, pregnancy changes, adverse effects, and other risks."
                }
              ],
              [
                {
                  "text": "Legion’s broader architecture uses frontier models, prompts, workflows, APIs, and vendor systems."
                },
                {
                  "text": "Which model and version power the Utah workflow and how substitutions or vendor updates are governed."
                }
              ],
              [
                {
                  "text": "The concordance calculation excludes one category of disagreement from the advancement penalty."
                },
                {
                  "text": "Whether decision-makers receive the full matrix rather than only the headline percentage."
                }
              ],
              [
                {
                  "text": "Legion Health Inc. and Legion Health PA are jointly bound by the agreement."
                },
                {
                  "text": "Which entity designed, operated, monitored, changed, and preserved each component."
                }
              ],
              [
                {
                  "text": "Every AI decision generates a refill packet."
                },
                {
                  "text": "Whether the surviving packet and underlying records are sufficient for an independent reconstruction."
                }
              ],
              [
                {
                  "text": "Utah receives monthly reports and may request further information."
                },
                {
                  "text": "What evidence Utah possesses independently of Legion’s reporting and classification."
                }
              ],
              [
                {
                  "text": "Legally available patient remedies remain intact."
                },
                {
                  "text": "Whether an injured patient can obtain the technical and institutional evidence needed to prove the responsibility chain."
                }
              ],
              [
                {
                  "text": "Pilot audit artifacts are eventually moved to reduced retention and purged."
                },
                {
                  "text": "Who determines when responsibility evidence is no longer worth preserving."
                }
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "These are the questions that matter after a patient is harmed. “AI error,” “prompt failure,” “physician oversight,” or “missed escalation” would describe possible mechanisms. None would establish the responsibility chain."
          }
        ]
      },
      {
        "id": "responsibility-reconstruction-finding",
        "label": "Responsibility Reconstruction Finding",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Legion designed a clinic around progressively transferring software-mediated work from humans to LLMs."
          },
          {
            "type": "paragraph",
            "text": "Utah authorized the AI to determine whether a psychiatric medication renewal can proceed and whether the patient’s circumstances require clinician involvement."
          },
          {
            "type": "paragraph",
            "text": "A physician’s name remains attached to the prescription. That name does not establish that the physician reviewed or adopted the individual decision."
          },
          {
            "type": "paragraph",
            "text": "The safety process contains deterministic rules, but those rules depend on the system first recognizing the condition that should activate them."
          },
          {
            "type": "paragraph",
            "text": "The performance thresholds use a concordance calculation that does not count every disagreement equally."
          },
          {
            "type": "paragraph",
            "text": "The broader Legion architecture can use models from multiple outside providers, while the public agreement does not identify the model and version governing the refill workflow."
          },
          {
            "type": "paragraph",
            "text": "Legion creates a structured operating record, but some pilot-specific evidence is scheduled for reduced retention and eventual deletion."
          },
          {
            "type": "paragraph",
            "text": "Utah’s pilot therefore preserves a familiar human name on the prescription while permitting the clinical act beneath that name to be performed by a changing AI system."
          },
          {
            "type": "quote",
            "text": "If a patient is harmed, the presence of a physician’s name will make the prescription attributable. It will not prove that a physician made the decision. Responsibility Reconstruction must determine who designed the decision, who authorized the system, who validated its controls, who could have intervened, whether anyone did, and what evidence survives to prove each connection."
          },
          {
            "type": "paragraph",
            "text": "Naming the error is not owning responsibility."
          }
        ]
      }
    ]
  }
];

export const getCaseStudySections = (study: CaseStudy) => study.sections;
