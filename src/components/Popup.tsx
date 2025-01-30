import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import HoverImage from "./HoverImage";

interface PopProps {
  title: string;
  sub: string;
  genre: string;
  content: string;
  image: string;
  linkOne: string;
  linkTwo: string;
  linkThree: string;
  closePopup: () => void;
}

function Popup({
  title,
  sub,
  genre,
  content,
  image,
  linkOne,
  linkTwo,
  linkThree,
  closePopup,
}: PopProps) {
  const pop = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: pop });

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      tl.from(pop.current, { x: "-50%" });
      tl.from(".contentImage", {
        scale: 0.75,
        opacity: 0,
        duration: 0.75,
        ease: "sine",
      });
      tl.from(".contentCopy", {
        y: "5%",
        opacity: 0,
        duration: 0.75,
        ease: "sine",
      });
      tl.from(".music", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.25,
        ease: "sine.out",
      });
      tl.from(".btn-close", {
        scale: 0.75,
        opacity: 0,
        duration: 0.75,
        ease: "sine",
      });
    },
    { scope: pop }
  );

  const handleClose = contextSafe(() => {
    const tl = gsap.timeline({ onComplete: closePopup });
    tl.to(".contentImage, .contentCopy", {
      x: "-10%",
      opacity: 0,
      duration: 0.5,
    });
    tl.to(pop.current, {
      //   x: "-50%",
      opacity: 0,
      duration: 0.5,
      ease: "sine.out",
      //   delay: "-.25",
    });
  });

  return (
    <>
      <div
        className="playlistOpen min-h-screen w-full absolute z-50 p-4 md:p-10 xxl:w-11/12 bg-[#F7EFDF]"
        ref={pop}
      >
        <div className="topbar text-right">
          <button
            type="button"
            className="relative focus:outline-none focus:ring-2 focus:ring-white btn-close"
            onClick={handleClose}
          >
            <span className="absolute"></span>
            <span className="sr-only">Close</span>
            {/* <img src="/images/x_2.png" className="max-w-12" /> */}
            <HoverImage
              defaultSrc="/images/X_1.png"
              hoverSrc="/images/x_2.png"
              className="max-w-12"
              alt="Close button"
            />
          </button>
        </div>
        <div className="contentWrap flex flex-col sm:flex-row w-full items-center">
          <div className="contentImage w-3/5 sm:w-1/2 p-4 sm:p-10 text-center">
            <img src={image} alt="" />
          </div>
          <div className="contentCopy w-full sm:w-1/2 p-4 sm:p-10">
            <h2 className="text-[#283C4D]">{title}</h2>
            <h3 className="text-[#025961]">{sub}</h3>
            <h4 className="text-[#527F65]">{genre}</h4>
            <p className="text-[#000] mt-5">{content}</p>
            <p className="text-[#000] mb-5">
              Select your favorite listening mode below.
            </p>
            <div className="links flex justify-between sm:justify-around w-full text-dh-black">
              <div className="music max-w-16 sm:max-w-24 text-center">
                <a href={linkOne} target="_blank">
                  <HoverImage
                    defaultSrc="/images/apple music_button.png"
                    hoverSrc="/images/AppleMusic.gif"
                    className=""
                    alt="Apple music illustration."
                  />
                </a>
                <p className="pt-2 text-[#025961] text-base">Apple Music</p>
              </div>
              <div className="music max-w-16 sm:max-w-24 text-center">
                <a href={linkTwo} target="_blank">
                  <HoverImage
                    defaultSrc="/images/Youtube_button.png"
                    hoverSrc="/images/Youtube.gif"
                    className=""
                    alt="Youtube illustration."
                  />
                </a>
                <p className="pt-2 text-[#025961] text-base">YouTube</p>
              </div>
              <div className="music max-w-16 sm:max-w-24 text-center">
                <a href={linkThree} target="_blank">
                  <HoverImage
                    defaultSrc="/images/spotify_button.png"
                    hoverSrc="/images/Spotify.gif"
                    className=""
                    alt="Youtube illustration."
                  />
                </a>
                <p className="pt-2 text-[#025961] text-base">Spotify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
