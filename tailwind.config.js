/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'purple': "hsl(var(--clr-primary-1) / <alpha-value>)",
        'marineBlue': "hsl(var(--clr-primary-2) / <alpha-value>)",
        'marineBlueHover': "hsl(var(--clr-primary-2-hover) / <alpha-value>)",
        'pastelBlue': "hsl(var(--clr-primary-3) / <alpha-value>)",
        'light-blue': "hsl(var(--clr-primary-4) / <alpha-value>)",
        'red': "hsl(var(--clr-primary-5) / <alpha-value>)",
        'coolGray': "hsl(var(--clr-neutral-1) / <alpha-value>)",
        'lightGray': "hsl(var(--clr-neutral-2) / <alpha-value>)",
        'magnolia': "hsl(var(--clr-neutral-3) / <alpha-value>)",
        'alabaster': "hsl(var(--clr-neutral-4) / <alpha-value>)",
        'white': "hsl(var(--clr-neutral-5) / <alpha-value>)",
      },
      backgroundImage: {
        'sidebar-mobile': "url('/images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('/images/bg-sidebar-desktop.svg')"
      }
    },
  },
  plugins: [],
}
