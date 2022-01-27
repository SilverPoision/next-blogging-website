import PostHeader from "./post-header";
import classes from "./post-content.module.css";

import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { slug } = props;
  const imagePath = `/images/posts/${slug.slug}/${slug.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={slug.title} />
      <ReactMarkdown>{slug.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
