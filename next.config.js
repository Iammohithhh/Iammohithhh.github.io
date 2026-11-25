/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Built as plain files for GitHub Pages; each page becomes <route>/index.html.
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
