// import HoverImage from "./HoverImage";
import FlipImage from "./FlipImage";

interface RandomImageProps {
  className?: string;
}

function RandomImage({ className }: RandomImageProps) {
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const fileName: string[] = [
    "Dinner_Party_Tile_",
    "Hibernation_Mode_Tile_",
    "Snow_Day_Tile_",
  ];

  function randomImage() {
    let tempString: string = "/images/tiles/";
    let type: string = fileName[getRandomInt(0, 2)];
    tempString += type + getRandomInt(1, 16) + ".png";
    return tempString;
  }
  return (
    <>
      <FlipImage
        defaultSrc={randomImage()}
        hoverSrc={randomImage()}
        className={className}
        alt="Holiday tile illustration."
      />
    </>
  );
}

export default RandomImage;
