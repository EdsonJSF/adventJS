function daysToXmas(date) {
  const today = new Date("Dec 25 2021");

  const mil = 1000;
  const sec = 60;
  const min = 60;
  const hor = 24;
  const day = mil * sec * min * hor;

  let numberDay = today.setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0);

  return numberDay / day;
}

console.log(daysToXmas(new Date("Dec 1, 2021"))); // 24
console.log(daysToXmas(new Date("Dec 20, 2021 03:24:00"))); // 5
console.log(daysToXmas(new Date("Dec 24, 2021 00:00:1"))); // 1
console.log(daysToXmas(new Date("Dec 24, 2021 23:59:59"))); // 1
console.log(daysToXmas(new Date("December 20, 2021 03:24:00"))); // 5
console.log(daysToXmas(new Date("Dec 25, 2021"))); // 0
console.log(daysToXmas(new Date("Dec 26, 2021"))); // -1
console.log(daysToXmas(new Date("Dec 31, 2021"))); // -6
console.log(daysToXmas(new Date("Jan 1, 2022 00:00:01"))); // -7
console.log(daysToXmas(new Date("Jan 1, 2022 23:59:59"))); // -7
