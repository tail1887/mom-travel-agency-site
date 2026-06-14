# 04. Content And Product Model

## Purpose

Define the content structure needed for travel products, pages, inquiries, and operator-managed site content.

## Product Model

### Required Fields

| Field | Description | Editable By Operator? | MVP Required? |
| --- | --- | --- | --- |
| Product ID | Unique identifier | No | Yes |
| Title | Product name | Yes | Yes |
| Slug | URL path | Optional | Yes |
| Category | Travel category | Yes | Yes |
| Destination | Country or region | Yes | Yes |
| Summary | Short list or card description | Yes | Yes |
| Main Image | Product thumbnail or hero image | Yes | Yes |
| Gallery Images | Additional product images | Yes | Yes |
| Price | Base price or consultation price | Yes | Yes |
| Departure Dates | Available dates | Yes | Yes |
| Duration | Days and nights | Yes | Yes |
| Itinerary | Day-by-day schedule | Yes | Yes |
| Included Items | What is included | Yes | Yes |
| Excluded Items | What is excluded | Yes | Yes |
| Important Notes | Cautions, passport, visa, insurance | Yes | Yes |
| Inquiry CTA | Phone/Kakao/form destination | Yes | Yes |
| Status | Draft, published, hidden, sold out | Yes | Yes |

### Optional Fields

| Field | Description | MVP Required? |
| --- | --- | --- |
| Minimum Participants | Minimum number of travelers | No |
| Guide Info | Guide or tour leader details | No |
| Airline Info | Airline and flight details | No |
| Hotel Info | Hotel details | No |
| Map | Embedded destination map | No |
| PDF Attachment | Brochure or itinerary download | No |
| Tags | Search or filtering tags | No |

## Inquiry Model

### Minimum Inquiry Data

- Product
- Customer name
- Phone number
- Preferred contact method
- Message
- Created date
- Inquiry status

### MVP Inquiry Options

- Option A: Phone and KakaoTalk only
- Option B: Phone, KakaoTalk, and simple inquiry form
- Option C: Inquiry form stored in admin dashboard

Recommended MVP:

- Start with phone and KakaoTalk as the primary path.
- Add a simple inquiry form only if the operator can reliably check it.

## Site Content Model

### Home Page

- Main hero image or featured product area
- Featured categories
- Recommended products
- Consultation CTA
- Trust section
- Notice preview

### Notice

- Title
- Body
- Published date
- Visibility status

### FAQ

- Question
- Answer
- Category
- Visibility status

### Review

- Title
- Body
- Image
- Related product
- Visibility status

### Banner Or Popup

- Title
- Image
- Link
- Display period
- Visibility status

## Content Preparation Checklist

- [ ] Real agency name
- [ ] Logo or temporary wordmark
- [ ] Phone number
- [ ] KakaoTalk channel link
- [ ] Business registration information
- [ ] Privacy policy draft
- [ ] Terms draft
- [ ] At least 3 real or sample travel products
- [ ] Product images with usage rights
- [ ] Notice examples
- [ ] FAQ examples

## Confirmed Decisions

- [DECISION]

## Open Questions

- Are prices fixed, estimated, or consultation-only?
- Are product images provided by the agency?
- Do products need multiple price tiers?
- Should old products remain visible as references?

## Development Harness Reflection

- `docs/03-interface-reference.md`
  - Product, inquiry, notice, FAQ, review, banner schemas
- `docs/02-architecture.md`
  - Data layer and image storage decisions
- `docs/05-acceptance-scenarios-and-checklist.md`
  - Data entry and display acceptance criteria
