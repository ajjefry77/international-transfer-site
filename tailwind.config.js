const withMT = require("@material-tailwind/react/utils/withMT");

// tailwind.config.js
module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  
};