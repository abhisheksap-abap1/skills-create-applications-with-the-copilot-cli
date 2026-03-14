#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

// Create interface for reading user input (only when needed)
let rl;

function getReadlineInterface() {
  if (!rl) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  return rl;
}

/**
 * Addition operation
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If denominator is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Calculate based on operator and two numbers
 * @param {number} firstNumber - First operand
 * @param {string} operator - Operation to perform (+, -, *, /)
 * @param {number} secondNumber - Second operand
 * @returns {number} Result of the calculation
 */
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

/**
 * Display welcome message and usage instructions
 */
function displayWelcome() {
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║     Node.js CLI Calculator App         ║');
  console.log('╚════════════════════════════════════════╝\n');
  console.log('Supported Operations:');
  console.log('  + : Addition');
  console.log('  - : Subtraction');
  console.log('  * : Multiplication');
  console.log('  / : Division\n');
}

/**
 * Main interactive calculator loop
 */
function startCalculator() {
  const rl = getReadlineInterface();
  displayWelcome();

  const askFirstNumber = () => {
    rl.question('Enter first number: ', (input1) => {
      const firstNumber = parseFloat(input1);

      if (isNaN(firstNumber)) {
        console.log('Invalid input. Please enter a valid number.\n');
        askFirstNumber();
        return;
      }

      askOperator(firstNumber);
    });
  };

  const askOperator = (firstNumber) => {
    rl.question('Enter operator (+, -, *, /): ', (op) => {
      if (!['+', '-', '*', '/'].includes(op)) {
        console.log('Invalid operator. Please use +, -, *, or /\n');
        askOperator(firstNumber);
        return;
      }

      askSecondNumber(firstNumber, op);
    });
  };

  const askSecondNumber = (firstNumber, operator) => {
    rl.question('Enter second number: ', (input2) => {
      const secondNumber = parseFloat(input2);

      if (isNaN(secondNumber)) {
        console.log('Invalid input. Please enter a valid number.\n');
        askSecondNumber(firstNumber, operator);
        return;
      }

      try {
        const result = calculate(firstNumber, operator, secondNumber);
        console.log(`\nResult: ${firstNumber} ${operator} ${secondNumber} = ${result}\n`);
      } catch (error) {
        console.log(`\nError: ${error.message}\n`);
      }

      askContinue();
    });
  };

  const askContinue = () => {
    rl.question('Perform another calculation? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        console.log();
        askFirstNumber();
      } else {
        console.log('Thank you for using the calculator. Goodbye!\n');
        rl.close();
      }
    });
  };

  askFirstNumber();
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};

// Start the calculator only if run directly
if (require.main === module) {
  startCalculator();
}
