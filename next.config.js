/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "www.nicepng.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
