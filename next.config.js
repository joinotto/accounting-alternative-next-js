/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static exports
  distDir: 'out',   // Output directory
  trailingSlash: false, // Remove trailing slashes from all paths
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
  // Enable CSS source maps in development
  productionBrowserSourceMaps: true,
  // Enable CSS optimization
  optimizeFonts: true,
  // Configure webpack for CSS handling
  webpack: (config, { isServer }) => {
    // Add file-loader for font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });
    
    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig