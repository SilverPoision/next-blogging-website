import PostContent from "../../Components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const SinglePostPage = (props) => {
  return <PostContent slug={props.postData} />;
};

export function getStaticPaths() {
  const allPosts = getPostsFiles();
  const paths = allPosts.map((post) => ({
    params: { slug: post.replace(/\.md$/, "") },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const filename = context.params.slug;
  const postData = getPostData(filename);
  return {
    props: {
      postData: postData,
    },
    revalidate: 600,
  };
}

export default SinglePostPage;
