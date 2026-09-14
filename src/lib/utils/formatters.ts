/**
 * Financial and metric formatting utilities using standard Intl APIs.
 * Supports locale-aware formatting while preserving numerical precision and currency symbols.
 */

const localeMap: Record<string, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  pt: 'pt-BR',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
};

function getActiveLocale(overrideLocale?: string): string {
  if (overrideLocale) {
    return localeMap[overrideLocale] || overrideLocale;
  }
  if (typeof document !== 'undefined' && document.documentElement?.lang) {
    const lang = document.documentElement.lang.toLowerCase();
    return localeMap[lang] || lang || 'en-US';
  }
  return 'en-US';
}

const currencyFormatters = new Map<string, Intl.NumberFormat>();

/**
 * Formats a number as currency (defaults to USD).
 * Ensures safe handling of null/undefined/NaN with locale-aware presentation.
 */
export function formatCurrency(
  value: number | null | undefined,
  currency = 'USD',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
  locale?: string
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '$0.00';
  }

  const activeLocale = getActiveLocale(locale);
  const key = `${activeLocale}-${currency}-${minimumFractionDigits}-${maximumFractionDigits}`;
  let formatter = currencyFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(activeLocale, {
      style: 'currency',
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    });
    currencyFormatters.set(key, formatter);
  }

  return formatter.format(value);
}

/**
 * Formats a number as a percentage (e.g., 25.5 -> "25.50%").
 */
export function formatPercent(
  value: number | null | undefined,
  decimals = 2,
  locale?: string
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '0.00%';
  }

  const activeLocale = getActiveLocale(locale);
  const formatter = new Intl.NumberFormat(activeLocale, {
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
  decimals = 2,
  locale?: string
): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return '0';
  }

  const activeLocale = getActiveLocale(locale);
  const formatter = new Intl.NumberFormat(activeLocale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return formatter.format(value);
}
