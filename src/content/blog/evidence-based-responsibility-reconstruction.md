---
title: "Evidence-Based Responsibility Reconstruction for AI-Mediated Conduct: A
  Definition"
seoTitle: "AI Responsibility Reconstruction: A Definitional Framework"
slug: evidence-based-responsibility-reconstruction
description: Evidence-Based Responsibility Reconstruction is Lozen Advisory's
  retrospective method for testing whether the surviving record of an AI
  incident can connect specific actors to specific governance acts.
metaDescription: When an AI system causes harm, who is responsible? A method for
  reconstructing authority, oversight, and intervention from the evidence that
  survives.
category: AI Governance & Workforce Risk
image: /blog/Algorithmic accountability-evidence-reconstruction.avif
imageAlt: Evidence-based responsibility reconstruction for AI-mediated conduct
pubDate: 2026-07-29
dateModified: 2026-07-29
lead: When AI-mediated conduct becomes consequential, responsibility must be
  reconstructed from the surviving record connecting specific actors to specific
  governance acts.
featured: false
draft: true
---
Something is missing from the AI algorithmic accountability landscape, and the gap becomes visible only after real harm has occurred.

Incident databases classify what went wrong. Governance frameworks prescribe the controls that should have existed. Attestation products certify, in advance, that a governance structure is in place. All of that work is necessary. None of it provides answers that a board, a CFO, a court, or an insurer need to know after an AI system has done something adverse: *[who was responsible — and can the surviving record prove it?](/blog/algorithmic-accountability-kiro-mandate/)*

Answering that question requires a discipline, and the discipline begins with a definition:

> **Responsibility reconstruction is the retrospective test of whether the surviving record of an AI incident can connect specific actors to specific governance acts.**

Responsibility reconstruction sits within the broader discipline of algorithmic accountability. [Algorithmic accountability](/blog/algorithmic-accountability-enterprise-ai-governance/) is the institutional obligation to answer for AI-mediated conduct. Responsibility reconstruction is the evidentiary method used to determine which actors can be connected to the governance acts surrounding that conduct. The method does not replace accountability; it establishes the factual foundation accountability requires.

That is the definition. This article establishes the category it names, the method it requires, and the standard against which every claim of AI accountability, including the ones sold as products, should be measured.

## Why This Category Must Exist Now

Three shifts have converged to make responsibility reconstruction a discipline rather than an afterthought.

**First, AI systems now behave as cognitive actors.** The consequential conduct in early harms caused by AI, was human conduct informed by an algorithm. Increasingly, the system itself selects and executes: agents that acquire tools, escape containment, move through infrastructure, and complete objectives no one approved. When the conduct is the machine's, responsibility cannot be read off an org chart. It has to be reconstructed from the objective assigned, the authority delegated, the permissions granted, the monitoring in place, and the intervention that did or did not occur.

**Second, reproducibility has collapsed.** Classical digital forensics rests on determinism: same inputs, same system, same output, so conduct can be replayed and replay is proof. Large language models break that assumption. Outputs are sampled, not computed. Model checkpoints are updated, deprecated, and retired. System prompts and safety layers change server-side without notice. Agentic conduct depends on tool environments and context states that were never captured. Even with the complete prompt in hand, the system state that produced the conduct frequently no longer exists anywhere. The gold standard of digital evidence, the **bit-stream image** paired with **cryptographic hashing** and a strict **chain of custody,**  is quietly becoming unavailable for an entire class of consequential conduct.

**Third, the legal system is arriving at the same problem from the other side — and has just demonstrated how hard the problem is.** In 2025, the [U.S. Judicial Conference's Advisory Committee on Evidence Rules](https://www.uscourts.gov/sites/default/files/document/advisory_committee_on_evidence_rules_may_2026.pdf) proposed Federal Rule of Evidence 707, which would subject machine-generated evidence offered without an expert witness to the reliability standards Rule 702 applies to human expert testimony — a companion effort to a working draft amending Rule 901's authentication requirements for suspected deepfakes. The committee drafted the rule precisely because the traditional guarantors of reliability — a chain of custody, a human witness who can explain the evidence's origin, are often absent for machine output. The rule was published for public comment in August 2025 When the comment period closed in February 2026, it had drawn fifty-nine written comments: three in unqualified support, twenty-seven supporting only with revisions, and twenty-seven opposed. In May 2026, the Advisory Committee declined to recommend action on the rule, substantially revised the draft, and deferred it for further study and expert vetting at its Fall 2026 meeting, reporting that decision to the Standing Committee in June. **The first federal attempt to write evidence rules for AI output went out for comment and came back unadopted.**

The committee's own deliberations draw a boundary that matters even more. Rule 707, in any future form, governs machine output offered as *proof*. Where the machine's conduct is the *subject* of the case, the incident itself, the committee has indicated that ordinary evidentiary principles apply, and no new rule is contemplated. 

The question of how responsibility for an AI system's actions is reconstructed from the surviving record has now been examined by the formal rule-making process twice over: once implicitly, when the rule's scope was drawn around it, and once practically, when even the narrower witness-side rule proved too contested to adopt. 

## The Map: Where Reconstruction Sits

The existing accountability landscape organizes cleanly along two axes. The first is temporal: does the work happen **before** or **after** the incident? The second is scope: is the work about **systems in general** or about **specific conduct and the responsibility for it**?


|  | About systems in general | About specific conduct and responsibility |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Before the incident** | Prescriptive oversight frameworks: EU AI Act Article 14, NIST AI RMF, ISO 42001 controls, oversight accords and their human-in-the-loop annexes | Governance attestation: AI evidence passports and assurance certificates that seal a system's authority structure and approvals for buyers and auditors |
| **After the incident** | Incident monitoring and classification: the OECD AI Incidents and Hazards Monitor, the AI Incident Database, harm taxonomies and risk repositories | **Evidence-Based Responsibility Reconstruction** |


Each occupied cell does real work, and this map is not a criticism of any of them. Prescriptive frameworks define what oversight should exist. Attestation products certify that a governance frame was in place — who held authority, who approved deployment — sealed and dated in advance. Incident monitors tell us, at population level, what is going wrong and how often.

**But look at what the three occupied cells share.** The prospective cells produce *hypotheses*: predictions that if these controls exist and these records are kept, responsibility will be answerable later. The occupied retrospective cell produces *classifications*: this incident was a privacy harm, that one was a physical harm. Nobody tests the hypotheses. Nobody takes a specific incident, gathers the record that actually survived, and determines whether that record can support allocating responsibility to the actors who held authority.

That fourth cell was empty. Responsibility reconstruction fills it — and in doing so, it becomes the audit function for everything in the other three. An oversight annex, a logging mandate, and an evidence passport are all claims that responsibility will be reconstructable. Reconstruction is the test of whether it is.

## What Qualifies as Responsibility Reconstruction

A category is only useful if it has boundaries. Work qualifies as Evidence-Based Responsibility Reconstruction only if it meets three criteria:

1. **It works from the surviving record.** Reconstruction takes the evidence that actually exists — regulatory findings, litigation records, disclosures, journalism — under an explicit source hierarchy, and codes what is missing as rigorously as what is present. Analysis built on records that should exist, or that a framework requires to exist, is prescription, not reconstruction.
2. **It allocates responsibility actor-by-governance-act.** Reconstruction never asks "who is the accountable party?" It asks which actor can be connected, on the evidence, to each specific governance act: authorization, design, deployment, configuration, monitoring, intervention, reporting, remediation, and risk acceptance. Responsibility is not one field. Forcing an incident to produce a single responsible name is how accountability theater replaces accountability.
3. **It terminates in an evidence-state classification.** Every reconstruction must end with an explicit statement of evidentiary quality — what the record proves, what it can only support, and what is unrecoverable. A reconstruction that ends in a narrative rather than an evidence state has concluded more than its record permits.

Work that meets all three criteria is responsibility reconstruction, whoever performs it. Work that meets none of them is something else.

## The Lexicon

These are the working terms of the Responsibility Reconstruction Protocol℠, defined for use:

**Governance act.** A discrete act through which responsibility attaches: authorization, design, deployment, configuration, monitoring, intervention, reporting, remediation, or risk acceptance. A governance act may be performed individually, collectively, institutionally, through an automated process, or through a hybrid arrangement. Reconstruction connects actors to acts, not actors to outcomes, and does not force a named individual where the surviving record supports only a role, committee, institution, vendor, automated process, or shared actor structure.

**Adoption point.** The moment at which AI-generated, recommended, ranked, or selected material acquired human professional authority, institutional effect, or operational force — a signature, a filing, an approval, an operational use. Some conduct has no adoption point: the system executed directly. Whether an adoption point exists is itself a finding.

**The Lozen Evidence-State Scale℠.** The terminal classification of every reconstruction, in four states, first introduced in Algorithmic Accountability Needs a Room of Its Own (July 2026):

- **Reproducible** — the conduct can be re-derived from released artifacts.  
- **Traceable** — a documented chain exists without complete released artifacts.  
- **Attributable only** — actors can be linked to the incident without a reconstructed conduct chain.  
- **Unrecoverable** — neither the conduct nor the linkage can be established from the surviving record.

**Record freeze.** The dated point at which a live evidentiary record is fixed for coding, with later-emerging facts logged but not coded, so that a reconstruction remains internally consistent and its own boundaries are documented.

**Source-weighting rule.** Higher-tier sources receive greater weight, but no source automatically controls outside the factual or legal issue it was authorized and equipped to determine. A judicial finding controls the facts the court adjudicated. Conflicts between sources are recorded and resolved explicitly — never silently.

## The Claim: Traceable Is the Ceiling

A definition organizes. A thesis can be tested. Here is ours:

> **For LLM-mediated conduct, Traceable is the evidentiary ceiling. No incident to date — however thoroughly documented — codes Reproducible.**

Consider what that claim means. The best-documented AI incidents in existence, incidents with preserved interaction excerpts, sworn affidavits, live testimony, and detailed judicial findings, still cannot be replayed, because the model states that produced the conduct no longer exist. If the richest records in the public domain reach only Traceable, then every governance regime, insurance model, and litigation strategy that quietly assumes replayability is built on an evidence state that the technology does not produce.

The claim is falsifiable. Producing a single incident of consequential LLM-mediated conduct that codes Reproducible — where the conduct is actually re-derivable from released artifacts, not merely well documented, would break the ceiling. We invite the attempt. Until it succeeds, the ceiling stands, and its implications belong in every conversation about AI oversight, logging mandates, and evidence products: the question is not whether an organization can prove its AI conduct in the classical sense. It is how close to the ceiling the records can reach, and whether anyone has tested them.

## The Demonstration: Mata v. Avianca

A method is proven by application, and the first application should be the hardest available test of the ceiling. *[Mata v. Avianca, Inc.](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/)*, the 2023 fabricated-citation sanctions matter, offers the richest public record of any LLM-mediated incident: preserved prompt excerpts entered into the court record, sworn affidavits, testimony, and a detailed sanctions opinion adjudicating the lawyers' conduct.

Lozen Advisory is coding Mata in full under the Responsibility Reconstruction Protocol℠ as the sponsor worked example for its university research collaboration. **The application is in progress.** The complete reconstruction — chronology, actor-and-governance-act allocation, and the evidence-state determination, with particular attention to the Reproducible/Traceable boundary — will be published here as the worked example, and this page will be updated as the version of record.

If the fullest record in the public domain codes Traceable, the ceiling holds, demonstrated, not asserted.

## What Responsibility Reconstruction Is Not

The boundaries of a category include what it excludes.

1. Reconstruction is **not a liability determination.** It assesses what the record can prove about governance acts. It renders no legal conclusions, assigns no fault, and substitutes for no court.
2. It is **not an incident database.** It goes deep on single incidents rather than wide across many, and its output is an evidentiary assessment, not a classification.
3. It is **not an audit certificate or an evidence passport.** Attestation certifies that a governance frame existed. Reconstruction tests what the frame left behind.
4. It is **not a substitute for prospective instrumentation.** Organizations should adopt logging, oversight, and attestation. Reconstruction is how they will know whether those measures were sufficient.
5. It is **not a competing theory of accountability**. It is the evidentiary step that makes an accountability determination supportable.

## Use, Attribution, and Version of Record

This definition and taxonomy are made available under the Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0) to encourage open academic, legal, and regulatory citation.

The Responsibility Reconstruction Protocol℠, its coding instrument, and the Lozen Evidence-State Scale℠ are proprietary methods of Lozen Advisory LLC, available through advisory engagement and licensed research collaboration.

This page is the version of record. Subsequent versions will be dated and change-logged here.

**Version history:** v1.0 — July 2026 — initial definition published; Mata v. Avianca application in progress. v1.1 will add the completed worked example and its evidence-state determination.

**Cite as:** Kamaria, A., "Evidence-Based Responsibility Reconstruction for AI-Mediated Conduct: A Definition," Lozen Advisory, v1.0, July 2026 lozenadvisory.com/blog/evidence-based-responsibility-reconstruction

## Sources

- Proposed Federal Rule of Evidence 707, Preliminary Draft of Proposed Amendments (Aug. 2025), Advisory Committee on Evidence Rules, U.S. Judicial Conference (published for public comment Aug. 15, 2025 – Feb. 16, 2026).  
- Advisory Committee on Evidence Rules, Hearing on Proposed Amendments to Rule 609 and New Rule 707: Hearing Schedule & Testimony Packet (Jan. 15, 2026), uscourts.gov/sites/default/files/document/jan-15-hearing-schedule-and-testimony-packet-final.pdf.  
- Advisory Committee on Evidence Rules, Agenda Book (May 2026), uscourts.gov/sites/default/files/document/2026-05evidencerulesagendabook.pdf.  
- Report of the Advisory Committee on Evidence Rules to the Standing Committee on Rules of Practice and Procedure (May 17, 2026), with draft minutes of the Committee's May 7, 2026 meeting; considered by the Standing Committee June 3–4, 2026 uscourts.gov/sites/default/files/document/advisorycommitteeonevidencerulesmay2026.pdf.  
- *Matter of Weber*, 220 N.Y.S.3d 620 (N.Y. Sur. 2024).

## Working With Lozen Advisory

Lozen Advisory [advises boards, CFOs, and general counsel on AI accountability](/services/board-ai-algorithmic-accountability/) — including responsibility-reconstruction readiness: whether, if your AI conduct became the incident, your surviving record could connect your actors to their governance acts. 

