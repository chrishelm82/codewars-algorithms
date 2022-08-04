// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function well(arrayOfIdeas) {
  // initialize count of good at 0
  let countOfGood = 0;

  // iterate through arrayOfIdeas
  for (const subArray of arrayOfIdeas) {
    //iterate through each subarray
    for (let ele of subArray) {
      //check if element is a string
      if (typeof ele === "string") {
        // normalize the casing
        ele = ele.toLowerCase();
        // if normalized string equals 'good'
        if (ele === "good") {
          //increment count by 1
          countOfGood++;
          // if count > 2 break
        }
      }
    }
  }

  // if count equals 0 return 'Fail!'
  if (countOfGood === 0) return "Fail!";
  if (countOfGood < 3) return "Publish!";
  return "I smell a series!";
}

// read the problem aloud
// reiterate the problem in your own words
// ask clarifying questions
// give examples
// [] => 'Fail!' // simplest valid input
// [['good']] => 'Publish!'
// [['good', 'bad']] => 'Publish!'
// [['good', 'bad', 'good', 'good']] => 'I smell a series!'
// [['good', 'bad'], ['good', 'BAD']] => 'Publish!'
// [['good', 'bad'], ['good', 'BAD'], ['gOOd'], ['bad']] => 'I smell a series!'
// [['bad', 'bad'], ['bad', 'BAD'], ['BAD']] => 'Fail!'
// [['good', true]] => 'Publish!'
// [['good', {}], [[]], [2,3]] => 'Publish!'

// write our function signature
// write our psuedocode
// write a test
// write code to make the test pass
// repeat the previous 2 steps until youre done
