# Golden Agro Foodz website

Next.js project. The pages (`public/index.html`, `shop.html`, `whatwedo.html`) are plain HTML with the same design as before. Next.js serves them and runs the backend in `app/api`.

## Backend (app/api)
- `/api/reverse?lat=&lon=`: "Use my current location" turns coordinates into street, city, state and pincode (OpenStreetMap).
- `/api/pincode?pin=`: pincode to city and state (India Post).
- `/api/order` (POST): validates the order when the customer taps Send on WhatsApp and logs it. Shiprocket plugs in here next.

## Run
```
npm install
npm run dev      # http://localhost:3000
```

## Deploy
Vercel: import the repo. The framework is detected as Next.js, no settings needed.
Hostinger: needs a plan with Node.js web apps. Build with `npm run build`, start with `npm start`.

## Before launch
- Replace `https://goldenagrofoodz.com` in the pages, `sitemap.xml` and `robots.txt` with the real domain.
- Add secrets (later: `SHIPROCKET_EMAIL`, `SHIPROCKET_PASSWORD`) as environment variables on the host, never in `public/`.
