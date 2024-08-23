const navData = [
  {
    key: "Home",
    url: "/",
    children: [],
  },
  {
    key: "About",
    url: "/about/",
    children: [],
  },
  {
    key: "Testimonials",
    url: "/reviews/",
    children: [],
  },
  {
    key: "More",
    url: "/more/",
    children: [
      {
        key: "Services",
        url: "/more/service/",
      },
      {
        key: "Gallery",
        url: "/more/gallery/",
      },
    ],
  },

  // {
  //   key: "Blog",
  //   url: "/blog/",
  //   children: [],
  // },
  {
    key: "Contact",
    url: "/contact/",
    children: [],
  },
];
export default navData;
