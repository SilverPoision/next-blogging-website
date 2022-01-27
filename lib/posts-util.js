import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export const getPostData = (filename) => {
  const postSlug = filename.replace(/\.md$/, "");

  const filepath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
};

export const getPostsFiles = () => {
  return fs.readdirSync(postDirectory);
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuedPosts = allPosts.filter((post) => post.isFeatured);

  return featuedPosts;
};
