// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
//
// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = "^\\s+|\\s+$";
let result = hello.replace(new RegExp(wsRegex, "g"), "");
