import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
            },
        ],
    },
};

export default nextConfig;
