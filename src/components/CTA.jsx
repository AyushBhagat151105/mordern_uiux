import React from "react";
import Button from "./Button";
import styles from "../style";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CTA = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#CTA",
      {
        x: 800,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 6,
        scrollTrigger: {
          trigger: "#CTA",
          start: " center",
          end: "top top",

          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section
      id="CTA"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} mx-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
