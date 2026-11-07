import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan baris base ini sesuai dengan nama persis repositorimu:
  base: '/Belajar-React_Pemrograman-Web_Manajemen-Event-Kampus/', 
})
