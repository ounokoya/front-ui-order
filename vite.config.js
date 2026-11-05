import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base : le site est servi par GitHub Pages sous /front-ui-order/
export default defineConfig({ base: '/front-ui-order/', plugins: [tailwindcss()] })
