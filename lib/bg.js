// Gives card images a blurred copy of themselves behind them, and marks tall images.
export function applyBg(i) {
  if (!i) return;
  const f = () => i.classList.toggle('port', i.naturalHeight > i.naturalWidth * 1.1);
  i.onload = f;
  if (i.complete) f();
  const b = i.closest('.big');
  if (b) b.style.setProperty('--bgimg', 'url("' + i.getAttribute('src') + '")');
}
