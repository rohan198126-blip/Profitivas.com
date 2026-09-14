import type { CalculatorContent } from '../types';

export const cacContent: CalculatorContent = {
  meta: {
    id: 'cac',
    slug: 'cac-calculator',
    name: 'CAC Calculator',
    shortName: 'CAC',
    category: 'marketing',
    status: 'active',
    tagline: 'Calculate customer acquisition cost across marketing channels.',
    description: 'Measure the true blended acquisition cost required to convert a prospect into a paying customer.',
    seoTitle: 'CAC Calculator — Calculate Customer Acquisition Cost',
    seoDescription: 'Calculate customer acquisition cost (CAC) from total sales and marketing spend divided by new customers acquired.',
    featured: true,
  },
  formulas: [
    {
      title: 'Customer Acquisition Cost ($)',
      formula: 'CAC = Total Acquisition Costs ÷ New Customers Acquired',
      plainText: 'Divide total sales and marketing expenditures by the number of new customers.',
      explanation: 'The average fully blended cost required to win a single new customer.',
    },
  ],
  workedExample: {
    title: 'SaaS Monthly Customer Acquisition ($8k Spend / 160 Customers)',
    scenario: 'A subscription service spends $8,000.00 across search ads, content marketing, and sales tools, acquiring 160 new paying subscribers.',
    inputs: {
      'Total Spend': '$8,000.00',
      'New Customers': '160 customers',
    },
    steps: [
      'CAC = $8,000.00 ÷ 160 = $50.00 per customer',
    ],
    results: {
      'Customer Acquisition Cost': '$50.00',
      'Customers Acquired': '160',
      'Total Investment': '$8,000.00',
    },
    takeaway: 'The company invested an average of $50.00 to acquire each new paying subscriber.',
  },
  assumptions: [
    {
      term: 'Fully Loaded Spend',
      definition: 'Includes ad spend, marketing salaries, agency fees, and sales enablement software tools.',
    },
    {
      term: 'New Customers Only',
      definition: 'Counts only newly acquired customer accounts, excluding returning or renewed users.',
    },
  ],
  faqs: [
    {
      question: 'How is CAC calculated?',
      answer:
        'Customer Acquisition Cost (CAC) is calculated by dividing total sales and marketing expenditures by the number of new customers acquired during that specific time frame: CAC = Total Acquisition Costs ÷ New Customers Acquired. Ensure the cost and customer metrics cover the identical period.',
    },
    {
      question: 'What is a good Customer Acquisition Cost (CAC)?',
      answer: 'A sustainable CAC depends on Customer Lifetime Value (LTV). An LTV:CAC ratio of 3:1 or higher is standard for healthy, scalable business growth.',
    },
    {
      question: 'What is the difference between blended CAC and paid CAC?',
      answer: 'Blended CAC divides all marketing costs by all new customers (including organic). Paid CAC divides paid ad spend exclusively by customers acquired through paid channels.',
    },
  ],
  relatedSlugs: [
    'ltv-calculator',
    'ltv-cac-calculator',
    'roas-calculator',
    'conversion-rate-calculator',
  ],
};
