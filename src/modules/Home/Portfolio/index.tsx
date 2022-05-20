import { useEffect, useContext } from "react";
import clsx from "clsx";
import { scrollTriggerProxy } from "hooks/scrollTrigger";
import { gsap } from "gsap";
import Context from "context";
import me2 from "assets/images/me2.jpeg";
import me3 from "assets/images/me3.jpeg";
import me4 from "assets/images/me4.jpg";

import styles from "../styles/portfolio.module.scss";

const Portfolio = () => {
  const { scrollbar } = useContext(Context);

  useEffect(() => {
    scrollTriggerProxy(scrollbar);
    const galleries = gsap.utils.toArray(".ovarlay-card");

    galleries.forEach((gallery: any) => {
      gsap.to(gallery, {
        scrollTrigger: {
          trigger: gallery,
          start: "-=50%",
          markers: false,
          scroller: ".scroller",
        },
        x: "-100%",
      });
    });
  }, [scrollbar]);
  return (
    <section className={clsx(styles.portfolio)}>
      <div className={clsx("container")}>
        <div className={clsx(styles.portfolioInner)}>
          <h2 className={clsx(styles.title)}>PORTFOLIO & WORK</h2>
          <div className={styles.cardsList}>
            <div className={clsx(styles.portfolioCard, "portfolio-card")}>
              <a href="#">
                <img src={me2} alt="me2" />

                <h5>Title</h5>

                <div className={clsx(styles.cardOverlay, "ovarlay-card")}></div>
              </a>
            </div>
            <div className={clsx(styles.portfolioCard, "portfolio-card")}>
              <a href="#">
                <img src={me3} alt="me2" />

                <h5>Title</h5>

                <div className={clsx(styles.cardOverlay, "ovarlay-card")}></div>
              </a>
            </div>
            <div className={clsx(styles.portfolioCard, "portfolio-card")}>
              <a href="#">
                <img src={me4} alt="me2" />

                <h5>Title</h5>

                <div className={clsx(styles.cardOverlay, "ovarlay-card")}></div>
              </a>
            </div>
            <div className={clsx(styles.portfolioCard, "portfolio-card")}>
              <a href="#">
                <img src={me2} alt="me2" />

                <h5>Title</h5>

                <div className={clsx(styles.cardOverlay, "ovarlay-card")}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
