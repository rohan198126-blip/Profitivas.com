/**
 * Profitivas Multilingual Architecture Types.
 * Defines supported locales, configuration schema, and UI translation structure.
 */

export type SupportedLocale = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it';

export interface LocaleConfig {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  isDefault: boolean;
  isActive: boolean;
}

export interface UiTranslations {
  nav: {
    calculators: string;
    categories: string;
    resources: string;
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    home: string;
  };
  actions: {
    chooseCalculator: string;
    browseAllCalculators: string;
    searchCalculators: string;
    calculate: string;
    reset: string;
    switchTheme: string;
    close: string;
    backToAll: string;
  };
  common: {
    tagline: string;
    heroHeadlinePart1: string;
    heroHeadlinePart2: string;
    heroDescription: string;
    trustLine: string;
    launcherTrust: string;
    disclaimerLabel: string;
    disclaimerText: string;
    allRightsReserved: string;
    noCalculatorsFound: string;
    trySearchingSuggestions: string;
    inDevelopment: string;
    activeStatus: string;
  };
  categories: {
    pricingProfit: string;
    businessFinance: string;
    marketingGrowth: string;
  };
  calculatorSections: {
    methodologyAndAssumptions: string;
    methodologyDescription: string;
    frequentlyAskedQuestions: string;
    relatedCalculators: string;
    workedExample: string;
    formulaExplanation: string;
  };
}
