import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProductionBuild = command === 'build';

  return {
    plugins: [react()],

    base:
      env.VITE_BASE_PATH ||
      (isProductionBuild ? '/diamondphysiqueocala/' : '/'),

    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
        },
        '/health': {
          target: 'http://localhost:4000',
          changeOrigin: true,
        },
      },
    },
  };
});