// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: {
    '@primary-color': '#514CDD',
    '@border-radius-base': '6px',
    '@box-shadow-base': '0px 2px 20px 0px rgba(111,126,201,0.5)',
  },
  lessVarsFilePath: './src/styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {
    mode: 'local',
    exportLocalsConvention: 'camelCase',
    exportOnlyLocals: false,
    getLocalIdent: (context, localIdentName, localName, options) => {
      return 'whatever_random_class_name';
    },
  },
  lessVarsFilePath: './src/styles/variables.less',
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },
  reactStrictMode: true,
  images: {
    domains: ['itviec.com'],
  },
  webpack(config) {
    return config;
  },
});
