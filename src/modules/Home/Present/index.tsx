import { useEffect, useContext } from "react";
import { gsap } from "gsap";
import clsx from "clsx";

import styles from "../styles/home.module.scss";

import Context from "context";

import bg from "assets/images/home.png";

const Present = () => {
  const { setFinishStartAnimation } = useContext(Context);

  useEffect(() => {
    gsap
      .timeline()
      .to(".overlay-title h2 span", {
        y: 0,
        opacity: 1,
        delay: 2,
      })
      .to(".overlay-title h2 span", {
        y: -100,
      })
      .to(".overlay-block", {
        y: "-100%",
      })
      .to(
        ".home-picture",
        {
          css: {
            transform: "scale(1)",
          },
        },
        "-=.5"
      )
      .to(".main-title-a", {
        opacity: 1,
        transform: "scale(1)",
        delay: 0.5,
      })
      .to(".second-title-a", {
        opacity: 1,
        transform: "scale(1)",
      })
      .to(".social-a", {
        css: {
          right: "-40px",
        },
        onComplete() {
          setFinishStartAnimation(true);
        },
      });
  }, []);

  return (
    <section className={styles.presentSection}>
      <div className={clsx(styles.bg, "home-picture")}>
        <img src={bg} alt="I am" />
      </div>

      <div className={styles.homeContent}>
        <h2 className="main-title-a">This is Ilya</h2>
        <h1 className="second-title-a">Photographer</h1>
      </div>

      <div className={clsx(styles.overlay, "overlay-block")}>
        <div className={clsx(styles.title, "overlay-title")}>
          <h2>
            <span>I</span>
            <span>L</span>
            <span>Y</span>
            <span>A</span>
          </h2>
          <h2>
            <span>S</span>
            <span>A</span>
            <span>F</span>
            <span>R</span>
            <span>O</span>
            <span>N</span>
            <span>O</span>
            <span>V</span>
          </h2>
        </div>
      </div>

      {/* <a
        href="https://www.instagram.com/kychik/"
        target="_blank"
        rel="noreferrer"
        className={clsx(styles.social, "social-a")}
      >
        Instagram
      </a> */}
    </section>
  );
};

export default Present;
