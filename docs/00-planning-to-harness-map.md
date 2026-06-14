# Planning To Harness Map

## Purpose

Connect the travel-agency-specific planning layer to the AI-assisted development harness. Planning documents decide what should be built; harness documents turn those decisions into implementation, verification, and release workflow.

## Source Planning Documents

| Planning Document | Purpose |
| --- | --- |
| `docs/planning/01-business-and-positioning.md` | Define agency identity, target customers, goals, and trust signals |
| `docs/planning/02-benchmark-analysis.md` | Extract useful patterns from comparable travel agency sites |
| `docs/planning/03-user-and-operator-flows.md` | Define customer and non-developer operator workflows |
| `docs/planning/04-content-and-product-model.md` | Define product, inquiry, and content data structures |
| `docs/planning/05-mvp-scope-and-decisions.md` | Decide launch scope, later scope, and MVP questions |

## Target Harness Documents

| Harness Document | Receives From Planning | Notes |
| --- | --- | --- |
| `docs/01-product-planning.md` | Business positioning, target users, goals, MVP scope, key flows, success criteria | Core product definition |
| `docs/02-architecture.md` | Hosting needs, admin needs, image storage, data layer, cost constraints | AWS and technical architecture belong here |
| `docs/03-interface-reference.md` | Product, inquiry, notice, FAQ, review, banner schemas | Treat planning data fields as source input |
| `docs/04-development-guide.md` | Run commands, environment, developer workflow, deployment notes | Filled after stack decisions |
| `docs/05-acceptance-scenarios-and-checklist.md` | Customer inquiry path, operator product management, launch acceptance | Must include non-developer operation checks |
| `docs/06-regression-and-failure-scenarios.md` | Broken inquiry paths, bad product data, image upload failures, admin errors | Protect launch-critical flows |
| `docs/07-manual-verification-playbook.md` | Mobile customer test, operator usability test, content update test | Should include tests with the actual operator |
| `docs/08-development-workflow.md` | MVP priorities and phase order | Convert decisions into P0/P1/P2 phases |

## Decision Import Table

| Planning Decision | Source | Harness Target | Status |
| --- | --- | --- | --- |
| MVP prioritizes consultation over online payment | `docs/planning/05-mvp-scope-and-decisions.md` | `docs/01-product-planning.md`, `docs/05-acceptance-scenarios-and-checklist.md` | Pending |
| Operator must manage products without code | `docs/planning/03-user-and-operator-flows.md` | `docs/05-acceptance-scenarios-and-checklist.md`, `docs/07-manual-verification-playbook.md` | Pending |
| Product detail pages must support phone and KakaoTalk inquiry | `docs/planning/03-user-and-operator-flows.md` | `docs/01-product-planning.md`, `docs/05-acceptance-scenarios-and-checklist.md` | Pending |
| Product model requires price, departure date, itinerary, images, included/excluded items | `docs/planning/04-content-and-product-model.md` | `docs/03-interface-reference.md` | Pending |
| Payment, membership, and full reservation automation are outside MVP | `docs/planning/05-mvp-scope-and-decisions.md` | `docs/01-product-planning.md`, `docs/08-development-workflow.md` | Pending |

## Reflection Workflow

1. Fill planning documents first.
2. Mark planning decisions as confirmed or open.
3. Copy confirmed decisions into the relevant harness documents.
4. Update the status in the Decision Import Table.
5. Build development phases only from reflected decisions.
6. When verification reveals a planning issue, update the planning document first and then re-reflect into the harness.

## Minimum Gate Before Development

- [ ] Target customer is defined.
- [ ] Main travel categories are defined.
- [ ] Product model is confirmed.
- [ ] Inquiry path is confirmed.
- [ ] Operator management requirements are confirmed.
- [ ] MVP and non-MVP scope are separated.
- [ ] Planning decisions have been reflected into harness documents.

## Open Questions

- Will the existing `ai-assisted-development-harness` template be copied into this project root?
- Which stack will be used for implementation?
- Will AWS be required for MVP, or only after the first working prototype?
