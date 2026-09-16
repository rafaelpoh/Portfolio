import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base relativa para suportar GitHub Pages e qualquer hospedagem estática
  base: './',
  server: {
    port: 3000,
    open: false,
  },
});
