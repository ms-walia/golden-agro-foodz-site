import { NextResponse } from 'next/server';
import { isPin } from '../../../lib/clean';

// Pincode -> city and state, using the India Post pincode directory.
export async function GET(req) {
  const pin = new URL(req.url).searchParams.get('pin');
  if (!isPin(pin)) return NextResponse.json({ error: 'Invalid pincode' }, { status: 400 });
  try {
    const r = await fetch(`https://api.postalpincode.in/pincode/${pin}`, { signal: AbortSignal.timeout(8000), next: { revalidate: 86400 } });
    const d = await r.json();
    const o = d?.[0]?.PostOffice?.[0];
    if (!o) return NextResponse.json({ error: 'Pincode not found' }, { status: 404 });
    return NextResponse.json({ city: o.District, state: o.State });
  } catch {
    return NextResponse.json({ error: 'Pincode lookup failed' }, { status: 502 });
  }
}
