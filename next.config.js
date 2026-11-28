module.exports = {
  poweredByHeader: false,
  async redirects() {
    // Old .html addresses keep working and point to the clean ones.
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/shop.html', destination: '/shop', permanent: true },
      { source: '/whatwedo.html', destination: '/whatwedo', permanent: true },
    ];
  },
};
