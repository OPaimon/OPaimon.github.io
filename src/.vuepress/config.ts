import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "派蒙的笔记与博客",
  description: "观赏用派蒙的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
