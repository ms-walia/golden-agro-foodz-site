'use client';
import { useEffect, useRef, useState } from 'react';
import { HONEY } from '../lib/products';

// What we do page honey card: swipe the photo, the text changes.
export default function WwdHoney() {
  const sc = useRef(null);
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const [info, setInfo] = useState(0);
  const v = HONEY[info];

  useEffect(() => {
    const el = sc.current; let t;
    const onScroll = () => { clearTimeout(t); t = setTimeout(() => setI(Math.max(0, Math.min(HONEY.length - 1, Math.round(el.scrollLeft / el.clientWidth)))), 40); };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { el.removeEventListener('scroll', onScroll); clearTimeout(t); };
  }, []);
  useEffect(() => {
    if (i === info) return;
    setFade(true);
    const t = setTimeout(() => { setInfo(i); setFade(false); }, 120);
    return () => clearTimeout(t);
  }, [i, info]);

  const go = (k) => sc.current.scrollTo({ left: k * sc.current.clientWidth, behavior: 'smooth' });

  return (
    <section className="wsec" id="honey">
      <div className="fig" id="hfig" style={{ '--bgimg': "url('" + HONEY[i][2] + "')" }}>
        <div className="hscroll" id="hscroll" ref={sc} aria-label="Honey varieties, swipe sideways">
          {HONEY.map((h, n) => (
            <div className="hslide" key={h[0]}><img src={h[2]} alt={h[1] + ' honey jar'} width="900" height="900" loading={n ? 'lazy' : undefined} /></div>
          ))}
        </div>
        {i === 0 && <span className="hswipe">Swipe</span>}
        <div className="hdots" id="hdots">
          {HONEY.map((h, n) => (
            <button key={h[0]} type="button" aria-label={h[1] + ' honey'} aria-current={n === i} style={{ backgroundImage: 'url(' + h[2] + ')' }} onClick={() => go(n)}></button>
          ))}
        </div>
      </div>
      <div className="rv txt">
        <h2>Raw honey</h2>
        <div className="scroll">
          <p className="lede">Five varieties. Swipe the photo to see each one.</p>
          <p className="batch">Current batch: 05</p>
          <div className={'vinfo2' + (fade ? ' sw' : '')} id="vinfo" aria-live="polite">
            <h3>{v[1]} honey</h3><small>{v[3]}</small><p>{v[4]}</p><span className="vmeta">From {v[5]} · Agmark grade {v[6]}</span>
          </div>
          <div className="seo" data-slot="honey">
            <p>We gather our honey from different regions, so each variety tastes of the place it comes from. Multiflora honey comes from Punjab and Himachal. Jamun and Ajwain honey come from parts of Punjab. Kashmiri Acacia honey comes from Kashmir, and Black Forest honey comes from the deep forests of Himachal. All five are raw honey and are packed in clean sealed jars.</p>
            <p>Our farms are registered with the National Bee Board. Multiflora honey is graded A+ under Agmark and our other honeys are graded A. Honey is a natural sweetener and many families use it in tea, with warm water and lemon, on parathas and toast, or in sweets in place of sugar. Pick the variety you like by swiping the photo above.</p>
          </div>
        </div>
        <a className="btn btn--green" id="hgo" href={'/shop#honey-' + HONEY[i][0]}>View and order</a>
      </div>
    </section>
  );
}
