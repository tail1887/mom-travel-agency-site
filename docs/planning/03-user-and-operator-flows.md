# 03. User And Operator Flows

## Purpose

Define how customers move from interest to inquiry, and how a non-developer operator manages the site.

## Customer Flow A. Browse To Inquiry

1. Customer lands on the home page.
2. Customer understands the main travel categories.
3. Customer opens a product list.
4. Customer compares products.
5. Customer opens a product detail page.
6. Customer checks price, date, itinerary, and included/excluded items.
7. Customer contacts the agency by phone, KakaoTalk, or inquiry form.

Expected outcome:

- Customer can contact the agency without creating an account or paying online.

## Customer Flow B. Direct Product Inquiry

1. Customer enters through search, link, or shared product page.
2. Customer immediately sees the product summary and consultation buttons.
3. Customer asks about availability, price, or custom schedule.

Expected outcome:

- Product detail pages work as shareable consultation pages.

## Operator Flow A. Product Management

1. Operator logs in to the admin area.
2. Operator creates or edits a travel product.
3. Operator updates price, departure date, itinerary, and images.
4. Operator previews the product.
5. Operator publishes the product.

Expected outcome:

- A non-developer can update the product without editing code.

## Operator Flow B. Inquiry Handling

1. Operator receives a phone, KakaoTalk, or form inquiry.
2. Operator checks which product the customer came from.
3. Operator follows up manually.
4. Operator updates product status if needed.

Expected outcome:

- The site supports consultation-first operations without requiring full booking automation.

## Operator Flow C. Site Updates

1. Operator updates notices, reviews, FAQ, banners, or popup messages.
2. Operator verifies the change on mobile and desktop.

Expected outcome:

- Routine updates do not require developer support.

## Required Admin Capabilities

- Product create/edit/delete
- Product image upload
- Product visibility status
- Departure date and price editing
- Itinerary editing
- Notice editing
- FAQ editing
- Review editing or review display management
- Inquiry destination management
- Phone/Kakao/channel information editing

## Manual Verification Notes

- Test with the actual operator.
- Use at least one real product example.
- Verify on a mobile viewport first.
- Measure whether the operator can complete the task without developer guidance.

## Confirmed Decisions

- MVP prioritizes consultation over online payment.

## Open Questions

- Will inquiries be stored in the admin area, or only sent through KakaoTalk/email?
- Does the operator need multiple admin accounts?
- Should products support multiple departure dates per product?

## Development Harness Reflection

- `docs/01-product-planning.md`
  - Key user flows
- `docs/05-acceptance-scenarios-and-checklist.md`
  - Acceptance scenarios for customer and operator flows
- `docs/07-manual-verification-playbook.md`
  - Operator usability test
