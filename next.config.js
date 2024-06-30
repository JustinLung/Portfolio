/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2300, 2500],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
      },
    ],
    path: "/_next/image",
    loader: "default",
  },
};
