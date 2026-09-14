/**
 * Math and precision utilities for financial calculations.
 * Protects against division by zero, NaN, Infinity, and floating point inaccuracies.
 */

/**
 * Safely divides two numbers. Returns fallback if denominator is 0,
 * or if either input is not a finite number.
 */
export function safeDivide(numerator: number, denominator: number, fallback = 0): number {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    return fallback;
  }
  const result = numerator / denominator;
  return Number.isFinite(result) ? result : fallback;
}

/**
 * Rounds a number to a specific number of decimal places accurately.
 * Avoids classic JS float issues like 1.005 rounding to 1.00 instead of 1.01.
 */
export function roundTo(value: number, decimals = 2): number {
  if (!Number.isFinite(value)) return 0;
  const multiplier = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

/**
 * Clamps a number between min and max bounds.
 */
export function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
}

/**
 * Safely parses a string or unknown value to a positive/zero number.
 * Strips commas, currency symbols, and whitespace. Returns null if invalid.
 */
export function parseCleanNumber(input: unknown): number | null {
  if (typeof input === 'number') {
    return Number.isFinite(input) ? input : null;
  }
  if (typeof input !== 'string') return null;

  const cleaned = input.replace(/[^0-9.-]/g, '').trim();
  if (cleaned === '' || cleaned === '-' || cleaned === '.') return null;

  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
}
