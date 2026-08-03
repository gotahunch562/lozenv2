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
dateModified: 2026-08-02
lead: When AI-mediated conduct becomes consequential, responsibility must be
  reconstructed from the surviving record connecting specific actors to specific
  governance acts.
featured: true
draft: false
---
Something is missing from the algorithmic accountability landscape, and the gap becomes visible only after real harm has occurred.

Incident databases classify what went wrong. Governance frameworks prescribe the controls that should have existed. Attestation products certify, in advance, that a governance structure is in place. All of that work is necessary. None of it provides the answer that a board, a CFO, a court, or an insurer needs after an AI system has done something adverse: *[who was responsible — and can the surviving record prove it?](/blog/algorithmic-accountability-kiro-mandate/)*

Answering that question requires a discipline, and the discipline begins with a definition:

> **Evidence-Based Responsibility Reconstruction for AI-Mediated Conduct** is the disciplined process of determining what an AI system did, what authority it was given, which human and institutional actors controlled the conditions under which it acted, what evidence remains, and where responsibility can be established, divided, or no longer recovered.

Responsibility reconstruction sits within the broader [discipline of algorithmic accountability](/blog/algorithmic-accountability-enterprise-ai-governance/), the institutional obligation to answer for AI-mediated conduct. Responsibility reconstruction does not treat an AI system as a legal or institutional decision-maker, and it does not determine liability. Instead, it reconstructs the evidentiary connections among system conduct, delegated authority, human and institutional governance acts, and the surviving record. Evidence-Based Responsibility Reconstruction is not model evaluation, AI forensics, red teaming, observability, or technical incident response. It is the evidence-based reconstruction of human and [institutional responsibility surrounding AI-mediated conduct.](/blog/algorithmic-accountability-anthropic-reconstruction/) **The method does not replace accountability; it establishes the factual foundation accountability requires.**

This article establishes the category, the method it requires, and the standard against which every claim of AI accountability, including those sold as products—should be measured.

## Why This Category Must Exist Now

Three shifts have converged to make responsibility reconstruction a discipline rather than an afterthought.

**[First, AI systems now perform consequential conduct directly.](https://commerce.utah.gov/ai/regulatory-relief/authorized-ai-pilots/doctronic/)** Earlier AI harms commonly involved human conduct informed by an algorithm. Increasingly, AI systems select means, use tools, move through infrastructure, and execute actions without a separate human approval at each step. The objective may have been authorized while the method, target, or resulting conduct was not. When the system executes directly, responsibility cannot be read from an org chart. It must be reconstructed from the objective assigned, the authority delegated, the permissions granted, the operating conditions established, the controls validated, the monitoring performed, and the intervention that did or did not occur.

**Second, reproducibility has collapsed.** Classical digital forensics depends heavily on stable artifacts, preservable system states, repeatable analysis, and evidence whose integrity can be established through hashing and chain of custody. LLM-mediated conduct disrupts those conditions. Outputs are sampled rather than deterministically computed. Model checkpoints are updated, deprecated, and retired. System prompts and safety layers change server-side. Agentic conduct depends on tool environments, permissions, external systems, and context states that were never captured. Even with the complete prompt, the system state and operating environment that produced the conduct may no longer exist. For an expanding class of consequential AI conduct, the traditional bit-stream image cannot preserve the whole event because the event was distributed across model state, infrastructure, tools, and institutional decisions.

**Third, the legal system is arriving at the same problem from the other side — and has demonstrated how hard the problem is.** In 2025, the [U.S. Judicial Conference's Advisory Committee on Evidence Rules](https://www.uscourts.gov/sites/default/files/document/advisory_committee_on_evidence_rules_may_2026.pdf) proposed Federal Rule of Evidence 707, which would subject machine-generated evidence offered without an expert witness to the reliability standards Rule 702 applies to human expert testimony — a companion effort to a working draft amending Rule 901's authentication requirements for suspected deepfakes. The committee drafted the rule precisely because the traditional guarantors of reliability — a chain of custody and a human witness who can explain the evidence's origin — are often absent for machine output. The rule was published for public comment in August 2025. When the comment period closed in February 2026, it had drawn fifty-nine written comments: three in unqualified support, twenty-seven supporting only with revisions, and twenty-seven opposed. In May 2026, the Advisory Committee declined to recommend action on the rule, substantially revised the draft, and deferred it for further study and expert vetting at its Fall 2026 meeting, reporting that decision to the Standing Committee in June. **The first federal attempt to write evidence rules for AI output went out for comment and came back unadopted.**

The committee's own deliberations draw a boundary that matters even more. Rule 707, in any future form, governs machine output offered as *proof*. Where the machine's conduct is the *subject* of the case — the incident itself — the committee has indicated that ordinary evidentiary principles apply, and no new rule is contemplated.

The question of how responsibility for an AI system's actions is reconstructed from the surviving record has now been examined by the formal rule-making process twice over: once implicitly, when the rule's scope was drawn around it, and once practically, when even the narrower witness-side rule proved too contested to adopt.

## Where Responsibility Reconstruction Fits

Evidence-Based Responsibility Reconstruction draws on records produced by AI governance, assurance, incident response, regulation, litigation, and investigation. Each of those fields contributes part of the evidentiary record, but each is organized around a different primary purpose.

1. Prospective governance frameworks define the controls, roles, documentation, and oversight that organizations should establish before consequential conduct occurs.
2. Governance attestation and assurance products document whether an authority structure, approval process, or control environment was in place.
3. Incident databases and risk repositories identify patterns across reported harms.
4. Regulatory investigations, litigation records, digital forensics, and root-cause analyses examine particular events from their own legal, technical, or supervisory perspectives.

Responsibility reconstruction uses those materials but asks a narrower question:

> **Can the evidence that actually survived connect specific actors to the governance acts surrounding the conduct?**

Technical classifications such as configuration error, harness failure, model failure, user error, and operational failure identify a mechanism or condition associated with an incident. They are not governance findings. A governance finding requires an inquiry into the rules, oversight, authority, and decision controls surrounding the conduct. Neither classification establishes which actors authorized, designed, configured, validated, monitored, intervened in, or permitted the conditions under which the conduct occurred.

The distinction is demonstrated in [Anthropic's Claude cybersecurity evaluations](/blog/algorithmic-accountability-anthropic-reconstruction/), where they identified an open internet path to explain how the models reached outside organizations, but did not establish responsibility for the governance acts behind the failed boundary.

Answering the responsibility question requires more than confirming that controls were prescribed, an agent was authenticated, an incident occurred, or a technical cause was identified. It requires reconstructing what the system did, what authority had been delegated, which human and institutional actors controlled the relevant conditions, and how strong the evidentiary connection is between each actor and each governance act.

An oversight framework, logging mandate, or evidence passport may be designed to make future accountability possible. Responsibility reconstruction tests whether the resulting record is actually sufficient to support it.

The existence of a log does not establish that monitoring occurred. Logging preserves a record. Monitoring requires that the record be examined, interpreted, and surfaced to an actor with authority to intervene while intervention remains possible. Responsibility reconstruction tests both what was preserved and whether the institution used it.

**Responsibility reconstruction is therefore a distinct evidentiary method applied across records produced by governance, assurance, incident response, regulation, litigation, and investigation.**

## What Qualifies as Responsibility Reconstruction

A category is only useful if it has boundaries. Work qualifies as Evidence-Based Responsibility Reconstruction only if it meets three criteria:

1. **It works from a frozen surviving record.** Reconstruction fixes the available evidence at a stated date, then evaluates the records that actually exist — regulatory findings, litigation records, disclosures, journalism, technical artifacts, and other preserved evidence — under an explicit source hierarchy. Later-emerging facts are logged but do not silently alter the coded reconstruction. Evidence that should exist, but does not survive or has not been released, is coded as missing. Analysis built on records that a framework merely requires to exist is prescription, not reconstruction.
2. **It allocates responsibility actor-by-governance-act.** Reconstruction never asks, “Who is the accountable party?” It asks which actor can be connected, on the evidence, to each specific governance act: authorization, design, deployment, configuration, control validation, monitoring, intervention, escalation, reporting, remediation, risk acceptance, or a determination that existing controls were sufficient for the activity to proceed. Responsibility is not one field. Forcing an incident to produce a single responsible name is how accountability theater replaces accountability.
3. **It terminates in an evidence-state classification.** Every reconstruction must end with an explicit statement of evidentiary quality — what the record proves, what it can only support, and what is unrecoverable. A reconstruction that ends in a narrative rather than an evidence state has concluded more than its record permits.

Work that meets all three criteria is responsibility reconstruction, whoever performs it. Work that meets none of them is something else.

## The Responsibility Reconstruction Lexicon

These are the working terms of  Responsibility Reconstruction defined for use:

**Governance act.** A discrete act through which responsibility attaches: authorization, design, deployment, configuration, control validation, monitoring, intervention, escalation, reporting, remediation, risk acceptance, or a determination that existing controls were sufficient for the activity to proceed. A governance act may be performed individually, collectively, institutionally, through an automated process, or through a hybrid arrangement. Reconstruction connects actors to acts, not actors to outcomes, and does not force a named individual where the surviving record supports only a role, committee, institution, vendor, automated process, or shared actor structure.

**Adoption point.** The moment at which AI-generated, recommended, ranked, or selected material acquired human professional authority, institutional effect, or operational force — a signature, a filing, an approval, or an operational use. Some conduct has no adoption point: the system executed directly. Whether an adoption point exists is itself a finding.

**Intervention authority.** The formal and practical capacity to pause, reject, override, escalate, or stop AI-mediated conduct. A named owner does not establish intervention authority. Reconstruction tests whether the actor had the standing, information, time, access, and institutional permission required to intervene, whether that authority was exercised, and what the surviving record shows happened afterward.

**The Lozen Evidence-State Scale℠.** The terminal classification of every reconstruction, in four states, first introduced in *Algorithmic Accountability Needs a Room of Its Own* (July 2026):

- **Reproducible** — the conduct can be re-derived from released artifacts.
- **Traceable** — a documented chain exists without complete released artifacts.
- **Attributable only** — actors can be linked to the incident without a reconstructed conduct chain.
- **Unrecoverable** — neither the conduct nor the linkage can be established from the surviving record.

**Record freeze.** The dated point at which a live evidentiary record is fixed for coding, with later-emerging facts logged but not coded, so that a reconstruction remains internally consistent and its own boundaries are documented.

**Source-weighting rule.** Higher-tier sources receive greater weight, but no source automatically controls outside the factual or legal issue it was authorized and equipped to determine. A judicial finding controls the facts the court adjudicated. Conflicts between sources are recorded and resolved explicitly — never silently.

A named owner without usable intervention authority is available for attribution after failure, not established as accountable before it.

## The Claim: Traceable Is the Ceiling

A definition organizes. A thesis can be tested. Here is ours:

> **For LLM-mediated conduct, Traceable is the evidentiary ceiling. No incident to date — however thoroughly documented — codes Reproducible.**

Consider what that claim means. The best-documented AI incidents in existence — incidents with preserved interaction excerpts, sworn affidavits, live testimony, and detailed judicial findings — still cannot be replayed because the model states that produced the conduct no longer exist. If the richest records in the public domain reach only Traceable, then every governance regime, insurance model, and litigation strategy that quietly assumes replayability is built on an evidence state that the technology does not produce.

The claim is falsifiable. Producing a single incident of consequential LLM-mediated conduct that codes Reproducible — where the conduct is actually re-derivable from released artifacts, not merely well documented — would break the ceiling. We invite the attempt. Until it succeeds, the ceiling stands, and its implications belong in every conversation about AI oversight, logging mandates, and evidence products: the question is not whether an organization can prove its AI conduct in the classical sense. It is how close to the ceiling the records can reach, and whether anyone has tested them.

## The Demonstration: Mata v. Avianca

A method is proven by application, and the first application should be the hardest available test of the ceiling. *[Mata v. Avianca, Inc.](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/)*, the 2023 fabricated-citation sanctions matter, offers the richest public record of any LLM-mediated incident: preserved prompt excerpts entered into the court record, sworn affidavits, testimony, and a detailed sanctions opinion adjudicating the lawyers' conduct.

Lozen Advisory is coding Mata in full under the responsibility reconstruction protocol as the sponsor worked example for its university research collaboration. **The application is in progress.** The complete reconstruction — chronology, actor-and-governance-act allocation, and the evidence-state determination, with particular attention to the Reproducible/Traceable boundary — will be published here as the worked example, and this page will be updated as the version of record.

If the fullest record in the public domain codes Traceable, the ceiling holds — demonstrated, not asserted.

## What Responsibility Reconstruction Is Not

The boundaries of a category include what it excludes.

1. Reconstruction is **not a liability determination.** It assesses what the record can prove about governance acts. It renders no legal conclusions, assigns no fault, and substitutes for no court.
2. It is **not an incident database.** It goes deep on single incidents rather than wide across many, and its output is an evidentiary assessment, not an incident classification.
3. It is **not an audit certificate or an evidence passport.** Attestation documents or certifies that a governance frame existed. Reconstruction tests what the frame left behind.
4. It is **not a substitute for prospective instrumentation.** Organizations should adopt logging, oversight, and attestation. Reconstruction is how they will know whether those measures were sufficient.
5. It is **not a competing theory of accountability.** It is the evidentiary step that makes an accountability determination supportable.

## Use, Attribution, and Version of Record

This definition and taxonomy are made available under the Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0) to encourage open academic, legal, and regulatory citation.

The Responsibility Reconstruction coding instrument, and the Lozen Evidence-State Scale℠ are proprietary methods of Lozen Advisory LLC, available through advisory engagement and licensed research collaboration.

This page is the version of record. Subsequent versions will be dated and change-logged here.

**Version history:** v1.0 — July 2026 — initial definition published; Mata v. Avianca application in progress. v1.1 — July 2026 — added control validation, control-sufficiency determination, intervention authority, the mandatory record freeze, and the distinction between logging and monitoring; Mata v. Avianca application remains in progress. v1.2 will add the completed worked example and its evidence-state determination.

**Cite as:** Kamaria, A., “Evidence-Based Responsibility Reconstruction for AI-Mediated Conduct: A Definition,” Lozen Advisory, v1.1, July 2026, [lozenadvisory.com/blog/evidence-based-responsibility-reconstruction](https://www.lozenadvisory.com/blog/evidence-based-responsibility-reconstruction/).

## Sources

- Proposed Federal Rule of Evidence 707, Preliminary Draft of Proposed Amendments (Aug. 2025), Advisory Committee on Evidence Rules, U.S. Judicial Conference (published for public comment Aug. 15, 2025–Feb. 16, 2026).
- Advisory Committee on Evidence Rules, Hearing on Proposed Amendments to Rule 609 and New Rule 707: Hearing Schedule & Testimony Packet (Jan. 15, 2026), uscourts.gov/sites/default/files/document/jan-15-hearing-schedule-and-testimony-packet-final.pdf.
- Advisory Committee on Evidence Rules, Agenda Book (May 2026), uscourts.gov/sites/default/files/document/2026-05evidencerulesagendabook.pdf.
- Report of the Advisory Committee on Evidence Rules to the Standing Committee on Rules of Practice and Procedure (May 17, 2026), with draft minutes of the Committee's May 7, 2026 meeting; considered by the Standing Committee June 3–4, 2026, [https://www.uscourts.gov/sites/default/files/document/advisorycommitteeonevidencerulesmay2026.pdf](https://www.uscourts.gov/sites/default/files/document/advisorycommitteeonevidencerulesmay2026.pdf).
- *Matter of Weber*, 220 N.Y.S.3d 620 (N.Y. Sur. 2024).

## Working With Lozen Advisory

Lozen Advisory [advises boards, CFOs, and general counsel on AI accountability](/services/board-ai-algorithmic-accountability/) — including responsibility-reconstruction readiness: whether, if your AI conduct became the incident, your surviving record could connect your actors to their governance acts.