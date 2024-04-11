import React from "react";
import styles from "./page.module.scss";
import Container from "@/components/container/Container";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <section className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <div className={styles.left}>
              <p className={styles.subtitle}>About Agency.</p>
              <h1>
                We create digital ideas <br />
                that are bigger, bolder <br />
                braver and better.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias nulla libero unde ipsum, quia fuga commodi. Enim
                consectetur nemo reprehenderit quam, natus laborum autem modi,
                dolorum voluptatem sit praesentium debitis?
              </p>
              <div className={styles.boxWrapper}>
                <div className={styles.box}>
                  <span>10 K+</span>
                  <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                  <span>259 K+</span>
                  <p>People reached</p>
                </div>
                <div className={styles.box}>
                  <span>89 K+</span>
                  <p>Services and plugins</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <Image fill src="/about.png" alt="Hero image" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
