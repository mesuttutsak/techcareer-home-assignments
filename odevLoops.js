// 1) "Tech Career" metnini tersten yazdır

function quest1() {
  const str = "Tech Career";
  const strSplit = str.split("");
  const strReverse = strSplit.reverse();
  return strReverse.join("");
}

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE poizitif sayıların toplamını ekrana yaz

function quest2() {
  const numberArr = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
  const filteredArr = numberArr.filter((num) => num > 0);
  return filteredArr.join(", ");
}

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki en büyük sayı hangisidir?

function quest3() {
  const numberArr = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
  const sortedArr = numberArr.sort();
  return sortedArr[sortedArr.length - 1];
}

//1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz.

function quest4() {
  let result = [];
  let resultLength = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result.push(i);
      resultLength++;
    }
  }
  return {
    result: result,
    length: resultLength
  };
}

console.log("odevLoops");
console.log("1)", quest1());
console.log("2)", quest2());
console.log("3)", quest3());
console.log("4)", quest4());
