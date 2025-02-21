import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false, // Disable PWA in development mode
  buildExcludes: [
    /middleware-manifest.json$/, 
    /_next\/app-build-manifest\.json$/,  // ❌ Exclude missing file
    /_next\/build-manifest\.json$/,      // ❌ Exclude missing file
    /_next\/react-loadable-manifest\.json$/ // ❌ Exclude missing file
  ],
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
