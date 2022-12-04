module.exports = {
    reactStrictMode: false,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ["res.cloudinary.com"],
    },
    env: {
      API_URL: 'https://kabandnet-admin.herokuapp.com',
    },
  }
  