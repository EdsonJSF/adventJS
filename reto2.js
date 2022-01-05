const readLetter = (letter) => {
  const lowered = letter.toLowerCase();
  const splited = lowered.split(" ");
  const reduced = splited.reduce((acc, el) => {
    const dispath = el.includes("_");
    if (el && !dispath) {
      if (acc[el]) {
        acc[el]++;
      } else {
        acc[el] = 1;
      }
    }
    return acc;
  }, {});
  return reduced;
};

let letter = "bici coche balón _playstation bici coche peluche";
console.log(readLetter(letter));
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
