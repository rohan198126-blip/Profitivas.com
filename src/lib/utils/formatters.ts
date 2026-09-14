/**
 * Financial and metric formatting utilities using standard Intl APIs.
 */

const currencyFormatters = new Map<string, Intl.NumberFormat>();

/**
 * Formats a number as currency (defaults to USD).
 * Ensures safe handling of null/undefined/NaN.
 */
export function formatCurrency(
  value: number | null | undefined,
  currency = 'USD',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '$0.00';
  }

  const key = `${currency}-${minimumFractionDigits}-${maximumFractionDigits}`;
  let formatter = currencyFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    });
    currencyFormatters.set(key, formatter);
  }

  return formatter.format(value);
}

const percentFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * Formats a number as a percentage (e.g., 25.5 -> "25.50%").
 */
export function formatPercent(
  value: number | null | undefined,
  decimals = 2
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '0.00%';
  }

  if (decimals === 2) {
    return `${percentFormatter.format(value)}%`;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${formatter.format(value)}%`;
}

/**
 * Formats a generic decimal number with thousands separators.
 */
export function formatNumber(
  value: number | null | undefined,
  decimals = 2
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '0';
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return formatter.format(value);
}
