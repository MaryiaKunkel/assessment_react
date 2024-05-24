function addCommas(num) {
  const arr = String(num).split("");
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  for (let i = 0; i < newArr.length; i += 4) {
    newArr.splice(i, 0, ",");
  }
  newArr.shift();
  let finalArr = [];
  for (let i = newArr.length - 1; i >= 0; i--) {
    finalArr.push(newArr[i]);
  }
  return finalArr.join("");
}

module.exports = addCommas;
