

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← Ahe ka?
  trailingSlash: true,        // ← HE MOST IMPORTANT FOR 404
  images: { unoptimized: true },
}
module.exports = nextConfig

