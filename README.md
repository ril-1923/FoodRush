# FoodRush — Food Delivery Platform

A polished, portfolio-ready food delivery front end built with **React, TypeScript, React Router, and Bootstrap 5**. No backend — everything runs on mock data and `localStorage`.

## 1. Getting started

```bash
cd foodrush
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build the production bundle to `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally to sanity-check the production build |
| `npm run lint` | Run ESLint |

## 3. Folder structure

```
foodrush/
├── index.html
├── vite.config.ts
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx              # App entry — mounts providers + router
    ├── App.tsx                # Route table
    ├── components/            # Reusable, presentational components
    │   ├── Navbar.tsx, Footer.tsx, BottomNav.tsx, Layout.tsx
    │   ├── RestaurantCard.tsx, FoodCard.tsx, CategoryCard.tsx
    │   ├── FilterSidebar.tsx, SortDropdown.tsx
    │   ├── CartItem.tsx, CartSummary.tsx, CouponBox.tsx
    │   ├── AddressCard.tsx, PaymentMethod.tsx
    │   ├── OrderCard.tsx, OrderTimeline.tsx, RestaurantHeader.tsx
    │   └── Atoms.tsx           # RatingBadge, DietDot, QuantitySelector, LoadingSpinner, EmptyState
    ├── pages/                  # One component per route
    │   ├── Home.tsx, Restaurants.tsx, RestaurantDetails.tsx, FoodDetails.tsx
    │   ├── Cart.tsx, Checkout.tsx, OrderSuccess.tsx, OrderTracking.tsx
    │   ├── Orders.tsx, Favorites.tsx, Profile.tsx, Offers.tsx, NotFound.tsx
    ├── context/                # Global state via Context API
    │   ├── CartContext.tsx, FavoritesContext.tsx, ThemeContext.tsx, ToastContext.tsx
    ├── hooks/
    │   ├── useOrders.ts, useRecentlyViewed.ts
    ├── data/                   # Mock/static data + TypeScript-typed seed content
    │   ├── restaurants.ts (15), foodItems.ts (75), categories.ts (10)
    │   ├── coupons.ts (5), user.ts, seedOrders.ts
    ├── types/index.ts          # All shared TypeScript interfaces
    ├── utils/
    │   ├── storage.ts (localStorage helpers), pricing.ts (cart totals + coupon math)
    │   ├── order.ts (order id/date/currency helpers), image.ts (image fallback)
    └── styles/global.css       # Brand theme, light/dark tokens, component styles
```

## 4. Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/restaurants` | Restaurant listing, filters, search, sort (`?q=`, `?category=`) |
| `/restaurant/:id` | Restaurant details + menu |
| `/food/:id` | Food item details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout (address, instructions, payment) |
| `/order-success/:id` | Order confirmation |
| `/track-order/:id` | Order tracking timeline |
| `/orders` | Order history + reorder |
| `/favorites` | Favorited restaurants & dishes |
| `/profile` | User profile |
| `/offers` | All coupons |

## 5. Main components (what they do)

- **Navbar** — logo, location pill, search, theme toggle, cart badge (live item count).
- **FilterSidebar / SortDropdown** — drive the restaurant list via local component state (cuisine, rating, price band, delivery time, dietary, sort order); "Clear filters" resets everything.
- **RestaurantCard / FoodCard** — shared cards used on Home, Restaurants, Restaurant Details, and Favorites; each owns its own add-to-cart / favorite-toggle logic via context hooks.
- **CartItem / CartSummary / CouponBox** — the cart page composes these three; `CouponBox` validates a code against `data/coupons.ts` and applies it through `CartContext`.
- **AddressCard / PaymentMethod** — selectable option cards used on Checkout.
- **OrderTimeline** — animated 5-step progress indicator for order tracking (CSS `@keyframes`, no external animation library).
- **Atoms.tsx** — small shared primitives (`RatingBadge`, `DietDot`, `QuantitySelector`, `LoadingSpinner`, `EmptyState`) reused everywhere instead of duplicating markup.

## 6. State management

Three React contexts cover everything that needs to be shared across pages:

- **`CartContext`** — cart lines, the restaurant the cart is "locked" to (adding an item from a different restaurant starts a fresh cart, like real delivery apps), the applied coupon, and derived totals (`utils/pricing.ts` computes item total, delivery fee, platform fee, discount, tax, and grand total in one place).
- **`FavoritesContext`** — two lists of ids (restaurants, foods) with toggle helpers.
- **`ThemeContext`** — current theme (`light`/`dark`), toggled via the navbar and applied through a `data-theme` attribute on `<html>` that the CSS custom properties key off of.

A fourth, `ToastContext`, isn't in the original spec but powers every "Added to cart successfully!" / "Coupon applied!" style notification, so all of that feedback lives in one place instead of being re-implemented per page.

Local component state (`useState`) is used for anything that doesn't need to be shared — filter selections, the active menu tab on a restaurant page, checkout form fields, etc.

## 7. LocalStorage usage

`utils/storage.ts` wraps `localStorage` with a `foodrush:` key prefix and safe JSON parsing (falls back to a default value if a key is missing or corrupted, and fails silently if storage is unavailable, e.g. private browsing). It backs:

- `foodrush:cart` — cart lines, locked restaurant id, applied coupon code
- `foodrush:favorites` — favorite restaurant/food ids
- `foodrush:theme` — light/dark preference
- `foodrush:orders` — order history (seeded with two sample orders on first run, then appended to on every checkout)
- `foodrush:recentlyViewed` — last 8 restaurants viewed

Everything reloads correctly on a hard refresh because each context/hook reads from storage during its initial `useState`.

## 8. Building for production

```bash
npm run build
```

This runs `tsc -b` (fails the build on any type error) followed by `vite build`, producing a static site in `dist/`. `vite.config.ts` sets `base: './'` so the build works from any subfolder — including a GitHub Pages project page — without extra configuration.

## 9. Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. `npm install --save-dev gh-pages`
3. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
4. Run `npm run deploy`.
5. In the repo's Settings → Pages, set the source to the `gh-pages` branch (created automatically by the command above).
6. Because `base: './'` is already set in `vite.config.ts`, the deployed site works whether it's served from the repo root or a `/repo-name/` subpath — no further changes needed.

(Alternative: build locally with `npm run build` and drag-and-drop the `dist/` folder into Netlify or Vercel — both work without any extra config for a Vite SPA once you set the redirect/rewrite rule `/* → /index.html` for client-side routing.)

## 10. Suggestions for future backend/API integration

- Replace `src/data/*.ts` with fetch calls to a real API (e.g. `GET /restaurants`, `GET /restaurants/:id/menu`) — the component props and TypeScript interfaces in `src/types` are already shaped to match a typical REST response, so this is mostly a data-source swap.
- Move cart/order persistence from `localStorage` to a backend (session- or auth-based), keeping the same `CartContext`/`useOrders` interface so components don't need to change.
- Add real authentication (JWT or session cookies) behind the current "Login" button in the navbar and the Profile page.
- Swap the simulated `generateOrderId` + `setTimeout` in Checkout for a real order-creation endpoint and a WebSocket or polling-based live tracking feed for `OrderTracking`.
- Integrate a real payment gateway (Razorpay/Stripe) behind the existing `PaymentMethod` selector.
- Add server-side search/filtering once the restaurant catalog is too large to filter client-side.

---

This is a demo/portfolio project. Payments are simulated, delivery tracking is a scripted animation, and all restaurant/menu data is fictional.
