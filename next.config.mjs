const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/YOUR_REPO_NAME" : "", // IMPORTANT: Replace YOUR_REPO_NAME with your actual GitHub repo name!
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;