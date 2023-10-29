/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages:["ui", "jwt", "store"]
}

module.exports = nextConfig;
