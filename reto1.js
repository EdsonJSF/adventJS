const contarOvejas = (ovejas) => {
  const ovejasRojas = ovejas.filter((el) => el.color.toLowerCase() === "rojo");
  const ovejasNA = ovejasRojas.reduce((acc, el) => {
    let n = el.name.toLowerCase().includes("n");
    let a = el.name.toLowerCase().includes("a");
    if (a && n) {
      acc.push(el);
    }
    return acc;
  }, []);

  return ovejasNA;
};

let ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];
console.log(contarOvejas(ovejas));
/*
[
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]
*/
