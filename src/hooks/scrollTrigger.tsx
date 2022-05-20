import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

export const scrollTriggerPage = () => {
  let bodyScrollBar = Scrollbar.init(document.querySelector(".home")!, {
    damping: 0.04,
  });
  bodyScrollBar.track.xAxis.element.remove();
  scrollTriggerProxy(bodyScrollBar);
  return bodyScrollBar;
};

export const scrollTriggerProxy = (bodyScrollBar: any) => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.scrollerProxy(document.querySelector(".scroller"), {
    scrollTop(value = 0) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar?.scrollTop;
    },
  });
  bodyScrollBar?.addListener(ScrollTrigger.update);
};
