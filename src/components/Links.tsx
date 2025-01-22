import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import Popup from "./Popup.tsx";

function Links() {
  const container = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const middleImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  // expandable
  const [activePopup, setActivePopup] = useState<string | null>(null);

  // Set up GSAP context with proper scoping
  const { contextSafe } = useGSAP({ scope: container });

  const imageHoverIn = contextSafe(
    (targetRef: React.RefObject<HTMLDivElement>) => {
      gsap.to(targetRef.current, {
        backgroundPositionX: "35%",
        duration: 5,
        ease: "sine",
        onComplete: () => {
          gsap.to(targetRef.current, {
            backgroundPositionX: "75%",
            duration: 5,
            ease: "sine",
          });
        },
      });

      gsap.to(targetRef.current, {
        scale: 0.75,
        // y: -50,
        duration: 0.75,
        ease: "ease-in",
        overwrite: "auto", // Prevent overlapping animations
      });
    }
  );

  const imageHoverOut = contextSafe(
    (targetRef: React.RefObject<HTMLDivElement>) => {
      gsap.to(targetRef.current, {
        backgroundPositionX: "50%",
        scale: 1,
        duration: 0.5,
        ease: "sine",
        overwrite: "auto",
      });
    }
  );

  const showPopup = (popupId: string) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <div
        className="playlists flex flex-col md:flex-row h-screen relative"
        ref={container}
      >
        {/* Left */}
        <div
          className="playinit w-full md:w-1/3 md:h-screen h-1/3 bg-[#0F2E24] items-center justify-center relative hover:cursor-pointer"
          onMouseEnter={() => imageHoverIn(leftImageRef)}
          onMouseLeave={() => imageHoverOut(leftImageRef)}
          onTouchStart={() => imageHoverIn(leftImageRef)}
          onTouchEnd={() => imageHoverOut(leftImageRef)}
          onClick={() => showPopup("toasty-hosting")}
        >
          <div
            ref={leftImageRef}
            className="bg-[url('/holidaygift/images/DinnerParty-Center.jpg')] w-full h-full bg-cover bg-center bg-no-repeat linkImage absolute z-10"
          >
            &nbsp;
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <h2 className="text-[#DAE8DD]">Toasty hosting</h2>
          </div>
        </div>
        {/* Middle */}
        <div
          className="playinit w-full md:w-1/3 md:h-screen h-1/3 bg-[#F7EFDF] items-center justify-center relative hover:cursor-pointer"
          onMouseEnter={() => imageHoverIn(middleImageRef)}
          onMouseLeave={() => imageHoverOut(middleImageRef)}
          onTouchStart={() => imageHoverIn(middleImageRef)}
          onTouchEnd={() => imageHoverOut(middleImageRef)}
          onClick={() => showPopup("snow-day")}
        >
          <div
            ref={middleImageRef}
            className="bg-[url('/holidaygift/images/SnowDay-Center.jpg')] w-full h-full bg-cover bg-center bg-no-repeat linkImage absolute z-10"
          >
            &nbsp;
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <h2 className="text-[#315B31]">Snow day</h2>
          </div>
        </div>
        {/* Right */}
        <div
          className="playinit md:w-1/3 md:h-screen h-1/3 bg-[#0F2E24] items-center justify-center relative hover:cursor-pointer"
          onMouseEnter={() => imageHoverIn(rightImageRef)}
          onMouseLeave={() => imageHoverOut(rightImageRef)}
          onTouchStart={() => imageHoverIn(rightImageRef)}
          onTouchEnd={() => imageHoverOut(rightImageRef)}
          onClick={() => showPopup("hibernation-mode")}
        >
          <div
            ref={rightImageRef}
            className="bg-[url('/holidaygift/images/HibernationMode-Center.jpg')] w-full h-full bg-cover bg-center bg-no-repeat linkImage absolute z-10"
          >
            &nbsp;
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <h2 className="text-[#DAE8DD]">Hibernation mode</h2>
          </div>
        </div>
        {activePopup === "toasty-hosting" && (
          <Popup
            title="Toasty hosting"
            sub="When you’re in a contemplative mood"
            genre="R&B, Indie, etc."
            content="Whether you’re a regular on the ski hills or you only head out into the cold to shovel the front walk, this collection of songs will keep your spirits high, even when it’s freezing. Hit play on this one, and the songs will follow you from the base of the hill to the top (and back down again), or from the house to the car and back home again. Bundle up, head out, and let this playlist enhance your snowy adventures. Cold? What cold?"
            image="/holidaygift/images/DinnerPartyTile.jpg"
            linkOne="https://youtube.com/playlist?list=PLIs6Kb_-sdWLYIrSTUMg2yATAngDvzS0u&si=KI9rwnJ9alXGT4Cy"
            linkTwo="https://open.spotify.com/playlist/47dh5nRqh4MLF9MyaXG4Xw?si=HioXJT6WTXGwlLnZadlDDw"
            linkThree="https://open.spotify.com/playlist/47dh5nRqh4MLF9MyaXG4Xw?si=HioXJT6WTXGwlLnZadlDDw"
            closePopup={closePopup}
          />
        )}

        {activePopup === "snow-day" && (
          <Popup
            title="Snow day"
            sub="Fun in the snow"
            genre="Pop, Rock, etc."
            content="Whether you’re a regular on the ski hills or you only head out into the cold to shovel the front walk, this collection of songs will keep your spirits high, even when it’s freezing. Hit play on this one, and the songs will follow you from the base of the hill to the top (and back down again), or from the house to the car and back home again. Bundle up, head out, and let this playlist enhance your snowy adventures. Cold? What cold?"
            image="/holidaygift/images/SnowDayTile.jpg"
            linkOne="https://example.com/link1"
            linkTwo="https://example.com/link2"
            linkThree="https://example.com/link3"
            closePopup={closePopup}
          />
        )}

        {activePopup === "hibernation-mode" && (
          <Popup
            title="Hibernation mode"
            sub="Cozy up and relax"
            genre="Acoustic, Chill, etc."
            content="Whether you’re a regular on the ski hills or you only head out into the cold to shovel the front walk, this collection of songs will keep your spirits high, even when it’s freezing. Hit play on this one, and the songs will follow you from the base of the hill to the top (and back down again), or from the house to the car and back home again. Bundle up, head out, and let this playlist enhance your snowy adventures. Cold? What cold?"
            image="/holidaygift/images/HibernationModeTile.jpg"
            linkOne="https://example.com/link1"
            linkTwo="https://example.com/link2"
            linkThree="https://example.com/link3"
            closePopup={closePopup}
          />
        )}
      </div>
    </>
  );
}

export default Links;
