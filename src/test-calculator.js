#!/usr/bin/env node

/**
 * Test script for calculator functions
 * Tests the four basic operations shown in the image:
 * - 2 + 3
 * - 10 - 4
 * - 45 * 2
 * - 20 / 5
 */

// Import calculator functions (define them inline for testing)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      return divide(firstNumber, secondNumber);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

// Test cases from the image
const testCases = [
  { firstNumber: 2, operator: '+', secondNumber: 3, expected: 5 },
  { firstNumber: 10, operator: '-', secondNumber: 4, expected: 6 },
  { firstNumber: 45, operator: '*', secondNumber: 2, expected: 90 },
  { firstNumber: 20, operator: '/', secondNumber: 5, expected: 4 }
];

console.log('\n╔════════════════════════════════════════╗');
console.log('║     Calculator Function Tests          ║');
console.log('╚════════════════════════════════════════╝\n');

let passedTests = 0;
let failedTests = 0;

testCases.forEach((testCase, index) => {
  try {
    const result = calculate(testCase.firstNumber, testCase.operator, testCase.secondNumber);
    const passed = result === testCase.expected;

    const status = passed ? '✓ PASS' : '✗ FAIL';
    const expression = `${testCase.firstNumber} ${testCase.operator} ${testCase.secondNumber}`;

    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Operation: ${expression}`);
    console.log(`  Expected:  ${testCase.expected}`);
    console.log(`  Result:    ${result}`);

    if (passed) {
      passedTests++;
    } else {
      failedTests++;
    }

    console.log();
  } catch (error) {
    console.log(`Test ${index + 1}: ✗ ERROR`);
    console.log(`  Error: ${error.message}\n`);
    failedTests++;
  }
});

console.log('╔════════════════════════════════════════╗');
console.log(`║  Results: ${passedTests} passed, ${failedTests} failed          │`);
console.log('╚════════════════════════════════════════╝\n');

process.exit(failedTests > 0 ? 1 : 0);
