import { NextResponse } from 'next/server';
import { clean } from '../../../lib/clean';

// "Use my current location": turns latitude and longitude into address fields.
// Uses OpenStreetMap Nominatim (free). Swap for Google Geocoding later by editing this one file.
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lat = parseFloat(searchParams.get('lat'));
  const lon = parseFloat(searchParams.get('lon'));
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    return NextResponse.json({ error: 'Invalid coordinates' }, { status: 400 });
  }
  try {
    const r = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&zoom=18&lat=${lat}&lon=${lon}`,
      { headers: { 'User-Agent': 'GoldenAgroFoodz-website/1.0 (goldenagrofoodz.com order form)', 'Accept-Language': 'en' }, signal: AbortSignal.timeout(8000) }
    );
    if (!r.ok) throw new Error('geocoder ' + r.status);
    const a = (await r.json()).address || {};
    return NextResponse.json({
      flat: clean([a.house_number, a.building].filter(Boolean).join(', ')),
      street: clean([a.road, a.neighbourhood || a.suburb || a.village || a.hamlet].filter(Boolean).join(', ')),
      city: clean(a.city || a.town || a.village || a.county || a.state_district),
      state: clean(a.state),
      pin: clean(a.postcode).replace(/\D/g, '').slice(0, 6),
    });
  } catch {
    return NextResponse.json({ error: 'Address lookup failed' }, { status: 502 });
  }
}
