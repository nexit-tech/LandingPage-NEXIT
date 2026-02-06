/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <--- O SEGREDO ESTÁ AQUI
  transpilePackages: ['gsap']
}

module.exports = nextConfig