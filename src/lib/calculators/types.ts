export type CalculatorCategory = 'pricing-profit' | 'business' | 'marketing';

export type CalculatorStatus = 'active' | 'planned';

export interface CategoryInfo {
  id: CalculatorCategory;
  name: string;
  description: string;
}

export interface FormulaStep {
  title: string;
  formula: string;
  plainText: string;
  explanation: string;
}

export interface WorkedExample {
  title: string;
  scenario: string;
  inputs: Record<string, string>;
  steps: string[];
  results: Record<string, string>;
  takeaway: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AssumptionItem {
  term: string;
  definition: string;
}

export interface CalculatorMeta {
  id: string;
  slug: string; // e.g. 'profit-margin-calculator'
  name: string; // e.g. 'Profit Margin Calculator'
  shortName: string;
  category: CalculatorCategory;
  status: CalculatorStatus;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
}

export interface CalculatorContent {
  meta: CalculatorMeta;
  formulas: FormulaStep[];
  workedExample: WorkedExample;
  assumptions: AssumptionItem[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}
