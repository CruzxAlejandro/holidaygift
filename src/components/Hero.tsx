import RandomImage from "./RandomImage.tsx";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  const grid = useRef<HTMLDivElement>(null);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 971);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 971);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      tl.from(".heroTitle, .heroText", {
        y: 50,
        opacity: 0,
        duration: 0.75,
        stagger: 0.5,
        delay: 1,
        ease: "sine",
      });
      tl.from(".heroSquare", {
        opacity: 0,
        duration: 0.75,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });
      // tl.from(".heroText", {
      //   y: 50,
      //   opacity: 0,
      //   duration: 0.5,
      //   ease: "sine",
      // });
    },
    { scope: grid }
  );

  return (
    <>
      <div className="hero w-full">
        <div>
          {isDesktop ? (
            <div
              className="gridWrapper grid md:grid-cols-9 md:grid-rows-5 lg:grid-rows-5"
              ref={grid}
            >
              {Array.from({ length: 26 }, (_, index) => (
                <div key={index} className="bg-[#f7efdf] w-full h-full">
                  <RandomImage className="object-fill heroSquare" />
                </div>
              ))}
              <div className="bg-[#f7efdf]">
                <a href="https://wearedh.com" target="_blank">
                  <img
                    className="object-fill heroSquare"
                    src="/images/DH-Tile.png"
                  />
                </a>
              </div>
              <div className="md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-2 md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-2 my-auto mx-auto heroTitle px-5">
                <h1 className="text-[#0F2E24]">
                  We made you
                  <br />
                  some playlists.
                </h1>
              </div>
              <div className="md:col-start-5 md:row-start-2 lg:col-start-6 lg:row-start-2 md:col-span-5 md:row-span-3 lg:col-span-3 lg:row-span-4 px-5 lg:px-12 my-auto lg:mx-auto heroText">
                <p>
                  If this new year has felt tough so far, you're not alone. The
                  team at DH put together some playlists to bring you comfort,
                  warmth and maybe even a little joy.
                </p>
                <p>
                  These may be digital, but they’re also handmade — no shelf
                  space required. Each of these three lists is tailored to
                  soundtrack a wintertime activity or enhance a mood.
                </p>
                <p>
                  Click the{" "}
                  <ScrollLink
                    to="playlist"
                    smooth={true}
                    duration={800}
                    className="text-[#025961] underline hover:cursor-pointer"
                  >
                    links
                  </ScrollLink>
                  , take what helps, skip what doesn’t — and know that we’re
                  right here with you.
                </p>
              </div>
            </div>
          ) : (
            <div className="gridWrapper grid grid-cols-6 row-auto" ref={grid}>
              {Array.from({ length: 23 }, (_, index) => (
                <div key={index} className="bg-[#f7efdf]">
                  <RandomImage className="object-fill heroSquare" />
                </div>
              ))}
              <div className="bg-[#f7efdf]">
                <a href="https://wearedh.com" target="_blank">
                  <img
                    className="object-fill heroSquare"
                    src="/images/DH-Tile.png"
                  />
                </a>
              </div>
              <div className="row-start-3 col-span-6 row-auto heroTitle px-10 py-5">
                <h1 className="text-[#0F2E24]">
                  We made you
                  <br />
                  some playlists.
                </h1>
              </div>
              <div className="row-start-4 col-span-6 row-auto px-10 py-5 my-auto mx-auto heroText">
                <p>
                  If this new year has felt tough so far, you're not alone. The
                  team at DH put together some playlists to bring you comfort,
                  warmth and maybe even a little joy.
                </p>
                <p>
                  These may be digital, but they’re also handmade — no shelf
                  space required. Each of these three lists is tailored to
                  soundtrack a wintertime activity or enhance a mood.
                </p>
                <p>
                  Click the{" "}
                  <ScrollLink
                    to="playlist"
                    smooth={true}
                    duration={800}
                    className="text-[#025961] underline hover:cursor-pointer"
                  >
                    links
                  </ScrollLink>
                  , take what helps, skip what doesn’t — and know that we’re
                  right here with you.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
