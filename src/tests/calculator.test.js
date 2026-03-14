/**
 * Comprehensive Unit Tests for Calculator
 * Tests all four basic arithmetic operations with multiple test cases
 * including edge cases like division by zero, negative numbers, and decimals
 */

const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ==================== ADDITION TESTS ====================
  describe('Addition (add)', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2, 5);
    });

    test('should return zero when adding negative numbers that sum to zero', () => {
      expect(add(5, -5)).toBe(0);
    });

    test('should handle large numbers', () => {
      expect(add(999999, 1)).toBe(1000000);
    });

    test('should handle zero as one operand', () => {
      expect(add(0, 7)).toBe(7);
      expect(add(42, 0)).toBe(42);
    });

    test('should handle two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });
  });

  // ==================== SUBTRACTION TESTS ====================
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract positive from positive resulting in zero', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    test('should subtract and get negative result', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(10.5, 4.2)).toBeCloseTo(6.3, 5);
    });

    test('should subtract negative numbers (adding)', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should handle zero as minuend', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle zero as subtrahend', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should handle two zeros', () => {
      expect(subtract(0, 0)).toBe(0);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-10, -3)).toBe(-7);
    });
  });

  // ==================== MULTIPLICATION TESTS ====================
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply and get zero when one operand is zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 100)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(7, -3)).toBe(-21);
    });

    test('should multiply two negative numbers (positive result)', () => {
      expect(multiply(-5, -4)).toBe(20);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
      expect(multiply(1, 99)).toBe(99);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });

    test('should handle small decimal numbers', () => {
      expect(multiply(0.1, 0.1)).toBeCloseTo(0.01, 5);
    });

    test('should multiply negative one', () => {
      expect(multiply(5, -1)).toBe(-5);
      expect(multiply(-1, 10)).toBe(-10);
    });
  });

  // ==================== DIVISION TESTS ====================
  describe('Division (divide)', () => {
    test('should divide two positive numbers correctly', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide and return one', () => {
      expect(divide(7, 7)).toBe(1);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should handle decimal division', () => {
      expect(divide(7.5, 2.5)).toBeCloseTo(3, 5);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide negative by positive', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide by negative one', () => {
      expect(divide(10, -1)).toBe(-10);
    });

    test('should handle very small divisors', () => {
      expect(divide(1, 0.5)).toBe(2);
    });

    test('should throw error with zero denominator for zero numerator', () => {
      expect(() => {
        divide(0, 0);
      }).toThrow('Division by zero is not allowed');
    });
  });

  // ==================== CALCULATE FUNCTION TESTS ====================
  describe('Calculate function', () => {
    test('should calculate addition using + operator', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction using - operator', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication using * operator', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division using / operator', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should throw error for unknown operator', () => {
      expect(() => {
        calculate(10, '%', 3);
      }).toThrow('Unknown operator: %');
    });

    test('should throw error when dividing by zero in calculate', () => {
      expect(() => {
        calculate(10, '/', 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should handle case-sensitive operators', () => {
      expect(() => {
        calculate(5, 'x', 2);
      }).toThrow('Unknown operator: x');
    });

    test('should chain operations correctly', () => {
      // (10 + 5) * 2 = 30
      const result1 = calculate(10, '+', 5);
      const result2 = calculate(result1, '*', 2);
      expect(result2).toBe(30);
    });

    test('should handle all operators in sequence', () => {
      expect(calculate(2, '+', 3)).toBe(5);
      expect(calculate(10, '-', 4)).toBe(6);
      expect(calculate(45, '*', 2)).toBe(90);
      expect(calculate(20, '/', 5)).toBe(4);
    });
  });

  // ==================== IMAGE-BASED TEST CASES ====================
  describe('Image-based test cases (from calc-basic-operations.png)', () => {
    test('example 1: 2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('example 2: 10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('example 3: 45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('example 4: 20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });
  });

  // ==================== EDGE CASES AND SPECIAL SCENARIOS ====================
  describe('Edge cases and special scenarios', () => {
    test('should handle very large numbers', () => {
      expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('should handle very small decimal numbers', () => {
      const result = multiply(0.0001, 0.0001);
      expect(result).toBeCloseTo(0.00000001, 8);
    });

    test('should handle consecutive operations', () => {
      // ((10 + 5) - 3) * 2 / 4 = 6
      let result = calculate(10, '+', 5);  // 15
      result = calculate(result, '-', 3);  // 12
      result = calculate(result, '*', 2);  // 24
      result = calculate(result, '/', 4);  // 6
      expect(result).toBe(6);
    });

    test('should maintain precision with floats in division', () => {
      const result = divide(1, 3);
      expect(result).toBeCloseTo(0.333333, 5);
    });

    test('should handle operations with negative zero', () => {
      expect(add(-0, 5)).toBe(5);
      expect(subtract(5, -0)).toBe(5);
    });

    test('should return correct type (number)', () => {
      expect(typeof add(2, 3)).toBe('number');
      expect(typeof subtract(10, 5)).toBe('number');
      expect(typeof multiply(3, 4)).toBe('number');
      expect(typeof divide(8, 2)).toBe('number');
    });
  });
});
