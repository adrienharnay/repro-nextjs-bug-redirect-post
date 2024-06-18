const REDIRECT_URL = "http://localhost:3000";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `${REDIRECT_URL}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
