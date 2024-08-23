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
    key: "Services",
    url: "/services/",
    children: [],
  },
  {
    key: "More",
    url: "/more/",
    children: [
      { 
        key: "Testimonials", 
        url: "/more/reviews/" 
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
