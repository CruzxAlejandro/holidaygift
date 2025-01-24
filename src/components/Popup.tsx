import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";

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

interface HoverImageProps {
  defaultSrc: string;
  hoverSrc: string;
  className?: string;
  alt?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  defaultSrc,
  hoverSrc,
  className,
  alt,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(defaultSrc);

  const handleMouseEnter = () => {
    setImageSrc(hoverSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(defaultSrc);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

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
        className="playlistOpen min-h-screen w-full absolute z-50 p-4 md:p-10 bg-[#F7EFDF]"
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
            {/* <img src="/holidaygift/images/x_2.png" className="max-w-12" /> */}
            <HoverImage
              defaultSrc="/holidaygift/images/X_1.png"
              hoverSrc="/holidaygift/images/x_2.png"
              className="max-w-12"
              alt="Close button"
            />
          </button>
        </div>
        <div className="contentWrap flex flex-col md:flex-row w-full items-center">
          <div className="contentImage w-3/5 md:w-1/2 p-4 md:p-10 text-center">
            <img src={image} alt="" />
          </div>
          <div className="contentCopy w-full md:w-1/2 p-4 md:p-10">
            <h2 className="text-[#283C4D]">{title}</h2>
            <h3 className="text-[#964730]">{sub}</h3>
            <h4 className="text-[#527F65]">{genre}</h4>
            <p className="text-[#000] mt-5">{content}</p>
            <div className="links flex justify-between md:justify-around w-full text-dh-black">
              <div className="music max-w-16 md:max-w-24">
                <a href={linkOne} target="_blank">
                  <HoverImage
                    defaultSrc="/holidaygift/images/apple music_button.png"
                    hoverSrc="/holidaygift/images/AppleMusic.gif"
                    className=""
                    alt="Apple music illustration."
                  />
                </a>
              </div>
              <div className="music max-w-16 md:max-w-24">
                <a href={linkTwo} target="_blank">
                  <HoverImage
                    defaultSrc="/holidaygift/images/Youtube_button.png"
                    hoverSrc="/holidaygift/images/Youtube.gif"
                    className=""
                    alt="Youtube illustration."
                  />
                </a>
              </div>
              <div className="music max-w-16 md:max-w-24">
                <a href={linkThree} target="_blank">
                  <HoverImage
                    defaultSrc="/holidaygift/images/spotify_button.png"
                    hoverSrc="/holidaygift/images/Spotify.gif"
                    className=""
                    alt="Youtube illustration."
                  />
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
