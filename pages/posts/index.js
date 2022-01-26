import AllPost from "../../Components/posts/all-post";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-mextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excert:
      "NetxjS is the react framework for production - it makes building fullstack React Apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-mextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excert:
      "NetxjS is the react framework for production - it makes building fullstack React Apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-mextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excert:
      "NetxjS is the react framework for production - it makes building fullstack React Apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-mextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excert:
      "NetxjS is the react framework for production - it makes building fullstack React Apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

const AllPostPage = () => {
  return <AllPost posts={DUMMY_POSTS} />;
};

export default AllPostPage;
