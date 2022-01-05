let letter1 = "bici coche (balón) bi(ci) coche peluche"; // -> ✅
let letter2 = "(muñeca) consola bici"; // -> ✅
let letter3 = "bici coche (balón bici coche"; // -> ❌
let letter4 = "peluche (bici [coche) bici coche balón"; // -> ❌
let letter5 = "(peluche {) bici"; // -> ❌
let letter6 = "() bici"; // -> ❌

const isValid = (letter) => {
  const invalid = /[/}\{}/\]\[]/.test(letter);

  if (invalid) {
    return false;
  }

  const lowered = letter.toLowerCase();
  const splited = lowered.split(" ");
  const carta = splited.reduce((acc, el) => {
    if (/\(\b/.test(el) && /\b\)/.test(el)) {
      acc.push(el);
    } else if (!/\(/.test(el) && !/\)/.test(el)) {
      acc.push(el);
    } else {
      acc.push(false);
    }

    return acc;
  }, []);

  return !carta.includes(false);
};

console.log(isValid("bici coche (balón) bi(ci) coche peluche")); // -> ✅
console.log(isValid("(muñeca) consola bici")); // -> ✅
console.log(isValid("bici coche (balón bici coche")); // -> ❌
console.log(isValid("peluche (bici [coche) bici coche balón")); // -> ❌
console.log(isValid("(peluche {) bici")); // -> ❌
console.log(isValid("() bici")); // -> ❌
