import Fx from '../../components/Fx';
import HoneyCard from '../../components/HoneyCard';
import EnqForm from '../../components/EnqForm';
import JsonLd from '../../components/JsonLd';
import { pageMeta } from '../../lib/meta';
import { businessLd } from '../../lib/schema';

export const metadata = pageMeta({ title: 'Golden Agro Foodz | Honey, Mustard Oil, Turmeric & Gulkand, Amritsar', description: 'Golden Agro Foodz, Baba Bakala Sahib, Amritsar: raw honey in five varieties, mustard oil, turmeric powder and honey rose gulkand. FSSAI licensed. Order on WhatsApp.', path: '/' });

export default function Home() {
  return (
    <>
      <JsonLd data={businessLd} />
      <div className="progress" id="bar"></div>
<header className="top">
  <a href="#top" aria-label="Golden Agro Foodz, back to the top"><img src="/images/logo-gaf.webp" alt="Golden Agro Foodz" width="424" height="294" /></a>
  <nav aria-label="Main"><a href="#products">Products</a><a href="/shop">Shop</a><a href="/whatwedo">What we do</a><a href="#process">How we work</a><a href="#trust">Licences</a><a href="#order">Order</a></nav>
  <div className="top__actions"><button className="menubtn" id="menubtn" type="button" aria-label="Menu" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"></path></svg></button><a className="cartbtn" id="cartbtn" href="/shop#cart" aria-label="Open cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7zm3 0a3 3 0 0 1 6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"></path></svg><span className="cartbtn__n" id="cartn">0</span></a><a className="btn btn--green hide-sm" href="https://wa.me/918283913940?text=Hello%20Golden%20Agro%20Foodz%2C%20I%20would%20like%20to%20order.">WhatsApp</a></div>
</header>

<main id="top">
<section className="hero-m" aria-label="Golden Agro Foodz">
  <div className="hero-m__top">
    <p className="hero-m__addr">Vill. Dharmu Chak, Teh. Baba Bakala Sahib, Amritsar, Punjab</p>
    <h1><span className="gold-text">Golden</span><em>from the</em><em>farm gate.</em></h1>
  </div>
  <img className="hero-m__img" src="/images/hero-mobile.webp" alt="Golden Agro Foodz honey in five varieties, mustard oil, turmeric powder and honey rose gulkand on a wooden table" width="1080" height="1935" fetchPriority="high" />
  <div className="hero-m__cta">
    <a className="btn btn--gold" href="#products">Our products</a>
    <a className="btn btn--line" href="#order">Place order</a>
  </div>
</section>

<section className="hero">
  <div>
    <p className="hero__kicker">Baba Bakala Sahib · Amritsar, Punjab</p>
    <h1><span className="gold-text">Golden</span><em>from the</em><em>farm gate.</em></h1>
    <p className="lead">Honey, mustard oil, turmeric powder and gulkand, packed by Golden Agro Foodz and sent to your kitchen.</p>
    <div className="hero__cta">
      <a className="btn btn--gold" href="#products">See our products</a>
      <a className="btn btn--line" href="#order" style={{color:"var(--deep)"}}>Place an order</a>
    </div>
    <div className="hero__badges"><span className="chip">FSSAI licensed</span><span className="chip">Agmark</span><span className="chip">National Bee Board</span><span className="chip">PAU trained</span></div>
  </div>
  <div className="arches" aria-hidden="false">
    <div className="arch"><img src="/images/m-multi.webp" alt="Multiflora honey jar among wildflowers" width="900" height="832" /></div>
    <div className="arch"><img src="/images/mustard-oil.webp" alt="Bottle of mustard oil in a mustard field" width="900" height="900" /></div>
    <div className="arch"><img src="/images/turmeric.webp" alt="Jar of turmeric powder among turmeric plants" width="1200" height="853" /></div>
    <div className="arch"><img src="/images/gulkand-250.webp" alt="Honey Rose Gulkand jar" width="1312" height="1199" /></div>
  </div>
</section>

<div className="marquee" aria-hidden="true"><div className="marquee__row">
  <span>Raw honey</span><span>Mustard oil</span><span>Turmeric powder</span><span>Gulkand</span>
  <span>Raw honey</span><span>Mustard oil</span><span>Turmeric powder</span><span>Gulkand</span>
</div></div>

<section className="products" id="products">
  <div className="sec-head rv"><h2>Four things <span className="gold-text">we sell.</span></h2><p>Scroll through our range. Press View and order on any card to open the shop and fill your cart.</p></div>
  <div className="stack">
    <HoneyCard />
    <article className="card card--oil" id="c-oil">
      <div>
        <div className="card__no">02</div>
        <h3>Mustard oil</h3>
        <p>Golden mustard oil from Punjab's mustard fields, bottled for everyday cooking.</p>
        <ul><li>Strong, true mustard aroma</li><li>Packed in clean sealed bottles</li><li>Home and bulk orders</li></ul>
        <div className="card__btns"><a className="btn btn--green" href="/shop#oil">View and order</a></div>
      </div>
      <div className="card__media"><div className="big"><img src="/images/mustard-oil.webp" alt="Mustard oil bottle in a yellow mustard field" width="900" height="900" loading="lazy" /></div></div>
    </article>
    <article className="card card--turmeric" id="c-turmeric">
      <div>
        <div className="card__no">03</div>
        <h3>Turmeric powder</h3>
        <p>Deep golden haldi, ground fine for dal, sabzi and milk.</p>
        <ul><li>Bright colour and warm aroma</li><li>Sealed jars, easy to store</li><li>Retail and bulk orders</li></ul>
        <div className="card__btns"><a className="btn btn--gold" href="/shop#turmeric">View and order</a></div>
      </div>
      <div className="card__media"><div className="big"><img src="/images/turmeric.webp" alt="Turmeric powder jar with turmeric leaves" width="1200" height="853" loading="lazy" /></div></div>
    </article>
    <article className="card card--gulkand" id="c-gulkand">
      <div>
        <div className="card__no">04</div>
        <h3>Honey Rose Gulkand</h3>
        <p>Rose petals slow-mixed with honey into a cooling, fragrant preserve. Jars of 250g and 400g.</p>
        <ul><li>Rose petals and honey, nothing else to hide behind</li><li>Cooling in summer, lovely on toast or in milk</li><li>Two jar sizes, same golden label</li></ul>
        <div className="card__btns"><a className="btn btn--gold" href="/shop#gulkand">View and order</a></div>
      </div>
      <div className="card__media"><div className="big"><img src="/images/gulkand-400.webp" alt="Honey Rose Gulkand jars by Golden Agro Foodz" width="1400" height="788" loading="lazy" /></div></div>
    </article>
  </div>
</section>

<section className="process" id="process">
  <div className="sec-head rv" style={{marginBottom:"0"}}><h2>How it <span className="gold-text">reaches you.</span></h2></div>
  <div className="process__row">
    <div className="step rv"><h3>Sourced</h3><p>From fields and farms in Punjab and beyond.</p></div>
    <div className="step rv"><h3>Packed</h3><p>Sealed and labelled at our unit in Dharmu Chak.</p></div>
    <div className="step rv"><h3>Checked</h3><p>Licensed under FSSAI, with Agmark grading.</p></div>
    <div className="step rv"><h3>Delivered</h3><p>To your door, your shop or your café.</p></div>
  </div>
</section>

<section className="trust" id="trust">
  <div className="sec-head rv" style={{marginBottom:"0"}}><h2>Licensed and <span className="gold-text">certified.</span></h2></div>
  <div className="trust__grid">
    <div className="seal rv"><img src="/images/logo-fssai.webp" alt="FSSAI" width="270" height="148" /><small>FSSAI</small><b>Lic. No. 2212064000032<br />Lic. No. 2212064000412</b></div>
    <div className="seal rv"><img src="/images/logo-agmark.webp" alt="Agmark" width="300" height="300" /><small>Agmark</small><b>Government of India</b></div>
    <div className="seal rv"><img src="/images/logo-nbb.webp" alt="National Bee Board" width="194" height="181" /><small>Registered by</small><b>National Bee Board</b></div>
    <div className="seal rv"><img src="/images/logo-pau.webp" alt="Punjab Agricultural University" width="240" height="238" /><small>Trained by</small><b>PAU · KVK</b></div>
  </div>
</section>

<section className="order" id="order">
  <div className="rv">
    <h2>Order on <span className="gold-text">WhatsApp.</span></h2>
    <div className="info">
      <div><span>Phone and WhatsApp</span><a href="tel:+918283913940">+91 82839 13940</a></div>
      <div><span>Address</span>Vill. Dharmu Chak, Teh. Baba Bakala Sahib,<br />Distt. Amritsar, Punjab (India) 143114</div>
      <div><span>FSSAI</span>Lic. No. 2212064000032<br />Lic. No. 2212064000412</div>
      <div><a className="btn btn--line" style={{color:"var(--deep)"}} target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Dharmu+Chak+Baba+Bakala+Sahib+Amritsar+143114">Open in Google Maps</a></div>
    </div>
  </div>
  <EnqForm />
</section>
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
      <Fx home />
    </>
  );
}
