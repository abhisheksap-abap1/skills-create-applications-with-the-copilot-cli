/**
 * Comprehensive Unit Tests for Calculator
 * Tests all arithmetic operations including advanced operations
 * with multiple test cases including edge cases
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

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
        calculate(10, '&', 3);
      }).toThrow('Unknown operator: &');
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

  // ==================== MODULO TESTS ====================
  describe('Modulo (modulo)', () => {
    test('should compute modulo of two positive numbers correctly', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should compute modulo resulting in zero', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle modulo with larger dividend', () => {
      expect(modulo(17, 5)).toBe(2);
      expect(modulo(20, 3)).toBe(2);
    });

    test('should handle modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(-17, 5)).toBe(-2);
    });

    test('should handle modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
      expect(modulo(17, -5)).toBe(2);
    });

    test('should handle modulo with both negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
      expect(modulo(-17, -5)).toBe(-2);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => {
        modulo(10, 0);
      }).toThrow('Modulo by zero is not allowed');
    });

    test('should handle decimal modulo', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5, 5);
    });

    test('should handle modulo with one', () => {
      expect(modulo(42, 1)).toBe(0);
      expect(modulo(7, 1)).toBe(0);
    });

    test('should handle modulo where dividend is smaller than divisor', () => {
      expect(modulo(3, 10)).toBe(3);
      expect(modulo(2, 5)).toBe(2);
    });
  });

  // ==================== POWER TESTS ====================
  describe('Power (power)', () => {
    test('should calculate power of two positive numbers correctly', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate square (power of 2)', () => {
      expect(power(5, 2)).toBe(25);
      expect(power(10, 2)).toBe(100);
    });

    test('should calculate power resulting in one', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
    });

    test('should handle power of one', () => {
      expect(power(1, 10)).toBe(1);
      expect(power(1, 100)).toBe(1);
    });

    test('should handle negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(10, -2)).toBeCloseTo(0.01, 5);
    });

    test('should handle negative base', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-5, 2)).toBe(25);
    });

    test('should handle base of zero', () => {
      expect(power(0, 5)).toBe(0);
      expect(power(0, 100)).toBe(0);
    });

    test('should handle decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
      expect(power(1.5, 2)).toBeCloseTo(2.25, 5);
    });

    test('should handle decimal exponent', () => {
      expect(power(16, 0.5)).toBeCloseTo(4, 5);
      expect(power(2, 0.5)).toBeCloseTo(1.414213, 5);
    });

    test('should handle large powers', () => {
      expect(power(2, 10)).toBe(1024);
      expect(power(3, 5)).toBe(243);
    });

    test('should handle fractional exponents', () => {
      expect(power(8, 1/3)).toBeCloseTo(2, 5);
      expect(power(27, 1/3)).toBeCloseTo(3, 5);
    });
  });

  // ==================== SQUARE ROOT TESTS ====================
  describe('Square Root (squareRoot)', () => {
    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(16)).toBe(4);
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(100)).toBe(10);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213, 5);
      expect(squareRoot(3)).toBeCloseTo(1.732050, 5);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should throw error when input is negative', () => {
      expect(() => {
        squareRoot(-4);
      }).toThrow('Square root of negative numbers is not allowed');

      expect(() => {
        squareRoot(-1);
      }).toThrow('Square root of negative numbers is not allowed');
    });

    test('should handle decimal inputs', () => {
      expect(squareRoot(0.25)).toBe(0.5);
      expect(squareRoot(0.04)).toBe(0.2);
    });

    test('should handle very small numbers', () => {
      expect(squareRoot(0.0001)).toBeCloseTo(0.01, 5);
    });

    test('should handle very large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
      expect(squareRoot(10000)).toBe(100);
    });

    test('should return correct type (number)', () => {
      expect(typeof squareRoot(16)).toBe('number');
    });
  });

  // ==================== EXTENDED CALCULATE FUNCTION TESTS ====================
  describe('Calculate function with advanced operations', () => {
    test('should calculate modulo using % operator', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate power using ** operator', () => {
      expect(calculate(2, '**', 3)).toBe(8);
    });

    test('should throw error for unknown operator', () => {
      expect(() => {
        calculate(10, '^', 2);
      }).toThrow('Unknown operator: ^');
    });

    test('should throw error when modulo by zero', () => {
      expect(() => {
        calculate(10, '%', 0);
      }).toThrow('Modulo by zero is not allowed');
    });

    test('should handle all operators in extended suite', () => {
      expect(calculate(5, '%', 2)).toBe(1);
      expect(calculate(2, '**', 3)).toBe(8);
      expect(calculate(10, '%', 3)).toBe(1);
      expect(calculate(3, '**', 4)).toBe(81);
    });
  });

  // ==================== IMAGE-BASED TEST CASES ====================
  describe('Image-based test cases (from calc-extended-operations.png)', () => {
    test('example 1: modulo with 5 % 2 = 1', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('example 2: power with 2 ^ 3 (using **) = 8', () => {
      expect(calculate(2, '**', 3)).toBe(8);
    });

    test('example 3: square root with √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  // ==================== COMPREHENSIVE EDGE CASES ====================
  describe('Advanced operations - comprehensive edge cases', () => {
    test('should chain advanced operations', () => {
      // (10 % 3) ** 2 = 1 ** 2 = 1
      let result = calculate(10, '%', 3);
      result = calculate(result, '**', 2);
      expect(result).toBe(1);
    });

    test('should handle mixed basic and advanced operations', () => {
      // (2 ** 3) % 5 = 8 % 5 = 3
      let result = calculate(2, '**', 3);
      result = calculate(result, '%', 5);
      expect(result).toBe(3);
    });

    test('should handle power with square root', () => {
      // √(2 ** 4) = √16 = 4
      const powered = power(2, 4);
      const rooted = squareRoot(powered);
      expect(rooted).toBe(4);
    });

    test('should maintain precision across operations', () => {
      // √(9 ** 2) = √81 = 9
      const powered = power(9, 2);
      const rooted = squareRoot(powered);
      expect(rooted).toBeCloseTo(9, 5);
    });

    test('should handle consecutive modulo operations', () => {
      // (17 % 5) % 3 = 2 % 3 = 2
      let result = calculate(17, '%', 5);
      result = calculate(result, '%', 3);
      expect(result).toBe(2);
    });

    test('should handle consecutive power operations', () => {
      // (2 ** 3) ** 2 = 8 ** 2 = 64
      let result = calculate(2, '**', 3);
      result = calculate(result, '**', 2);
      expect(result).toBe(64);
    });

    test('should validate all advanced operations throw on invalid input', () => {
      expect(() => modulo(10, 0)).toThrow();
      expect(() => squareRoot(-1)).toThrow();
    });

    test('should handle type consistency across all operations', () => {
      expect(typeof modulo(10, 3)).toBe('number');
      expect(typeof power(2, 3)).toBe('number');
      expect(typeof squareRoot(16)).toBe('number');
    });
  });
});
