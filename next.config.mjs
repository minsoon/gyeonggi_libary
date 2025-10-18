import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://toysmth-api.toysmthiot.com:8085/:path*',
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
}

export default nextConfig
