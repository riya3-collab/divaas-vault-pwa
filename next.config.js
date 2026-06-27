/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← HE LINE NAHIYE MHANUN 'out' BANAT NAHI
  images: { unoptimized: true } // ← PWA sathi add kar
}
module.exports = nextConfig