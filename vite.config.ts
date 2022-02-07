import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&display=swap',
      'https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Noto+Serif+JP&display=swap'
    ]),
    svgLoader()
  ]
})