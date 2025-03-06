import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Input": "./src/components/Input.tsx",
        "./About": "./src/components/About.tsx",
        "./Duc": "./src/components/Duc.tsx",
      },
      shared: ['react', 'react-dom']
    }),
  ],
  server: {
    port: 4173, // Explicitly set to match host expectation
    cors: true, // Ensure CORS isn’t an issue
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
