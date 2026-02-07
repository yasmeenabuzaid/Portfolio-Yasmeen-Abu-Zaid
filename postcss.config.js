// postcss.config.js -> configures PostCSS plugins to process CSS before it runs in the browser, enhancing and optimizing the CSS
module.exports = {
  plugins: {

    tailwindcss: {}, 
    // a CSS library that provides utility classes for faster styling, usable directly in JSX and HTML
    rules: {
    "no-unused-vars": "off",
  },
    autoprefixer: {}, 
    // a plugin that automatically adds vendor prefixes to CSS for compatibility with all browsers
  },
};
