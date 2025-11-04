/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: [],
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
  
  // Otimizações de bundle
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Webpack optimizations para melhor code splitting
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Otimizar chunk splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk para node_modules maiores
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Chunk separado para lucide-react (ícones)
            lucide: {
              name: 'lucide',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              chunks: 'all',
              priority: 30,
            },
          },
        },
      }
    }
    return config
  },
  
  // Headers de segurança e SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

