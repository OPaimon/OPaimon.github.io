import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "题目",
    icon: "pen-to-square",
    prefix: "/works/",
    children: [ 
      {
        text: "作业",
        icon: "pen-to-square",
        link: "homeworks"
      },
    ],
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      

    ],
  },
]);
