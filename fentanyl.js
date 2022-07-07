const rawChemicals = ["Lithium", "Mercury", "Sugar"];

const makeSpaceDrugs = (rawChemicals) => {
  const delay = () => {
    setTimeout(() => {
      console.log("delay() executed");
      return "Space Drugs";
    }, 3000);
  };
  const promise = (resolve, reject) => {
    console.log("Mixing: ", ...rawChemicals);
    if (
      rawChemicals.includes("Lithium") &&
      rawChemicals.includes("Mercury") &&
      rawChemicals.includes("Sugar")
    ) {
      resolve(delay());
    } else {
      reject(("<wrong chemicals>"));
    }
  };
  return new Promise(promise);
};

const handleSuccess = (resolvedMessage) => {
  console.log(resolvedMessage);
};

const handleFailure = (failedMessage) => {
  console.log(failedMessage);
};

makeSpaceDrugs(rawChemicals).then(handleSuccess, handleFailure);
