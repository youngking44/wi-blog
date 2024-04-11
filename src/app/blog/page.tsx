import Container from "@/components/container/Container";
import React from "react";
import Card from "./components/card/Card";
import styles from "./page.module.scss";
import { publicRequest } from "@/utils/axios";
import { getPosts } from "@/lib/actions/post/post";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// const getData = async () => {
//   const res = await publicRequest.get<IPost[]>("/posts");

//   return res.data;
// };

const Blog = async () => {
  // const posts = await getData();

  const posts = await getPosts();

  return (
    <main>
      <section className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            {posts.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Blog;
