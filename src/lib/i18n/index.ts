import { DEFAULT_LOCALE, LOCALES, getActiveLocales } from './config';
import { enTranslations } from './translations/en';
import { esTranslations } from './translations/es';
import { frTranslations } from './translations/fr';
import { deTranslations } from './translations/de';
import { ptTranslations } from './translations/pt';
import { itTranslations } from './translations/it';
import { jaTranslations } from './translations/ja';
import { koTranslations } from './translations/ko';
import type { SupportedLocale, UiTranslations } from './types';

export * from './types';
export * from './config';

const TRANSLATION_MAP: Record<SupportedLocale, UiTranslations> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  pt: ptTranslations,
  it: itTranslations,
  ja: jaTranslations,
  ko: koTranslations,
};

/**
 * Returns typed translation dictionary for the requested locale.
 * Falls back safely to default English dictionary.
 */
export function useTranslations(locale: string = DEFAULT_LOCALE): UiTranslations {
  if (locale in TRANSLATION_MAP) {
    return TRANSLATION_MAP[locale as SupportedLocale];
  }
  return TRANSLATION_MAP[DEFAULT_LOCALE];
}

/**
 * Parses locale from URL pathname.
 * English URLs remain unprefixed (e.g. /profit-margin-calculator).
 * Localized URLs have a prefix like /es/... or /fr/...
 */
export function getLocaleFromUrl(url: URL | string): SupportedLocale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as SupportedLocale;

  if (firstSegment && firstSegment in LOCALES && LOCALES[firstSegment].isActive) {
    return firstSegment;
  }
  return DEFAULT_LOCALE;
}

/**
 * Extracts the base un-localized route path from any localized or un-localized pathname.
 * Examples:
 * getBasePath('/es/profit-margin-calculator') -> '/profit-margin-calculator'
 * getBasePath('/profit-margin-calculator') -> '/profit-margin-calculator'
 * getBasePath('/fr/about') -> '/about'
 * getBasePath('/de') -> '/'
 * getBasePath('/') -> '/'
 */
export function getBasePath(pathname: string): string {
  const clean = pathname.replace(/\/$/, '') || '/';
  const segments = clean.split('/').filter(Boolean);
  const first = segments[0] as SupportedLocale;

  if (first && first in LOCALES) {
    const remaining = segments.slice(1).join('/');
    return remaining ? `/${remaining}` : '/';
  }
  return clean.startsWith('/') ? clean : `/${clean}`;
}

/**
 * Generates localized path while keeping English URLs completely unprefixed.
 * Example:
 * getLocalizedPath('/about', 'en') -> '/about'
 * getLocalizedPath('/about', 'es') -> '/es/about'
 */
export function getLocalizedPath(path: string, locale: SupportedLocale = DEFAULT_LOCALE): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If default language (English), do not add prefix, preserving stable URLs
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }

  // If root path, return /locale (e.g. /es)
  if (cleanPath === '/') {
    return `/${locale}`;
  }

  return `/${locale}${cleanPath}`;
}

/**
 * Given any current URL pathname and a target locale, returns the equivalent path in that locale.
 * Perfect for the Header language switcher.
 * Examples:
 * getEquivalentPath('/profit-margin-calculator', 'es') -> '/es/profit-margin-calculator'
 * getEquivalentPath('/es/profit-margin-calculator', 'en') -> '/profit-margin-calculator'
 * getEquivalentPath('/de/about', 'ja') -> '/ja/about'
 * getEquivalentPath('/fr', 'en') -> '/'
 * getEquivalentPath('/', 'es') -> '/es'
 */
export function getEquivalentPath(currentPathname: string, targetLocale: SupportedLocale): string {
  const base = getBasePath(currentPathname);
  return getLocalizedPath(base, targetLocale);
}

/**
 * Prepares hreflang alternate link records for international SEO.
 * Includes all active locales plus x-default pointing to the default English URL.
 */
export function getAlternateLanguageLinks(
  canonicalBase: string,
  path: string
): Array<{ href: string; hreflang: string }> {
  const activeLocales = getActiveLocales();

  if (activeLocales.length <= 1) {
    return [];
  }

  const cleanBase = canonicalBase.replace(/\/$/, '');
  const basePath = getBasePath(path);

  // Generates alternate links for all 8 active locales
  const alternates: Array<{ href: string; hreflang: string }> = activeLocales.map((loc) => ({
    hreflang: loc.code,
    href: `${cleanBase}${getLocalizedPath(basePath, loc.code)}`,
  }));

  // Append x-default pointing to the canonical English equivalent
  alternates.push({
    hreflang: 'x-default',
    href: `${cleanBase}${getLocalizedPath(basePath, DEFAULT_LOCALE)}`,
  });

  return alternates;
}
