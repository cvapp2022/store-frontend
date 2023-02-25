/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en","ar"],
    defaultLocale: "ar",
  },
  images: { domains: ['127.0.0.1'] },
}

module.exports = nextConfig
