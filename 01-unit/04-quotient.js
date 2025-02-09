// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1,num2) {
  vvar $result=0
  if(num2 == undefined) num2 = 1;
  if(num1 == undefined)
  { return 0;
  }
  else if(num2!=0){
  $result = Math.floor(~~(num1/num2));
  return $result;
  }
  else return "ERROR"
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(2, 0);
  if (result !== "ERROR") throw new Error('Expected quotient(2, 2) to be 1. Received:' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(2, 2, 5, 7);
  if (result !== 4) throw new Error('Expected quotient(2, 2, 5, 7) to be 4. Received:' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(2);
  if (result !== 2) throw new Error('Expected quotient(2) to be 2. Received:' + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient();
  if (result !== 0) throw new Error('Expected quotient(0) to be 0. Received:' + result);
  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
