/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/invoicing/zoho-alternative',
        permanent: true,
      },
    ]
  },
  // Disable static generation
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig 