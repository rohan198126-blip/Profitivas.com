import type { CalculatorContent } from '../../calculators/types';
import { getCalculatorContentBySlug } from '../../calculators/registry';
import type { SupportedLocale } from '../types';
import type { LocalizedCalcEntry } from './types';
import { esCalculators } from './es';
import { frCalculators } from './fr';
import { deCalculators } from './de';
import { ptCalculators } from './pt';
import { itCalculators } from './it';
import { jaCalculators } from './ja';
import { koCalculators } from './ko';

export * from './types';

const LOCALE_MAP: Record<Exclude<SupportedLocale, 'en'>, Record<string, LocalizedCalcEntry>> = {
  es: esCalculators,
  fr: frCalculators,
  de: deCalculators,
  pt: ptCalculators,
  it: itCalculators,
  ja: jaCalculators,
  ko: koCalculators,
};

/**
 * Returns localized calculator content with seamless fallback to base English content.
 */
export function getLocalizedCalculatorContent(
  slug: string,
  locale: SupportedLocale = 'en'
): CalculatorContent | undefined {
  const base = getCalculatorContentBySlug(slug);
  if (!base) return undefined;

  if (locale === 'en' || !(locale in LOCALE_MAP)) {
    return base;
  }

  const localized = LOCALE_MAP[locale as Exclude<SupportedLocale, 'en'>]?.[slug];
  if (!localized) {
    return base;
  }

  return {
    ...base,
    meta: {
      ...base.meta,
      name: localized.name || base.meta.name,
      shortName: localized.shortName || base.meta.shortName,
      tagline: localized.tagline || base.meta.tagline,
      description: localized.description || base.meta.description,
      seoTitle: localized.seoTitle || base.meta.seoTitle,
      seoDescription: localized.seoDescription || base.meta.seoDescription,
    },
    formulas: localized.formulas && localized.formulas.length > 0 ? localized.formulas : base.formulas,
    workedExample: localized.workedExample || base.workedExample,
    assumptions: localized.assumptions && localized.assumptions.length > 0 ? localized.assumptions : base.assumptions,
    faqs: localized.faqs && localized.faqs.length > 0 ? localized.faqs : base.faqs,
  };
}
