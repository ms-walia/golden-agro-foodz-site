'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PRODUCTS, CATS, BLURB, STATES } from '../lib/products';
import { WA_NUMBER } from '../lib/site';

const money = (n) => '₹' + n.toLocaleString('en-IN');
const EMPTY = { name: '', phone: '', flat: '', street: '', landmark: '', city: '', state: '', pin: '' };

function matchState(n) {
  n = (n || '').toLowerCase().replace(/&/g, 'and');
  const exact = STATES.find((s) => s.toLowerCase() === n);
  if (exact) return exact;
  return STATES.find((s) => { const x = s.toLowerCase(); return n && (x.includes(n) || n.includes(x)); }) || '';
}
const getJSON = (u) => fetch(u).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
// Uses our own backend first, then the public service directly (for previews without a backend).
const reverse = (lat, lon) =>
  getJSON('/api/reverse?lat=' + lat + '&lon=' + lon).catch(() =>
    getJSON('https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&zoom=18&lat=' + lat + '&lon=' + lon).then((d) => {
      const a = d.address || {};
      return { flat: [a.house_number, a.building].filter(Boolean).join(', '), street: [a.road, a.neighbourhood || a.suburb || a.village || a.hamlet].filter(Boolean).join(', '), city: a.city || a.town || a.village || a.county || a.state_district || '', state: a.state || '', pin: (a.postcode || '').replace(/\D/g, '').slice(0, 6) };
    }));
const lookupPin = (pin) =>
  getJSON('/api/pincode?pin=' + pin).catch(() =>
    getJSON('https://api.postalpincode.in/pincode/' + pin).then((d) => {
      const o = d && d[0] && d[0].PostOffice && d[0].PostOffice[0];
      if (!o) throw new Error('none');
      return { city: o.District, state: o.State };
    }));

function Card({ pk, v, hl, onAdd }) {
  const [si, setSi] = useState(0);
  const [q, setQ] = useState(1);
  const src = v.sizes[si][2] || v.img;
  return (
    <article className={'pcard' + (hl ? ' hl' : '')} id={'p-' + pk + '-' + v.id}>
      <div className="pcard__img" style={{ '--bgimg': 'url("' + src + '")' }}><img src={src} alt={v.name} width="640" height="480" loading="lazy" /></div>
      <div className="pcard__body">
        <small className="tag">{v.tag}</small><h3>{v.name}</h3><p>{v.text}</p>
        <div className="sizes">
          {v.sizes.map((s, i) => (
            <button key={s[0]} type="button" className="size" aria-pressed={i === si} onClick={() => setSi(i)}><b>{s[0]}</b><span>{money(s[1])}</span></button>
          ))}
        </div>
        <div className="addrow">
          <div className="qty">
            <button type="button" aria-label="Fewer" onClick={() => setQ(Math.max(1, q - 1))}>−</button>
            <output>{q}</output>
            <button type="button" aria-label="More" onClick={() => setQ(Math.min(99, q + 1))}>+</button>
          </div>
          <button type="button" className="btn btn--gold" onClick={() => onAdd(pk, v, si, q)}>Add to cart</button>
          <span className="price-now">{money(v.sizes[si][1] * q)}</span>
        </div>
      </div>
    </article>
  );
}

export default function ShopApp() {
  const [cat, setCat] = useState('all');
  const [hl, setHl] = useState('');
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState(EMPTY);
  const [bad, setBad] = useState(null);
  const [loc, setLoc] = useState({ busy: false, text: '', err: false });
  const [toast, setToast] = useState('');
  const toastT = useRef();

  const subtotal = cart.reduce((a, l) => a + l.price * l.q, 0);
  const count = cart.reduce((a, l) => a + l.q, 0);

  // load / save cart
  useEffect(() => { try { setCart(JSON.parse(localStorage.getItem('gaf-cart') || '[]')); } catch {} setReady(true); }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem('gaf-cart', JSON.stringify(cart)); } catch {}
    const n = document.getElementById('cartn'); if (n) n.textContent = count;
  }, [cart, ready, count]);

  const say = useCallback((m) => { setToast(m); clearTimeout(toastT.current); toastT.current = setTimeout(() => setToast(''), 1800); }, []);
  const openCart = useCallback(() => { setStep(1); setOpen(true); }, []);

  // header cart button
  useEffect(() => {
    const b = document.getElementById('cartbtn');
    if (!b) return;
    b.addEventListener('click', openCart);
    return () => b.removeEventListener('click', openCart);
  }, [openCart]);

  // lock page scroll while the cart is open
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);

  // #honey, #honey-jamun, #cart ...
  useEffect(() => {
    const route = () => {
      const h = location.hash.replace('#', '');
      setHl('');
      if (h === 'cart') { setCat('all'); openCart(); return; }
      const m = h.match(/^(honey|oil|turmeric|gulkand)(?:-(\w+))?$/);
      if (m) {
        setCat(m[1]);
        if (m[2]) { setHl('p-' + m[1] + '-' + m[2]); setTimeout(() => { const c = document.getElementById('p-' + m[1] + '-' + m[2]); if (c) c.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 120); }
        else window.scrollTo(0, 0);
      } else setCat('all');
    };
    route();
    addEventListener('hashchange', route);
    return () => removeEventListener('hashchange', route);
  }, [openCart]);

  function add(pk, v, si, q) {
    const sz = v.sizes[si], key = v.id + '|' + sz[0];
    setCart((c) => {
      const f = c.find((l) => l.key === key);
      if (f) return c.map((l) => (l === f ? { ...l, q: l.q + q } : l));
      return [...c, { key, p: PRODUCTS[pk].name, name: v.name, size: sz[0], price: sz[1], img: v.img, q }];
    });
    say('Added: ' + v.name + ' ' + sz[0] + ' × ' + q);
    const b = document.getElementById('cartbtn');
    if (b) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
  }
  const setQty = (i, q) => setCart((c) => c.map((l, k) => (k === i ? { ...l, q: Math.max(1, Math.min(99, q)) } : l)));
  const remove = (i) => setCart((c) => c.filter((_, k) => k !== i));
  const field = (k) => ({ value: info[k], onChange: (e) => setInfo((s) => ({ ...s, [k]: e.target.value })), className: bad && bad.includes(k) ? 'fld-bad' : undefined });

  const addrText = () => [info.flat, info.street, info.landmark ? 'Near ' + info.landmark : '', info.city, info.state + (info.pin ? ' - ' + info.pin : '')].filter(Boolean).join(', ');
  const msg = () => {
    let t = 'Hello Golden Agro Foodz, I would like to order:\n';
    cart.forEach((l, i) => { t += (i + 1) + '. ' + l.name + ' (' + l.size + ') × ' + l.q + ' = ' + money(l.price * l.q) + '\n'; });
    return t + 'Total: ' + money(subtotal) + '\n\nName: ' + info.name + '\nPhone: ' + info.phone + '\nAddress: ' + addrText();
  };

  function onPin(e) {
    const v = e.target.value.replace(/\D/g, '').slice(0, 6);
    setInfo((s) => ({ ...s, pin: v }));
    if (v.length === 6) lookupPin(v).then((r) => setInfo((s) => ({ ...s, city: s.city || r.city || '', state: s.state || matchState(r.state) }))).catch(() => {});
  }
  function useLocation() {
    if (!navigator.geolocation) { setLoc({ busy: false, err: true, text: 'Your browser cannot share its location. Please type the address.' }); return; }
    setLoc({ busy: true, err: false, text: 'Finding your location...' });
    navigator.geolocation.getCurrentPosition(
      (p) => reverse(p.coords.latitude.toFixed(6), p.coords.longitude.toFixed(6)).then((r) => {
        setInfo((s) => ({ ...s, flat: r.flat || s.flat, street: r.street || s.street, city: r.city || s.city, pin: r.pin || s.pin, state: matchState(r.state) || s.state }));
        setLoc({ busy: false, err: false, text: 'Address filled in. Please check it and add your house or flat name.' });
      }).catch(() => setLoc({ busy: false, err: true, text: 'Could not find the address. Please type it in.' })),
      (e) => setLoc({ busy: false, err: true, text: e && e.code === 1 ? 'Location permission was denied. Please type the address.' : 'Could not get your location. Please type the address.' }),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
    );
  }
  function review() {
    const ph = info.phone.replace(/\D/g, '');
    const b = [];
    if (!info.name.trim()) b.push('name');
    if (ph.length < 10 || ph.length > 13) b.push('phone');
    if (!info.street.trim()) b.push('street');
    if (!info.city.trim()) b.push('city');
    if (!info.state) b.push('state');
    if (!/^\d{6}$/.test(info.pin)) b.push('pin');
    setBad(b.length ? b : null);
    if (!b.length) setStep(3);
  }
  function send() {
    try {
      fetch('/api/order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, keepalive: true, body: JSON.stringify({ customer: info, items: cart.map((l) => ({ name: l.name, size: l.size, qty: l.q, price: l.price })), total: subtotal }) }).catch(() => {});
    } catch {}
    setTimeout(() => { setCart([]); setStep(1); say('Order message opened in WhatsApp'); }, 400);
  }

  const total = <div className="grand"><span>Total</span><span>{money(subtotal)}</span></div>;
  let body, totals = null, foot;
  if (!cart.length && step !== 3) {
    body = <div className="empty"><h3>Your cart is empty</h3><p>Pick a product, choose a size and press Add to cart. It will show up here.</p></div>;
    foot = <button type="button" className="btn btn--green" onClick={() => setOpen(false)}>Keep browsing</button>;
  } else if (step === 1) {
    body = <>
      {cart.map((l, i) => (
        <div className="line" key={l.key}>
          <img src={l.img} alt="" width="64" height="64" />
          <div><b>{l.name}</b><small>{l.size} · {money(l.price)} each</small>
            <div className="q"><button type="button" aria-label="Fewer" onClick={() => setQty(i, l.q - 1)}>−</button><span>{l.q}</span><button type="button" aria-label="More" onClick={() => setQty(i, l.q + 1)}>+</button></div><br />
            <button className="rm" type="button" onClick={() => remove(i)}>Remove</button></div>
          <div className="amt">{money(l.price * l.q)}</div>
        </div>
      ))}
      <div className="note">Delivery charges, if any, are confirmed on WhatsApp.</div>
    </>;
    totals = <><div><span>Subtotal</span><span>{money(subtotal)}</span></div>{total}</>;
    foot = <button type="button" className="btn btn--gold" onClick={() => setStep(2)}>Continue</button>;
  } else if (step === 2) {
    body = <>
      <label className="l" htmlFor="c-n">Your name</label><input id="c-n" type="text" autoComplete="name" {...field('name')} />
      <label className="l" htmlFor="c-p">Phone number</label><input id="c-p" type="tel" autoComplete="tel" inputMode="tel" {...field('phone')} />
      <button type="button" className="locbtn" disabled={loc.busy} onClick={useLocation}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /><circle cx="12" cy="12" r="7.5" /></svg>Use my current location
      </button>
      {loc.text && <p className={'locmsg' + (loc.err ? ' err' : '')}>{loc.text}</p>}
      <label className="l" htmlFor="c-f">House / flat / apartment name</label><input id="c-f" type="text" autoComplete="address-line1" placeholder="e.g. Flat 4B, Sunrise Apartments" {...field('flat')} />
      <label className="l" htmlFor="c-s">Street and area</label><input id="c-s" type="text" autoComplete="address-line2" placeholder="Street name, colony or locality" {...field('street')} />
      <label className="l" htmlFor="c-lmk">Landmark (optional)</label><input id="c-lmk" type="text" placeholder="Near..." {...field('landmark')} />
      <div className="g2">
        <div><label className="l" htmlFor="c-pin">Pincode</label><input id="c-pin" type="text" inputMode="numeric" maxLength={6} autoComplete="postal-code" value={info.pin} onChange={onPin} className={bad && bad.includes('pin') ? 'fld-bad' : undefined} /></div>
        <div><label className="l" htmlFor="c-c">City</label><input id="c-c" type="text" autoComplete="address-level2" {...field('city')} /></div>
      </div>
      <label className="l" htmlFor="c-st">State</label>
      <select id="c-st" autoComplete="address-level1" {...field('state')}><option value="">Select state</option>{STATES.map((s) => <option key={s}>{s}</option>)}</select>
      {bad && <p className="note" style={{ background: '#fde6e0', color: '#7a2a1a' }}>Please fill in your name, a 10 digit phone number, street and area, city, state and a 6 digit pincode.</p>}
    </>;
    totals = total;
    foot = <>
      <button type="button" className="btn btn--line" style={{ color: 'var(--deep)' }} onClick={() => setStep(1)}>Back</button>
      <button type="button" className="btn btn--gold" onClick={review}>Review order</button>
    </>;
  } else {
    body = <>
      <div className="done"><h3>Check and send</h3><p>This is exactly what we will receive on WhatsApp.</p></div>
      <div className="note" style={{ whiteSpace: 'pre-wrap', fontSize: '13px' }}>{msg()}</div>
    </>;
    totals = total;
    foot = <>
      <button type="button" className="btn btn--line" style={{ color: 'var(--deep)' }} onClick={() => setStep(2)}>Back</button>
      <a className="btn btn--green" target="_blank" rel="noopener" href={'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg())} onClick={send}>Send on WhatsApp</a>
    </>;
  }

  const keys = Object.keys(PRODUCTS);
  return (
    <>
      <div className="cats"><div className="cats__in" id="cats" role="group" aria-label="Categories">
        {CATS.map((c) => (
          <button key={c[0]} type="button" className="cat" aria-pressed={cat === c[0]} onClick={() => { setCat(c[0]); history.replaceState(null, '', '#' + c[0]); }}>{c[1]}</button>
        ))}
      </div></div>
      <div className="shopwrap" id="shop">
        {keys.map((pk) => (
          <section className="group" id={'g-' + pk} key={pk} style={cat === 'all' || cat === pk ? undefined : { display: 'none' }}>
            <h2>{PRODUCTS[pk].name}</h2><p>{BLURB[pk]}</p>
            <div className="grid">{PRODUCTS[pk].variants.map((v) => <Card key={v.id} pk={pk} v={v} hl={hl === 'p-' + pk + '-' + v.id} onAdd={add} />)}</div>
          </section>
        ))}
      </div>
      <div className={'scrim' + (open ? ' open' : '')} id="scrim" onClick={() => setOpen(false)}></div>
      <aside className={'drawer' + (open ? ' open' : '')} id="drawer" role="dialog" aria-modal="true" aria-labelledby="dtitle" aria-hidden={!open}>
        <div className="drawer__head"><h2 id="dtitle">Your cart</h2><button className="drawer__x" id="dclose" type="button" aria-label="Close cart" onClick={() => setOpen(false)}>✕</button></div>
        <div className="steps" id="steps">{['1 Cart', '2 Details', '3 Send'].map((s, i) => <span key={s} className={step === i + 1 ? 'on' : undefined}>{s}</span>)}</div>
        <div className="drawer__body" id="dbody">{body}</div>
        <div className="totals" id="totals">{totals}</div>
        <div className="drawer__foot" id="dfoot">{foot}</div>
      </aside>
      <div className={'toast' + (toast ? ' show' : '')} id="toast" role="status">{toast}</div>
    </>
  );
}
