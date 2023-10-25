/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages:["ui", "db", "jwt"]
}

module.exports = nextConfig;
