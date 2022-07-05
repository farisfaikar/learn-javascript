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
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score >= 80 && score <= 89) {
    result = "Anda mendapatkan nilai B.";
  } else if (score >= 70 && score <= 79) {
    result = "Anda mendapatkan nilai C.";
  } else if (score >= 60 && score <= 69) {
    result = "Anda mendapatkan nilai D.";
  } else if (score < 60) {
    result = "Anda mendapatkan nilai E.";
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
    ["MYR", 3500],
  ]);
  let priceInIDR = priceInJPY * currency.get("JPY");
  console.log(priceInIDR);
}

function kuis5() {
  const artistsAndSongs = {
    Keyakizaka46: ["Silent Majority"],
    Blackpink: ["How You Like That", "Ice Cream"],
    JKT48: ["Rapsodi", "Heavy Rotation"],
    Twice: ["What is Love?"],
  };

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
  const books = [
    { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
    { title: "The Ghost", author: "Robert Harris", sales: 807311 },
    { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
    { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
    { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
    { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
    {
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K Rowling",
      sales: 4475152,
    },
  ];
  let filterBySales = books.filter((books) => books.sales > 1000000);
  let greatAuthors = filterBySales.map((book) => {
    return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
  });
}

const Tiger = require("./Tiger");
const Wolf = require("./Wolf");
function kuis10() {
  const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return "Harimau dan serigala sama-sama kuat!";
  };

  const myTiger = new Tiger();
  const myWolf = new Wolf();

  const result = fight(myTiger, myWolf);

  module.exports = { fight, myTiger, myWolf, result };
}

function kuis11() {
  // TODO 1
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  // TODO 2
  function validateNumberInput(arg1, arg2, arg3) {
    if (typeof arg1 !== "number") {
      throw new ValidationError("Argumen pertama harus number");
    } else if (typeof arg2 !== "number") {
      throw new ValidationError("Argumen kedua harus number");
    } else if (typeof arg3 !== "number") {
      throw new ValidationError("Argumen ketiga harus number");
    }
  }

  const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
      validateNumberInput(a, b, c);
    } catch (error) {
      return error.message;
    }

    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Segitiga sembarang";
  };
}

function kuis12() {
  try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
      console.log(arr[i]);
    }
  } catch (e) {
    console.log("Out of bounds");
  }
}

function kuis13() {}

function learnAsync() {
  setTimeout(() => {
    console.log("What is going on bro");
    return 69;
  }, 3000);
  console.log("This goes first apparently, we wait 3 seconds");

  const orderMeth = (callback) => {
    let meth = null;
    console.log("Jesse, I'm making crystal meth here. Fucking wait will ya?");
    setTimeout(() => {
      meth = "The meth is cooked!";
      callback(meth);
    }, 3000);
    return meth;
  };

  orderMeth((meth) => {
    console.log(meth);
  });
}

function makeFentanyl() {
  function synchronousWay(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    spaceDrugs = makeTheSpaceDrugs(ingredients);
    pouredSpaceDrugs = pourSpaceDrugs(spaceDrugs);
    fentanyl = heatSpaceDrugs(pourSpaceDrugs);
    console.log(fentanyl);
  }
  function asynchronousWay(...rawIngredients) {
    collectIngredients(rawIngredients, function (ingredients) {
      makeTheSpaceDrugs(ingredients, function (spaceDrugs) {});
    });
  }
  synchronousWay(["Lithium", "Mercury", "Sugar"]);
}

function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);
}

function callbackFunction() {
  const database = {
    user1: {
      email: "romeorulant@gmail.com",
      password: "password",
    },
    user2: {
      email: "nathanneuman@gmail.com",
      password: "12345",
    },
  };

  function loginUser(email, password, callback) {
    setTimeout(() => {
      console.log("Data fetching complete!");
      callback({ userEmail: email, userPassword: password });
    }, 3000);
  }

  function getUserPictures(email, callback) {
    setTimeout(() => {
      console.log(`${email} Picture fetching complete!`);
      callback(["pic1", "pic2", "pic3"]);
    }, 1000);
  }

  function getUserBlackmails(email, picture, callback) {
    setTimeout(() => {
      console.log(
        `${email} Blackmail fetching complete! Prepare to get your life ruined!`
      );
      callback(`The user of ${email} is scared of ${picture}`);
    }, 2000);
  }

  // Callback hell method
  const user = loginUser("nathanneuman@gmail.com", "12345", (user) => {
    console.log(user);
    getUserPictures(user.userEmail, (pictures) => {
      console.log(pictures);
      getUserBlackmails(user.userEmail, pictures[0], (blackmails) => {
        console.log(blackmails);
      });
    });
  });
}

function promise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data fetching successful!");
      // resolve({ user: "Bambang" });
      reject(new Error("What the hell is going on bro"));
    }, 2000);
  });

  promise
    .then((user) => {
      console.log(user);
    })
    .catch((err) => console.log(err.message));
}

function promise2() {
  function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data fetching complete!");
        resolve({ userEmail: email, userPassword: password });
      }, 3000);
    });
  }

  function getUserPictures(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${email} Picture fetching complete!`);
        resolve(["pic1", "pic2", "pic3"]);
      }, 1000);
    });
  }

  function getUserBlackmails(email, picture) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(
          `${email} Blackmail fetching complete! Prepare to get your life ruined!`
        );
        resolve(`The user of ${email} is scared of ${picture}`);
      }, 2000);
    });
  }

  loginUser("bambang@gmail.com", "bunga")
    .then((user) => getUserPictures(user.email))
    .then((pictures) => getUserBlackmail(pictures.email, pictures.picture));
}

function promiseNeverland() {
  function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User is now logged in!");
        resolve({ email: email, password: password });
      });
    }, 3000);
  }

  function getMedicine(email, medicineName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`<${email}> has received ${medicineName}`);
        resolve(`Medicine Item: ${medicineName}`);
      }, 3000);
    });
  }

  async function displayResult() {
    const user = await loginUser("faris@gmail.com", "password");
    const medicine = await getMedicine(user.email, "Oxandrolone");
    console.log(medicine);
  }

  displayResult();
}

promiseNeverland();
// makeFentanyl();
