import { DEFAULT_LOCALE, LOCALES, getActiveLocales } from './config';
import { enTranslations } from './translations/en';
import type { SupportedLocale, UiTranslations } from './types';

export * from './types';
export * from './config';

const TRANSLATION_MAP: Record<SupportedLocale, UiTranslations> = {
  en: enTranslations,
  es: enTranslations, // Fallback to English until fully translated
  fr: enTranslations,
  de: enTranslations,
  pt: enTranslations,
  it: enTranslations,
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
 * Future localized URLs will support prefixes like /es/... or /fr/...
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
 * Generates localized path while keeping English URLs completely unprefixed.
 * Example:
 * getLocalizedPath('/about', 'en') -> '/about'
 * getLocalizedPath('/about', 'es') -> '/es/about' (when Spanish is activated)
 */
export function getLocalizedPath(path: string, locale: SupportedLocale = DEFAULT_LOCALE): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If default language (English), do not add prefix, preserving stable URLs
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }

  // Future prefix logic for active international routes
  return `/${locale}${cleanPath}`;
}

/**
 * Prepares hreflang alternate link records for international SEO.
 * Strictly checks for active languages only.
 * When English is the sole active language, returns an empty list so no broken or fake hreflang tags are output.
 */
export function getAlternateLanguageLinks(
  canonicalBase: string,
  path: string
): Array<{ href: string; hreflang: string }> {
  const activeLocales = getActiveLocales();

  // If only 1 language is active (English), do NOT emit alternate links
  if (activeLocales.length <= 1) {
    return [];
  }

  const cleanBase = canonicalBase.replace(/\/$/, '');
  const cleanPath = path.replace(/\/$/, '') || '/';

  return activeLocales.map((loc) => ({
    hreflang: loc.code,
    href: `${cleanBase}${getLocalizedPath(cleanPath, loc.code)}`,
  }));
}
