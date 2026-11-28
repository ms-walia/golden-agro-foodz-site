'use client';
import { useRef, useState, useEffect } from 'react';
import { HONEY } from '../lib/products';
import { applyBg } from '../lib/bg';

// Home page honey card: pick a variety, the photo, text and order link change.
export default function HoneyCard() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(0);
  const img = useRef(null);
  const v = HONEY[i];

  function pick(n) {
    if (n === i) return;
    setI(n);
    img.current && img.current.classList.add('swap');
    setTimeout(() => setShown(n), 180);
  }
  useEffect(() => {
    const el = img.current;
    if (!el) return;
    applyBg(el);
    el.classList.remove('swap');
  }, [shown]);

  return (
    <article className="card card--honey" id="c-honey">
      <div>
        <div className="card__no">01</div>
        <h3>Honey</h3>
        <div className="hv">
          <div className="vtabs" role="group" aria-label="Honey varieties">
            {HONEY.map((h, n) => (
              <button key={h[0]} type="button" className="vtab" aria-pressed={n === i} onClick={() => pick(n)}>
                <img src={h[2]} alt="" width="60" height="60" loading="lazy" />{h[1].replace(' Acacia', '')}
              </button>
            ))}
          </div>
          <div className="vinfo"><h4>{v[1]} honey</h4><p>{v[4]}</p><small>{v[3]}</small></div>
        </div>
        <div className="card__btns"><a className="btn btn--gold" id="honey-go" href={'/shop#honey-' + v[0]}>View and order</a></div>
      </div>
      <div className="card__media"><div className="big"><img ref={img} id="honey-img" src={HONEY[shown][2]} alt="Golden Agro honey jar" width="1600" height="900" /></div></div>
    </article>
  );
}
