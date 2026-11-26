/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 中英文两个静态页面分别导出为 index.html 与 en/index.html，
  // 这样任何按目录找 index 的静态服务器都能直接访问 /en/
  trailingSlash: true,
  output: 'export',
}

export default nextConfig
