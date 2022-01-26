import PostGrid from "../posts/post-grid";
import classes from "./featured-post.module.css";

const FeaturedPost = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPost;
