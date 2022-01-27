import AllPost from "../../Components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";

const AllPostPage = (props) => {
  return <AllPost posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostPage;
