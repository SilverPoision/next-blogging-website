import classes from "./all-post.module.css";
import PostGrid from "./post-grid";

const AllPost = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPost;
