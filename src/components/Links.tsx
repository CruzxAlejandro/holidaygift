import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Links() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // const linkWrapper = useRef<HTMLDivElement>(null);
  // useGSAP(
  //   () => {
  //     //     gsap.set(document.body, {
  //     //   overflow: "hidden",
  //     // });

  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: linkWrapper.current,
  //         start: "10% 60%",
  //         markers: true,
  //       },
  //     });
  //     timeline.to(".playinit", {
  //       opacity: 0.5,
  //       ease: "sine",
  //       stagger: 0.5,
  //     });
  //   },
  //   { scope: linkWrapper }
  // );
  return (
    <>
      {/* <div className="playlists" ref={linkWrapper}> */}
      <div className="playlists">
        <div className="h-screen w-full bg-dh-purple">
          <div className="playinit h-1/3 bg-dh-black flex items-center justify-center border-[#fff] border-b-2 opacity-0">
            Lorem
          </div>
          <div className="playinit h-1/3 bg-dh-red flex items-center justify-center border-[#fff] border-b-2 opacity-0">
            Lorem
          </div>
          <div className="playinit h-1/3 bg-dh-blue flex items-center justify-center border-[#fff] border-b-2 opacity-0">
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
