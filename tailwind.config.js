/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'black-opacity-10': 'rgba(0,0,0,0.1)',
        'black-opacity-20': 'rgba(0,0,0,0.2)',
        'black-opacity-30': 'rgba(0,0,0,0.3)',
        'black-opacity-40': 'rgba(0,0,0,0.4)',
        'custom-gray-2': 'rgb(250, 250, 250)',
        'theme-orange': '#ff7900',
        'custom-blue': 'rgb(236, 249, 255)',
      },
      textColor: {
        'theme-orange': '#ff7900',
        'custom-gray': 'rgb(173, 181, 189)',
        'custom-blue': 'rgb(19, 162, 228)',
      },
      borderColor: {
        'gray-opacity-20': 'rgba(232,232,232,0.2)',
        'theme-orange': '#ff7900',
        'custom-blue': 'rgb(19, 162, 228)',
      }
    },
  },
  plugins: [],
}
