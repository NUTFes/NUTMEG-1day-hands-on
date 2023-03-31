/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    SSR_API_URI: 'http://api:1323',
    CSR_API_URI: 'http://localhost:1323',
  },
}

module.exports = nextConfig
