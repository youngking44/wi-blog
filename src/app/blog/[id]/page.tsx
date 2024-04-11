import React, { Suspense } from "react";
import styles from "./page.module.scss";
import Container from "@/components/container/Container";
import Image from "next/image";
import PostUser from "../components/postUser/PostUser";
import { publicRequest } from "@/utils/axios";
import { getSinglePost } from "@/lib/actions/post/post";

interface SinglePostProps {
  params: {
    id: string;
  };
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// const getData = async (id: string) => {
//   const res = await publicRequest.get<IPost>(`/posts/${id}`);

//   return res.data;
// };

export const generateMetadata = async ({ params }: SinglePostProps) => {
  const post = await getSinglePost(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePost = async ({ params }: SinglePostProps) => {
  /* const post = await getData(params.id); */
  const post = await getSinglePost(params.id);

  return (
    <main>
      <section className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <div className={styles.left}>
              {post.img && (
                <div className={styles.imgContainer}>
                  <Image fill src={post.img} alt="Single post image" />
                </div>
              )}
            </div>
            <div className={styles.right}>
              <h1>{post.title}</h1>
              <div className={styles.rightFlexContainer}>
                <div className={styles.avatar}>
                  <Image
                    fill
                    src="https://media.gettyimages.com/id/1242720271/photo/boca-chica-beach-tx-spacex-founder-elon-musk-during-a-t-mobile-and-spacex-joint-event-on.jpg?s=612x612&w=0&k=20&c=60enpsRecA3Z8WEfRv6A6R1zh3y9X5DH3IJrXlZKONY="
                    alt="Single post image"
                  />
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <PostUser userId={post.userId} />
                </Suspense>
                <div className={styles.textGroup}>
                  <span>Published</span>
                  <h4>02/02/2024</h4>
                </div>
              </div>
              <p>Desc</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SinglePost;
