/**
 * Client-side financial amount-to-words generator.
 * Zero external dependencies.
 * Supports:
 * - Indian numbering system (Lakhs, Crores, Rupees, Paise) for INR.
 * - International standard numbering (Millions, Billions, Dollars, Euros, etc.) for other currencies.
 */

const ONES = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];

const TENS = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
];

function convertLessThanThousand(num: number): string {
  let str = '';
  if (num >= 100) {
    str += `${ONES[Math.floor(num / 100)]} Hundred`;
    num %= 100;
    if (num > 0) str += ' ';
  }
  if (num >= 20) {
    str += TENS[Math.floor(num / 10)];
    if (num % 10 > 0) {
      str += ` ${ONES[num % 10]}`;
    }
  } else if (num > 0) {
    str += ONES[num];
  }
  return str;
}

/**
 * Converts integer part using Indian numbering system (Crores, Lakhs, Thousands, Hundreds).
 */
function integerToIndianWords(num: number): string {
  if (num === 0) return 'Zero';

  const parts: string[] = [];

  const crores = Math.floor(num / 10000000);
  num %= 10000000;

  const lakhs = Math.floor(num / 100000);
  num %= 100000;

  const thousands = Math.floor(num / 1000);
  num %= 1000;

  const remaining = num;

  if (crores > 0) {
    parts.push(`${integerToIndianWords(crores)} Crore${crores > 1 ? 's' : ''}`);
  }
  if (lakhs > 0) {
    parts.push(`${convertLessThanThousand(lakhs)} Lakh${lakhs > 1 ? 's' : ''}`);
  }
  if (thousands > 0) {
    parts.push(`${convertLessThanThousand(thousands)} Thousand`);
  }
  if (remaining > 0) {
    parts.push(convertLessThanThousand(remaining));
  }

  return parts.join(' ');
}

/**
 * Converts integer part using international numbering system (Billions, Millions, Thousands, Hundreds).
 */
function integerToInternationalWords(num: number): string {
  if (num === 0) return 'Zero';

  const scales = [
    { value: 1000000000, name: 'Billion' },
    { value: 1000000, name: 'Million' },
    { value: 1000, name: 'Thousand' },
  ];

  const parts: string[] = [];

  for (const scale of scales) {
    if (num >= scale.value) {
      const count = Math.floor(num / scale.value);
      parts.push(`${convertLessThanThousand(count)} ${scale.name}`);
      num %= scale.value;
    }
  }

  if (num > 0) {
    parts.push(convertLessThanThousand(num));
  }

  return parts.join(' ');
}

export interface CurrencyWordsMeta {
  currencyName: string;
  fractionName: string;
  decimals: number;
}

const CURRENCY_WORDS_MAP: Record<string, CurrencyWordsMeta> = {
  INR: { currencyName: 'Indian Rupees', fractionName: 'Paise', decimals: 2 },
  USD: { currencyName: 'US Dollars', fractionName: 'Cents', decimals: 2 },
  EUR: { currencyName: 'Euros', fractionName: 'Cents', decimals: 2 },
  GBP: { currencyName: 'Pounds Sterling', fractionName: 'Pence', decimals: 2 },
  CAD: { currencyName: 'Canadian Dollars', fractionName: 'Cents', decimals: 2 },
  AUD: { currencyName: 'Australian Dollars', fractionName: 'Cents', decimals: 2 },
  BRL: { currencyName: 'Brazilian Reais', fractionName: 'Centavos', decimals: 2 },
  JPY: { currencyName: 'Japanese Yen', fractionName: '', decimals: 0 },
  KRW: { currencyName: 'Korean Won', fractionName: '', decimals: 0 },
};

/**
 * Converts a numeric amount into standard financial words.
 * Examples:
 * - 58769, 'INR' => "Indian Rupees Fifty Eight Thousand Seven Hundred Sixty Nine Only"
 * - 1250.50, 'USD' => "US Dollars One Thousand Two Hundred Fifty and Fifty Cents Only"
 */
export function formatAmountInWords(amount: number, currencyCode: string = 'USD'): string {
  if (!Number.isFinite(amount) || amount <= 0) {
    return '';
  }

  const code = (currencyCode || 'USD').toUpperCase();
  const meta = CURRENCY_WORDS_MAP[code] || {
    currencyName: code,
    fractionName: 'Cents',
    decimals: 2,
  };

  const isINR = code === 'INR';
  const integerPart = Math.floor(amount);
  const fractionFactor = Math.pow(10, meta.decimals);
  const fractionPart = meta.decimals > 0 ? Math.round((amount - integerPart) * fractionFactor) : 0;

  const intWords = isINR ? integerToIndianWords(integerPart) : integerToInternationalWords(integerPart);

  let result = `${meta.currencyName} ${intWords}`;

  if (fractionPart > 0 && meta.fractionName) {
    const fracWords = convertLessThanThousand(fractionPart);
    result += ` and ${fracWords} ${meta.fractionName}`;
  }

  return `${result.trim()} Only`;
}
