// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com','i.insider.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'i.insider.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
};

export default nextConfig;
