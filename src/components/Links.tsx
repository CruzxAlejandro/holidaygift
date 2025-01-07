import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Links() {
  const linkWrapper = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: linkWrapper });
  const onHoverPlaylist = contextSafe(() => {
    gsap.to(".playinit", { scale: 1.2 });
  });
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: linkWrapper.current,
          start: "10% 66%",
          end: "+=60%",
          markers: true,
        },
      });
      // text.addEventListener("mouseenter", () => animation.play());
      //text.addEventListener("mouseleave", () => animation.reverse())
      timeline.from(".playinit", {
        opacity: 0,
        ease: "sine",
        stagger: 0.5,
      });
    },
    { scope: linkWrapper }
  );
  return (
    <>
      <div className="playlists" ref={linkWrapper}>
        <div className="h-screen w-screen bg-dh-purple">
          <div className="playinit h-1/3 bg-dh-black flex items-center justify-center border-[#fff] border-b-2">
            Lorem
          </div>
          <div className="playinit h-1/3 bg-dh-red flex items-center justify-center border-[#fff] border-b-2">
            Lorem
          </div>
          <div className="playinit h-1/3 bg-dh-blue flex items-center justify-center border-[#fff] border-b-2">
            Lorem
          </div>
        </div>
      </div>
    </>
    /*
    <div className="contentDisplay p-8 bg-dh-black text-center  ">
        <div className="content">
          <h2>Message</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex justify-evenly trigger" ref={linkWrapper}>
            <div className="max-w-24">
              <a
                href="https://www.wearedh.com"
                target="_blank"
                className="musicLink"
              >
                <img src="src/assets/apple music_button.png" />
              </a>
            </div>
            <div className="max-w-24">
              <a
                href="https://www.wearedh.com"
                target="_blank"
                className="musicLink"
              >
                <img src="src/assets/apple music_button.png" />
              </a>
            </div>
            <div className="max-w-24">
              <a
                href="https://www.wearedh.com"
                target="_blank"
                className="musicLink"
              >
                <img src="src/assets/apple music_button.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    */
  );
}

export default Links;
