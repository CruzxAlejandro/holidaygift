function RandomImage() {
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
    let tempString: string = "/holidaygift/images/tiles/";
    let type: string = fileName[getRandomInt(0, 2)];
    tempString += type + getRandomInt(1, 16) + ".png";
    return tempString;
  }
  return (
    <>
      <img src={randomImage()} alt={randomImage()} />
    </>
  );
}

export default RandomImage;
