import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  post: {
    userId: string;
    _id: string;
    title: string;
    desc: string;
    img: string;
  };
}

const Card = ({ post }: PostProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image fill src={post.img} alt="Post Card Image" />
          </div>
        )}
        <span>02/03/2024</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.desc}</p>
      <Link href={`/blog/${post._id}`}>Read More</Link>
    </div>
  );
};

export default Card;
