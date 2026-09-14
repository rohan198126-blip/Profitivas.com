import type { FormulaStep, WorkedExample, AssumptionItem, FAQItem } from '../../calculators/types';

export interface LocalizedCalcEntry {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  formulas: FormulaStep[];
  workedExample: WorkedExample;
  assumptions: AssumptionItem[];
  faqs: FAQItem[];
}
