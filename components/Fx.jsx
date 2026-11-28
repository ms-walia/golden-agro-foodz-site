'use client';
import { useEffect } from 'react';
import { applyBg } from '../lib/bg';

// Page effects shared by all pages: scroll progress bar, reveal on scroll, mobile menu, cart count.
export default function Fx({ home = false }) {
  useEffect(() => {
    const root = document.documentElement;
    const bar = document.getElementById('bar');
    const onScroll = () => {
      const h = root.scrollHeight - innerHeight, y = scrollY;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
      if (home) root.style.setProperty('--sy', y);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const els = [...document.querySelectorAll('.rv')];
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
      els.forEach((el, i) => {
        if (home) el.style.transitionDelay = (el.classList.contains('step') || el.classList.contains('seal')) ? (i % 4) * 80 + 'ms' : '0ms';
        io.observe(el);
      });
    } else els.forEach((el) => el.classList.add('in'));

    const h = document.querySelector('header.top'), b = document.getElementById('menubtn');
    const toggle = () => { const o = h.classList.toggle('open'); b.setAttribute('aria-expanded', o); };
    const close = () => { h.classList.remove('open'); if (b) b.setAttribute('aria-expanded', 'false'); };
    if (b) b.addEventListener('click', toggle);
    const links = h ? [...h.querySelectorAll('nav a')] : [];
    links.forEach((a) => a.addEventListener('click', close));

    try {
      const c = JSON.parse(localStorage.getItem('gaf-cart') || '[]');
      const n = document.getElementById('cartn');
      if (n) n.textContent = c.reduce((a, l) => a + l.q, 0);
    } catch {}

    if (home) document.querySelectorAll('.card__media .big img').forEach(applyBg);

    return () => {
      removeEventListener('scroll', onScroll);
      if (io) io.disconnect();
      if (b) b.removeEventListener('click', toggle);
      links.forEach((a) => a.removeEventListener('click', close));
    };
  }, [home]);
  return null;
}
