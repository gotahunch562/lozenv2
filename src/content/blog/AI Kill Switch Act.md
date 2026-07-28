---
title: "How the Name Standard℠ Maps to the AI Kill Switch Act "
seoTitle: "How the Name Standard℠ Maps to the AI Kill Switch Act "
slug: ai-kill-switch-act-name-standard
description: A Lozen Advisory mapping of how the AI Kill Switch Act, the Agentic
  AI Risk-Management Standards Profile, and the Name Standard℠ expose gaps in
  shutdown authority, and board-facing AI governance evidence.
metaDescription: Discover how the Name Standard℠ maps to the AI Kill Switch Act
  and uncover gaps in human attribution, intervention authority, and board-level
  AI evidence.
category: Legislation & Policy
image: /blog/ai-kill-switch-lozen-advisory.avif
imageAlt: AI Kill Switch Act Maps to the Name Standard image
pubDate: 2026-07-28
dateModified: 2026-07-28
lead: The AI Kill Switch Act introduces technical control requirements, but
  possessing a shutdown mechanism doesn’t guarantee an organization can use it
  effectively. This analysis maps the bill alongside UC Berkeley's Agentic AI
  Risk-Management Profile to the Name Standard℠, exposing critical institutional
  gaps in human-attribution authority, escalation pathways, and board-facing
  evidence.
featured: false
draft: false
---
*AI Governance Evidence for Board Reporting — a Lozen Advisory legislative mapping series*

The AI Kill Switch Act moves AI governance from policy oversight to operational control. The bill would amend the Homeland Security Act of 2002 to require certain covered entities to maintain a technical capability to stop inference, terminate or suspend access, and shut down covered technology.

For Lozen Advisory, the significance is direct: the bill doesn't just ask whether AI risk can be documented. It asks [whether an AI system can be stopped.](/blog/algorithmic-accountability-agent-authorization/)

> **But possessing a shutdown mechanism doesn't mean an organization can use it effectively.**

The UC Berkeley Center for Long-Term Cybersecurity's *Agentic AI Risk-Management Standards Profile* supplies that operational context, calling for human control, clear roles, intervention points, escalation pathways, shutdown mechanisms, continuous monitoring, and documentation.

That places the bill inside the [Name Standard℠](/blog/the-name-standard-ai-governance/): Lozen Advisory's human-attribution framework for testing whether AI-assisted decisions, outputs, and delegated actions remain traceable to a responsible human or institutional actor.

A kill switch is not governance by itself, it is a control surface. The Name Standard℠ asks whether a named human has the authority, information, review capacity, documentation, time, and formal right of refusal required to use that control before harm scales.

## Why the AI Kill Switch Act Matters for Board-Facing AI Risk Teams

Board-facing teams are rarely asked only whether an AI policy exists. They're asked to produce evidence: what system was operating, what authority it held, what controls existed, who saw risk escalating, who could act, and whether the organization can reconstruct what happened under scrutiny.

[The AI Kill Switch Act](https://lieu.house.gov/media-center/press-releases/reps-lieu-and-moran-introduce-bill-require-kill-switch-ai-systems-can) pushes federal AI policy toward that evidence layer, focusing on the operational question many governance programs avoid: if a covered system behaves dangerously, can the organization slow, restrict, suspend, roll back, or shut it down?

[The Agentic AI Risk-Management Standards Profile](https://cltc.berkeley.edu/publication/agentic-ai-risk-profile/) raises the bar further. Agentic systems perform multi-step tasks, use tools, and operate with varying autonomy — traits that complicate model-centric risk management and make accountability harder to attribute.

The governance question, then, isn't just whether a technical control exists. It's whether the organization has built the human and institutional structure to use that control in time.

## The gap between shutdown capability and human control

The AI Kill Switch Act creates a technical control requirement. The Agentic AI Risk-Management Standards Profile shows the broader governance system required to make that control usable. The Name Standard℠ identifies the gap between the two: whether a responsible human has the authority, information, capacity, documentation, and protected mandate to intervene before loss of control becomes a government-managed event.

That gap surfaces whenever an organization can show a shutdown mechanism exists but can't answer:

- who owns the intervention decision, what evidence triggers action, 
- who can see the system's active state, 
- who can tell a recoverable anomaly from a loss-of-control event, or 
- who is protected for refusing continued deployment.

A company can possess the technical ability to stop a system and still lack meaningful human control over it.

## Mapping the Name Standard℠ to the AI Kill Switch Act and agentic AI standards


| Name Standard℠ condition | AI Kill Switch Act control | Agentic AI standards expectation | Institutional gap to test |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Time Allocation** | Covered entities must maintain shutdown capability and report covered incidents within 15 days. | Continuous monitoring and post-deployment oversight must account for behavior that may evolve across contexts. | Is anyone continuously assigned to evaluate whether intervention thresholds have been crossed before an incident becomes reportable? |
| **Authority** | Covered entities must be able to stop inference, terminate access, suspend access, and shut down covered technology. | Human control requires clear role definitions, intervention points, escalation pathways, and shutdown mechanisms. | Which named role can invoke each control without waiting for an improvised chain of approval? |
| **Information Access** | Graduated controls can affect inference rate, user access, compute allocation, system capabilities, suspension, shutdown, and backup systems. | Risk assessment must account for autonomy, authority, tool access, permissions, environment, and interaction effects. | Can the decision-maker see enough of the operating system to select the correct intervention? |
| **Review Capacity** | Responses are calibrated to the severity and immediacy of credible risk. | Controls should scale with degrees of agency and the system's capabilities, configuration, and deployment context. | Who has the subject-matter competence to distinguish a recoverable anomaly from a loss-of-control event? |
| **Documentation Infrastructure** | Emergency orders require preservation of model weights and telemetry, confirmation, audit, inspection, or forensic review. | System boundaries, limitations, monitoring, risk decisions, override, incident response, recovery, and decommissioning must be documented. | Can the organization reconstruct not only what happened and what control was used, but why that intervention was selected? |
| **Formal Right of Refusal** | The entity must be technically capable of restricting, suspending, or shutting down the technology. | Responsibilities must be assigned and understood for superseding, disengaging, deactivating, overriding, or decommissioning systems. | Does a named internal actor have protected standing authority to stop deployment or continued operation? |


## The Control Surface: Graduated Response under the AI Kill Switch Act

The bill requires covered entities to maintain the technical capability to stop inference, terminate or suspend access, and shut down covered technology. It also directs the Secretary to consider a graduated deployment-corrections framework — throttling inference, altering user access, changing compute allocation, disabling a capability, suspending, shutting down, or transitioning to a backup system or earlier version.

That structure matters because AI intervention isn't binary. The question isn't only whether a system can be turned off — it's whether the organization has usable intermediate controls before full shutdown becomes necessary.

The Agentic AI Risk-Management Standards Profile treats human control as a system-level requirement, not a single technical feature. A graduated framework only works if someone has authority to choose the control, evidence to justify it, and a documented process for acting before the situation becomes an emergency.

## Gap 1: Control Ownership and Standing Intervention Authority

**The bill requires shutdown capability but doesn't identify who owns the intervention decision.** [Responsibility may be split across engineering, security, legal, compliance, and leadership](/blog/algorithmic-accountability-enterprise-ai-governance/) — each function touching the control environment while none holds standing authority to use it. That gap widens with speed: agentic systems can execute rapidly and cascade across tools, so a monitoring team may spot a problem but lack authority to restrict the system, or an engineer may have technical access but no organizational standing to halt a commercially important deployment.

The Name Standard℠ asks: which named role can stop inference, restrict a capability, suspend access, initiate rollback, or order full shutdown — and does that person have telemetry access, review capacity, an escalation path, and protection against retaliation for slowing the system? Without answers, the kill switch may exist technically while remaining institutionally unavailable.

## Gap 2: Operational Thresholds for Agentic AI Interventions

The bill and the standards profile both call for graduated, risk-calibrated responses. Neither implements itself. Organizations still need documented thresholds for when to monitor, warn, throttle, restrict, suspend, roll back, or shut down — a vague instruction to intervene when a system becomes "unsafe" is not an operational threshold.

The Name Standard℠ asks who determines that the threshold was crossed, what information that required, and what record proves the decision was reasonable at the time.

## Gap 3: attribution across an agentic system

Agentic systems make attribution harder. A shutdown event may implicate the model, the orchestration layer, tool permissions, memory, external APIs, system prompts, or another agent — so a model-centric incident record can be incomplete.

The Name Standard℠ asks whether the organization can connect the system's action to the humans and decisions that created its operating conditions. The relevant question isn't "what did the model do," but who authorized it to act under those conditions, who could see the resulting risk, and who had authority to interrupt it.

## Gap 4: override resilience and rollback authority

The bill treats sabotage of a lawful shutdown instruction, concealment from monitoring, and loss-of-control scenarios as covered incidents, and its graduated framework includes transitioning to a backup system or earlier version. The standards profile addresses the same risk class: oversight subversion and behavior that outruns response.

A shutdown mechanism must stay usable even if the system resists the control, telemetry becomes incomplete, or business operations can't immediately tolerate full shutdown — and rolling back to an earlier version is a governance decision, not just a technical one, since it can carry different limitations and interrupt critical operations.

The Name Standard℠ asks who verifies an intervention worked, who can escalate when the first control fails, and who has authority to decide when continuity outweighs shutdown, which earlier version is acceptable, and when normal operations may resume.

## Gap 5: Board-Facing Evidence of the Intervention Decision

The bill requires preserving model weights and telemetry after an emergency order, verifiable through audit, inspection, or forensic review. Those records may prove an order was executed — they don't prove the organization's internal governance system functioned before the government intervened.

Board-facing evidence needs to show when risk was detected, who reviewed it, what options were considered, why a particular control was selected, whether dissent was documented, and what conditions supported restarting the system. The record must capture the human decision architecture around the technical control.

## The Lozen Advisory view

Measured against the Name Standard℠, the AI Kill Switch Act is strongest on Formal Right of Refusal — it creates a technical expectation that covered technology can be slowed, restricted, suspended, or shut down. But a technical expectation isn't a governance system: a company can have a risk framework, safety evaluations, and executive reporting, and still lack a named internal actor with standing authority to use the control surface when risk escalates.

That is the Name Standard℠ gap: not whether a kill switch exists, but whether anyone inside the organization has the assigned authority, access, review capacity, documentation, time, and protected mandate to use it.

## Where this fits

The AI Kill Switch Act reflects a broader shift in AI governance language, toward evidence of human review, intervention authority, escalation, override, shutdown capability, and measurable accountability.

For board-facing teams, the real question isn't what any single proposal requires — it's whether the organization can already show who reviews, escalates, overrides, restricts, suspends, shuts down, and authorizes restart before a regulator, plaintiff, insurer, or incident report asks.

For the full framework behind this mapping, see [The Name Standard℠ **Human Accountability Trace (HAT) workbook**.](/tools-resources/) For the methodology behind Lozen Advisory's evidence-based governance analysis, see [Disclosure-Independent Governance℠](/disclosure-independent-governance/).

Board-facing teams evaluating whether their AI governance structure has a Name Standard℠ gap can review Lozen Advisory's [Board AI Governance Advisory](/services/board-ai-governance-advisory/).