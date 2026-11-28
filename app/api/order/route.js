import { NextResponse } from 'next/server';
import { clean, isPin } from '../../../lib/clean';

// Receives the order when the customer taps "Send on WhatsApp".
// For now it validates and records the order in the server log.
// Shiprocket goes here next: check delivery by pincode, create the shipment.
// Keep SHIPROCKET_EMAIL and SHIPROCKET_PASSWORD in environment variables, never in the website files.
export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'Bad request' }, { status: 400 }); }
  const c = b?.customer || {};
  const phone = clean(c.phone, 20).replace(/\D/g, '');
  const items = Array.isArray(b?.items) ? b.items.slice(0, 50) : [];
  if (!clean(c.name) || phone.length < 10 || !clean(c.street) || !clean(c.city) || !clean(c.state) || !isPin(c.pin) || !items.length) {
    return NextResponse.json({ error: 'Missing or invalid details' }, { status: 422 });
  }
  const order = {
    id: 'GAF-' + Date.now().toString(36).toUpperCase(),
    at: new Date().toISOString(),
    customer: { name: clean(c.name), phone, flat: clean(c.flat), street: clean(c.street), landmark: clean(c.landmark), city: clean(c.city), state: clean(c.state), pin: c.pin },
    items: items.map((i) => ({ name: clean(i.name), size: clean(i.size, 20), qty: Math.max(1, Math.min(99, parseInt(i.qty) || 1)), price: Number(i.price) || 0 })),
    total: Number(b.total) || 0,
  };
  console.log('ORDER', JSON.stringify(order));
  return NextResponse.json({ ok: true, id: order.id });
}
