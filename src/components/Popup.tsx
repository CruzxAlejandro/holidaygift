import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

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
        className="playlistOpen h-full w-full absolute z-50 p-4 md:p-10 bg-[#F7EFDF]"
        ref={pop}
      >
        <div className="topbar text-right">
          <button
            type="button"
            className="bg-dh-black relative rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white btn-close"
            onClick={handleClose}
          >
            <span className="absolute"></span>
            <span className="sr-only">Close</span>
            <svg
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="contentWrap flex flex-col md:flex-row w-full items-center">
          <div className="contentImage w-4/6 md:w-1/2 p-4 md:p-10 text-center">
            <img src={image} alt="" />
          </div>
          <div className="contentCopy w-full md:w-1/2 p-4 md:p-10">
            <h2 className="text-[#283C4D]">{title}</h2>
            <h3 className="text-[#964730]">{sub}</h3>
            <h4 className="text-[#527F65]">{genre}</h4>
            <p className="text-[#000] mt-5">{content}</p>
            <div className="links flex justify-between md:justify-around w-full text-dh-black">
              <div className="apple max-w-16 md:max-w-32">
                <a href={linkOne} target="_blank">
                  <img src="holidaygift/images/apple music_button.png" />
                </a>
              </div>
              <div className="utube max-w-16 md:max-w-32">
                <a href={linkTwo} target="_blank">
                  <img src="holidaygift/images/Youtube_button.png" />
                </a>
              </div>
              <div className="spotify max-w-16 md:max-w-32">
                <a href={linkThree} target="_blank">
                  <img src="holidaygift/images/spotify_button.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
