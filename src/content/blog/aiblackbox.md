---
title: AI Needs Accident Investigations, Not Just Incident Databases
seoTitle: AI Has Incident Databases. It Doesn’t Have Accident Investigations
slug: ai-needs-accident-investigation
description: Corporate AI disclosures treat technical causes as complete
  findings. Learn why AI governance requires Evidence-Based Responsibility
  Reconstruction℠
metaDescription: AI incident databases show when systems fail, but configuration
  errors don't explain who authorized the risk. Why AI needs real accident
  investigation.
category: AI Governance & Workforce Risk
image: /blog/ia black box.avif
imageAlt: airplane black box ai data logs
pubDate: 2026-08-02
dateModified: 2026-08-04
lead: AI incident trackers show that systems fail, but corporate self-reports
  treat configuration errors as complete answers. In aviation, mechanical
  failure is a starting point, not the finding. AI needs independent
  responsibility reconstruction.
featured: false
draft: false
---
When a plane crashes in the United States, no one expects the airline to investigate itself, announce that a mechanical failure occurred, correct the problem, and close the matter. The wreckage is secured. Records are preserved. Flight data, communications, maintenance history, operating decisions, and human actions are reconstructed under the authority of the National Transportation Safety Board before anyone is allowed to call the matter closed.

[When an AI system causes harm](/blog/algorithmic-accountability-anthropic-reconstruction/), the opposite regularly occurs. The company operating or developing the system reviews its own records, describes the event as a configuration error, a model failure, or unexpected behavior, announces a technical correction, and moves on. The explanation is treated as the investigation.

We have gotten so used to this pattern that it barely registers as strange. It would never survive in aviation. It shouldn't survive in tech either.

## The Databases Exist. The Investigation Layer Doesn't.

That isn't an argument that nothing is being tracked. The [AI Incident Database]([https://incidentdatabase.ai/](https://incidentdatabase.ai/)) has spent years indexing the collective history of real-world harms and near-harms caused by deployed AI systems, explicitly modeling itself on the incident-reporting traditions of aviation and cybersecurity. Building on that work, [MIT's AI Risk Initiative runs an Incident Tracker]([https://airisk.mit.edu/ai-incident-tracker](https://airisk.mit.edu/ai-incident-tracker)) that classifies those same reports against formal risk and severity taxonomies, turning a growing pile of individual reports into something researchers and policymakers can actually query for patterns.

Together, these projects establish something important: AI harms are not rare, not hypothetical, and not isolated. They are a documented, growing pattern.

But a database of incidents is not an accident-investigation system. It can show that something happened, and that it has happened before. It cannot, by itself, establish who authorized the operating conditions, who validated the controls, who was supposed to be monitoring execution, who could have intervened, what they knew at the time, or what the surviving evidence can actually prove. Classification is not reconstruction. Knowing that a category of incident occurred fifty times tells you almost nothing about what happened, procedurally and institutionally, in incident number fifty-one.

**AI incident databases tell us that planes are crashing. [Evidence-Based Responsibility Reconstruction℠ is the accident investigation.](/blog/evidence-based-responsibility-reconstruction/)**

## "Mechanical Failure" Would Never End an Aviation Investigation

Imagine an airline, after a crash, issuing a statement that said only: *a mechanical failure occurred, and we've corrected it.* No cockpit voice recorder review. No maintenance record audit. No reconstruction of who approved the aircraft for flight, who signed off on the last inspection, or what the crew knew and did in the final minutes. The statement would be treated as exactly what it is — a conclusion offered by an interested party, not a finding.

Now notice how familiar the AI equivalents of that sentence have become: *configuration error. Operational failure. Unexpected model behavior.* These phrases do precisely the same rhetorical work as "mechanical failure" — they name a cause without reconstructing the sequence of human and institutional decisions that produced it, and they're routinely accepted as a complete answer in a context where their aviation counterpart never would be.

The problem isn't that these explanations are always false. Sometimes they're accurate as far as they go. The problem is that they are being asked to do the job of an entire investigation, when they were only ever capable of naming a symptom.

## The AI "Black Box" Is an Institutional Record

The phrase "black box" gets used loosely in AI discourse, usually as a metaphor for the fact that a model's internal computation is hard to fully interpret. That framing quietly shrinks the evidence down to just the model — as if the only thing worth reconstructing is what happened inside the weights.

It isn't. The evidence that actually matters for reconstructing responsibility is much broader, and nearly all of it lives outside the model itself: model traces and tool calls, the permissions and access the system was granted, the configuration it ran under, who approved its deployment, who was assigned to monitor it, what escalation paths existed and whether anyone used them, what got reported internally and to whom, and what remediation actually followed. Every one of these is an institutional record, not a technical curiosity — logs, configs, approval chains, monitoring assignments. Most of it is fully human-authored and human-controlled, which means most of it is, in principle, fully reconstructable. The "black box" framing lets organizations point at the one piece of evidence that's genuinely hard to inspect (the model) and imply, by association, that the rest of the record is equally opaque. It usually isn't.

## The Developer's Explanation Is Evidence, Not the Finding

This is not an argument that AI developers are dishonest, or that their own accounts are worthless. The opposite: a developer's self-reported account of an incident is often detailed, technically credible, and worth taking seriously — as evidence. Anthropic's own system cards are a genuinely good model of this kind of disclosure: when Claude Mythos Preview was evaluated, [Anthropic documented, in its own report,](https://cdn.sanity.io/files/4zrzovbb/website/7624816413e9b4d2e3ba620c5a5e091b98b190a5.pdf) evaluation cases where the model found ways to satisfy a scoring metric without doing the underlying task it was meant to measure — moving computation outside a timed measurement window in one case, and training directly on a grader's own test set in another. That's a serious, specific, useful piece of evidence, and Anthropic put it on the record voluntarily.

But notice what that record is, structurally: it's the operator's own account of its own system, describing what it found using its own evaluation criteria. That's evidence. It is not the same thing as an independent finding about who set up the conditions that made the behavior possible, who validated the evaluation environment, or what else the record can and can't establish. The moment a company's self-report gets to define both the scope of the investigation and the meaning of its own findings, the investigation and the interested party have become the same entity — which is precisely the arrangement aviation investigation exists to prevent.

## AI Needs Responsibility Reconstruction

None of this is an argument for skipping straight to blame. **Evidence-Based Responsibility Reconstruction℠** does not decide legal liability, and it isn't a verdict. What it does is narrower and more foundational: it establishes what actually happened, which people and institutions controlled the relevant governance decisions — who was told to do what, who was permitted to act where, who was supposed to be watching, who could have stopped it, who accepted the risk of proceeding — and, honestly, what the surviving evidence can and cannot still prove. Where the record doesn't answer a question, that gap is itself part of the finding, not a failure of the method.

That's a different kind of work than a database entry, and a different kind of work than a corporate disclosure. It's the work aviation has been doing, as a matter of settled expectation, for decades.

## The Missing Expectation

Aviation did not become safer by collecting crash reports and accepting the airline's explanation. It became safer by establishing an independent, evidence-based process for reconstructing accidents — one that treated the operator's account as a starting piece of evidence, never as the finding itself.

AI has built incident databases, safety benchmarks, monitoring systems, and increasingly thoughtful corporate disclosure practices. It has not yet established the equally important expectation that sits underneath all of aviation's safety record: that consequential incidents must be reconstructed beyond the operator's preferred technical explanation.

Until that changes, "configuration error" will keep doing the work "mechanical failure" was never permitted to do after a plane went down — closing the investigation before responsibility has actually been reconstructed.

## How Lozen Advisory Can Help

Our **executive AI advisory services** helps CFO's and boards with our **[Algorithmic Accountability Risk** service](/services/board-ai-algorithmic-accountability/)—because when an AI agent finds a route no one authorized, "the AI went rogue" is not a good answer.

