# Golden Agro Foodz website

A Next.js (App Router) site. Run on Node.js.

## Structure
- `app/(home)`: home page `/`
- `app/(shop)/shop`: shop and cart `/shop`
- `app/(wwd)/whatwedo`: What we do page `/whatwedo`
- `app/api`: backend. `/api/reverse` (current location to address), `/api/pincode` (pincode to city and state), `/api/order` (checks and logs each order; Shiprocket plugs in here)
- `components`: HoneyCard, EnqForm, ShopApp (catalogue, cart, address form), WwdHoney, Fx (scroll effects and menu)
- `lib/products.js`: **prices, sizes and honey varieties live here**
- `lib/site.js`: the site domain and WhatsApp number
- `public/images`: all photos and logos

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy
- Vercel: import the repo, the framework is detected as Next.js. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- Hostinger: needs a plan with Node.js web apps. Build command `npm run build`, start command `npm start`.

## Before launch
- Set `NEXT_PUBLIC_SITE_URL` (or edit `lib/site.js`) to the real domain. Canonical links, share tags, structured data, the sitemap and robots.txt all use it.
- Secrets such as `SHIPROCKET_EMAIL` and `SHIPROCKET_PASSWORD` go in environment variables on the host, never in the code.
