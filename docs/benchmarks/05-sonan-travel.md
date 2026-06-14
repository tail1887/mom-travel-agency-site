# 05. Sonan Travel Benchmark

Source: https://www.sonantravel.com/

## Positioning

Sonan Travel presents itself as a small-group/free-backpacking-style specialty travel agency with categories including South America, Europe, the Middle East, pilgrimage, Asia, and events.

## Useful Patterns

### Full Information Architecture

Observed navigation includes:

- Agency introduction
- History
- Representative introduction
- Tour leader introduction
- Directions
- Travel products
- Recommended products
- Destination categories
- Customer center
- Notices
- Questions and answers
- FAQ
- Travel reviews
- Travel explanation sessions
- Reservation/departure status
- Quote inquiry

This is a strong reference for a mature travel agency information architecture.

### Product Card Density

Product lists expose many operational fields:

- Recruitment status
- Departure dates
- Product name
- Tags
- Minimum departure label
- Deposit amount
- Product price

This supports comparison-heavy browsing.

### Search, Member, And Support Features

The site includes search, login, membership, my page, customer center, and quote inquiry. These are useful references but not all should be MVP scope.

## Design Implications

- Product cards should show status, dates, tags, deposit, and price if comparison matters.
- A customer center can collect trust-building content.
- Reservation/departure status can be valuable for confidence, but may be P1/P2.

## Operator Implications

Admin-managed content may include:

- Product status
- Departure dates
- Tags
- Deposit
- Price
- FAQ
- Notices
- Reviews
- Explanation sessions
- Inquiry forms

## Patterns To Avoid

- Do not include login, membership, my page, or full reservation/departure tracking in MVP unless truly needed.
- Do not create too many customer center sections before the operator has content to maintain them.

## Prototype Usage

Best suited for:

- Product marketplace prototype
- Traditional trust prototype
- Operator workflow prototype
