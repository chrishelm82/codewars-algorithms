// '' => ''
// 'cat' => 'tac'
// 'cat dog' => 'tac god'
// 'i am well, you?' => "i ma ,llew ?uoy"
// "This is an example!" => "sihT si na !elpmaxe"
// "double  spaces" => "elbuod  secaps"
// ' cat dog  ' => ' tac god  '

function reverseWords(str) {
  //create a array with str split on spaces
  let words = str.split(" ");

  // iterate through each word
  for (let i = 0; i < words.length; i++) {
    // save the reversed word to the array
    words[i] = words[i].split("").reverse().join("");
  }

  // return str joined on spaces
  return words.join(" ");
}

console.log(reverseWords("") === "");
console.log(reverseWords("cat") === "tac");
console.log(reverseWords("cat dog") === "tac god");
console.log(reverseWords("i am well, you?") === "i ma ,llew ?uoy");
console.log(reverseWords("This is an example!") === "sihT si na !elpmaxe");
console.log(reverseWords("double  spaces") === "elbuod  secaps");
console.log(reverseWords(" cat dog  ") === " tac god  ");
