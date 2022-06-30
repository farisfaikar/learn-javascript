function test() {
  let a = 1;
  let b = 2;

  function what() {
    console.log("What");
  }
  what();
  console.log("Hello World");
  console.log(a + b);
}

function kuis1(score) {
  let result;

  // TODO
  if (score >= 90) {
    result = 'Selamat! Anda mendapatkan nilai A.';
  } else if (score >= 80 && score <= 89) {
    result = 'Anda mendapatkan nilai B.';
  } else if (score >= 70 && score <= 79) {
    result = 'Anda mendapatkan nilai C.';
  } else if (score >= 60 && score <= 69) {
    result = 'Anda mendapatkan nilai D.';
  } else if (score < 60) {
    result = 'Anda mendapatkan nilai E.';
  }
  // Jangan hapus kode ini
  return result;
}

function kuis2() {
  let hasil = kuis2(50);
  console.log(hasil);
  console.log(1);
  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  for (let i = 1; i < 9; i += 2) {
    console.log(i);
  }
}

function kuis3() {
  let evenNumber = [];
  for (let i = 2; i <= 100; i += 2) {
    evenNumber.push(i);
  }
  console.log(...evenNumber);
}

function kuis4() {
  const priceInJPY = 5000;
  const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
  ]);
  let priceInIDR = priceInJPY * currency.get("JPY");
  console.log(priceInIDR);
}

function kuis5() {
  const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
  }

  artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

  delete artistsAndSongs["Keyakizaka46"];
  console.log(artistsAndSongs);
}

function kuis6() {
  function minimal(a, b) {
    if (a < b) {
      return a;
    } else if (b < a) {
      return b;
    } else if (a === b) {
      return a;
    }
  }
  function power(a, b) {
    return a ** b;
  }
  console.log(minimal(1, 2));
  console.log(power(2, 5));
}

function kuis7() {
  function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
      if (value < currentMin) {
        currentMin = value;
      } else if (value > currentMax) {
        currentMax = value;
      }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
  }

  minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
}

function kuis8() {
  class Animal {
    constructor(isMammal = true) {
      this.name = "Monyet";
      this.age = 10;
      this.isMammal = isMammal;
    }
  }
  class Rabbit extends Animal {
    eat() {
      return `${this.name} sedang makan!`;
    }
  }
  class Eagle extends Animal {
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }

  const myRabbit = new Rabbit(true);
  myRabbit.name = "Labi";
  myRabbit.age = 2;
  const myEagle = new Eagle(false);
  myEagle.name = "Elo";
  myEagle.age = 4;
  console.log(myRabbit.isMammal);
}

function kuis9() {

}

kuis9();
