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
        id="playlist"
        ref={container}
      >
        {/* Left */}
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
            className="bg-[url('/images/HibernationMode-Center.jpg')] w-full h-5/6 md:h-full bg-cover bg-center bg-no-repeat linkImage absolute z-10"
          >
            &nbsp;
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center z-50 md:z-0">
            <h2 className="text-[#DAE8DD]">Hibernation mode</h2>
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
            className="bg-[url('/images/SnowDay-Center.jpg')] w-full h-5/6 md:h-full bg-cover bg-center bg-no-repeat linkImage absolute z-10"
          >
            &nbsp;
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center z-50 md:z-0">
            <h2 className="text-[#0F2E24]">Snow day</h2>
          </div>
        </div>
        {/* Right */}
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
            className="bg-[url('/images/DinnerParty-Center.jpg')] w-full h-5/6 md:h-full bg-cover bg-center bg-no-repeat linkImage absolute z-10"
          >
            &nbsp;
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center z-50 md:z-0">
            <h2 className="text-[#DAE8DD]">Toasty hosting</h2>
          </div>
        </div>
        {activePopup === "toasty-hosting" && (
          <Popup
            title="Toasty hosting"
            sub="When you have guests and need to set the mood"
            genre="R&B, Indie, etc."
            content="The colder it gets outside, the more we need human connection inside. Press play on this list while you’re entertaining friends or family, and let its mix of mellow vibes and upbeat rhythms pull the room together. Like all the best party playlists, it’s laidback, lively and effortlessly cool — and it’ll have your friends pulling out their phones to Shazam their new favorite song."
            image="/images/DinnerPartyTile.jpg"
            linkOne="https://music.apple.com/us/playlist/toasty-hosting/pl.u-AkAmPlpfxrvzvBY"
            linkTwo="https://youtube.com/playlist?list=PLIs6Kb_-sdWLYIrSTUMg2yATAngDvzS0u&si=KI9rwnJ9alXGT4Cy"
            linkThree="https://open.spotify.com/playlist/47dh5nRqh4MLF9MyaXG4Xw?si=HioXJT6WTXGwlLnZadlDDw"
            closePopup={closePopup}
          />
        )}

        {activePopup === "snow-day" && (
          <Popup
            title="Snow day"
            sub="When you go outside and like it"
            genre="Pop, Rock, etc."
            content="Whether you’re a ski-hill regular or only go outside to shovel, this upbeat collection will elevate your spirits and keep you moving. Even when it’s freezing. Hit play, and the songs will follow you from the base of the hill to the top (and back down again — just make sure you keep the volume low), or from the house to the car to the office. Bundle up, head out and let this playlist invigorate you. Cold? What cold?"
            image="/images/SnowDayTile.jpg"
            linkOne="https://music.apple.com/us/playlist/snow-day/pl.u-vxy697juWLrNrD7"
            linkTwo="https://youtube.com/playlist?list=PLIs6Kb_-sdWJkXk-LPGNhww9bB79xec5m&si=PsEhLOqNhNB4dWSp"
            linkThree="https://open.spotify.com/playlist/01Bu56Q4UHtDQJvzSgxmpa?si=Ami5BofNTyC2zpWx_hByMA"
            closePopup={closePopup}
          />
        )}

        {activePopup === "hibernation-mode" && (
          <Popup
            title="Hibernation mode"
            sub="When you’re in a contemplative mood"
            genre="Acoustic, Chill, etc."
            content="There’s something about the stillness of January and February — it’s easy to get lost in thought. This collection of introspective songs feels like a warm blanket when you’re curled up with a good book, or staring at the bare trees out your window. It’s perfect for these low-key, post-holiday winter months, a mix of tracks that let you unwind, reflect and relax. Grab a cup of tea and chill out."
            image="/images/HibernationModeTile.jpg"
            linkOne="https://music.apple.com/us/playlist/hibernation-mode/pl.u-Ymb0vd5IgJv6v4Y"
            linkTwo="https://youtube.com/playlist?list=PLIs6Kb_-sdWL3bPPJIFH8UH_QSq9hjGJL&si=S9JjWnIewRxkuBXV"
            linkThree="https://open.spotify.com/playlist/27yGjhrL8U1C2JbqafUraV?si=-SrWnY2NSladxbxnjc99aw"
            closePopup={closePopup}
          />
        )}
      </div>
    </>
  );
}

export default Links;
