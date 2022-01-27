import PostHeader from "./post-header";
import classes from "./post-content.module.css";

import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const { slug } = props;
  const imagePath = `/images/posts/${slug.slug}/${slug.image}`;
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={slug.title} />
      <ReactMarkdown components={customRenderers}>{slug.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
