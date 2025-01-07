import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import dhLogo from "/DH.png";

function Loader() {
  const topText = useRef<HTMLSpanElement>(null);
  const bottomText = useRef<HTMLSpanElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.set(document.body, {
      overflow: "hidden",
    });
    const tl = gsap.timeline({});
    tl.from([topText.current, bottomText.current], {
      opacity: 0,
      y: 50,
      duration: 0.75,
      ease: "sine",
      stagger: 0.15,
    });
    tl.to([topText.current, bottomText.current], {
      opacity: 0,
      y: 50,
      duration: 0.75,
      ease: "sine",
      delay: 3,
    });
    tl.to(loader.current, {
      // y: "100vh",
      opacity: 0,
      display: "none",
      duration: 1,
      ease: "sine",
      delay: "-=2",
      onComplete: () => {
        gsap.set(document.body, {
          overflow: "auto",
          ease: "sine",
        });
      },
    });
  }, []);

  return (
    <>
      {/* Loader wrap */}
      <div
        className="h-screen w-full flex items-end p-8 bg-[#F7EFDF] absolute justify-between"
        ref={loader}
      >
        {/* Text on bottom left */}
        <div className="h-fit pb-8 pt-8">
          <h1>
            <span className="layerOne absolute" ref={topText}>
              We made you
            </span>
            <br />
            <span className="layerTwo absolute" ref={bottomText}>
              some playlists.
            </span>
          </h1>
        </div>
        {/* Loader on right */}
        <div className="">
          <img src={dhLogo} className="logo p-5 max-w-36" alt="DH logo" />
        </div>
      </div>
    </>
  );
}

export default Loader;
