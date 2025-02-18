import type { NextConfig } from "next";

const WEATHER_URL = process.env;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.worldweatheronline.com",
				pathname: "/**",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/blog",
				destination: `http://localhost:4000/blog`,
			},
			{
				source: "/blog/:path*",
				destination: "http://localhost:4000/blog/:path*",
			},
		];
	},
};

export default nextConfig;
