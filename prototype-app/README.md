# Travel Agency Prototype App

어머니 여행사 사이트 방향을 고르기 위한 비교용 프로토타입 앱입니다. 하나의 앱 안에서 5개 콘셉트를 `HashRouter` 라우트로 나눠 보여줍니다.

## Routes

- `#/` - 프로토타입 선택 대시보드
- `#/prototypes/trust` - A안 전통 신뢰형
- `#/prototypes/premium` - B안 프리미엄 맞춤여행형
- `#/prototypes/marketplace` - C안 상품몰형
- `#/prototypes/consultation` - D안 상담 전환형
- `#/prototypes/story` - E안 콘텐츠/스토리형

## Local Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Docker Run

```bash
docker compose up --build
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

## GitHub Pages

The app uses `HashRouter`, so GitHub Pages refreshes do not require server rewrites.

The workflow at `.github/workflows/deploy-pages.yml` builds the app and deploys `dist/` to GitHub Pages when `main` is pushed.

If this repository is deployed under:

```text
https://USERNAME.github.io/REPOSITORY_NAME/
```

the workflow sets:

```text
VITE_BASE_PATH=/REPOSITORY_NAME/
```

For local or custom deployment, override it manually:

```bash
VITE_BASE_PATH=/custom-base/ npm run build
```

## Benchmark Patterns Reflected

- Specialty positioning from the benchmarked Korean travel agency sites.
- Phone and KakaoTalk consultation as the primary conversion path.
- Product cards with status, departure date, duration, region, and price.
- Product details with itinerary, included/excluded items, notes, and repeated consultation CTA.
- Trust footer with business, phone, hours, address, and legal link placeholders.
- Mobile-first text size, CTA visibility, and card structure.

This is not the final operating site. Payment, membership, real admin, database, and reservation automation are intentionally excluded from the prototype.
