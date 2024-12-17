let flavors = window.prompt("Please enter your froyo flavors below separated by comma with no spaces:")

console.log(flavors)

flavors.trim();
const flavorsArr = flavors.split(",");
console.log(flavorsArr);

function toObject(flavorsArr) {
  const flavorsObj = {};

  flavorsArr.forEach(flavor => {
    // If key does exist, add 1 to the existing value (count)
    if (flavorsObj[flavor]) {
      flavorsObj[flavor] = flavorsObj[flavor] + 1;
    } 
    // If key doesn't exist, set the initial value (count) to 1
    else {
      flavorsObj[flavor] = 1;
    }
  });

  return flavorsObj;
}

console.log("object", toObject(flavorsArr));