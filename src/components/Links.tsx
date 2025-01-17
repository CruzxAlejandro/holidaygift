// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { useRef } from "react";

// function Links() {
//   const container = useRef();

//   // Set up GSAP context with proper scoping
//   const { contextSafe } = useGSAP({ scope: container });

//   const imageHoverIn = contextSafe(() => {
//     gsap.to(".linkImage", {
//       scale: 0.75,
//       y: -50,
//       duration: 1,
//       ease: "sine",
//     });
//   });
//   const imageHoverOut = contextSafe(() => {
//     gsap.to(".linkImage", {
//       scale: 1,
//       y: 0,
//       duration: 0.5,
//       ease: "sine",
//     });
//   });

//   return (
//     <>
//       {/* <div className="playlists" ref={linkWrapper}> */}
//       <div className="playlists flex" ref={container}>
//         {/* Left */}
//         <div
//           className="playinit w-1/3 h-screen bg-dh-black items-center justify-center relative"
//           onMouseEnter={imageHoverIn}
//           onMouseLeave={imageHoverOut}
//         >
//           <div className="bg-[url('/holidaygift/images/DinnerParty-Center.jpg')] w-full h-screen bg-center bg-no-repeat linkImage absolute z-10">
//             &nbsp;
//           </div>
//           <div className="absolute bottom-0 mx-auto">Toasty hosting</div>
//         </div>
//         {/* Middle */}
//         <div className="playinit w-1/3 h-screen bg-dh-black items-center justify-center relative">
//           <div className="bg-[url('/holidaygift/images/SnowDay-Center.jpg')] w-full h-screen bg-center bg-no-repeat linkImage absolute z-10">
//             &nbsp;
//           </div>
//           <div className="absolute bottom-0 mx-auto">Toasty hosting</div>
//         </div>
//         {/* Right */}
//         <div className="playinit w-1/3 h-screen bg-dh-black items-center justify-center relative">
//           <div className="bg-[url('/holidaygift/images/SnowDay-Center.jpg')] w-full h-screen bg-center bg-no-repeat linkImage absolute z-10">
//             &nbsp;
//           </div>
//           <div className="absolute bottom-0 mx-auto">Toasty hosting</div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Links;

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

function Links() {
  const container = useRef();
  const leftImageRef = useRef();
  const middleImageRef = useRef();
  const rightImageRef = useRef();

  // Set up GSAP context with proper scoping
  const { contextSafe } = useGSAP({ scope: container });

  const imageHoverIn = contextSafe((targetRef) => {
    gsap.to(targetRef.current, {
      backgroundPositionX: "45%",
      duration: 5,
      ease: "sine",
      onComplete: () => {
        gsap.to(targetRef.current, {
          backgroundPositionX: "60%",
          duration: 5,
          ease: "sine",
        });
      },
    });

    gsap.to(targetRef.current, {
      scale: 0.75,
      y: -50,
      duration: 0.75,
      ease: "ease-in",
      overwrite: "auto", // Prevent overlapping animations
    });
  });

  const imageHoverOut = contextSafe((targetRef) => {
    gsap.to(targetRef.current, {
      backgroundPositionX: "50%",
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "sine",
      overwrite: "auto",
    });
  });

  return (
    <div className="playlists flex" ref={container}>
      {/* Left */}
      <div
        className="playinit w-1/3 h-screen bg-dh-black items-center justify-center relative"
        onMouseEnter={() => imageHoverIn(leftImageRef)}
        onMouseLeave={() => imageHoverOut(leftImageRef)}
      >
        <div
          ref={leftImageRef}
          className="bg-[url('/holidaygift/images/DinnerPartyTile.jpg')] w-full h-screen bg-center bg-no-repeat linkImage absolute z-10"
        >
          &nbsp;
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          Toasty hosting
        </div>
      </div>
      {/* Middle */}
      <div
        className="playinit w-1/3 h-screen bg-dh-black items-center justify-center relative"
        onMouseEnter={() => imageHoverIn(middleImageRef)}
        onMouseLeave={() => imageHoverOut(middleImageRef)}
      >
        <div
          ref={middleImageRef}
          className="bg-[url('/holidaygift/images/SnowDayTile.jpg')] w-full h-screen bg-center bg-no-repeat linkImage absolute z-10"
        >
          &nbsp;
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          Snow day
        </div>
      </div>
      {/* Right */}
      <div
        className="playinit w-1/3 h-screen bg-dh-black items-center justify-center relative"
        onMouseEnter={() => imageHoverIn(rightImageRef)}
        onMouseLeave={() => imageHoverOut(rightImageRef)}
      >
        <div
          ref={rightImageRef}
          className="bg-[url('/holidaygift/images/HibernationModeTile.jpg')] w-full h-screen bg-center bg-no-repeat linkImage absolute z-10"
        >
          &nbsp;
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          Toasty hosting
        </div>
      </div>
    </div>
  );
}

export default Links;
