import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import { createHtmlPlugin } from 'vite-plugin-html';

const proxyPort = 8050;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    vue(),
    ElementPlus({
      // 如果你需要使用全局样式，则设置 importStyle: true
      importStyle: true,
    }),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'jsonVee 项目模板',
            },
          },
        },
      ],
    }),
    {
      name: 'custom-success-message',
      apply: 'serve', // 仅在开发服务器启动时应用
      configureServer(server) {
        server.httpServer.on('listening', () => {
          console.log(`客户端启动成功，监听端口：${server.config.server.port}`);
        });
      },
    },
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 允许在 Less 中使用 JavaScript 表达式（可选，根据需要开启）
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: '../../public', // 将构建输出目录设为 'dist/custom-build'
    rollupOptions: {
      input: {
        // 定义不同的入口
        main: './src/main.js',
        // 可以定义更多入口
        // sub: './src/sub.js',
      },
    },
  },
  //这个是新增的本地服务器与proxy代理设置
  server: {
    open: false,
    port: 8086,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: `http://localhost:${proxyPort}`,
        changeOrigin: true, //是否跨域
        // rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})