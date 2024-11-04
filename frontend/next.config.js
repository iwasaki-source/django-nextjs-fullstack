/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
        {
            source: '/api/:path*',
            destination: 'http://localhost:8000/api/:path*',
            permanent: true,
        },
    ]
  }
}

module.exports = nextConfig
