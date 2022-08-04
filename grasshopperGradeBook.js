// DESCRIPTION:

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// SOLUTION
function getGrade (s1, s2, s3) {
    // Code here
    
    // Declare a variable that gives the mean of s1, s2 and s3. 
    const meanNumber = (s1 + s2 + s3) / 3
    
    if(meanNumber >= 90) return 'A'
    else if(meanNumber >= 80) return 'B'
    else if(meanNumber >= 70) return 'C'
    else if(meanNumber >= 60) return 'D'
    else if(meanNumber <= 60) return 'F'
    else console.log('No grade given')
  }