# 05. MVP Scope And Decisions

## Purpose

Keep the first version small enough to launch while preserving the travel agency's core business workflow.

## MVP Principle

The MVP should help customers find a travel product and contact the agency, while allowing a non-developer operator to update key content.

## P0 Launch Scope

- Mobile-friendly public site
- Home page
- Product category/list page
- Product detail page
- Phone consultation CTA
- KakaoTalk consultation CTA
- Admin login
- Product create/edit/delete
- Product image upload
- Product status: draft/published/hidden
- Notice management
- Basic company information page
- Privacy policy page
- Terms page

## P1 Near-Term Scope

- FAQ management
- Review management
- Banner or popup management
- Search and filters
- Simple inquiry form
- Admin inquiry list
- SEO metadata management
- Analytics integration

## P2 Later Scope

- Online payment
- Member accounts
- Full reservation workflow
- Automated inventory or seat management
- Email/SMS automation
- Multi-operator roles
- External CRM integration

## Explicitly Out Of MVP

- Full payment automation
- Customer membership system
- Complex reservation calendar
- Airline or hotel inventory integration
- Multi-language support unless required before launch

## Must Decide Before Development

- Agency name and primary positioning
- Primary customer type
- Product categories
- Product data fields
- Inquiry method: phone/Kakao/form
- Admin content types
- Image upload requirements
- Domain strategy
- Privacy and terms responsibility
- MVP hosting preference and monthly cost tolerance

## Can Decide Later

- Payment provider
- Member system
- Advanced filters
- CRM integration
- Email/SMS automation
- Multi-language support
- Detailed SEO content strategy

## MVP Decision Questions

1. What is the main travel category the agency wants to be known for?
2. Who is the first target customer?
3. Should the site feel more premium, practical, warm, or local?
4. Will customers mostly call, use KakaoTalk, or submit a form?
5. How often will products change?
6. Who will upload product images and write descriptions?
7. Does each product have one date or many departure dates?
8. Are prices fixed, starting-from, or consultation-only?
9. Does the operator need to hide sold-out products?
10. Are reviews real, manually curated, or not needed at launch?
11. Are notices and popups important for daily operation?
12. What is the acceptable monthly hosting and maintenance cost?
13. Does the site need to be found through Naver search immediately?
14. Is online payment truly needed for MVP?
15. What would make the operator say, "I can manage this myself"?

## Launch Acceptance Summary

- Customer can understand the agency's specialty within 5 seconds.
- Customer can find and open a product on mobile.
- Customer can contact the agency from every product detail page.
- Operator can create or edit a product without touching code.
- Operator can update price, date, image, and itinerary.
- Basic legal and trust information is visible.
- The site is deployed with a stable domain and SSL.

## Confirmed Decisions

- [DECISION]

## Open Questions

- [QUESTION]

## Development Harness Reflection

- `docs/01-product-planning.md`
  - MVP scope
  - Non-MVP scope
  - Success criteria
- `docs/05-acceptance-scenarios-and-checklist.md`
  - Launch acceptance checklist
- `docs/08-development-workflow.md`
  - Phase priority and development order
