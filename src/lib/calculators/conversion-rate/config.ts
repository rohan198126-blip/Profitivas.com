import type { CalculatorContent } from '../types';

export const conversionRateContent: CalculatorContent = {
  meta: {
    id: 'conversion-rate',
    slug: 'conversion-rate-calculator',
    name: 'Conversion Rate Calculator',
    shortName: 'Conversion Rate',
    category: 'marketing',
    status: 'active',
    tagline: 'Calculate conversion rate percentages and required visitors.',
    description: 'Analyze website, landing page, and funnel conversion rates across total visitors and goal completions.',
    seoTitle: 'Conversion Rate Calculator — Calculate Conversion Rate',
    seoDescription: 'Calculate conversion rate percentages and drop-off counts from sessions and conversions. Free funnel optimization calculator.',
    featured: true,
  },
  formulas: [
    {
      title: 'Conversion Rate (%)',
      formula: 'Conversion Rate (%) = (Total Conversions ÷ Total Visitors) × 100',
      plainText: 'Divide total conversions by total visitors, then multiply by 100.',
      explanation: 'Measures the proportion of total audience interactions that resulted in a target goal completion.',
    },
    {
      title: 'Funnel Drop-Off Rate (%)',
      formula: 'Drop-Off Rate (%) = 100% - Conversion Rate (%)',
      plainText: 'Subtract the conversion rate percentage from 100%.',
      explanation: 'The percentage of audience members who abandoned without completing the desired action.',
    },
  ],
  workedExample: {
    title: 'Checkout Conversion Funnel (85 Conversions / 2,500 Visitors)',
    scenario: 'An ecommerce checkout page records 2,500 unique visitors during a campaign, resulting in 85 completed customer orders.',
    inputs: {
      'Conversions': '85 orders',
      'Total Visitors': '2,500 visitors',
    },
    steps: [
      'Conversion Rate = (85 ÷ 2,500) × 100 = 3.40%',
      'Drop-Off Rate = 100% - 3.40% = 96.60%',
      'Lost Visitors = 2,500 - 85 = 2,415 visitors',
    ],
    results: {
      'Conversion Rate': '3.40%',
      'Drop-Off Rate': '96.60%',
      'Lost Visitors': '2,415 visitors',
    },
    takeaway: 'The checkout page achieved a 3.40% conversion rate with 85 converted customers and 2,415 dropped visitors.',
  },
  assumptions: [
    {
      term: 'Unique Visitor Baseline',
      definition: 'Assumes the visitor denominator represents unique sessions or qualified leads over the tracking interval.',
    },
    {
      term: 'Single Conversion Event',
      definition: 'Assumes each conversion maps to the measured visitor denominator.',
    },
  ],
  faqs: [
    {
      question: 'How is conversion rate calculated?',
      answer:
        'Conversion rate is calculated by dividing total goal conversions by total visitors or sessions, then multiplying by 100: Conversion Rate (%) = (Total Conversions ÷ Total Visitors) × 100. For example, 85 conversions from 2,500 visitors yields (85 ÷ 2,500) × 100 = 3.40%.',
    },
    {
      question: 'What is a typical ecommerce conversion rate?',
      answer: 'Across global ecommerce, average conversion rates range between 2.0% and 3.5%. Lead generation landing pages often reach 5%–12%, whereas high-friction B2B enterprise forms typically hover between 1.0% and 3.0%.',
    },
    {
      question: 'How do small conversion rate gains impact CAC?',
      answer: 'Increasing conversion rate from 2.0% to 3.0% represents a 50% relative surge in customer volume from the exact same ad spend, reducing your Customer Acquisition Cost by 33%.',
    },
  ],
  relatedSlugs: [
    'roas-calculator',
    'cac-calculator',
    'roi-calculator',
    'revenue-calculator',
  ],
};
