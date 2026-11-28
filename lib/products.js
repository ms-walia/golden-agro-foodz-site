// Shop catalogue. Edit prices and sizes here: [label, price in rupees, optional image].
export const PRODUCTS = {
  honey: { name: 'Honey', img: '/images/m-multi.webp', variants: [
    { id: 'multiflora', name: 'Multiflora honey', img: '/images/m-multi.webp', tag: 'Hills and plains', text: 'Gathered from the many flowers of the hills and the plains, with a naturally rich floral aroma and balanced sweetness for every day.', sizes: [['250g', 300], ['500g', 550], ['1kg', 1000]] },
    { id: 'jamun', name: 'Jamun honey', img: '/images/m-jamun.webp', tag: 'Dark and rich', text: 'A dark, rich honey with a deep taste. Raw and unprocessed.', sizes: [['250g', 450], ['500g', 800], ['1kg', 1500]] },
    { id: 'ajwain', name: 'Ajwain honey', img: '/images/m-ajwain.webp', tag: 'Warm and herbal', text: 'An amber honey from ajwain flowers with a warm, herbal note. Raw and unprocessed.', sizes: [['250g', 350], ['500g', 650], ['1kg', 1200]] },
    { id: 'kashmiri', name: 'Kashmiri Acacia honey', img: '/images/m-kashmiri.webp', tag: 'Light and mild', text: 'Collected from acacia blossoms: a light golden colour, a delicate floral aroma and a smooth, mild taste.', sizes: [['250g', 500], ['500g', 850], ['1kg', 1600]] },
    { id: 'blackforest', name: 'Black Forest honey', img: '/images/m-blackforest.webp', tag: 'Dark and bold', text: 'A dark, bold honey with a deep forest taste. Raw and unprocessed.', sizes: [['400g', 800]] },
  ] },
  oil: { name: 'Mustard oil', img: '/images/mustard-oil.webp', variants: [
    { id: 'oil', name: 'Mustard oil', img: '/images/mustard-oil.webp', tag: 'Everyday cooking', text: 'Golden mustard oil with a strong, true aroma, in a clean sealed bottle.', sizes: [['1L', 400], ['2L', 800], ['5L', 1900]] },
  ] },
  turmeric: { name: 'Turmeric powder', img: '/images/turmeric.webp', variants: [
    { id: 'turmeric', name: 'Turmeric powder', img: '/images/turmeric.webp', tag: 'Fine ground', text: 'Deep golden haldi, ground fine for dal, sabzi and milk.', sizes: [['500g', 300], ['1kg', 500]] },
  ] },
  gulkand: { name: 'Gulkand', img: '/images/gulkand-400.webp', variants: [
    { id: 'gulkand', name: 'Honey Rose Gulkand', img: '/images/gulkand-400.webp', tag: 'Rose and honey', text: 'Rose petals slow-mixed with honey into a cooling, fragrant preserve. Lovely on toast, in milk or on its own.', sizes: [['400g', 500, '/images/gulkand-400.webp']] },
  ] },
};
export const CATS = [['all', 'All'], ['honey', 'Honey'], ['oil', 'Oils'], ['turmeric', 'Turmeric'], ['gulkand', 'Gulkand']];
export const BLURB = { honey: 'Five varieties, each with its own character. Raw and unprocessed.', oil: 'Golden mustard oil for everyday cooking.', turmeric: 'Deep golden haldi, ground fine.', gulkand: 'Rose petals and honey, in a 400g jar.' };
export const STATES = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
// Honey varieties shown on the home page card and the What we do page.
export const HONEY = [
  ['multiflora', 'Multiflora', '/images/m-multi.webp', 'Hills and plains', 'Gathered from the many flowers of the hills and the plains, with a naturally rich floral aroma and balanced sweetness for every day.', 'Punjab and Himachal', 'A+'],
  ['jamun', 'Jamun', '/images/m-jamun.webp', 'Dark and rich', 'A dark, rich honey with a deep taste. Raw and unprocessed.', 'Punjab', 'A'],
  ['ajwain', 'Ajwain', '/images/m-ajwain.webp', 'Warm and herbal', 'An amber honey from ajwain flowers with a warm, herbal note. Raw and unprocessed.', 'Punjab', 'A'],
  ['kashmiri', 'Kashmiri Acacia', '/images/m-kashmiri.webp', 'Light and mild', 'Collected from acacia blossoms: a light golden colour, a delicate floral aroma and a smooth, mild taste.', 'Kashmir', 'A'],
  ['blackforest', 'Black Forest', '/images/m-blackforest.webp', 'Dark and bold', 'A dark, bold honey with a deep forest taste. Raw and unprocessed.', 'Deep forests of Himachal', 'A'],
];
