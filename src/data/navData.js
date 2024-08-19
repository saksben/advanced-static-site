const navData = [
  {
    key: "Home",
    url: "/",
    children: []
  },
  {
    key: "About",
    url: "/about/",
    children: []
  },
  {
    key: "Projects",
    url: "/projects/",
    children: [
      {
        key: "Project-1",
        url: "/projects/project-1/"
      },
      {
        key: "Project-2",
        url: "/projects/project-2/"
      }
    ]
  },
  {
    key: "Blog",
    url: "/blog/",
    children: []
  },
  {
    key: "Contact",
    url: "/contact/",
    children: []
  },
]
export default navData