import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface FlipImageProps {
  defaultSrc: string;
  hoverSrc: string;
  className?: string;
  alt?: string;
}

function FlipImage({ defaultSrc, hoverSrc, className, alt }: FlipImageProps) {
  const cardWrapper = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () => {
      if (!cardWrapper.current) return;
      const wrapper = cardWrapper.current;
      gsap.set(wrapper, { perspective: 800 });
      gsap.set(wrapper.querySelector(".card"), {
        transformStyle: "preserve-3d",
      });
      gsap.set(wrapper.querySelector(".back"), { rotationY: -180 });
      gsap.set(wrapper.querySelectorAll(".back, .front"), {
        backfaceVisibility: "hidden",
      });
    },
    { scope: cardWrapper }
  );

  const handleMouseEnter = contextSafe(() => {
    if (!cardWrapper.current) return;

    const card = cardWrapper.current.querySelector(".card");
    if (card) {
      gsap.to(card, {
        duration: 0.75,
        rotationY: 180,
        ease: "sine.out",
      });
    }
  });
  const handleMouseLeave = contextSafe(() => {
    if (!cardWrapper.current) return;

    const card = cardWrapper.current.querySelector(".card");
    if (card) {
      gsap.to(card, {
        duration: 0.75,
        rotationY: 0,
        ease: "sine.out",
      });
    }
  });

  return (
    <div
      ref={cardWrapper}
      className={`relative w-full h-full overflow-hidden ${className || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px", // Add perspective to create the 3D effect
      }}
    >
      <div className="card w-full h-full">
        <div className="cardFace front w-full h-full">
          <img src={defaultSrc} alt={alt} className={className} />
        </div>
        <div className="absolute top-0 cardFace back w-full h-full">
          <img src={hoverSrc} alt={alt} className={className} />
        </div>
      </div>
    </div>
  );
}

export default FlipImage;
