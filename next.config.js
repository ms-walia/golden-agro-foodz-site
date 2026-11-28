module.exports = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'geolocation=(self), camera=(), microphone=()' },
      ],
    }];
  },
  async redirects() {
    // Old .html addresses keep working and point to the clean ones.
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/shop.html', destination: '/shop', permanent: true },
      { source: '/whatwedo.html', destination: '/whatwedo', permanent: true },
    ];
  },
};
