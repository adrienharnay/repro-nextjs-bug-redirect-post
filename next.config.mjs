const REDIRECT_URL =
  "https://repro-nextjs-bug-redirect-post-proxied.vercel.app/";

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
