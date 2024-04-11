import React from "react";
import styles from "./page.module.scss";
import Container from "@/components/container/Container";
import Image from "next/image";
import Button from "../button/Button";

const Contact = () => {
  return (
    <main>
      <section className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image fill src="/contact.png" alt="Hero image" />
              </div>
            </div>
            <div className={styles.right}>
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Phone Number Optional" />
                <textarea rows={8} placeholder="Message"></textarea>
                <Button color="secondary">Send</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
