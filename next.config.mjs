/** @type {import('next').NextConfig} */
const cspProd =
  "default-src 'self'; " +
  "script-src 'self'; " +
  "style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data:; " +
  "font-src 'self' data:; " +
  "connect-src 'self'; " +
  "frame-ancestors 'none'; base-uri 'self'; form-action 'self'";

export default {
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Content-Security-Policy", value: cspProd },
        ],
      },
    ];
  },
};
