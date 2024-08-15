import React from "react";
import styles from "../style";
import { clients } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Clients = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#clients",
      {
        x: 800,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 6,

        scrollTrigger: {
          trigger: "#clients",
          start: " center",
          end: "top top",

          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div
        className={`${styles.flexCenter} felx-wrap w-full sm:flex-row flex-col sm:scale-100 scale-70`}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 flex ${styles.flexCenter} sm:min-w[192px] min-w-[120px] sm:mb-0 mb-10`}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="sm:w-[192px] w-[100%] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
