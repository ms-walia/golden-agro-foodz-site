import Fx from '../../../components/Fx';
import WwdHoney from '../../../components/WwdHoney';
import JsonLd from '../../../components/JsonLd';
import { pageMeta } from '../../../lib/meta';
import { crumbs } from '../../../lib/schema';
import { FAQ } from '../../../lib/faq';

export const metadata = pageMeta({ title: 'What We Do | Golden Agro Foodz, Amritsar', description: 'Learn what Golden Agro Foodz does: raw honey, mustard oil, turmeric powder and honey rose gulkand from Baba Bakala Sahib, Amritsar, Punjab.', path: '/whatwedo' });

const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function WhatWeDo() {
  return (
    <>
      <JsonLd data={crumbs('What We Do', '/whatwedo')} />
      <JsonLd data={faqLd} />
      <div className="progress" id="bar"></div>
<header className="top">
  <a href="/" aria-label="Golden Agro Foodz, home"><img src="/images/logo-gaf.webp" alt="Golden Agro Foodz" width="424" height="294" /></a>
  <nav aria-label="Main"><a href="/">Home</a><a href="/#products">Products</a><a href="/shop">Shop</a><a href="/whatwedo">What we do</a><a href="/#order">Contact</a></nav>
  <div className="top__actions"><button className="menubtn" id="menubtn" type="button" aria-label="Menu" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"></path></svg></button><a className="cartbtn" id="cartbtn" href="/shop#cart" aria-label="Open cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7zm3 0a3 3 0 0 1 6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"></path></svg><span className="cartbtn__n" id="cartn">0</span></a><a className="btn btn--green hide-sm" href="https://wa.me/918283913940?text=Hello%20Golden%20Agro%20Foodz%2C%20I%20would%20like%20to%20order.">WhatsApp</a></div>
</header>
<main>
<section className="wwd-hero">
  <h1>What <span className="gold-text">we do.</span></h1>
  <p>Golden Agro Foodz is a farm-to-kitchen food brand from Baba Bakala Sahib, near Amritsar in Punjab. We make raw honey in five varieties, cold-pressed mustard oil, farm-grown turmeric powder and honey rose gulkand, and every batch carries a batch number you can quote when you order.</p>
</section>
<WwdHoney /><section className="wsec" id="oil">
  <div className="fig" style={{"--bgimg":"url('/images/mustard-oil.webp')"}}><img src="/images/mustard-oil.webp" alt="Mustard oil bottle" width="900" height="675" loading="lazy" /></div>
  <div className="rv txt">
    <h2>Mustard oil</h2>
    <div className="scroll"><p className="lede">Golden mustard oil for everyday cooking.</p>
    <p className="batch">Current batch: 01</p>
    <div className="seo" data-slot="oil">
      <p>Our mustard oil is made from mustard seed grown in the fields of Hanumangarh. We press it cold on our own farm, so the oil keeps the strong, true aroma that Punjabi kitchens expect, and it is filled into clean sealed bottles.</p>
      <p>Cold-pressed mustard oil is the traditional oil for tadka, sabzi, parathas and homemade pickles. Order a 1 litre bottle for the kitchen, or a 2 or 5 litre pack for a larger family or a small eatery.</p>
    </div>
</div>
    <a className="btn btn--green" href="/shop#oil">View and order</a>
  </div>
</section><section className="wsec" id="turmeric">
  <div className="fig" style={{"--bgimg":"url('/images/turmeric.webp')"}}><img src="/images/turmeric.webp" alt="Turmeric powder jar" width="900" height="675" loading="lazy" /></div>
  <div className="rv txt">
    <h2>Turmeric powder</h2>
    <div className="scroll"><p className="lede">Deep golden haldi, ground fine.</p>
    <p className="batch">Current batch: H03</p>
    <div className="seo" data-slot="turmeric">
      <p>Our turmeric is grown on our own farms and grown organically. After harvest we dry the turmeric and prepare it into powder by the traditional method, then pack it fine and fresh. It has the deep golden colour and warm aroma of real haldi.</p>
      <p>Turmeric is used every day in Indian cooking: dal, sabzi, rice and the golden milk many people drink at night. We pack it in 500g and 1kg sizes for homes, shops and small kitchens.</p>
    </div>
</div>
    <a className="btn btn--green" href="/shop#turmeric">View and order</a>
  </div>
</section><section className="wsec" id="gulkand">
  <div className="fig" style={{"--bgimg":"url('/images/gulkand-400.webp')"}}><img src="/images/gulkand-400.webp" alt="Honey Rose Gulkand jars" width="900" height="675" loading="lazy" /></div>
  <div className="rv txt">
    <h2>Honey Rose Gulkand</h2>
    <div className="scroll"><p className="lede">Rose petals and our multiflora honey in a 400g jar.</p>
    <p className="batch">Current batch: 02</p>
    <div className="seo" data-slot="gulkand">
      <p>Our Honey Rose Gulkand is made from our multiflora honey and flowers from the same farm where we collect the honey. The flower petals are slowly mixed with honey into a sweet, fragrant preserve.</p>
      <p>Gulkand is a traditional Indian favourite that people enjoy as a cooling treat in summer. Have a spoonful on its own, spread it on toast or bread, or stir it into cold milk. It comes in a 400g jar.</p>
    </div>
</div>
    <a className="btn btn--green" href="/shop#gulkand">View and order</a>
  </div>
</section>
<section className="wtrust" id="trust">
  <h2>Quality you can check</h2>
  <p>We keep our paperwork in order so you can buy with confidence. Ask us on WhatsApp for the details of any batch.</p>
  <div className="tgrid">
    <div className="tcard"><img src="/images/logo-nbb.webp" alt="National Bee Board" width="200" height="120" loading="lazy" /><h3>National Bee Board</h3><p>Our farms are registered with the National Bee Board (NBB).</p></div>
    <div className="tcard"><img src="/images/logo-agmark.webp" alt="Agmark" width="200" height="120" loading="lazy" /><h3>Agmark grades</h3><p>Multiflora honey is graded A+. Our other honeys are graded A.</p></div>
    <div className="tcard"><h3>NABL lab tested</h3><p>Our honey is tested at a NABL-accredited laboratory and has passed all the tests, including NMR, which checks honey for added sugar syrups.</p></div>
    <div className="tcard"><h3>Batch numbers</h3><table><tbody><tr><td>Honey (all varieties)</td><td>05</td></tr><tr><td>Honey Rose Gulkand</td><td>02</td></tr><tr><td>Mustard oil</td><td>01</td></tr><tr><td>Turmeric powder</td><td>H03</td></tr></tbody></table></div>
  </div>
</section>
<section className="wfaq" id="faq">
  <h2>Questions we get asked</h2>
  <details><summary>Where does your honey come from?</summary><p>Multiflora honey comes from Punjab and Himachal. Jamun and Ajwain honey come from parts of Punjab, Kashmiri Acacia honey comes from Kashmir, and Black Forest honey comes from the deep forests of Himachal.</p></details>
  <details><summary>Is your honey tested?</summary><p>Yes. Our honey is tested at a NABL-accredited laboratory and has passed all the tests, including NMR. Our farms are registered with the National Bee Board, Multiflora honey is Agmark grade A+ and our other honeys are grade A.</p></details>
  <details><summary>How is your mustard oil made?</summary><p>It is made from mustard grown in the fields of Hanumangarh and cold pressed on our own farm.</p></details>
  <details><summary>How is your turmeric powder made?</summary><p>The turmeric is grown organically on our own farms. We dry it and prepare it into powder by the traditional method.</p></details>
  <details><summary>What is Honey Rose Gulkand made from?</summary><p>It is made from our multiflora honey and flowers from the farm where we collect the honey.</p></details>
  <details><summary>How do I place an order?</summary><p>Open the Shop page, choose your products and sizes, add them to the cart and send the order to us on WhatsApp. You can also message us directly on +91 82839 13940.</p></details>
  <details><summary>Where do you deliver?</summary><p>Message us on WhatsApp at +91 82839 13940 with your city and pincode and we will confirm delivery to you.</p></details>
  <details><summary>Are your products FSSAI licensed?</summary><p>Yes. Golden Agro Foodz holds FSSAI licence numbers 2212064000032 and 2212064000412.</p></details>
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
      <Fx />
    </>
  );
}
