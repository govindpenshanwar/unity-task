/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "mir-s3-cdn-cf.behance.net"
            },
            {
                hostname: "www.angara.com"
            },
            {
                hostname: "www.gempetit.com"
            },
            {
                hostname: "www.kalyanjewellers.net"
            }

        ],
    },
}

module.exports = nextConfig
