export const clean = (v, max = 200) => String(v ?? '').replace(/[\u0000-\u001f<>]/g, ' ').trim().slice(0, max);
export const isPin = (v) => /^\d{6}$/.test(String(v || ''));
