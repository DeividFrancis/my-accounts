/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/transaction",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
