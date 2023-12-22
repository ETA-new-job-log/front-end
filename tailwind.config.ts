/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xs: { max: '350px' },
      web: '500px',
    },
    extend: {
      minWidth: {
        280: '280px',
      },
      maxWidth: {
        500: '500px',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
        page: '1.25rem',
      },
      borderWidth: {
        DEFAULT: '0.5px',
        form: '0.8px',
        1: '1px',
      },
      backgroundImage: {
        'gradient-pattern': 'url("/images/bg.webp")',
        'gradient-pattern-sm': 'url("/images/small-bg.webp")',
      },
      backgroundPosition: {
        'top-right': 'right 0px',
      },
      dropShadow: {
        tab: '0px -5px 20px rgba(219, 219, 219, 0.25)',
      },
      boxShadow: {
        tab: '0px -2px 5px 0px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        body: '#F6F6F6',
        light: '#fafafa',
        'ligtht-gray': 'rgba(234, 234, 234, 0.30)',
        alert: 'rgba(0, 0, 0, 0.30)',
        toast: 'rgba(0, 0, 0, 0.75)',
        tooltip: 'rgba(0, 0, 0, 0.65)',
        'primary-bg': 'rgba(47, 201, 100, 0.03)',
        'primary-light': 'rgba(126, 230, 119, 0.15)',
        black50: '#EAEAEA',
        black100: '#D4D4D4',
        black200: '#BFBFBF',
        black300: '#A9A9A9',
        black400: '#949494',
        black500: '#7F7E7E',
        black600: '#696969',
        black700: '#545454',
        black800: '#3E3E3E',
        black900: '#292929',
        primary50: '#E9FFF1',
        primary100: '#D5F4E0',
        primary200: '#ACE9C1',
        primary300: '#82DFA2',
        primary400: '#59D483',
        primary500: '#2FC964',
        primary600: '#26A150',
        primary700: '#1C793C',
        primary800: '#135028',
        primary900: '#092814',
        orange: '#FFAE33',
        'light-orange': '#FFF5E6',
        blud: '#4DA6F3',
        'light-blue': '#EAF4FE',
        mint: '#47D1D5',
        'light-mint': '#E9F9FA',
        purple: '#907AED',
        'light-purple': '#F1EFFC',
        border: '#D4D4D4',
        input: '#D4D4D4',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        0.6: '0.6rem',
        0.7: '0.7rem',
        0.75: '0.75rem',
        0.8: '0.8rem',
        0.85: '0.85rem',
        0.9: '0.9rem',
        0.95: '0.95rem',
        1: '1rem',
        1.1: '1.1rem',
        1.2: '1.2rem',
        1.3: '1.3rem',
        1.5: '1.5rem',
      },
      borderRadius: {
        large: '15px',
        medium: '10px',
        small: '5px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        mount: {
          '0%': { opacity: 0, transform: 'translateY(50%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        unmount: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        jumpDown: {
          '0%, 100%': { transform: 'translateY(1rem)' },
          '50%': { transform: 'translateY(-1rem)' },
        },
        jumpUp: {
          '0%, 100%': { transform: 'translateY(-1rem)' },
          '50%': { transform: 'translateY(1rem)' },
        },
        loading: {
          '0%': { transform: 'translateX(-10%)' },
          '50%, 100%': { transform: ' translateX(120%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        mount: 'mount 0.2s linear',
        unmount: 'unmount 0.2s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        jumpDown: 'jumpDown 0.7s linear infinite',
        jumpUp: 'jumpUp 0.7s linear infinite',
        loading: 'loading 1.5s infinite linear;',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
