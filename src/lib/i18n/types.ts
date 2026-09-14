/**
 * Profitivas Multilingual Architecture Types.
 * Defines supported locales, configuration schema, and UI translation structure.
 */

export type SupportedLocale = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ja' | 'ko';

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
    selectLanguage: string;
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
    findCalculator: string;
    chooseCalculationYouNeed: string;
    howItWorksEyebrow: string;
    howItWorksHeadline: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    builtForEyebrow: string;
    builtForHeadline: string;
    builtForSubheadline: string;
    catPricingTitle: string;
    catPricingDesc: string;
    catProfitTitle: string;
    catProfitDesc: string;
    catFinanceTitle: string;
    catFinanceDesc: string;
    catMarketingTitle: string;
    catMarketingDesc: string;
    catGrowthTitle: string;
    catGrowthDesc: string;
    faqEyebrow: string;
    faqHeadline: string;
    homeFaq1Q: string;
    homeFaq1A: string;
    homeFaq2Q: string;
    homeFaq2A: string;
    homeFaq3Q: string;
    homeFaq3A: string;
    availableTools: string;
    brandDescription: string;
    allCalculators: string;
    directoryTitle: string;
    directoryDescription: string;
    searchByNameOrCategory: string;
    yourNumbers: string;
    yourResult: string;
    automaticRecalculation: string;
    preTax: string;
    presets: string;
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
  about: {
    title: string;
    subtitle: string;
    missionHeading: string;
    missionP1: string;
    missionP2: string;
    principlesHeading: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    contactHeading: string;
    contactText: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    s1Title: string;
    s1P1: string;
    s1P2: string;
    s2Title: string;
    s2P1: string;
    s2P2: string;
    s3Title: string;
    s3P1: string;
    s4Title: string;
    s4P1: string;
    s4P2: string;
    s4Li1: string;
    s4Li2: string;
    s4Li3: string;
    s4Li4: string;
    s5Title: string;
    s5P1: string;
    s5Li1: string;
    s5Li2: string;
    s5Li3: string;
    s6Title: string;
    s6P1: string;
    s6P2: string;
  };
  terms: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    s1Title: string;
    s1P1: string;
    s2Title: string;
    s2P1: string;
    s3Title: string;
    s3P1: string;
    s4Title: string;
    s4P1: string;
    s5Title: string;
    s5P1: string;
  };
}

export interface LocalizedCalculatorData {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  formulas: Array<{
    title: string;
    formula: string;
    plainText: string;
    explanation: string;
  }>;
  workedExample: {
    title: string;
    scenario: string;
    inputs: Record<string, string>;
    steps: string[];
    results: Record<string, string>;
    takeaway: string;
  };
  assumptions?: Array<{
    term: string;
    definition: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  inputs?: Record<string, {
    label: string;
    helperText?: string;
    placeholder?: string;
  }>;
  results?: Record<string, {
    label: string;
    description?: string;
  }>;
}
