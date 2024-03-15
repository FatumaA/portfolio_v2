/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.hashnode.com",
			},
		],
	},
	// async redirects() {
	//   return [
	//     {
	//       source: '/videos',
	//       destination: 'https://www.youtube.com/c/HijabiCoder/videos',
	//       permanent: false,
	//     },
	//   ]
	// },
};
