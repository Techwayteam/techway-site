const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',

  images: {
    unoptimized: true,
  },
  basePath: '',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Adicione suas configurações personalizadas aqui
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'components'),
      '@styles': path.resolve(__dirname, 'styles'),
    };

    // if (!isServer) {
    //   config.node = {
    //    fs: 'empty',
    //   };
    //  }

    return config;
  },
}

module.exports = nextConfig;
