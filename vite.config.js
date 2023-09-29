import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    server: {
      port: process.env.VITE_PORT
    },
  });
}