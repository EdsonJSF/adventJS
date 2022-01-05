function createXmasTree(height) {
  if (height > 0 && height <= 100) {
    let tree = "";
    let woodenLog = "";

    let floor = height;
    let leftLogSki = 0;
    while (leftLogSki < floor - 1) {
      woodenLog += "_";
      leftLogSki++;
    }

    woodenLog += "#";

    let rightLogSki = 0;
    while (rightLogSki < floor - 1) {
      woodenLog += "_";
      rightLogSki++;
    }

    while (floor) {
      floor--;

      let leftSki = 0;
      while (leftSki < floor) {
        tree += "_";
        leftSki++;
      }

      tree += "*";

      let leaf = height;
      while (leaf > floor + 1) {
        tree += "**";
        leaf--;
      }

      let rightSki = 0;
      while (rightSki < floor) {
        tree += "_";
        rightSki++;
      }
      tree += "\n";
    }

    tree += `${woodenLog}\n${woodenLog}`;

    return tree;
  }

  return "El árbol es o muy grande o muy pequeño\nEl tamaño debe ser de 1 a 100";
}

console.log(createXmasTree(3));

/*
  __*__
  _***_
  *****
  __#__
  __#__
*/
