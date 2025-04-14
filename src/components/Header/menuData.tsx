import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "#services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "SEO",
        path: "#seo",
        newTab: false,
      },
      {
        id: 32,
        title: "Performance Marketing",
        path: "#performance",
        newTab: false,
      },
      {
        id: 33,
        title: "Social Media",
        path: "#social",
        newTab: false,
      },
      {
        id: 34,
        title: "Content Marketing",
        path: "#content",
        newTab: false,
      },
      {
        id: 35,
        title: "Website Development",
        path: "#website",
        newTab: false,
      },
      {
        id: 36,
        title: "Branding & Design",
        path: "#branding",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
