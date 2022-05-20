import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "./cursor.module.scss";

const Cursor = () => {
  const circle = useRef(null);
  const circleFollow = useRef(null);

  const moveCircle = (e: any) => {
    gsap.to(circle.current, {
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(circleFollow.current, {
      x: e.clientX,
      y: e.clientY,
    });
  };

  const hoverFunc = () => {
    gsap.to(circle.current, {
      opacity: 1,
      scale: 0,
    });
    gsap.to(circleFollow.current, {
      scale: 3,
    });
  };

  const unhoverFunc = () => {
    gsap.to(circle.current, {
      opacity: 1,
      scale: 1,
    });
    gsap.to(circleFollow.current, {
      scale: 1,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveCircle);
    const hoverElements = document.querySelectorAll("a, h1, h2");

    for (let i = 0; i <= hoverElements.length; i++) {
      hoverElements[i]?.addEventListener("mouseover", hoverFunc);
      hoverElements[i]?.addEventListener("mouseleave", unhoverFunc);
    }
  }, []);

  return (
    <>
      <div className={styles.circle} ref={circle}></div>
      <div className={styles.circleFollow} ref={circleFollow}></div>
    </>
  );
};

export default Cursor;
