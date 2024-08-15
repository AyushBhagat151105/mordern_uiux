import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CardDeal = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#cardDeal",
      {
        x: 800,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 6,

        scrollTrigger: {
          trigger: "#cardDeal",
          start: " bottom top",
          end: "center center",

          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section id="cardDeal" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
