const config = {
  plugins: {
    '@tailwindcss/postcss': {
      // Forcing the pure JS engine to bypass the locked Windows native Rust binary
      optimize: false 
    },
  },
};

export default config;