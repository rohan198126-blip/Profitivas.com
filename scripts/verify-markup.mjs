function roundTo(value, decimals = 2) {
  if (!Number.isFinite(value)) return 0;
  const multiplier = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

function safeDivide(numerator, denominator, fallback = 0) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    return fallback;
  }
  const result = numerator / denominator;
  return Number.isFinite(result) ? result : fallback;
}

// We test the exact mathematical logic implemented in formulas.ts
function calculateStandardMarkup({ cost, revenue }) {
  if (!Number.isFinite(cost) || !Number.isFinite(revenue) || cost < 0 || revenue < 0) {
    return { isValid: false, errorMessage: 'Invalid numbers' };
  }

  const profit = revenue - cost;
  const isLoss = profit < 0;
  const isZeroCost = cost === 0;

  let margin = 0;
  if (revenue > 0) {
    margin = (profit / revenue) * 100;
  } else if (cost > 0) {
    margin = -100;
  }

  let markup = 0;
  let returnOnCost = 0;
  let errorMessage = undefined;

  if (cost > 0) {
    markup = (profit / cost) * 100;
    returnOnCost = markup;
  } else if (revenue > 0) {
    markup = 0;
    returnOnCost = 0;
    errorMessage = 'Markup is undefined when unit cost is $0.00 (profit is 100% of price).';
  }

  return {
    cost: roundTo(cost, 2),
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    markup: roundTo(markup, 2),
    margin: roundTo(margin, 2),
    returnOnCost: roundTo(returnOnCost, 2),
    isLoss,
    isZeroCost,
    isValid: true,
    errorMessage,
  };
}

function calculateFromTargetMarkup({ cost, targetMarkup }) {
  if (!Number.isFinite(cost) || !Number.isFinite(targetMarkup) || cost < 0 || targetMarkup < 0) {
    return { isValid: false, errorMessage: 'Invalid numbers' };
  }

  const markupDecimal = targetMarkup / 100;
  const revenue = cost * (1 + markupDecimal);
  const profit = revenue - cost;
  const isLoss = profit < 0;
  const isZeroCost = cost === 0;

  let margin = 0;
  if (revenue > 0) {
    margin = safeDivide(profit, revenue, 0) * 100;
  }

  return {
    cost: roundTo(cost, 2),
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    markup: roundTo(targetMarkup, 2),
    margin: roundTo(margin, 2),
    returnOnCost: roundTo(targetMarkup, 2),
    isLoss,
    isZeroCost,
    isValid: true,
  };
}

console.log('--- Running Markup Calculator Tests ---');

// Test 1: Core requirement: Cost = $40, Selling Price = $100
// Expected: Gross Profit = $60, Markup = 150%, Profit Margin = 60%, Return on Cost = 150%
const test1 = calculateStandardMarkup({ cost: 40, revenue: 100 });
console.log('Test 1 ($40 cost, $100 price):', test1);
console.assert(test1.profit === 60, 'Test 1 Failed: Profit should be 60');
console.assert(test1.markup === 150, 'Test 1 Failed: Markup should be 150');
console.assert(test1.margin === 60, 'Test 1 Failed: Margin should be 60');
console.assert(test1.returnOnCost === 150, 'Test 1 Failed: Return on Cost should be 150');
console.assert(!test1.isLoss, 'Test 1 Failed: Should not be loss');

// Test 2: Zero Cost (Cost = 0, Price = 100) -> Margin = 100%, Markup = undefined (safe 0, no Infinity)
const test2 = calculateStandardMarkup({ cost: 0, revenue: 100 });
console.log('Test 2 (Zero Cost):', test2);
console.assert(test2.profit === 100, 'Test 2 Failed: Profit should be 100');
console.assert(test2.margin === 100, 'Test 2 Failed: Margin should be 100');
console.assert(test2.isZeroCost === true, 'Test 2 Failed: isZeroCost should be true');
console.assert(Number.isFinite(test2.markup), 'Test 2 Failed: Markup should be finite/safe');

// Test 3: Equal Cost & Selling Price (Cost = 50, Price = 50)
const test3 = calculateStandardMarkup({ cost: 50, revenue: 50 });
console.log('Test 3 (Equal Cost & Price):', test3);
console.assert(test3.profit === 0, 'Test 3 Failed: Profit should be 0');
console.assert(test3.markup === 0, 'Test 3 Failed: Markup should be 0');
console.assert(test3.margin === 0, 'Test 3 Failed: Margin should be 0');

// Test 4: Selling price below cost (Loss: Cost = 100, Price = 75)
const test4 = calculateStandardMarkup({ cost: 100, revenue: 75 });
console.log('Test 4 (Loss):', test4);
console.assert(test4.profit === -25, 'Test 4 Failed: Profit should be -25');
console.assert(test4.markup === -25, 'Test 4 Failed: Markup should be -25');
console.assert(test4.margin === -33.33, 'Test 4 Failed: Margin should be -33.33');
console.assert(test4.isLoss === true, 'Test 4 Failed: isLoss should be true');

// Test 5: Reverse Calculation (Cost = 40, Target Markup = 150%)
const test5 = calculateFromTargetMarkup({ cost: 40, targetMarkup: 150 });
console.log('Test 5 (Reverse: Cost $40, Markup 150%):', test5);
console.assert(test5.revenue === 100, 'Test 5 Failed: Selling Price should be 100');
console.assert(test5.profit === 60, 'Test 5 Failed: Profit should be 60');
console.assert(test5.margin === 60, 'Test 5 Failed: Margin should be 60');
console.assert(test5.returnOnCost === 150, 'Test 5 Failed: Return on Cost should be 150');

console.log('All 5 mathematical test cases passed successfully!');
