import './shop.css';
import { siteViewport, FONTS } from '../../../lib/meta';

export const viewport = siteViewport;

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONTS} rel="stylesheet" />
      </head>
      <body className="shop">{children}</body>
    </html>
  );
}
