/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',        // Strapi شغال على بورت 1337
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'gcjiaakqkgxkiqzrrgyw.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};
export default nextConfig;
