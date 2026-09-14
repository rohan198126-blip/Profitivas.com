import type { CalculatorContent } from '../types';

export const discountContent: CalculatorContent = {
  meta: {
    id: 'discount',
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    shortName: 'Discount',
    category: 'pricing-profit',
    status: 'active',
    tagline: 'Calculate discounted sale price and savings amount.',
    description: 'Quickly calculate the final price after percentage discounts or determine the effective discount percentage between original and sale prices.',
    seoTitle: 'Discount Calculator — Calculate Sale Price & Savings',
    seoDescription: 'Free discount calculator. Calculate final sale prices, dollar savings, and percentage discounts instantly for retail, ecommerce, and seasonal promotions.',
    featured: true,
  },
  formulas: [
    {
      title: 'Discount Amount ($)',
      formula: 'Discount Amount = Original Price × (Discount % ÷ 100)',
      plainText: 'Multiply original price by the decimal discount rate.',
      explanation: 'The total dollar savings subtracted from the customer invoice or retail price.',
    },
    {
      title: 'Final Sale Price',
      formula: 'Final Price = Original Price - Discount Amount',
      plainText: 'Subtract the discount amount from the original price.',
      explanation: 'The net price the customer pays at checkout.',
    },
    {
      title: 'Discount Percentage (%)',
      formula: 'Discount % = ((Original Price - Final Price) ÷ Original Price) × 100',
      plainText: 'Divide savings dollars by the original price and multiply by 100.',
      explanation: 'Used in reverse mode to find the exact percentage markdown applied.',
    },
  ],
  workedExample: {
    title: 'Retail Markdown Example ($100 Item with 20% Discount)',
    scenario: 'A retailer offers a 20% promotional discount on an item regularly priced at $100.00.',
    inputs: {
      'Original Price': '$100.00',
      'Discount %': '20.00%',
    },
    steps: [
      'Discount Amount = $100.00 × 0.20 = $20.00',
      'Final Price = $100.00 - $20.00 = $80.00',
      'Customer Savings = $20.00 (20.00%)',
    ],
    results: {
      'Final Sale Price': '$80.00',
      'Discount Amount': '$20.00',
      'Effective Discount': '20.00%',
    },
    takeaway: 'A 20% discount on a $100 item reduces the final customer price to $80.00, providing $20.00 in direct savings.',
  },
  assumptions: [
    {
      term: 'Single-Tier Markdown',
      definition: 'Calculates a single percentage markdown against the stated original price before taxes and shipping.',
    },
    {
      term: 'Pre-Tax Calculation',
      definition: 'Discounts are calculated pre-tax. In most jurisdictions, sales tax applies to the discounted final price.',
    },
  ],
  faqs: [
    {
      question: 'How do I calculate price after discount?',
      answer:
        'To calculate the final price after a discount, multiply the original price by (1 minus the discount percentage divided by 100). For example, an item regularly priced at $100 with a 20% discount is $100 × (1 - 0.20) = $100 × 0.80 = $80.',
    },
    {
      question: 'How do you calculate a discount percentage?',
      answer: 'Multiply the original price by the discount percentage divided by 100 to find the savings amount, then subtract that from the original price. For example, a 20% discount on $100 is $100 × 0.20 = $20 savings, leaving a final price of $80.',
    },
    {
      question: 'How do you calculate what percentage was discounted?',
      answer: 'Subtract the final price from the original price, divide by the original price, and multiply by 100. For example: ($100 - $80) ÷ $100 × 100 = 20%.',
    },
    {
      question: 'Can discount exceed 100%?',
      answer: 'No. A 100% discount makes the product completely free ($0.00). A discount greater than 100% would mean paying the customer to take the item.',
    },
  ],
  relatedSlugs: [
    'selling-price-calculator',
    'profit-margin-calculator',
    'markup-calculator',
    'gross-profit-calculator',
  ],
};
