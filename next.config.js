/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://d2ff1k4aqqif3t.cloudfront.net",
        port: "",
        pathname: "/static/**",
      },
    ],
  },
};

module.exports = nextConfig;
