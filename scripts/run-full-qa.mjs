import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('PROFITIVAS — STEP 14: FULL QA AUDIT RUNNER');
console.log('====================================================\n');

let allPassed = true;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    allPassed = false;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// ----------------------------------------------------
// 1. CALCULATOR MATHEMATICS QA
// ----------------------------------------------------
console.log('\n--- 1. Testing Calculator Mathematics ---');

// We test formulas directly:
function roundTo(value, decimals = 2) {
  if (!Number.isFinite(value)) return 0;
  const multiplier = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

function safeDivide(num, den, fallback = 0) {
  if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return fallback;
  const res = num / den;
  return Number.isFinite(res) ? res : fallback;
}

function calcStandardMargin(cost, revenue) {
  if (!Number.isFinite(cost) || !Number.isFinite(revenue) || cost < 0 || revenue < 0) {
    return { isValid: false, error: 'Cost and revenue must be valid positive numbers.' };
  }
  const profit = revenue - cost;
  let margin = 0;
  if (revenue > 0) margin = (profit / revenue) * 100;
  else if (cost > 0) margin = -100;

  let markup = 0;
  if (cost > 0) markup = (profit / cost) * 100;
  else if (revenue > 0) markup = 100;

  return {
    profit: roundTo(profit, 2),
    margin: roundTo(margin, 2),
    markup: roundTo(markup, 2),
    returnOnCost: roundTo(cost > 0 ? (profit / cost) * 100 : 0, 2),
    isValid: true,
  };
}

function calcTargetMargin(cost, targetMargin) {
  if (!Number.isFinite(cost) || !Number.isFinite(targetMargin) || cost < 0) {
    return { isValid: false, error: 'Invalid input' };
  }
  if (targetMargin >= 100) {
    return { isValid: false, error: 'Target margin must be less than 100%' };
  }
  const divisor = 1 - targetMargin / 100;
  const revenue = safeDivide(cost, divisor, 0);
  const profit = revenue - cost;
  const markup = cost > 0 ? (profit / cost) * 100 : 0;
  return {
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    markup: roundTo(markup, 2),
    returnOnCost: roundTo(markup, 2),
    isValid: true,
  };
}

function calcStandardMarkup(cost, revenue) {
  if (!Number.isFinite(cost) || !Number.isFinite(revenue) || cost < 0 || revenue < 0) {
    return { isValid: false, error: 'Invalid input' };
  }
  const profit = revenue - cost;
  let margin = 0;
  if (revenue > 0) margin = (profit / revenue) * 100;
  else if (cost > 0) margin = -100;

  let markup = 0;
  let error;
  if (cost > 0) markup = (profit / cost) * 100;
  else if (revenue > 0) {
    markup = 0;
    error = 'Markup is undefined when unit cost is $0.00';
  }
  return {
    profit: roundTo(profit, 2),
    markup: roundTo(markup, 2),
    margin: roundTo(margin, 2),
    returnOnCost: roundTo(cost > 0 ? markup : 0, 2),
    isValid: true,
    error,
  };
}

function calcTargetMarkup(cost, targetMarkup) {
  if (!Number.isFinite(cost) || !Number.isFinite(targetMarkup) || cost < 0 || targetMarkup < 0) {
    return { isValid: false, error: 'Invalid input' };
  }
  const revenue = cost * (1 + targetMarkup / 100);
  const profit = revenue - cost;
  let margin = 0;
  if (revenue > 0) margin = safeDivide(profit, revenue, 0) * 100;
  return {
    revenue: roundTo(revenue, 2),
    profit: roundTo(profit, 2),
    markup: roundTo(targetMarkup, 2),
    margin: roundTo(margin, 2),
    isValid: true,
  };
}

// Margin Test A: Cost $40, Revenue $100
const mA = calcStandardMargin(40, 100);
assert(mA.profit === 60, 'Margin Test A: Profit is $60');
assert(mA.margin === 60, 'Margin Test A: Margin is 60%');
assert(mA.markup === 150, 'Margin Test A: Markup is 150%');
assert(mA.returnOnCost === 150, 'Margin Test A: Return on Cost is 150%');

// Margin Test B: Cost $40, Target Margin 60%
const mB = calcTargetMargin(40, 60);
assert(mB.revenue === 100, 'Margin Test B: Required Selling Price is $100');
assert(mB.profit === 60, 'Margin Test B: Profit is $60');
assert(mB.markup === 150, 'Margin Test B: Markup is 150%');

// Margin Edge Cases:
assert(!calcStandardMargin(-10, 100).isValid, 'Margin: Negative cost rejected');
assert(!calcStandardMargin(10, -50).isValid, 'Margin: Negative revenue rejected');
assert(calcStandardMargin(0, 100).margin === 100, 'Margin: Cost $0 gives 100% margin');
assert(calcStandardMargin(100, 0).margin === -100, 'Margin: Revenue $0 gives -100% margin');
assert(!calcTargetMargin(40, 100).isValid, 'Margin: Target margin 100% rejected');
assert(!calcTargetMargin(40, 150).isValid, 'Margin: Target margin > 100% rejected');
assert(calcTargetMargin(40, 0).revenue === 40, 'Margin: Target margin 0% gives selling price = cost ($40)');
assert(calcTargetMargin(40, 99.9).isValid, 'Margin: Target margin 99.9% accepted');

// Markup Test: Cost $40, Revenue $100
const uA = calcStandardMarkup(40, 100);
assert(uA.profit === 60, 'Markup Test: Profit is $60');
assert(uA.markup === 150, 'Markup Test: Markup is 150%');
assert(uA.margin === 60, 'Markup Test: Margin is 60%');

// Markup Target: Cost $40, Target Markup 150%
const uB = calcTargetMarkup(40, 150);
assert(uB.revenue === 100, 'Markup Target: Required Selling Price is $100');
assert(uB.profit === 60, 'Markup Target: Profit is $60');
assert(uB.margin === 60, 'Markup Target: Resulting Margin is 60%');

// Markup Edge Cases:
assert(calcStandardMarkup(0, 100).error !== undefined, 'Markup: Zero cost undefined markup handled cleanly');
assert(!calcStandardMarkup(-40, 100).isValid, 'Markup: Negative cost rejected');
assert(calcStandardMarkup(100, 50).profit === -50, 'Markup: Loss calculated accurately ($50 price, $100 cost)');

// ----------------------------------------------------
// 2. STATIC SITE BUILD & ROUTE AUDIT
// ----------------------------------------------------
console.log('\n--- 2. Auditing Static Build Output & Sitemaps ---');

const expectedRoutes = [
  'index.html',
  'calculators/index.html',
  'profit-margin-calculator/index.html',
  'markup-calculator/index.html',
  'about/index.html',
  'privacy/index.html',
  'terms/index.html',
];

expectedRoutes.forEach((route) => {
  const filePath = path.join('dist', route);
  assert(fs.existsSync(filePath), `Route file exists: dist/${route}`);
});

// Check sitemap
const sitemapPath = path.join('dist', 'sitemap-0.xml');
assert(fs.existsSync(sitemapPath), 'Sitemap file exists (dist/sitemap-0.xml)');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
assert(!sitemapContent.includes('localhost'), 'Sitemap has zero localhost references');
assert(sitemapContent.includes('https://profitivas.com/'), 'Sitemap has production root URL');
assert(sitemapContent.includes('https://profitivas.com/calculators/'), 'Sitemap has calculators URL');
assert(sitemapContent.includes('https://profitivas.com/profit-margin-calculator/'), 'Sitemap has profit-margin URL');
assert(sitemapContent.includes('https://profitivas.com/markup-calculator/'), 'Sitemap has markup URL');
assert(sitemapContent.includes('https://profitivas.com/about/'), 'Sitemap has about URL');
assert(sitemapContent.includes('https://profitivas.com/privacy/'), 'Sitemap has privacy URL');
assert(sitemapContent.includes('https://profitivas.com/terms/'), 'Sitemap has terms URL');

// Check that NO planned calculators are in sitemap
const plannedSlugs = [
  'selling-price-calculator',
  'discount-calculator',
  'gross-profit-calculator',
  'break-even-calculator',
  'target-profit-calculator',
  'revenue-calculator',
  'commission-calculator',
  'roi-calculator',
  'roas-calculator',
  'cac-calculator',
  'ltv-calculator',
  'ltv-cac-calculator',
  'conversion-rate-calculator',
];

plannedSlugs.forEach((slug) => {
  assert(!sitemapContent.includes(slug), `Planned calculator NOT in sitemap: ${slug}`);
  assert(!fs.existsSync(path.join('dist', slug)), `Planned calculator NOT built as thin route: ${slug}`);
});

// ----------------------------------------------------
// 3. INTERNAL LINK AUDIT
// ----------------------------------------------------
console.log('\n--- 3. Auditing Internal Links in Generated HTML ---');

const linkRegex = /href="(\/[^"#?]*)(#[^"]*)?"/g;
let brokenLinks = 0;

expectedRoutes.forEach((page) => {
  const html = fs.readFileSync(path.join('dist', page), 'utf-8');
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const rawPath = match[1];

    // Check if target page exists in dist (page directory, html file, or direct static asset)
    let exists = false;
    const directFile = path.join('dist', rawPath.replace(/^\//, ''));
    const indexFile = path.join('dist', rawPath === '/' ? 'index.html' : `${rawPath.replace(/^\//, '')}/index.html`);
    const htmlFile = path.join('dist', `${rawPath.replace(/^\//, '')}.html`);

    if (fs.existsSync(directFile) || fs.existsSync(indexFile) || fs.existsSync(htmlFile)) {
      exists = true;
    }

    if (!exists) {
      console.error(`Broken link found in ${page}: ${rawPath}`);
      brokenLinks++;
    }
  }
});

assert(brokenLinks === 0, `Zero broken internal links found across all pages (${brokenLinks} broken)`);

// ----------------------------------------------------
// 4. ACCESSIBILITY & HTML AUDIT
// ----------------------------------------------------
console.log('\n--- 4. Auditing Accessibility & Headings ---');

expectedRoutes.forEach((page) => {
  const html = fs.readFileSync(path.join('dist', page), 'utf-8');
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) || [];
  assert(h1Matches.length === 1, `${page} has exactly 1 <h1> tag (found ${h1Matches.length})`);
  assert(html.includes('lang="en"'), `${page} specifies lang="en"`);
  assert(!html.includes('http://localhost'), `${page} has no hardcoded http://localhost`);
});

// ----------------------------------------------------
// 5. PACKAGE & DEPENDENCY AUDIT
// ----------------------------------------------------
console.log('\n--- 5. Auditing Dependencies & Config ---');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
assert(pkg.dependencies['astro'] !== undefined, 'Astro is present');
assert(pkg.dependencies['@astrojs/sitemap'] !== undefined, '@astrojs/sitemap is present');
assert(pkg.dependencies['tailwindcss'] !== undefined, 'Tailwind is present');
assert(pkg.dependencies['lucide-astro'] !== undefined, 'lucide-astro is present');

console.log('\n====================================================');
console.log(allPassed ? '🎉 ALL QA TESTS PASSED WITH ZERO ERRORS!' : '⚠️ SOME QA CHECKS FAILED');
console.log('====================================================\n');
