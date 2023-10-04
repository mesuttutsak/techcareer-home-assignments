// 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE)

function quest1() {
  const str = "  Çağatay Yıldız";

  return str.replaceAll(" ", "");
}

// 2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)

function quest2() {
  const str = "cagatay yildiz";

  return str.replaceAll(" ", "").toUpperCase();
}

// 3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)

function quest3() {
  const str = "******Çağatay Yıldız";

  return str.replaceAll("*", "");
}

// 4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)

function quest4() {
  const str = "Çağatay  Yıldız";

  return str.replaceAll("  ", " ");
}

// 5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)

function quest5() {
  const str5 = "**Tech Career**";

  return str5.replaceAll("*", "");
}

// 6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)

function quest6() {
  let str = "Tech Career";
  const patternToAdd = "***";
  str = patternToAdd + str + patternToAdd;

  return str;
}

// 7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)
// Son kelimeyi alalım ve büyük harflerle yazalım

function quest7() {
  let str = "Tech Career Bilişim teknolojileri";
  const strArr = str.split(" ");
  const lastSpacePosition = str.lastIndexOf(" ");
  const lastWord = str.substring(lastSpacePosition + 1).toUpperCase();
  strArr[strArr.length - 1] = lastWord;
  str = strArr.join(" ");

  return str + " -- " + lastWord;
}

// 8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper)

function quest8() {
  let str = "Tech bilişim";
  let strArr = str.split(" ");

  for (var i = 0; i < strArr.length; i++) {
    const el = strArr[i];
    strArr[i] = el.substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  str = strArr.join(" ")

  return str;
}

console.log("1)", quest1());
console.log("2)", quest2());
console.log("3)", quest3());
console.log("4)", quest4());
console.log("5)", quest5());
console.log("6)", quest6());
console.log("7)", quest7());
console.log("8)", quest8());
