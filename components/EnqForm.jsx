'use client';
import { WA_NUMBER } from '../lib/site';

export default function EnqForm() {
  function onSubmit(ev) {
    ev.preventDefault();
    const f = ev.currentTarget;
    const p = [...f.querySelectorAll('input[name=p]:checked')].map((i) => i.value);
    const n = f.querySelector('#nm').value.trim(), m = f.querySelector('#ms').value.trim();
    const t = 'Hello Golden Agro Foodz, I would like to order' + (p.length ? ': ' + p.join(', ') : '') + '.' + (m ? ' ' + m + '.' : '') + (n ? ' My name is ' + n + '.' : '');
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
  }
  return (
    <form className="enq rv" id="enq" noValidate onSubmit={onSubmit}>
      <fieldset><legend>What do you need?</legend>
        {['Honey', 'Mustard oil', 'Turmeric powder', 'Gulkand'].map((x) => (
          <label className="pick" key={x}><input type="checkbox" name="p" value={x} /><span>{x}</span></label>
        ))}
      </fieldset>
      <div><label className="l" htmlFor="nm">Your name</label><input id="nm" type="text" autoComplete="name" /></div>
      <div><label className="l" htmlFor="ms">Quantity or note</label><textarea id="ms" placeholder="For example: 2 jars of honey, 5 litres of oil"></textarea></div>
      <button className="btn btn--gold" type="submit">Send on WhatsApp</button>
    </form>
  );
}
