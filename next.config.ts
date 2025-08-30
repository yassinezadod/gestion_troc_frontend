import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["flagcdn.com"],
  },

   output: "export", // ← permet de générer un site statique
};

export default nextConfig;
