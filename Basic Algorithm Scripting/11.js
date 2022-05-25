// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in
// lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    newStr += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1) + " ";
  }
  return newStr.trim();
}

titleCase("I'm a little tea pot");