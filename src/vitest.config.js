import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic',
})],
  test: {
    globals: true,
    parallel: true,
    environment: ['jsdom', 'happy-dom'],
    setupFiles: './src/setupTests.js',
    include: ['src/App.test.jsx'],
    exclude: ['node_modules'],
  },
});
