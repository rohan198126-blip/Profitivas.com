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
    isActive: false, // Planned for future expansion
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    isDefault: false,
    isActive: false, // Planned for future expansion
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    isDefault: false,
    isActive: false, // Planned for future expansion
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    direction: 'ltr',
    isDefault: false,
    isActive: false, // Planned for future expansion
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    isDefault: false,
    isActive: false, // Planned for future expansion
  },
};

/**
 * Returns currently active languages in production.
 * Currently returns ['en'] strictly to prevent generating nonexistent localized pages or hreflang links.
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
