/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
    },
    // webpack(config) {
    //     config.infrastructureLogging = { debug: /PackFileCache/ }
    //     return config;
    //   }

}

module.exports = nextConfig
