/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
	reactStrictMode: true,
	webpack: config => {
		config.resolve.alias['@'] = path.resolve(__dirname);
		config.module.rules.push({
			test: /\.svg$/,
			use: '@svgr/webpack'
		});
		return config;
	},
	images: {
		domains: [
			'res.cloudinary.com',
			'a0.muscache.com',
			'mdbcdn.b-cdn.net',
			'unsplash.com',
			'images.unsplash.com',
			'lottiefiles.com',
			'assets10.lottiefiles.com',
			'flagcdn.com',
			'image.tmdb.org',
		]
	},
	env: {}
};
