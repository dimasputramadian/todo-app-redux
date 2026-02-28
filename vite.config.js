import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",   // supaya bisa render component React
    globals: true,          // supaya test(), describe() dikenali
    setupFiles: "./src/setupTests.js"
  }
})