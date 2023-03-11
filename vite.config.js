import { fileURLToPath, URL } from "node:url";
import pxtovw from "postcss-px-to-viewport";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 375,
  viewportUnit: "vw",
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [loder_pxtovw],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  assetsInclude: ["**/*.m4v"], // 指定额外的 picomatch 模式 作为静态资源处理
});
