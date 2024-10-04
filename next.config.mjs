/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '', // Optional, leave it empty if not needed
                pathname: '/**', // Allow all paths
            },
        ],
    },
};

export default nextConfig;