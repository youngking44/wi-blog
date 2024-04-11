import React from "react";
import styles from "./page.module.scss";
import Container from "@/components/container/Container";
import Button from "./button/Button";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <section className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <div className={styles.left}>
              <h1>
                Creative <br /> Thought <br /> Agency.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quaerat eligendi porro illo eum ipsum
              </p>
              <div className={styles.btnWrapper}>
                <Button color="secondary">Learn more</Button>
                <Button color="primary">Learn more</Button>
              </div>
              <div className={styles.brandImageContainer}>
                <Image fill src="/brands.png" alt="Brand image" />
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <Image fill src="/hero.gif" alt="Hero image" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
