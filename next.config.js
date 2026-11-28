/** The site pages are plain HTML in /public and keep their exact design.
 *  Next.js serves them and adds the backend in /app/api. */
module.exports = {
  poweredByHeader: false,
  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
      { source: '/shop', destination: '/shop.html' },
      { source: '/whatwedo', destination: '/whatwedo.html' },
    ];
  },
};
