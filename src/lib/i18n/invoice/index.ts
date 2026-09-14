import type { SupportedLocale } from '../types';
import type { InvoiceTranslations, CurrencyConfig } from './types';
import { enInvoice } from './en';
import { esInvoice } from './es';
import { frInvoice } from './fr';
import { deInvoice } from './de';
import { ptInvoice } from './pt';
import { itInvoice } from './it';
import { jaInvoice } from './ja';
import { koInvoice } from './ko';

export * from './types';

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', name: 'USD — US Dollar ($)', decimals: 2 },
  { code: 'EUR', symbol: '€', name: 'EUR — Euro (€)', decimals: 2 },
  { code: 'GBP', symbol: '£', name: 'GBP — British Pound (£)', decimals: 2 },
  { code: 'INR', symbol: '₹', name: 'INR — Indian Rupee (₹)', decimals: 2 },
  { code: 'CAD', symbol: '$', name: 'CAD — Canadian Dollar ($)', decimals: 2 },
  { code: 'AUD', symbol: '$', name: 'AUD — Australian Dollar ($)', decimals: 2 },
  { code: 'JPY', symbol: '¥', name: 'JPY — Japanese Yen (¥)', decimals: 0 },
  { code: 'CNY', symbol: '¥', name: 'CNY — Chinese Yuan (¥)', decimals: 2 },
];

const INVOICE_TRANSLATIONS: Record<SupportedLocale, InvoiceTranslations> = {
  en: enInvoice,
  es: esInvoice,
  fr: frInvoice,
  de: deInvoice,
  pt: ptInvoice,
  it: itInvoice,
  ja: jaInvoice,
  ko: koInvoice,
};

export function getInvoiceTranslations(locale: SupportedLocale = 'en'): InvoiceTranslations {
  return INVOICE_TRANSLATIONS[locale] || INVOICE_TRANSLATIONS.en;
}
