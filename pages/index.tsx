import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext, useEffect, useRef } from "react";
import { MouseContext } from "../context/mouseContext";
import useMousePosition from "./../Components/Cursor/UseMousePosition";

export default function Home() {
  const { cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const img1ref = useRef(null);
  const img2ref = useRef(null);

  useEffect(() => {
    const img1: null | HTMLElement = document.querySelector(
      ".home__container-img1"
    );
    const img2: null | HTMLElement = document.querySelector(
      ".home__container-img2"
    );
    if (img1 && img2) {
      img1.style.transform = `rotate(${x}deg) translateX(-30px) rotate(${y}deg)`;
      img2.style.transform = `rotate(${x}deg) translateX(70px) rotate(${y}deg)`;
    }
  }, []);

  useEffect(() => {
    const img1: null | HTMLElement = document.querySelector(
      ".home__container-img1"
    );
    const img2: null | HTMLElement = document.querySelector(
      ".home__container-img2"
    );
    window.addEventListener("mousemove", (e) => {
      if (img1 && img2) {
        img1.style.transform = `rotate(${
          (e.clientX - x) / 100
        }deg) translateX(-30px) rotate(${(e.clientY - y) / 100}deg)`;
        img2.style.transform = `rotate(${
          (e.clientX - x) / 100
        }deg) translateX(70px) rotate(${(e.clientY - y) / 100}deg)`;
      }
    });
  }, [img1ref.current, img2ref.current]);

  return (
    <motion.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0, ease: "easeOut" }}
    >
      <Head>
        <title>Leonel NGOYA • FrontEnd Developer</title>
        <meta
          name="description"
          content="
        I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <div className="home-velo">
          <Image
            src="/illustrations/2.png"
            alt="velo"
            width={2160}
            height={2160}
          />
        </div>
        <div className="page__lines"></div>
        <div className="home__container">
          <Image
            className="home__container-img1"
            src="/illustrations/4.png"
            alt="illustration"
            width={2160}
            height={2160}
            ref={img1ref}
          />
          <Image
            className="home__container-img2"
            src="/illustrations/5.png"
            alt="illustration"
            width={3000}
            height={3000}
            ref={img2ref}
          />
          <h1>
            HEY, I’M{" "}
            <span
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {" "}
              LEONEL NGOYA{" "}
            </span>
          </h1>
          <h1>
            BUT YOU CAN CALL ME{" "}
            <span
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              {" "}
              LN{" "}
            </span>
          </h1>
          <p>I’m a Front-end Developer & Web Integrator.</p>
          <Link
            href="/about"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7501 11.7258L4.75012 11.7258"
                stroke="#222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6998 5.70124C13.6998 5.70124 19.7498 8.96224 19.7498 11.7242C19.7498 14.4882 13.6998 17.7502 13.6998 17.7502"
                stroke="#222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>About me</span>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
