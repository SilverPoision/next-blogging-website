import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_DATA = {
  slug: "getting-started-with-mextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_DATA.title} />
      {DUMMY_DATA.content}
    </article>
  );
};

export default PostContent;
