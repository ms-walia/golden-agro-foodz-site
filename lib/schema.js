import { SITE_URL } from './site';

export const businessLd = {
  '@context': 'https://schema.org', '@type': 'Store', '@id': SITE_URL + '/#business',
  name: 'Golden Agro Foodz', url: SITE_URL + '/', logo: SITE_URL + '/images/logo-gaf.webp', image: SITE_URL + '/images/og-image.jpg',
  description: 'Raw honey, mustard oil, turmeric powder and honey rose gulkand from Baba Bakala Sahib, Amritsar.',
  telephone: '+918283913940',
  address: { '@type': 'PostalAddress', streetAddress: 'Vill. Dharmu Chak, Teh. Baba Bakala Sahib', addressLocality: 'Amritsar', addressRegion: 'Punjab', postalCode: '143114', addressCountry: 'IN' },
  areaServed: 'Amritsar, Punjab, India',
  identifier: [{ '@type': 'PropertyValue', propertyID: 'FSSAI licence', value: '2212064000032' }, { '@type': 'PropertyValue', propertyID: 'FSSAI licence', value: '2212064000412' }],
  knowsAbout: ['Honey', 'Mustard oil', 'Turmeric powder', 'Gulkand'],
};
export const crumbs = (name, path) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' }, { '@type': 'ListItem', position: 2, name, item: SITE_URL + path }],
});
