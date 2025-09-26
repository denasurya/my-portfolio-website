/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        'brand-dark': '#0D1117',
        'brand-light': '#E2E8F0',
        'brand-muted': '#94A3B8',
        'brand-purple': '#A78BFA',
        'brand-cyan': '#38BDF8',
      },
      // --- PENAMBAHAN DIMULAI DI SINI ---
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      // --- SELESAI ---
    },
  },
  // --- PENAMBAHAN DIMULAI DI SINI ---
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
  // --- SELESAI ---
}
