function cookMeth(ingredients, temp) {
  // gatherIngredients 3000
  function gatherIngredients(ingredients) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`The ingredients are: ${ingredients}`);
        console.log("The ingredients are mixed together!");
        resolve("mixedIngredients");
      }, 3000)
    })
  }
  // heatIngredients 5000
  setTimeout(temp => {
    console.log(``)
  })
}

function injectMeth(meth) {
  // insertMethIntoSyringe 1000
  // stabSyringeIntoArm 2000
}

const ingredients = [
  "Ephedrine",
  "Hydrogen",
  "Iodine",
  "Phosphorus"
];
const temp = 373;
const meth = cookMeth(ingredients, temp);
injectMeth(meth);
