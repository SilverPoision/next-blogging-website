import { Fragment } from "react";

import FeaturedPost from "../Components/Home-page/featured-post";
import Hero from "../Components/Home-page/hero";

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

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
