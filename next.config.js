

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← HE MOST IMPORTANT AHE
  images: { unoptimized: true },
  trailingSlash: true,
  // distDir: 'out' ← He add karu nakos, default 'out' ch ahe
}
module.exports = nextConfig