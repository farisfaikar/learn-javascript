const stock = {
  coffeeBeans: 250,
  water: 0,
}

const checkStock = () => {
  return new Promise((resolve, reject) => {
      if (stock.coffeeBeans >= 16 && stock.water >= 250) {
          resolve("Stok cukup. Bisa membuat kopi");
      } else {
          reject("Stok tidak cukup");
      }
  });
};

const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
  console.log(rejectionReason);
}

console.log("testing");
checkStock().then(handleSuccess, handleFailure);
console.log("end of testing");
console.log("another end of testing");
console.log("and another one");
console.log("procrastination 101");
console.log("UNBGBBIIVCHIDCDIICBG");
