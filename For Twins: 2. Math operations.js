function iceBrickVolume(radius, bottleLength, rimLength) {
  let height = bottleLength - rimLength;
  return height * radius * (radius * 2);
}


  console.log(iceBrickVolume(1, 10, 2));
  console.log(iceBrickVolume(5, 30, 7));
