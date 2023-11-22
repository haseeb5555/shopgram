/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   ppr: true,
  // },
  images: {
    domains: [ 'img.clerk.com','utfs.io'],
  },
  typescript:{
    ignoreBuildErrors:true
  }
}

module.exports = nextConfig;