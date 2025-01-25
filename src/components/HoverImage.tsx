import { useState } from "react";

interface HoverImageProps {
  defaultSrc: string;
  hoverSrc: string;
  className?: string;
  alt?: string;
}

function HoverImage({ defaultSrc, hoverSrc, className, alt }: HoverImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative ${className || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default Image */}
      <img
        src={defaultSrc}
        alt={alt}
        className={`absolute transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Hover Image */}
      <img
        src={hoverSrc}
        alt={alt}
        className={`transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default HoverImage;

// import { useState } from "react";
// interface HoverImageProps {
//   defaultSrc: string;
//   hoverSrc: string;
//   className?: string;
//   alt?: string;
// }

// function HoverImage({ defaultSrc, hoverSrc, className, alt }: HoverImageProps) {
//   const [imageSrc, setImageSrc] = useState<string>(defaultSrc);

//   const handleMouseEnter = () => {
//     setImageSrc(hoverSrc);
//   };

//   const handleMouseLeave = () => {
//     setImageSrc(defaultSrc);
//   };
//   return (
//     <>
//       <img
//         src={imageSrc}
//         alt={alt}
//         className={className}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       />
//     </>
//   );
// }

// export default HoverImage;
