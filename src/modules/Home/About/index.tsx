import { useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

import me2 from "assets/images/me2.jpeg";
import me3 from "assets/images/me3.jpeg";
import me4 from "assets/images/me4.jpg";
import meFull from "assets/images/me-full.jpg";

import Context from "context";
import styles from "../styles/about.module.scss";

const mePictureList = [
  { src: me2, alt: "I am" },
  { src: me3, alt: "I am" },
  { src: me4, alt: "I am" },
];

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { scrollbar } = useContext(Context);

  useEffect(() => {
    let pictureId = 0;
    const pictures = document.querySelectorAll(".about-picture-list img");

    const changePicture = () => {
      pictures.forEach(item => {
        item.classList.remove("show");
      });

      if (pictureId >= pictures.length) {
        pictureId = 0;
      }

      pictures[pictureId].classList.add("show");
      pictureId++;
    };

    const i = setInterval(() => {
      changePicture();
    }, 1000);

    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    gsap.to(".about-picture-overlay-a", {
      scrollTrigger: {
        trigger: ".about-section-a",
        start: "-=200px",
        markers: false,
        scroller: ".scroller",
      },
      duration: 1,
      x: "-100%",
    });

    gsap.timeline().to(".about-me-full-a img", {
      scrollTrigger: {
        trigger: ".about-me-full-a",
        start: "-=60%",
        end: "+=20%",
        scrub: true,
        markers: false,
        scroller: ".scroller",
        toggleActions: "restart pause reverse play",
      },
      css: {
        transform: "scale(1) rotateZ(0)",
        opacity: 1,
      },
      duration: 1,
    });
  }, [scrollbar]);

  return (
    <section className={clsx(styles.about, "about-section-a")}>
      <div className={clsx("container")}>
        <div className={clsx(styles.about__inner)}>
          <h2 className={clsx(styles.title)}>
            I am Ilya Safronov,
            <br /> Born in Ukrain, Living in Polan.
          </h2>

          <div className={clsx(styles.aboutMe)}>
            <div className={clsx(styles.pictureList)}>
              <div
                className={clsx(styles.aboutPictureList, "about-picture-list")}
              >
                {mePictureList.map(({ src, alt }, index) => {
                  return <img src={src} alt={alt} key={index} />;
                })}
              </div>
              <div
                className={clsx(
                  styles.pictureOverlay,
                  "about-picture-overlay-a"
                )}
              ></div>
            </div>

            <div className={clsx(styles.aboutMeText)}>
              <p>
                Currently a Model & Student that's studying to be an accountant
                at Utah Tech University.
              </p>
              <p>
                Since my childhood I've always been passionate about clothes and
                fashion. An interest that was influenced by mom being a
                seamstress and I would watch her sew beautiful pieces for her
                clients.
              </p>
              <p>
                I have always believed that what I wear can have an impact on my
                mood and I am hoping to transition my portfolio to modest
                modeling which will lead me into becoming a full-time Muslim
                model.
              </p>
              <p>
                My mission is to represent the Muslim community through fashion
                and modeling.
              </p>
            </div>
          </div>
        </div>

        <div className={clsx(styles.aboutMeFull, "about-me-full-a")}>
          <img src={meFull} alt="Me" />
        </div>
      </div>
    </section>
  );
};

export default About;
