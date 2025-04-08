/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "http", hostname: "39.119.222.230" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

export default nextConfig;
