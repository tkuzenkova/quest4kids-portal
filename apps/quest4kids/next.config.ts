import type { NextConfig } from "next";

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL;

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
				destination: `/${BLOG_URL}/blog`,
			},
			{
				source: "/blog/:path*",
				destination: `/${BLOG_URL}/blog/:path*`,
			},
		];
	},
};

export default nextConfig;
