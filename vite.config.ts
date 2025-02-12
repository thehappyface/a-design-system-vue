import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: "tsconfig.json" }),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['vue'],
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // This silences the deprecation warnings
        logger: {
          warn: (message: string | string[]) => {
            if (!message.includes('deprecat')) {
              console.warn(message)
            }
          }
        }
      }
    }
  }
})