import type { LocaleConfig, SupportedLocale } from './types';

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const LOCALES: Record<SupportedLocale, LocaleConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    isDefault: true,
    isActive: true,
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
    isDefault: false,
    isActive: true,
  },
};

/**
 * Returns list of non-default active language codes for route generation.
 * (e.g. ['es', 'fr', 'de', 'pt', 'it', 'ja', 'ko'])
 */
export function getNonDefaultLocales(): SupportedLocale[] {
  return (Object.keys(LOCALES) as SupportedLocale[]).filter((code) => code !== DEFAULT_LOCALE);
}

/**
 * Returns currently active languages in production.
 */
export function getActiveLocales(): LocaleConfig[] {
  return Object.values(LOCALES).filter((loc) => loc.isActive);
}

export function getLocaleConfig(locale: string): LocaleConfig {
  if (locale in LOCALES) {
    return LOCALES[locale as SupportedLocale];
  }
  return LOCALES[DEFAULT_LOCALE];
}

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale in LOCALES;
}
