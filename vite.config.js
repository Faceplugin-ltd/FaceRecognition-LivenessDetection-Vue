import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
// https://zhuanlan.zhihu.com/p/413972217
export default defineConfig({
  plugins: [
      vue(),
  ],
})
