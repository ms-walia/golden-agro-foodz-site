import Fx from '../../../components/Fx';
import ShopApp from '../../../components/ShopApp';
import JsonLd from '../../../components/JsonLd';
import { pageMeta } from '../../../lib/meta';
import { crumbs } from '../../../lib/schema';

export const metadata = pageMeta({ title: 'Buy Honey, Mustard Oil, Turmeric & Gulkand Online | Golden Agro Foodz', description: 'Shop raw honey, mustard oil, turmeric powder and honey rose gulkand from Golden Agro Foodz, Amritsar. Pick a size, add to cart and send your order on WhatsApp.', path: '/shop' });

export default function Shop() {
  return (
    <>
      <JsonLd data={crumbs('Buy Honey, Mustard Oil, Turmeric & Gulkand Online', '/shop')} />
      <div className="progress" id="bar"></div>
<header className="top">
  <a href="/" aria-label="Golden Agro Foodz, home"><img src="/images/logo-gaf.webp" alt="Golden Agro Foodz" width="424" height="294" /></a>
  <nav aria-label="Main"><a href="/">Home</a><a href="/#products">Products</a><a href="/shop">Shop</a><a href="/whatwedo">What we do</a><a href="/#order">Contact</a></nav>
  <div className="top__actions"><button className="menubtn" id="menubtn" type="button" aria-label="Menu" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"></path></svg></button><button className="cartbtn" id="cartbtn" type="button" aria-label="Open cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7zm3 0a3 3 0 0 1 6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"></path></svg><span className="cartbtn__n" id="cartn">0</span></button><a className="btn btn--green hide-sm" href="https://wa.me/918283913940?text=Hello%20Golden%20Agro%20Foodz%2C%20I%20would%20like%20to%20order.">WhatsApp</a></div>
</header>
<main>
<section className="shophead">
  <h1>The <span className="gold-text">shop.</span></h1>
  <p>Pick a category, choose a size, add to your cart. When you are done, the cart sends your order to us on WhatsApp.</p>
</section>
<ShopApp />
</main>
<footer>
  <div className="foot">
    <div className="tile"><img src="/images/logo-gaf.webp" alt="Golden Agro Foodz" width="424" height="294" /></div>
    <div><h4>Golden Agro Foodz</h4><p>Vill. Dharmu Chak, Teh. Baba Bakala Sahib,<br />Distt. Amritsar, Punjab (India) 143114</p><p style={{marginTop:"8px"}}>+91 82839 13940</p></div>
    <div><h4>FSSAI licences</h4><p>Lic. No. 2212064000032<br />Lic. No. 2212064000412</p></div>
  </div>
  <div className="copy"><span>© 2026 Golden Agro Foodz</span><span>Honey · Mustard oil · Turmeric powder · Gulkand</span></div>
</footer>

<a className="wa-float" href="https://wa.me/918283913940?text=Hello%20Golden%20Agro%20Foodz%2C%20I%20would%20like%20to%20order." aria-label="Chat on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.3.6 4.5 1.8 6.4L3 29l7.3-1.9c1.8 1 3.8 1.5 5.7 1.5 7 0 12.7-5.6 12.7-12.5S23 3 16 3zm0 22.900c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-4.300 1.100 1.200-4.200-.3-.4a10.200 10.200 0 0 1-1.600-5.400C5.500 9.900 10.200 5.300 16 5.300s10.500 4.600 10.500 10.200S21.800 25.900 16 25.900zm5.800-7.600c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200s-.8 1-.9 1.200c-.2.200-.3.200-.6.100-1.800-.9-3-1.600-4.200-3.600-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.2.200 2.100 3.300 5.200 4.600 1.900.8 2.600.9 3.600.7.600-.1 1.900-.8 2.100-1.500.3-.7.300-1.400.2-1.500-.1-.1-.3-.2-.6-.4z"></path></svg></a>
      <Fx />
    </>
  );
}
