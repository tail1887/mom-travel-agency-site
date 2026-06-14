# 02. Benchmark Analysis

## Purpose

Extract useful patterns from comparable travel agency sites without copying their identity, content, or design.

## Source Of Truth

Detailed benchmark notes live in:

- `docs/benchmarks/00-benchmark-index.md`
- `docs/benchmarks/01-hyecho-travel.md`
- `docs/benchmarks/02-oji-tour.md`
- `docs/benchmarks/03-small-star-tour.md`
- `docs/benchmarks/04-road-to-india.md`
- `docs/benchmarks/05-sonan-travel.md`
- `docs/benchmarks/06-cross-site-patterns.md`

Use this planning document to summarize decisions. Use the benchmark documents as reference evidence for prototype prompts.

## Benchmark Targets

- Hyecho Travel
- Oji Tour
- Small Star Tour
- The Road To India
- Sonan Travel
- Other:
  - [SITE_NAME] - [URL]

## Analysis Criteria

### 1. First Impression

- What is visible above the fold?
- Is the main product category clear?
- Is the phone or KakaoTalk consultation path visible?
- Does the site feel trustworthy for the target customer?

### 2. Navigation Structure

- Main menu items:
  - [MENU_ITEM]
- Footer information:
  - [FOOTER_ITEM]
- Repeated conversion paths:
  - [PHONE]
  - [KAKAO]
  - [FORM]

### 3. Product List Pattern

- Category structure:
  - [CATEGORY]
- Product card fields:
  - [FIELD]
- Filters or sorting:
  - [FILTER]

### 4. Product Detail Pattern

- Required sections:
  - Overview
  - Departure date
  - Price
  - Itinerary
  - Included items
  - Excluded items
  - Important notes
  - Inquiry buttons
- Useful content patterns:
  - [PATTERN]

### 5. Inquiry And Reservation Pattern

- Phone consultation:
  - [OBSERVATION]
- KakaoTalk:
  - [OBSERVATION]
- Inquiry form:
  - [OBSERVATION]
- Payment or deposit:
  - [OBSERVATION]

### 6. Operator Management Implications

Which content needs frequent editing by a non-developer?

- Product title
- Price
- Departure date
- Itinerary
- Product images
- Notice or popup
- Reviews
- FAQ
- Phone/Kakao/channel information

## Benchmark Summary Table

| Site | Strong Pattern | Weak Pattern | Should Adopt? | Notes |
| --- | --- | --- | --- | --- |
| [SITE] | [PATTERN] | [PATTERN] | Yes/No/Later | [NOTES] |

## Confirmed Decisions

- [DECISION]

## Open Questions

- [QUESTION]

## Development Harness Reflection

- `docs/01-product-planning.md`
  - Goals
  - Key user flows
- `docs/03-interface-reference.md`
  - Product fields discovered from benchmark sites
- `docs/05-acceptance-scenarios-and-checklist.md`
  - Conversion and usability criteria
