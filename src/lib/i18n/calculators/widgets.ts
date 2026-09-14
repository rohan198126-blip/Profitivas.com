import type { SupportedLocale } from '../types';
import { formatCurrency } from '../../utils/formatters';

export interface CurrencyInfo {
  code: string;
  symbol: string;
  decimals: number;
}

export const CALC_CURRENCIES: Record<SupportedLocale, CurrencyInfo> = {
  en: { code: 'USD', symbol: '$', decimals: 2 },
  es: { code: 'EUR', symbol: '€', decimals: 2 },
  fr: { code: 'EUR', symbol: '€', decimals: 2 },
  de: { code: 'EUR', symbol: '€', decimals: 2 },
  pt: { code: 'BRL', symbol: 'R$', decimals: 2 },
  it: { code: 'EUR', symbol: '€', decimals: 2 },
  ja: { code: 'JPY', symbol: '¥', decimals: 0 },
  ko: { code: 'KRW', symbol: '₩', decimals: 0 },
};

export function getCalcCurrency(locale: SupportedLocale = 'en'): CurrencyInfo {
  return CALC_CURRENCIES[locale] || CALC_CURRENCIES.en;
}

export function formatCalcMoney(value: number, locale: SupportedLocale = 'en'): string {
  const curr = getCalcCurrency(locale);
  return formatCurrency(value, curr.code, curr.decimals, curr.decimals, locale);
}

export interface WidgetTranslation {
  title?: string;
  modes?: Record<string, string>;
  labels: Record<string, string>;
  helpers: Record<string, string>;
  presets: string[];
  results: Record<string, string>;
  emptyState: { title: string; desc: string };
  errors: Record<string, string>;
  sub?: Record<string, string>;
}

export const WIDGET_TRANSLATIONS: Record<string, Record<SupportedLocale, WidgetTranslation>> = {
  'profit-margin': {
    en: {
      modes: { standard: 'Cost & Selling Price', target: 'Target Margin (Reverse)' },
      labels: {
        cost: 'Unit Cost',
        revenue: 'Selling Price',
        targetMargin: 'Target Margin',
      },
      helpers: {
        cost: 'Direct acquisition, manufacturing, or wholesale cost.',
        revenue: 'Final selling price charged to customer or client.',
        targetMargin: 'Desired profit percentage of final selling price (< 100%).',
      },
      presets: ['$40 → $100', '$15 → $25', '$200 → $350'],
      results: {
        margin: 'Profit Margin',
        requiredPrice: 'Required Selling Price',
        grossProfit: 'Gross profit',
        sellingPrice: 'Selling price',
        targetMargin: 'Target margin',
        markup: 'Markup',
        returnOnCost: 'Return on cost',
      },
      emptyState: {
        title: 'Enter your numbers to calculate your margin.',
        desc: 'Input unit cost and selling price to view instant profit analysis.',
      },
      errors: {
        general: 'Please enter valid positive numbers.',
        cost: 'Please enter a valid non-negative cost.',
        revenue: 'Please enter a valid non-negative selling price.',
        target: 'Please enter a valid target margin percentage.',
        targetMax: 'Target margin must be less than 100%.',
      },
      sub: {
        per100: 'Per $100 Sale',
        revenue: 'Revenue',
        cost: 'Cost',
        profit: 'Profit',
      },
    },
    es: {
      modes: { standard: 'Coste y Precio de Venta', target: 'Margen Objetivo (Inverso)' },
      labels: {
        cost: 'Coste Unitario',
        revenue: 'Precio de Venta',
        targetMargin: 'Margen Objetivo',
      },
      helpers: {
        cost: 'Coste directo de adquisición, fabricación o entrega.',
        revenue: 'Precio final facturado al cliente.',
        targetMargin: 'Porcentaje de beneficio deseado sobre la venta (< 100%).',
      },
      presets: ['40 € → 100 €', '15 € → 25 €', '200 € → 350 €'],
      results: {
        margin: 'Margen de Beneficio',
        requiredPrice: 'Precio de Venta Requerido',
        grossProfit: 'Ganancia bruta',
        sellingPrice: 'Precio de venta',
        targetMargin: 'Margen objetivo',
        markup: 'Recargo (Markup)',
        returnOnCost: 'Retorno sobre el coste',
      },
      emptyState: {
        title: 'Introduzca sus cifras para calcular su margen.',
        desc: 'Indique coste unitario y precio para ver el análisis de rentabilidad.',
      },
      errors: {
        general: 'Por favor, introduzca valores numéricos válidos.',
        cost: 'Por favor, introduzca un coste no negativo válido.',
        revenue: 'Por favor, introduzca un precio de venta no negativo válido.',
        target: 'Por favor, introduzca un porcentaje de margen objetivo válido.',
        targetMax: 'El margen objetivo debe ser inferior al 100%.',
      },
      sub: {
        per100: 'Por Cada 100 € de Venta',
        revenue: 'Ingresos',
        cost: 'Coste',
        profit: 'Beneficio',
      },
    },
    fr: {
      modes: { standard: 'Coût et Prix de Vente', target: 'Marge Cible (Inversé)' },
      labels: {
        cost: 'Coût Unitaire',
        revenue: 'Prix de Vente',
        targetMargin: 'Marge Cible',
      },
      helpers: {
        cost: 'Coût direct d’achat, fabrication ou approvisionnement.',
        revenue: 'Prix facturé au client final.',
        targetMargin: 'Pourcentage de marge souhaité sur le prix (< 100%).',
      },
      presets: ['40 € → 100 €', '15 € → 25 €', '200 € → 350 €'],
      results: {
        margin: 'Marge Bénéficiaire',
        requiredPrice: 'Prix de Vente Requis',
        grossProfit: 'Bénéfice brut',
        sellingPrice: 'Prix de vente',
        targetMargin: 'Marge cible',
        markup: 'Taux de marque (Markup)',
        returnOnCost: 'Rendement sur coût',
      },
      emptyState: {
        title: 'Entrez vos chiffres pour calculer votre marge.',
        desc: 'Indiquez coût et prix de vente pour obtenir l’analyse immédiate.',
      },
      errors: {
        general: 'Veuillez saisir des chiffres valides.',
        cost: 'Veuillez saisir un coût unitaire positif.',
        revenue: 'Veuillez saisir un prix de vente positif.',
        target: 'Veuillez saisir un pourcentage de marge cible valide.',
        targetMax: 'La marge cible doit être inférieure à 100%.',
      },
      sub: {
        per100: 'Pour 100 € de Vente',
        revenue: 'Chiffre d’affaires',
        cost: 'Coût',
        profit: 'Bénéfice',
      },
    },
    de: {
      modes: { standard: 'Kosten & Verkaufspreis', target: 'Zielmarge (Rückwärts)' },
      labels: {
        cost: 'Stückkosten',
        revenue: 'Verkaufspreis',
        targetMargin: 'Zielmarge',
      },
      helpers: {
        cost: 'Direkte Beschaffungs-, Herstellungs- oder Großhandelskosten.',
        revenue: 'Endgültiger an Kunden berechneter Verkaufspreis.',
        targetMargin: 'Gewünschter Gewinnanteil am Verkaufspreis (< 100%).',
      },
      presets: ['40 € → 100 €', '15 € → 25 €', '200 € → 350 €'],
      results: {
        margin: 'Gewinnmarge',
        requiredPrice: 'Erforderlicher Verkaufspreis',
        grossProfit: 'Bruttogewinn',
        sellingPrice: 'Verkaufspreis',
        targetMargin: 'Zielmarge',
        markup: 'Aufschlag (Markup)',
        returnOnCost: 'Kostenrendite',
      },
      emptyState: {
        title: 'Geben Sie Ihre Zahlen ein, um Ihre Marge zu berechnen.',
        desc: 'Geben Sie Stückkosten und Preis ein, um die Rentabilität zu prüfen.',
      },
      errors: {
        general: 'Bitte geben Sie gültige positive Zahlen ein.',
        cost: 'Bitte geben Sie gültige positive Stückkosten ein.',
        revenue: 'Bitte geben Sie einen gültigen Verkaufspreis ein.',
        target: 'Bitte geben Sie einen gültigen Zielmarge-Prozentsatz ein.',
        targetMax: 'Die Zielmarge muss unter 100% liegen.',
      },
      sub: {
        per100: 'Pro 100 € Umsatz',
        revenue: 'Umsatz',
        cost: 'Kosten',
        profit: 'Gewinn',
      },
    },
    pt: {
      modes: { standard: 'Custo e Preço de Venda', target: 'Margem Alvo (Reversa)' },
      labels: {
        cost: 'Custo Unitário',
        revenue: 'Preço de Venda',
        targetMargin: 'Margem Alvo',
      },
      helpers: {
        cost: 'Custo direto de aquisição, produção ou distribuição.',
        revenue: 'Preço final cobrado ao cliente.',
        targetMargin: 'Percentual de lucro desejado sobre o preço (< 100%).',
      },
      presets: ['R$ 40 → R$ 100', 'R$ 15 → R$ 25', 'R$ 200 → R$ 350'],
      results: {
        margin: 'Margem de Lucro',
        requiredPrice: 'Preço de Venda Necessário',
        grossProfit: 'Lucro bruto',
        sellingPrice: 'Preço de venda',
        targetMargin: 'Margem alvo',
        markup: 'Markup',
        returnOnCost: 'Retorno sobre o custo',
      },
      emptyState: {
        title: 'Insira seus números para calcular a margem.',
        desc: 'Informe o custo unitário e preço para análise imediata.',
      },
      errors: {
        general: 'Por favor, insira valores positivos válidos.',
        cost: 'Por favor, insira um custo unitário válido.',
        revenue: 'Por favor, insira um preço de venda válido.',
        target: 'Por favor, insira um percentual de margem alvo válido.',
        targetMax: 'A margem alvo deve ser menor que 100%.',
      },
      sub: {
        per100: 'A Cada R$ 100 em Vendas',
        revenue: 'Receita',
        cost: 'Custo',
        profit: 'Lucro',
      },
    },
    it: {
      modes: { standard: 'Costo e Prezzo di Vendita', target: 'Margine Obiettivo (Inverso)' },
      labels: {
        cost: 'Costo Unitario',
        revenue: 'Prezzo di Vendita',
        targetMargin: 'Margine Obiettivo',
      },
      helpers: {
        cost: 'Costo diretto di acquisto, produzione o consegna.',
        revenue: 'Prezzo finale addebitato al cliente.',
        targetMargin: 'Percentuale di profitto desiderata (< 100%).',
      },
      presets: ['40 € → 100 €', '15 € → 25 €', '200 € → 350 €'],
      results: {
        margin: 'Margine di Profitto',
        requiredPrice: 'Prezzo di Vendita Richiesto',
        grossProfit: 'Utile lordo',
        sellingPrice: 'Prezzo di vendita',
        targetMargin: 'Margine obiettivo',
        markup: 'Ricarico (Markup)',
        returnOnCost: 'Rendimento sul costo',
      },
      emptyState: {
        title: 'Inserisci i tuoi numeri per calcolare il margine.',
        desc: 'Inserisci costo e prezzo per visualizzare l’analisi immediata.',
      },
      errors: {
        general: 'Inserisci numeri positivi validi.',
        cost: 'Inserisci un costo unitario valido non negativo.',
        revenue: 'Inserisci un prezzo di vendita valido non negativo.',
        target: 'Inserisci una percentuale di margine valida.',
        targetMax: 'Il margine obiettivo deve essere inferiore al 100%.',
      },
      sub: {
        per100: 'Ogni 100 € di Vendita',
        revenue: 'Fatturato',
        cost: 'Costo',
        profit: 'Profitto',
      },
    },
    ja: {
      modes: { standard: '原価と販売価格', target: '目標マージン（逆算）' },
      labels: {
        cost: '単位原価',
        revenue: '販売価格',
        targetMargin: '目標マージン',
      },
      helpers: {
        cost: '仕入れ、製造、調達に直接要する単位原価。',
        revenue: '顧客に請求する最終販売価格。',
        targetMargin: '販売価格に対する希望利益率（100%未満）。',
      },
      presets: ['¥40 → ¥100', '¥15 → ¥25', '¥200 → ¥350'],
      results: {
        margin: '利益率（マージン）',
        requiredPrice: '必要販売価格',
        grossProfit: '売上総利益（粗利益）',
        sellingPrice: '販売価格',
        targetMargin: '目標マージン',
        markup: 'マークアップ率',
        returnOnCost: '原価回収率',
      },
      emptyState: {
        title: '数値を入力してマージンを計算します。',
        desc: '原価と販売価格を入力すると瞬時に利益率が分析されます。',
      },
      errors: {
        general: '有効な正の数値を入力してください。',
        cost: '有効な原価を入力してください。',
        revenue: '有効な販売価格を入力してください。',
        target: '有効な目標マージン率を入力してください。',
        targetMax: '目標マージン率は100%未満である必要があります。',
      },
      sub: {
        per100: '売上100円あたりの構造',
        revenue: '売上',
        cost: '原価',
        profit: '利益',
      },
    },
    ko: {
      modes: { standard: '원가 및 판매가격', target: '목표 마진 (역산)' },
      labels: {
        cost: '단위원가',
        revenue: '판매가격',
        targetMargin: '목표 마진',
      },
      helpers: {
        cost: '제품 조달, 제조 또는 납품에 직접 소요된 단위원가.',
        revenue: '고객에게 최종 청구하는 판매가격.',
        targetMargin: '판매가격 대비 희망 수익률 (100% 미만).',
      },
      presets: ['₩40 → ₩100', '₩15 → ₩25', '₩200 → ₩350'],
      results: {
        margin: '수익률 (마진율)',
        requiredPrice: '필요 판매가격',
        grossProfit: '매출총이익 (마진액)',
        sellingPrice: '판매가격',
        targetMargin: '목표 마진',
        markup: '마크업 (원가가산율)',
        returnOnCost: '원가 수익률',
      },
      emptyState: {
        title: '숫자를 입력하여 마진을 계산하세요.',
        desc: '원가와 판매가격을 입력하면 실시간 이익 분석이 제공됩니다.',
      },
      errors: {
        general: '유효한 양수를 입력하세요.',
        cost: '유효한 단위원가를 입력하세요.',
        revenue: '유효한 판매가격을 입력하세요.',
        target: '유효한 목표 마진율을 입력하세요.',
        targetMax: '목표 마진율은 100% 미만이어야 합니다.',
      },
      sub: {
        per100: '매출 100원당 분석',
        revenue: '매출',
        cost: '원가',
        profit: '이익',
      },
    },
  },

  markup: {
    en: {
      modes: { standard: 'Cost & Selling Price', target: 'Target Markup (Reverse)' },
      labels: { cost: 'Unit Cost', revenue: 'Selling Price', targetMarkup: 'Target Markup' },
      helpers: {
        cost: 'Direct acquisition, manufacturing, or wholesale cost.',
        revenue: 'Final selling price charged to customer.',
        targetMarkup: 'Desired markup percentage added on top of cost.',
      },
      presets: ['$40 → $100', '$50 → $75', '$20 → $60'],
      results: {
        markup: 'Markup',
        requiredPrice: 'Required Selling Price',
        grossProfit: 'Gross profit',
        sellingPrice: 'Selling price',
        targetMarkup: 'Target markup',
        profitMargin: 'Profit margin',
        returnOnCost: 'Return on cost',
      },
      emptyState: {
        title: 'Enter your numbers to calculate your markup.',
        desc: 'Input unit cost and selling price to view instant markup analysis.',
      },
      errors: {
        general: 'Please enter valid positive numbers.',
        cost: 'Please enter a valid non-negative cost.',
        revenue: 'Please enter a valid non-negative selling price.',
        target: 'Please enter a valid target markup percentage.',
      },
      sub: { per100: 'Per $100 Cost Basis', revenue: 'Revenue', cost: 'Cost', markup: 'Markup' },
    },
    es: {
      modes: { standard: 'Coste y Precio de Venta', target: 'Recargo Objetivo (Inverso)' },
      labels: { cost: 'Coste Unitario', revenue: 'Precio de Venta', targetMarkup: 'Recargo Objetivo' },
      helpers: {
        cost: 'Coste directo de adquisición o producción.',
        revenue: 'Precio final facturado al cliente.',
        targetMarkup: 'Porcentaje añadido sobre el coste unitario.',
      },
      presets: ['40 € → 100 €', '50 € → 75 €', '20 € → 60 €'],
      results: {
        markup: 'Recargo (Markup)',
        requiredPrice: 'Precio de Venta Requerido',
        grossProfit: 'Ganancia bruta',
        sellingPrice: 'Precio de venta',
        targetMarkup: 'Recargo objetivo',
        profitMargin: 'Margen de beneficio',
        returnOnCost: 'Retorno sobre el coste',
      },
      emptyState: {
        title: 'Introduzca sus cifras para calcular su recargo.',
        desc: 'Indique coste y precio para analizar el porcentaje de markup.',
      },
      errors: {
        general: 'Por favor, introduzca valores válidos.',
        cost: 'Por favor, introduzca un coste unitario válido.',
        revenue: 'Por favor, introduzca un precio válido.',
        target: 'Por favor, introduzca un recargo objetivo válido.',
      },
      sub: { per100: 'Por Cada 100 € de Coste', revenue: 'Venta', cost: 'Coste', markup: 'Recargo' },
    },
    fr: {
      modes: { standard: 'Coût et Prix de Vente', target: 'Markup Cible (Inversé)' },
      labels: { cost: 'Coût Unitaire', revenue: 'Prix de Vente', targetMarkup: 'Taux de Marque Cible' },
      helpers: {
        cost: 'Coût d’achat direct ou de production.',
        revenue: 'Prix final facturé au client.',
        targetMarkup: 'Pourcentage appliqué au coût unitaire.',
      },
      presets: ['40 € → 100 €', '50 € → 75 €', '20 € → 60 €'],
      results: {
        markup: 'Taux de Marque (Markup)',
        requiredPrice: 'Prix de Vente Requis',
        grossProfit: 'Bénéfice brut',
        sellingPrice: 'Prix de vente',
        targetMarkup: 'Taux cible',
        profitMargin: 'Marge bénéficiaire',
        returnOnCost: 'Rendement sur coût',
      },
      emptyState: {
        title: 'Entrez vos chiffres pour calculer votre taux de marque.',
        desc: 'Indiquez coût et prix de vente pour analyser le markup.',
      },
      errors: {
        general: 'Veuillez saisir des chiffres positifs valides.',
        cost: 'Veuillez saisir un coût unitaire valide.',
        revenue: 'Veuillez saisir un prix de vente valide.',
        target: 'Veuillez saisir un taux cible valide.',
      },
      sub: { per100: 'Pour 100 € de Base de Coût', revenue: 'Vente', cost: 'Coût', markup: 'Markup' },
    },
    de: {
      modes: { standard: 'Kosten & Verkaufspreis', target: 'Zielaufschlag (Rückwärts)' },
      labels: { cost: 'Stückkosten', revenue: 'Verkaufspreis', targetMarkup: 'Zielaufschlag' },
      helpers: {
        cost: 'Direkte Beschaffungs- oder Herstellkosten.',
        revenue: 'Endgültiger Verkaufspreis für Kunden.',
        targetMarkup: 'Gewünschter prozentualer Aufschlag auf die Kosten.',
      },
      presets: ['40 € → 100 €', '50 € → 75 €', '20 € → 60 €'],
      results: {
        markup: 'Aufschlag (Markup)',
        requiredPrice: 'Erforderlicher Verkaufspreis',
        grossProfit: 'Bruttogewinn',
        sellingPrice: 'Verkaufspreis',
        targetMarkup: 'Zielaufschlag',
        profitMargin: 'Gewinnmarge',
        returnOnCost: 'Kostenrendite',
      },
      emptyState: {
        title: 'Geben Sie Ihre Zahlen ein, um Ihren Aufschlag zu berechnen.',
        desc: 'Geben Sie Kosten und Preis ein, um den Aufschlag zu prüfen.',
      },
      errors: {
        general: 'Bitte geben Sie gültige Zahlen ein.',
        cost: 'Bitte geben Sie gültige Stückkosten ein.',
        revenue: 'Bitte geben Sie einen gültigen Verkaufspreis ein.',
        target: 'Bitte geben Sie einen gültigen Zielaufschlag ein.',
      },
      sub: { per100: 'Pro 100 € Kostenbasis', revenue: 'Umsatz', cost: 'Kosten', markup: 'Aufschlag' },
    },
    pt: {
      modes: { standard: 'Custo e Preço de Venda', target: 'Markup Alvo (Reverso)' },
      labels: { cost: 'Custo Unitário', revenue: 'Preço de Venda', targetMarkup: 'Markup Alvo' },
      helpers: {
        cost: 'Custo direto de aquisição ou produção.',
        revenue: 'Preço de venda cobrado ao cliente.',
        targetMarkup: 'Percentual desejado sobre o custo unitário.',
      },
      presets: ['R$ 40 → R$ 100', 'R$ 50 → R$ 75', 'R$ 20 → R$ 60'],
      results: {
        markup: 'Markup',
        requiredPrice: 'Preço de Venda Necessário',
        grossProfit: 'Lucro bruto',
        sellingPrice: 'Preço de venda',
        targetMarkup: 'Markup alvo',
        profitMargin: 'Margem de lucro',
        returnOnCost: 'Retorno sobre o custo',
      },
      emptyState: {
        title: 'Insira seus números para calcular o markup.',
        desc: 'Informe o custo e preço para visualizar o markup.',
      },
      errors: {
        general: 'Por favor, insira números válidos.',
        cost: 'Por favor, insira um custo válido.',
        revenue: 'Por favor, insira um preço válido.',
        target: 'Por favor, insira um markup alvo válido.',
      },
      sub: { per100: 'Por Cada R$ 100 de Custo', revenue: 'Venda', cost: 'Custo', markup: 'Markup' },
    },
    it: {
      modes: { standard: 'Costo e Prezzo di Vendita', target: 'Ricarico Obiettivo (Inverso)' },
      labels: { cost: 'Costo Unitario', revenue: 'Prezzo di Vendita', targetMarkup: 'Ricarico Obiettivo' },
      helpers: {
        cost: 'Costo diretto di acquisto o produzione.',
        revenue: 'Prezzo finale di vendita al cliente.',
        targetMarkup: 'Percentuale aggiunta sul costo unitario.',
      },
      presets: ['40 € → 100 €', '50 € → 75 €', '20 € → 60 €'],
      results: {
        markup: 'Ricarico (Markup)',
        requiredPrice: 'Prezzo di Vendita Richiesto',
        grossProfit: 'Utile lordo',
        sellingPrice: 'Prezzo di vendita',
        targetMarkup: 'Ricarico obiettivo',
        profitMargin: 'Margine di profitto',
        returnOnCost: 'Rendimento sul costo',
      },
      emptyState: {
        title: 'Inserisci i tuoi numeri per calcolare il ricarico.',
        desc: 'Inserisci costo e prezzo per verificare il markup.',
      },
      errors: {
        general: 'Inserisci numeri positivi validi.',
        cost: 'Inserisci un costo unitario valido.',
        revenue: 'Inserisci un prezzo di vendita valido.',
        target: 'Inserisci un ricarico obiettivo valido.',
      },
      sub: { per100: 'Per 100 € di Base di Costo', revenue: 'Vendita', cost: 'Costo', markup: 'Ricarico' },
    },
    ja: {
      modes: { standard: '原価と販売価格', target: '目標マークアップ（逆算）' },
      labels: { cost: '単位原価', revenue: '販売価格', targetMarkup: '目標マークアップ' },
      helpers: {
        cost: '仕入れまたは製造にかかる直接原価。',
        revenue: '顧客に請求する最終販売価格。',
        targetMarkup: '原価に上乗せする希望マークアップ率。',
      },
      presets: ['¥40 → ¥100', '¥50 → ¥75', '¥20 → ¥60'],
      results: {
        markup: 'マークアップ率',
        requiredPrice: '必要販売価格',
        grossProfit: '売上総利益（粗利益）',
        sellingPrice: '販売価格',
        targetMarkup: '目標マークアップ',
        profitMargin: '利益率（マージン）',
        returnOnCost: '原価回収率',
      },
      emptyState: {
        title: '数値を入力してマークアップ率を計算します。',
        desc: '原価と販売価格を入力するとマークアップが計算されます。',
      },
      errors: {
        general: '有効な正の数値を入力してください。',
        cost: '有効な原価を入力してください。',
        revenue: '有効な販売価格を入力してください。',
        target: '有効な目標マークアップ率を入力してください。',
      },
      sub: { per100: '原価100円あたりの構造', revenue: '売上', cost: '原価', markup: 'マークアップ' },
    },
    ko: {
      modes: { standard: '원가 및 판매가격', target: '목표 마크업 (역산)' },
      labels: { cost: '단위원가', revenue: '판매가격', targetMarkup: '목표 마크업' },
      helpers: {
        cost: '제품 조달 또는 생산에 소요되는 직접 원가.',
        revenue: '고객에게 청구하는 최종 판매가격.',
        targetMarkup: '원가에 가산할 희망 마크업 비율.',
      },
      presets: ['₩40 → ₩100', '₩50 → ₩75', '₩20 → ₩60'],
      results: {
        markup: '마크업 (원가가산율)',
        requiredPrice: '필요 판매가격',
        grossProfit: '매출총이익',
        sellingPrice: '판매가격',
        targetMarkup: '목표 마크업',
        profitMargin: '수익률 (마진율)',
        returnOnCost: '원가 수익률',
      },
      emptyState: {
        title: '숫자를 입력하여 마크업을 계산하세요.',
        desc: '원가와 판매가격을 입력하면 원가가산율이 분석됩니다.',
      },
      errors: {
        general: '유효한 양수를 입력하세요.',
        cost: '유효한 단위원가를 입력하세요.',
        revenue: '유효한 판매가격을 입력하세요.',
        target: '유효한 목표 마크업 비율을 입력하세요.',
      },
      sub: { per100: '원가 100원당 분석', revenue: '매출', cost: '원가', markup: '마크업' },
    },
  },

  'selling-price': {
    en: {
      modes: { margin: 'Target Margin', markup: 'Target Markup' },
      labels: { cost: 'Unit Cost', margin: 'Target Margin', markup: 'Target Markup' },
      helpers: {
        cost: 'Direct acquisition, manufacturing, or wholesale cost.',
        margin: 'Desired profit percentage of selling price (< 100%).',
        markup: 'Desired percentage added on top of unit cost.',
      },
      presets: ['$40 / 60%', '$25 / 40%', '$100 / 50%'],
      results: {
        primary: 'Required Selling Price',
        grossProfit: 'Gross profit',
        profitMargin: 'Profit margin',
        markup: 'Markup',
      },
      emptyState: {
        title: 'Enter unit cost and target to calculate price.',
        desc: 'Calculate required customer selling price instantly.',
      },
      errors: {
        general: 'Please enter valid positive numbers.',
        marginMax: 'Target margin must be less than 100%.',
      },
    },
    es: {
      modes: { margin: 'Margen Objetivo', markup: 'Recargo Objetivo' },
      labels: { cost: 'Coste Unitario', margin: 'Margen Objetivo', markup: 'Recargo Objetivo' },
      helpers: {
        cost: 'Coste directo de adquisición o producción.',
        margin: 'Porcentaje de beneficio deseado sobre la venta (< 100%).',
        markup: 'Porcentaje deseado añadido sobre el coste unitario.',
      },
      presets: ['40 € / 60%', '25 € / 40%', '100 € / 50%'],
      results: {
        primary: 'Precio de Venta Requerido',
        grossProfit: 'Ganancia bruta',
        profitMargin: 'Margen de beneficio',
        markup: 'Recargo (Markup)',
      },
      emptyState: {
        title: 'Introduzca coste y objetivo para calcular el precio.',
        desc: 'Calcule al instante el precio de venta recomendado.',
      },
      errors: {
        general: 'Por favor, introduzca valores válidos.',
        marginMax: 'El margen objetivo debe ser inferior al 100%.',
      },
    },
    fr: {
      modes: { margin: 'Marge Cible', markup: 'Taux Cible' },
      labels: { cost: 'Coût Unitaire', margin: 'Marge Cible', markup: 'Taux de Marque Cible' },
      helpers: {
        cost: 'Coût unitaire d’achat ou de fabrication.',
        margin: 'Marge bénéficiaire souhaitée sur la vente (< 100%).',
        markup: 'Pourcentage ajouté au coût unitaire.',
      },
      presets: ['40 € / 60%', '25 € / 40%', '100 € / 50%'],
      results: {
        primary: 'Prix de Vente Requis',
        grossProfit: 'Bénéfice brut',
        profitMargin: 'Marge bénéficiaire',
        markup: 'Taux de marque (Markup)',
      },
      emptyState: {
        title: 'Indiquez coût et objectif pour calculer le prix.',
        desc: 'Calculez immédiatement le prix de vente nécessaire.',
      },
      errors: {
        general: 'Veuillez saisir des chiffres valides.',
        marginMax: 'La marge cible doit être inférieure à 100%.',
      },
    },
    de: {
      modes: { margin: 'Zielmarge', markup: 'Zielaufschlag' },
      labels: { cost: 'Stückkosten', margin: 'Zielmarge', markup: 'Zielaufschlag' },
      helpers: {
        cost: 'Direkte Beschaffungs- oder Herstellkosten.',
        margin: 'Gewünschter Margeanteil am Verkaufspreis (< 100%).',
        markup: 'Gewünschter Aufschlagsprozentsatz auf die Kosten.',
      },
      presets: ['40 € / 60%', '25 € / 40%', '100 € / 50%'],
      results: {
        primary: 'Erforderlicher Verkaufspreis',
        grossProfit: 'Bruttogewinn',
        profitMargin: 'Gewinnmarge',
        markup: 'Aufschlag (Markup)',
      },
      emptyState: {
        title: 'Kosten und Ziel eingeben, um Preis zu ermitteln.',
        desc: 'Berechnen Sie sofort den erforderlichen Verkaufspreis.',
      },
      errors: {
        general: 'Bitte geben Sie gültige Werte ein.',
        marginMax: 'Die Zielmarge muss unter 100% liegen.',
      },
    },
    pt: {
      modes: { margin: 'Margem Alvo', markup: 'Markup Alvo' },
      labels: { cost: 'Custo Unitário', margin: 'Margem Alvo', markup: 'Markup Alvo' },
      helpers: {
        cost: 'Custo direto de compra ou fabricação.',
        margin: 'Margem de lucro desejada sobre a venda (< 100%).',
        markup: 'Percentual desejado sobre o custo unitário.',
      },
      presets: ['R$ 40 / 60%', 'R$ 25 / 40%', 'R$ 100 / 50%'],
      results: {
        primary: 'Preço de Venda Necessário',
        grossProfit: 'Lucro bruto',
        profitMargin: 'Margem de lucro',
        markup: 'Markup',
      },
      emptyState: {
        title: 'Insira custo e meta para calcular o preço.',
        desc: 'Descubra o preço de venda necessário imediatamente.',
      },
      errors: {
        general: 'Por favor, insira números válidos.',
        marginMax: 'A margem alvo deve ser menor que 100%.',
      },
    },
    it: {
      modes: { margin: 'Margine Obiettivo', markup: 'Ricarico Obiettivo' },
      labels: { cost: 'Costo Unitario', margin: 'Margine Obiettivo', markup: 'Ricarico Obiettivo' },
      helpers: {
        cost: 'Costo diretto di acquisto o produzione.',
        margin: 'Percentuale di profitto desiderata (< 100%).',
        markup: 'Percentuale aggiunta sul costo unitario.',
      },
      presets: ['40 € / 60%', '25 € / 40%', '100 € / 50%'],
      results: {
        primary: 'Prezzo di Vendita Richiesto',
        grossProfit: 'Utile lordo',
        profitMargin: 'Margine di profitto',
        markup: 'Ricarico (Markup)',
      },
      emptyState: {
        title: 'Inserisci costo e obiettivo per calcolare il prezzo.',
        desc: 'Calcola immediatamente il prezzo di vendita consigliato.',
      },
      errors: {
        general: 'Inserisci numeri validi.',
        marginMax: 'Il margine obiettivo deve essere inferiore al 100%.',
      },
    },
    ja: {
      modes: { margin: '目標マージン', markup: '目標マークアップ' },
      labels: { cost: '単位原価', margin: '目標マージン', markup: '目標マークアップ' },
      helpers: {
        cost: '仕入れまたは製造に要する直接原価。',
        margin: '希望する利益率（100%未満）。',
        markup: '原価に上乗せする希望マークアップ率。',
      },
      presets: ['¥40 / 60%', '¥25 / 40%', '¥100 / 50%'],
      results: {
        primary: '必要販売価格',
        grossProfit: '売上総利益（粗利益）',
        profitMargin: '利益率（マージン）',
        markup: 'マークアップ率',
      },
      emptyState: {
        title: '原価と目標値を入力して販売価格を計算します。',
        desc: '目標利益を確保するために必要な販売価格を算出します。',
      },
      errors: {
        general: '有効な正の数値を入力してください。',
        marginMax: '目標マージン率は100%未満である必要があります。',
      },
    },
    ko: {
      modes: { margin: '목표 마진', markup: '목표 마크업' },
      labels: { cost: '단위원가', margin: '목표 마진', markup: '목표 마크업' },
      helpers: {
        cost: '제품 조달 또는 생산에 소요되는 직접 원가.',
        margin: '판매가격 대비 희망 수익률 (100% 미만).',
        markup: '원가에 가산할 희망 비율.',
      },
      presets: ['₩40 / 60%', '₩25 / 40%', '₩100 / 50%'],
      results: {
        primary: '필요 판매가격',
        grossProfit: '매출총이익',
        profitMargin: '수익률 (마진율)',
        markup: '마크업 (원가가산율)',
      },
      emptyState: {
        title: '원가와 목표치를 입력하여 판매가격을 계산하세요.',
        desc: '희망 마진을 달성하는 데 필요한 판매가격을 계산합니다.',
      },
      errors: {
        general: '유효한 양수를 입력하세요.',
        marginMax: '목표 마진율은 100% 미만이어야 합니다.',
      },
    },
  },

  discount: {
    en: {
      modes: { standard: 'Percentage Off', reverse: 'Calculate % from Price' },
      labels: { originalPrice: 'Original Price', discountPercent: 'Discount', salePrice: 'Sale / Final Price' },
      helpers: {
        originalPrice: 'Regular retail or catalog price before discounts.',
        discountPercent: 'Percentage reduction (0% to 100%).',
        salePrice: 'Discounted price paid by customer.',
      },
      presets: ['20% off $100', '15% off $50', '30% off $250'],
      results: {
        finalPrice: 'Final Price',
        savings: 'You Save',
        discount: 'Discount',
        effectiveSavings: 'Effective savings',
      },
      emptyState: {
        title: 'Enter price and discount to view savings.',
        desc: 'Calculate discounted price and total customer savings.',
      },
      errors: {
        general: 'Please enter valid positive numbers.',
        max: 'Discount cannot exceed 100%.',
      },
    },
    es: {
      modes: { standard: 'Porcentaje de Descuento', reverse: 'Calcular % desde el Precio' },
      labels: { originalPrice: 'Precio Original', discountPercent: 'Descuento', salePrice: 'Precio Rebajado' },
      helpers: {
        originalPrice: 'Precio regular antes de aplicar descuentos.',
        discountPercent: 'Porcentaje de reducción (0% al 100%).',
        salePrice: 'Precio final pagado por el cliente.',
      },
      presets: ['20% sobre 100 €', '15% sobre 50 €', '30% sobre 250 €'],
      results: {
        finalPrice: 'Precio Final',
        savings: 'Ahorro Total',
        discount: 'Descuento',
        effectiveSavings: 'Ahorro efectivo',
      },
      emptyState: {
        title: 'Introduzca precio y descuento para ver el ahorro.',
        desc: 'Calcule el precio final rebajado y el ahorro del cliente.',
      },
      errors: {
        general: 'Por favor, introduzca cifras válidas.',
        max: 'El descuento no puede superar el 100%.',
      },
    },
    fr: {
      modes: { standard: 'Pourcentage de Remise', reverse: 'Calculer % depuis le Prix' },
      labels: { originalPrice: 'Prix Initial', discountPercent: 'Remise', salePrice: 'Prix Réduit' },
      helpers: {
        originalPrice: 'Prix catalogue normal avant remise.',
        discountPercent: 'Pourcentage de réduction (0% à 100%).',
        salePrice: 'Prix final payé par le client.',
      },
      presets: ['20% sur 100 €', '15% sur 50 €', '30% sur 250 €'],
      results: {
        finalPrice: 'Prix Final',
        savings: 'Économie',
        discount: 'Remise',
        effectiveSavings: 'Économie réelle',
      },
      emptyState: {
        title: 'Indiquez prix et remise pour voir l’économie.',
        desc: 'Calculez le montant final soldé et l’économie client.',
      },
      errors: {
        general: 'Veuillez saisir des chiffres valides.',
        max: 'La remise ne peut pas dépasser 100%.',
      },
    },
    de: {
      modes: { standard: 'Rabatt in Prozent', reverse: '% aus Endpreis ermitteln' },
      labels: { originalPrice: 'Ursprungspreis', discountPercent: 'Rabatt', salePrice: 'Reduzierter Preis' },
      helpers: {
        originalPrice: 'Regulärer Listenpreis vor dem Rabatt.',
        discountPercent: 'Prozentuale Reduzierung (0% bis 100%).',
        salePrice: 'Vom Kunden gezahlter Sonderpreis.',
      },
      presets: ['20% auf 100 €', '15% auf 50 €', '30% auf 250 €'],
      results: {
        finalPrice: 'Endpreis',
        savings: 'Ersparnis',
        discount: 'Rabatt',
        effectiveSavings: 'Tatsächliche Ersparnis',
      },
      emptyState: {
        title: 'Preis und Rabatt eingeben, um Ersparnis zu sehen.',
        desc: 'Berechnen Sie den reduzierten Preis und die Gesamtersparnis.',
      },
      errors: {
        general: 'Bitte geben Sie gültige Zahlen ein.',
        max: 'Der Rabatt darf 100% nicht überschreiten.',
      },
    },
    pt: {
      modes: { standard: 'Porcentagem de Desconto', reverse: 'Calcular % pelo Preço' },
      labels: { originalPrice: 'Preço Original', discountPercent: 'Desconto', salePrice: 'Preço com Desconto' },
      helpers: {
        originalPrice: 'Preço normal de tabela antes do desconto.',
        discountPercent: 'Percentual de redução (0% a 100%).',
        salePrice: 'Preço final pago pelo cliente.',
      },
      presets: ['20% de R$ 100', '15% de R$ 50', '30% de R$ 250'],
      results: {
        finalPrice: 'Preço Final',
        savings: 'Você Economiza',
        discount: 'Desconto',
        effectiveSavings: 'Economia efetiva',
      },
      emptyState: {
        title: 'Insira o preço e desconto para ver a economia.',
        desc: 'Calcule o preço final com desconto e a economia do cliente.',
      },
      errors: {
        general: 'Por favor, insira valores válidos.',
        max: 'O desconto não pode exceder 100%.',
      },
    },
    it: {
      modes: { standard: 'Percentuale di Sconto', reverse: 'Calcola % dal Prezzo' },
      labels: { originalPrice: 'Prezzo Originale', discountPercent: 'Sconto', salePrice: 'Prezzo Scontato' },
      helpers: {
        originalPrice: 'Prezzo di listino prima degli sconti.',
        discountPercent: 'Percentuale di riduzione (da 0% a 100%).',
        salePrice: 'Prezzo finale pagato dal cliente.',
      },
      presets: ['20% su 100 €', '15% su 50 €', '30% su 250 €'],
      results: {
        finalPrice: 'Prezzo Finale',
        savings: 'Risparmio',
        discount: 'Sconto',
        effectiveSavings: 'Risparmio effettivo',
      },
      emptyState: {
        title: 'Inserisci prezzo e sconto per vedere il risparmio.',
        desc: 'Calcola il prezzo finale scontato e il risparmio totale.',
      },
      errors: {
        general: 'Inserisci valori positivi validi.',
        max: 'Lo sconto non può superare il 100%.',
      },
    },
    ja: {
      modes: { standard: '割引率（% OFF）', reverse: '割引後価格から逆算' },
      labels: { originalPrice: '定価・通常価格', discountPercent: '割引率', salePrice: '割引後価格' },
      helpers: {
        originalPrice: '割引前のカタログ価格または通常価格。',
        discountPercent: '割引率（0%〜100%）。',
        salePrice: '顧客が支払う割引後の最終価格。',
      },
      presets: ['¥100 の 20%引', '¥50 の 15%引', '¥250 の 30%引'],
      results: {
        finalPrice: '割引後価格',
        savings: 'お得額（値引き額）',
        discount: '割引率',
        effectiveSavings: '実質割引率',
      },
      emptyState: {
        title: '価格と割引率を入力してお得額を確認します。',
        desc: '割引後価格と顧客の値引き額を即座に計算します。',
      },
      errors: {
        general: '有効な正の数値を入力してください。',
        max: '割引率は100%を超えることはできません。',
      },
    },
    ko: {
      modes: { standard: '할인율 (%)', reverse: '할인가에서 역산' },
      labels: { originalPrice: '정상가격', discountPercent: '할인율', salePrice: '할인가격' },
      helpers: {
        originalPrice: '할인 적용 전 정상 판매가격.',
        discountPercent: '할인 비율 (0% ~ 100%).',
        salePrice: '고객이 실제 지불하는 최종 할인가격.',
      },
      presets: ['₩100의 20% 할인', '₩50의 15% 할인', '₩250의 30% 할인'],
      results: {
        finalPrice: '최종 할인가격',
        savings: '할인 절감액',
        discount: '할인율',
        effectiveSavings: '실질 절감율',
      },
      emptyState: {
        title: '가격과 할인율을 입력하여 절감액을 확인하세요.',
        desc: '할인된 최종 금액과 고객의 총 절약 금액을 계산합니다.',
      },
      errors: {
        general: '유효한 양수를 입력하세요.',
        max: '할인율은 100%를 초과할 수 없습니다.',
      },
    },
  },

  'gross-profit': {
    en: {
      title: 'Gross Profit & Margin',
      labels: { revenue: 'Total Revenue', cogs: 'Cost of Goods Sold (COGS)' },
      helpers: {
        revenue: 'Total sales revenue during the measurement period.',
        cogs: 'Direct production, manufacturing, or wholesale costs.',
      },
      presets: ['$100k / $40k', '$50k / $15k', '$250k / $175k'],
      results: {
        grossProfit: 'Gross Profit',
        grossMargin: 'Gross margin',
        costRatio: 'COGS ratio',
        markup: 'Markup equivalent',
      },
      emptyState: {
        title: 'Enter revenue and COGS to calculate gross profit.',
        desc: 'Clear visibility into direct production margins.',
      },
      errors: { general: 'Please enter valid non-negative numbers.' },
    },
    es: {
      title: 'Ganancia Bruta y Margen',
      labels: { revenue: 'Ingresos Totales', cogs: 'Coste de Ventas (COGS)' },
      helpers: {
        revenue: 'Ingresos totales por ventas en el periodo evaluado.',
        cogs: 'Costes directos de adquisición, fabricación o producción.',
      },
      presets: ['100k € / 40k €', '50k € / 15k €', '250k € / 175k €'],
      results: {
        grossProfit: 'Ganancia Bruta',
        grossMargin: 'Margen bruto',
        costRatio: 'Ratio de coste (COGS)',
        markup: 'Equivalente de recargo',
      },
      emptyState: {
        title: 'Introduzca ingresos y COGS para calcular el beneficio bruto.',
        desc: 'Visibilidad clara de los márgenes directos de producción.',
      },
      errors: { general: 'Por favor, introduzca valores numéricos válidos.' },
    },
    fr: {
      title: 'Marge Brute et Bénéfice',
      labels: { revenue: 'Chiffre d’Affaires Total', cogs: 'Coût des Ventes (COGS)' },
      helpers: {
        revenue: 'Ventes totales enregistrées sur la période.',
        cogs: 'Coûts directs de fabrication, approvisionnement ou production.',
      },
      presets: ['100k € / 40k €', '50k € / 15k €', '250k € / 175k €'],
      results: {
        grossProfit: 'Bénéfice Brut',
        grossMargin: 'Marge brute',
        costRatio: 'Part des coûts (COGS)',
        markup: 'Équivalent taux de marque',
      },
      emptyState: {
        title: 'Indiquez chiffre d’affaires et coûts directs.',
        desc: 'Mesurez la rentabilité directe de votre production.',
      },
      errors: { general: 'Veuillez saisir des chiffres non négatifs valides.' },
    },
    de: {
      title: 'Bruttogewinn & Rohertrag',
      labels: { revenue: 'Gesamtumsatz', cogs: 'Herstellungskosten (COGS)' },
      helpers: {
        revenue: 'Gesamter Verkaufserlös im Messzeitraum.',
        cogs: 'Direkte Beschaffungs- oder Produktionskosten.',
      },
      presets: ['100k € / 40k €', '50k € / 15k €', '250k € / 175k €'],
      results: {
        grossProfit: 'Bruttogewinn',
        grossMargin: 'Bruttomarge',
        costRatio: 'Wareneinsatzquote',
        markup: 'Aufschlagäquivalent',
      },
      emptyState: {
        title: 'Umsatz und COGS eingeben, um Bruttogewinn zu berechnen.',
        desc: 'Genaue Transparenz über direkte Produktionsspannen.',
      },
      errors: { general: 'Bitte geben Sie gültige nicht-negative Zahlen ein.' },
    },
    pt: {
      title: 'Lucro Bruto e Margem',
      labels: { revenue: 'Receita Total', cogs: 'Custo das Mercadorias (CPV/CMV)' },
      helpers: {
        revenue: 'Receita bruta de vendas durante o período.',
        cogs: 'Custos diretos de produção ou aquisição de estoque.',
      },
      presets: ['R$ 100k / R$ 40k', 'R$ 50k / R$ 15k', 'R$ 250k / R$ 175k'],
      results: {
        grossProfit: 'Lucro Bruto',
        grossMargin: 'Margem bruta',
        costRatio: 'Proporção de custos (CPV)',
        markup: 'Markup equivalente',
      },
      emptyState: {
        title: 'Insira receita e CMV para calcular o lucro bruto.',
        desc: 'Visibilidade completa sobre a margem de contribuição direta.',
      },
      errors: { general: 'Por favor, insira valores não negativos válidos.' },
    },
    it: {
      title: 'Utile Lordo e Margine',
      labels: { revenue: 'Fatturato Totale', cogs: 'Costo del Venduto (COGS)' },
      helpers: {
        revenue: 'Ricavi complessivi generati nel periodo.',
        cogs: 'Costi diretti di produzione, acquisto o fornitura.',
      },
      presets: ['100k € / 40k €', '50k € / 15k €', '250k € / 175k €'],
      results: {
        grossProfit: 'Utile Lordo',
        grossMargin: 'Margine lordo',
        costRatio: 'Incidenza costo del venduto',
        markup: 'Equivalente di ricarico',
      },
      emptyState: {
        title: 'Inserisci ricavi e COGS per calcolare l’utile lordo.',
        desc: 'Visibilità immediata sui margini di produzione diretta.',
      },
      errors: { general: 'Inserisci numeri non negativi validi.' },
    },
    ja: {
      title: '売上総利益（粗利益）と粗利益率',
      labels: { revenue: '総売上高', cogs: '売上原価（COGS）' },
      helpers: {
        revenue: '対象期間中の総売上高（売上総額）。',
        cogs: '製品調達、原材料、製造に直接要した原価。',
      },
      presets: ['¥100k / ¥40k', '¥50k / ¥15k', '¥250k / ¥175k'],
      results: {
        grossProfit: '売上総利益（粗利益）',
        grossMargin: '粗利益率（売上総利益率）',
        costRatio: '売上原価率',
        markup: 'マークアップ換算',
      },
      emptyState: {
        title: '売上高と売上原価を入力して粗利益を算出します。',
        desc: '製造や仕入れに対する直接利益の構造を可視化します。',
      },
      errors: { general: '有効な0以上の数値を入力してください。' },
    },
    ko: {
      title: '매출총이익 및 총마진율',
      labels: { revenue: '총매출액', cogs: '매출원가 (COGS)' },
      helpers: {
        revenue: '해당 기간 동안의 총매출 수입.',
        cogs: '생산, 원자재 및 상품 매입에 직접 소요된 원가.',
      },
      presets: ['₩100k / ₩40k', '₩50k / ₩15k', '₩250k / ₩175k'],
      results: {
        grossProfit: '매출총이익',
        grossMargin: '매출총이익률',
        costRatio: '매출원가율',
        markup: '마크업 환산율',
      },
      emptyState: {
        title: '매출액과 원가를 입력하여 매출총이익을 계산하세요.',
        desc: '직접 생산 및 공급 마진을 실시간으로 확인합니다.',
      },
      errors: { general: '유효한 0 이상의 숫자를 입력하세요.' },
    },
  },

  'break-even': {
    en: {
      title: 'Break-Even Point',
      labels: { fixedCosts: 'Total Fixed Costs', pricePerUnit: 'Selling Price per Unit', variableCostPerUnit: 'Variable Cost per Unit' },
      helpers: {
        fixedCosts: 'Rent, overhead, payroll, software, insurance.',
        pricePerUnit: 'Revenue collected from customer for each unit sold.',
        variableCostPerUnit: 'Materials, production, packaging, direct fulfillment.',
      },
      presets: ['$10k / $50 / $30', '$5k / $100 / $40', '$25k / $200 / $120'],
      results: {
        primaryUnits: 'Break-Even Units',
        primaryRevenue: 'Break-Even Revenue',
        unitMargin: 'Unit contribution margin',
        ratio: 'Contribution margin ratio',
      },
      emptyState: {
        title: 'Enter fixed costs, price, and variable cost to calculate break-even.',
        desc: 'Find the exact sales volume needed to avoid operating losses.',
      },
      errors: {
        priceGreater: 'Selling price must be greater than variable cost per unit.',
      },
    },
    es: {
      title: 'Punto de Equilibrio (Umbral)',
      labels: { fixedCosts: 'Costes Fijos Totales', pricePerUnit: 'Precio de Venta Unitario', variableCostPerUnit: 'Coste Variable Unitario' },
      helpers: {
        fixedCosts: 'Alquiler, sueldos fijos, suministros, seguros, software.',
        pricePerUnit: 'Ingreso obtenido por cada unidad facturada.',
        variableCostPerUnit: 'Materiales, producción y logística directa por unidad.',
      },
      presets: ['10k € / 50 € / 30 €', '5k € / 100 € / 40 €', '25k € / 200 € / 120 €'],
      results: {
        primaryUnits: 'Unidades de Equilibrio',
        primaryRevenue: 'Facturación de Equilibrio',
        unitMargin: 'Margen de contribución unitario',
        ratio: 'Ratio de margen de contribución',
      },
      emptyState: {
        title: 'Introduzca costes fijos, precio y coste variable.',
        desc: 'Descubra el volumen exacto para cubrir costes sin incurrir en pérdidas.',
      },
      errors: {
        priceGreater: 'El precio de venta debe ser superior al coste variable unitario.',
      },
    },
    fr: {
      title: 'Seuil de Rentabilité (Point Mort)',
      labels: { fixedCosts: 'Coûts Fixes Totaux', pricePerUnit: 'Prix de Vente Unitaire', variableCostPerUnit: 'Coût Variable Unitaire' },
      helpers: {
        fixedCosts: 'Loyer, salaires fixes, assurances, abonnements logiciels.',
        pricePerUnit: 'Recette perçue pour chaque unité vendue.',
        variableCostPerUnit: 'Matières, fabrication et livraison par unité.',
      },
      presets: ['10k € / 50 € / 30 €', '5k € / 100 € / 40 €', '25k € / 200 € / 120 €'],
      results: {
        primaryUnits: 'Volume d’Équilibre (Unités)',
        primaryRevenue: 'Chiffre d’Affaires d’Équilibre',
        unitMargin: 'Marge sur coût variable unitaire',
        ratio: 'Taux de marge sur coût variable',
      },
      emptyState: {
        title: 'Indiquez charges fixes, prix et coût unitaire variable.',
        desc: 'Trouvez le volume exact pour absorber l’ensemble des charges.',
      },
      errors: {
        priceGreater: 'Le prix de vente unitaire doit être supérieur au coût variable.',
      },
    },
    de: {
      title: 'Gewinnschwelle (Break-Even)',
      labels: { fixedCosts: 'Fixkosten Gesamt', pricePerUnit: 'Verkaufspreis pro Stück', variableCostPerUnit: 'Variable Stückkosten' },
      helpers: {
        fixedCosts: 'Miete, Gehälter, Software, Versicherungen, Gemeinkosten.',
        pricePerUnit: 'Erlös pro verkaufter Einheit.',
        variableCostPerUnit: 'Material, direkte Fertigung und Versand je Einheit.',
      },
      presets: ['10k € / 50 € / 30 €', '5k € / 100 € / 40 €', '25k € / 200 € / 120 €'],
      results: {
        primaryUnits: 'Break-Even Stückzahl',
        primaryRevenue: 'Break-Even Umsatz',
        unitMargin: 'Deckungsbeitrag pro Stück',
        ratio: 'Deckungsbeitragsquote',
      },
      emptyState: {
        title: 'Fixkosten, Preis und variable Kosten eingeben.',
        desc: 'Ermitteln Sie die Absatzmenge, ab der Sie rentabel wirtschaften.',
      },
      errors: {
        priceGreater: 'Der Verkaufspreis muss höher als die variablen Stückkosten sein.',
      },
    },
    pt: {
      title: 'Ponto de Equilíbrio (Break-Even)',
      labels: { fixedCosts: 'Custos Fixos Totais', pricePerUnit: 'Preço de Venda Unitário', variableCostPerUnit: 'Custo Variável Unitário' },
      helpers: {
        fixedCosts: 'Aluguel, folha fixa, seguros, licenças de software.',
        pricePerUnit: 'Valor recebido por cada unidade vendida.',
        variableCostPerUnit: 'Matéria-prima, produção direta e comissões unitárias.',
      },
      presets: ['R$ 10k / R$ 50 / R$ 30', 'R$ 5k / R$ 100 / R$ 40', 'R$ 25k / R$ 200 / R$ 120'],
      results: {
        primaryUnits: 'Unidades para o Ponto de Equilíbrio',
        primaryRevenue: 'Receita de Equilíbrio',
        unitMargin: 'Margem de contribuição unitária',
        ratio: 'Índice de margem de contribuição',
      },
      emptyState: {
        title: 'Insira custos fixos, preço e custo variável.',
        desc: 'Descubra a quantidade exata de vendas para zerar os custos.',
      },
      errors: {
        priceGreater: 'O preço de venda deve ser maior que o custo variável unitário.',
      },
    },
    it: {
      title: 'Punto di Pareggio (Break-Even)',
      labels: { fixedCosts: 'Costi Fissi Totali', pricePerUnit: 'Prezzo di Vendita Unitario', variableCostPerUnit: 'Costo Variabile Unitario' },
      helpers: {
        fixedCosts: 'Affitto, stipendi fissi, software, utenze, assicurazioni.',
        pricePerUnit: 'Importo incassato per ogni singola unità venduta.',
        variableCostPerUnit: 'Materiali, produzione e imballaggio per unità.',
      },
      presets: ['10k € / 50 € / 30 €', '5k € / 100 € / 40 €', '25k € / 200 € / 120 €'],
      results: {
        primaryUnits: 'Unità di Pareggio',
        primaryRevenue: 'Fatturato di Pareggio',
        unitMargin: 'Margine di contribuzione unitario',
        ratio: 'Rapporto di contribuzione',
      },
      emptyState: {
        title: 'Inserisci costi fissi, prezzo e costi variabili.',
        desc: 'Trova il volume necessario per coprire tutti i costi operativi.',
      },
      errors: {
        priceGreater: 'Il prezzo di vendita deve essere superiore al costo variabile unitario.',
      },
    },
    ja: {
      title: '損益分岐点（ブレークイーブン）',
      labels: { fixedCosts: '固定費総額', pricePerUnit: '単位あたり販売価格', variableCostPerUnit: '単位あたり変動費' },
      helpers: {
        fixedCosts: '家賃、人件費、固定通信費、保険料など。',
        pricePerUnit: '1単位あたりの顧客請求金額。',
        variableCostPerUnit: '原材料、仕入れ、梱包、配送など1単位あたりの直接費用。',
      },
      presets: ['¥10k / ¥50 / ¥30', '¥5k / ¥100 / ¥40', '¥25k / ¥200 / ¥120'],
      results: {
        primaryUnits: '損益分岐点販売数量',
        primaryRevenue: '損益分岐点売上高',
        unitMargin: '単位限界利益',
        ratio: '限界利益率',
      },
      emptyState: {
        title: '固定費、価格、変動費を入力して損益分岐点を計算します。',
        desc: '損失を回避して黒字化を達成するために必要な販売規模を算出します。',
      },
      errors: {
        priceGreater: '販売価格は単位あたり変動費より高くなければなりません。',
      },
    },
    ko: {
      title: '손익분기점 (Break-Even Point)',
      labels: { fixedCosts: '총 고정비용', pricePerUnit: '단위당 판매가격', variableCostPerUnit: '단위당 변동비용' },
      helpers: {
        fixedCosts: '임대료, 기본급여, 소프트웨어, 보험료 등 고정 지출.',
        pricePerUnit: '판매 1단위당 고객으로부터 수령하는 금액.',
        variableCostPerUnit: '원자재, 생산비, 포장비, 배송비 등 직접 변동비.',
      },
      presets: ['₩10k / ₩50 / ₩30', '₩5k / ₩100 / ₩40', '₩25k / ₩200 / ₩120'],
      results: {
        primaryUnits: '손익분기 판매량 (단위)',
        primaryRevenue: '손익분기 매출액',
        unitMargin: '단위당 공헌이익',
        ratio: '공헌이익률',
      },
      emptyState: {
        title: '고정비, 판매가격, 변동비를 입력하여 손익분기점을 계산하세요.',
        desc: '손실을 피하고 흑자 전환에 필요한 정확한 판매 규모를 확인합니다.',
      },
      errors: {
        priceGreater: '판매가격은 단위당 변동비용보다 커야 합니다.',
      },
    },
  },

  'target-profit': {
    en: {
      title: 'Target Profit Planning',
      labels: { fixedCosts: 'Total Fixed Costs', targetProfit: 'Desired Target Profit', pricePerUnit: 'Selling Price', variableCostPerUnit: 'Variable Cost per Unit' },
      helpers: {
        fixedCosts: 'Base monthly/annual overhead obligations.',
        targetProfit: 'Target operating income before income taxes.',
        pricePerUnit: 'Per unit.',
        variableCostPerUnit: 'Per unit.',
      },
      presets: ['$10k / $5k profit', '$20k / $10k profit', '$50k / $25k profit'],
      results: {
        primaryUnits: 'Required Units',
        primaryRevenue: 'Required Revenue',
        unitMargin: 'Unit contribution margin',
        totalBurden: 'Fixed + Target profit',
      },
      emptyState: {
        title: 'Enter costs, price, and profit goal.',
        desc: 'Calculate the volume needed to hit your target profit.',
      },
      errors: { priceGreater: 'Selling price must be greater than variable cost per unit.' },
    },
    es: {
      title: 'Planificación de Beneficio Objetivo',
      labels: { fixedCosts: 'Costes Fijos Totales', targetProfit: 'Beneficio Objetivo Deseado', pricePerUnit: 'Precio de Venta', variableCostPerUnit: 'Coste Variable por Unidad' },
      helpers: {
        fixedCosts: 'Gastos fijos obligatorios del periodo.',
        targetProfit: 'Beneficio operativo neto deseado antes de impuestos.',
        pricePerUnit: 'Por unidad.',
        variableCostPerUnit: 'Por unidad.',
      },
      presets: ['10k € / 5k € beneficio', '20k € / 10k € beneficio', '50k € / 25k € beneficio'],
      results: {
        primaryUnits: 'Unidades Requeridas',
        primaryRevenue: 'Facturación Requerida',
        unitMargin: 'Margen de contribución unitario',
        totalBurden: 'Fijos + Beneficio objetivo',
      },
      emptyState: {
        title: 'Introduzca costes, precio y objetivo de beneficio.',
        desc: 'Calcule las ventas necesarias para alcanzar su meta.',
      },
      errors: { priceGreater: 'El precio de venta debe ser superior al coste variable unitario.' },
    },
    fr: {
      title: 'Planification du Bénéfice Cible',
      labels: { fixedCosts: 'Coûts Fixes Totaux', targetProfit: 'Bénéfice Cible Souhaité', pricePerUnit: 'Prix de Vente', variableCostPerUnit: 'Coût Variable Unitaire' },
      helpers: {
        fixedCosts: 'Charges fixes globales de la période.',
        targetProfit: 'Résultat d’exploitation visé avant impôts.',
        pricePerUnit: 'Par unité.',
        variableCostPerUnit: 'Par unité.',
      },
      presets: ['10k € / 5k € profit', '20k € / 10k € profit', '50k € / 25k € profit'],
      results: {
        primaryUnits: 'Unités Requises',
        primaryRevenue: 'Chiffre d’Affaires Requis',
        unitMargin: 'Marge sur coût variable unitaire',
        totalBurden: 'Fixes + Bénéfice cible',
      },
      emptyState: {
        title: 'Indiquez charges, prix et objectif de résultat.',
        desc: 'Déterminez le volume nécessaire pour atteindre votre bénéfice.',
      },
      errors: { priceGreater: 'Le prix de vente doit être supérieur au coût variable.' },
    },
    de: {
      title: 'Zielgewinn-Planung',
      labels: { fixedCosts: 'Fixkosten Gesamt', targetProfit: 'Gewünschter Zielgewinn', pricePerUnit: 'Verkaufspreis', variableCostPerUnit: 'Variable Stückkosten' },
      helpers: {
        fixedCosts: 'Betriebliche feste Gemeinkosten.',
        targetProfit: 'Angestrebtes Betriebsergebnis vor Ertragsteuern.',
        pricePerUnit: 'Pro Einheit.',
        variableCostPerUnit: 'Pro Einheit.',
      },
      presets: ['10k € / 5k € Gewinn', '20k € / 10k € Gewinn', '50k € / 25k € Gewinn'],
      results: {
        primaryUnits: 'Erforderliche Stückzahl',
        primaryRevenue: 'Erforderlicher Umsatz',
        unitMargin: 'Deckungsbeitrag pro Stück',
        totalBurden: 'Fixkosten + Zielgewinn',
      },
      emptyState: {
        title: 'Kosten, Preis und Gewinnziel eingeben.',
        desc: 'Berechnen Sie den nötigen Absatz für Ihren Wunschgewinn.',
      },
      errors: { priceGreater: 'Der Verkaufspreis muss höher als die variablen Stückkosten sein.' },
    },
    pt: {
      title: 'Planejamento de Lucro Alvo',
      labels: { fixedCosts: 'Custos Fixos Totais', targetProfit: 'Lucro Alvo Desejado', pricePerUnit: 'Preço de Venda', variableCostPerUnit: 'Custo Variável por Unidade' },
      helpers: {
        fixedCosts: 'Obrigações fixas da operação no período.',
        targetProfit: 'Lucro operacional pretendido antes dos impostos.',
        pricePerUnit: 'Por unidade.',
        variableCostPerUnit: 'Por unidade.',
      },
      presets: ['R$ 10k / R$ 5k lucro', 'R$ 20k / R$ 10k lucro', 'R$ 50k / R$ 25k lucro'],
      results: {
        primaryUnits: 'Unidades Necessárias',
        primaryRevenue: 'Receita Necessária',
        unitMargin: 'Margem de contribuição unitária',
        totalBurden: 'Fixos + Lucro pretendido',
      },
      emptyState: {
        title: 'Insira custos, preço e meta de lucro.',
        desc: 'Descubra a quantidade de vendas necessária para bater a meta.',
      },
      errors: { priceGreater: 'O preço de venda deve ser maior que o custo variável unitário.' },
    },
    it: {
      title: 'Pianificazione dell’Utile Obiettivo',
      labels: { fixedCosts: 'Costi Fissi Totali', targetProfit: 'Utile Obiettivo Desiderato', pricePerUnit: 'Prezzo di Vendita', variableCostPerUnit: 'Costo Variabile per Unità' },
      helpers: {
        fixedCosts: 'Spese fisse e canoni operativi del periodo.',
        targetProfit: 'Risultato operativo lordo desiderato.',
        pricePerUnit: 'Per unità.',
        variableCostPerUnit: 'Per unità.',
      },
      presets: ['10k € / 5k € utile', '20k € / 10k € utile', '50k € / 25k € utile'],
      results: {
        primaryUnits: 'Unità Richieste',
        primaryRevenue: 'Fatturato Richiesto',
        unitMargin: 'Margine di contribuzione unitario',
        totalBurden: 'Fissi + Utile obiettivo',
      },
      emptyState: {
        title: 'Inserisci costi, prezzo e traguardo di profitto.',
        desc: 'Calcola le vendite necessarie per raggiungere il target.',
      },
      errors: { priceGreater: 'Il prezzo di vendita deve essere superiore al costo variabile unitario.' },
    },
    ja: {
      title: '目標利益計画（ターゲットプロフィット）',
      labels: { fixedCosts: '固定費総額', targetProfit: '目標利益額', pricePerUnit: '販売価格', variableCostPerUnit: '単位あたり変動費' },
      helpers: {
        fixedCosts: '月次または年次の固定的な運営費用。',
        targetProfit: '税引前の希望営業利益目標。',
        pricePerUnit: '1単位あたり。',
        variableCostPerUnit: '1単位あたり。',
      },
      presets: ['¥10k / ¥5k 利益', '¥20k / ¥10k 利益', '¥50k / ¥25k 利益'],
      results: {
        primaryUnits: '必要販売数量',
        primaryRevenue: '必要売上高',
        unitMargin: '単位限界利益',
        totalBurden: '固定費 ＋ 目標利益',
      },
      emptyState: {
        title: '固定費、価格、目標利益を入力してください。',
        desc: '目標利益を達成するために必要な販売数量を計算します。',
      },
      errors: { priceGreater: '販売価格は単位あたり変動費より高くなければなりません。' },
    },
    ko: {
      title: '목표 이익 달성 계획',
      labels: { fixedCosts: '총 고정비용', targetProfit: '희망 목표이익', pricePerUnit: '판매가격', variableCostPerUnit: '단위당 변동비용' },
      helpers: {
        fixedCosts: '해당 기간의 사업 고정 운영비용.',
        targetProfit: '법인세 차감 전 희망 영업이익.',
        pricePerUnit: '1단위당.',
        variableCostPerUnit: '1단위당.',
      },
      presets: ['₩10k / ₩5k 이익', '₩20k / ₩10k 이익', '₩50k / ₩25k 이익'],
      results: {
        primaryUnits: '필요 판매수량 (단위)',
        primaryRevenue: '필요 매출액',
        unitMargin: '단위당 공헌이익',
        totalBurden: '고정비 + 목표이익 합계',
      },
      emptyState: {
        title: '비용, 가격, 목표 이익을 입력하세요.',
        desc: '목표 이익을 달성하는 데 필요한 판매 수량을 계산합니다.',
      },
      errors: { priceGreater: '판매가격은 단위당 변동비용보다 커야 합니다.' },
    },
  },

  revenue: {
    en: {
      title: 'Top-Line Revenue',
      labels: { unitsSold: 'Units Sold', pricePerUnit: 'Average Price per Unit' },
      helpers: {
        unitsSold: 'Total units, subscriptions, or orders delivered.',
        pricePerUnit: 'Realized average selling price per unit.',
      },
      presets: ['1,200 @ $45', '500 @ $120', '3,000 @ $29'],
      results: { totalRevenue: 'Total Revenue', averagePrice: 'Average price', unitsSold: 'Units sold' },
      emptyState: {
        title: 'Enter unit sales volume and average price.',
        desc: 'Calculate top-line turnover instantly.',
      },
      errors: { general: 'Please enter valid non-negative numbers.' },
    },
    es: {
      title: 'Ingresos Totales (Ventas)',
      labels: { unitsSold: 'Unidades Vendidas', pricePerUnit: 'Precio Medio por Unidad' },
      helpers: {
        unitsSold: 'Total de artículos, pedidos o contratos completados.',
        pricePerUnit: 'Precio medio neto facturado por unidad.',
      },
      presets: ['1.200 @ 45 €', '500 @ 120 €', '3.000 @ 29 €'],
      results: { totalRevenue: 'Ingresos Totales', averagePrice: 'Precio medio', unitsSold: 'Unidades vendidas' },
      emptyState: {
        title: 'Introduzca unidades vendidas y precio medio.',
        desc: 'Calcule al instante la facturación bruta total.',
      },
      errors: { general: 'Por favor, introduzca cifras válidas.' },
    },
    fr: {
      title: 'Chiffre d’Affaires Total',
      labels: { unitsSold: 'Unités Vendues', pricePerUnit: 'Prix Moyen par Unité' },
      helpers: {
        unitsSold: 'Nombre de produits, abonnements ou commandes livrés.',
        pricePerUnit: 'Prix de vente moyen réalisé par unité.',
      },
      presets: ['1 200 @ 45 €', '500 @ 120 €', '3 000 @ 29 €'],
      results: { totalRevenue: 'Chiffre d’Affaires Total', averagePrice: 'Prix moyen', unitsSold: 'Unités vendues' },
      emptyState: {
        title: 'Indiquez volumes vendus et prix moyen.',
        desc: 'Obtenez immédiatement le chiffre d’affaires total.',
      },
      errors: { general: 'Veuillez saisir des chiffres valides.' },
    },
    de: {
      title: 'Gesamtumsatz (Top-Line)',
      labels: { unitsSold: 'Verkaufte Einheiten', pricePerUnit: 'Durchschnittspreis pro Stück' },
      helpers: {
        unitsSold: 'Verkaufte Stückzahlen, Abonnements oder Aufträge.',
        pricePerUnit: 'Erzielter Durchschnittsverkaufspreis je Einheit.',
      },
      presets: ['1.200 @ 45 €', '500 @ 120 €', '3.000 @ 29 €'],
      results: { totalRevenue: 'Gesamtumsatz', averagePrice: 'Durchschnittspreis', unitsSold: 'Verkaufte Einheiten' },
      emptyState: {
        title: 'Absatzmenge und Durchschnittspreis eingeben.',
        desc: 'Berechnen Sie sofort den resultierenden Gesamtumsatz.',
      },
      errors: { general: 'Bitte geben Sie gültige Werte ein.' },
    },
    pt: {
      title: 'Receita Bruta Total',
      labels: { unitsSold: 'Unidades Vendidas', pricePerUnit: 'Preço Médio por Unidade' },
      helpers: {
        unitsSold: 'Volume total de produtos, pedidos ou assinaturas faturadas.',
        pricePerUnit: 'Preço médio real cobrado por unidade.',
      },
      presets: ['1.200 @ R$ 45', '500 @ R$ 120', '3.000 @ R$ 29'],
      results: { totalRevenue: 'Receita Total', averagePrice: 'Preço médio', unitsSold: 'Unidades vendidas' },
      emptyState: {
        title: 'Insira unidades vendidas e preço médio.',
        desc: 'Calcule a receita bruta total de vendas.',
      },
      errors: { general: 'Por favor, insira números válidos.' },
    },
    it: {
      title: 'Fatturato Complessivo',
      labels: { unitsSold: 'Unità Vendute', pricePerUnit: 'Prezzo Medio per Unità' },
      helpers: {
        unitsSold: 'Numero totale di pezzi, contratti o ordini evasi.',
        pricePerUnit: 'Prezzo medio netto realizzato per unità.',
      },
      presets: ['1.200 @ 45 €', '500 @ 120 €', '3.000 @ 29 €'],
      results: { totalRevenue: 'Fatturato Totale', averagePrice: 'Prezzo medio', unitsSold: 'Unità vendute' },
      emptyState: {
        title: 'Inserisci volume di vendita e prezzo medio.',
        desc: 'Calcola immediatamente il fatturato complessivo.',
      },
      errors: { general: 'Inserisci valori positivi validi.' },
    },
    ja: {
      title: '総売上高（売上総額）',
      labels: { unitsSold: '販売数量', pricePerUnit: '平均販売単価' },
      helpers: {
        unitsSold: '納品された商品数、契約数、または注文数。',
        pricePerUnit: '1単位あたりの平均実績販売単価。',
      },
      presets: ['1,200個 @ ¥45', '500個 @ ¥120', '3,000個 @ ¥29'],
      results: { totalRevenue: '総売上高', averagePrice: '平均単価', unitsSold: '販売数量' },
      emptyState: {
        title: '販売数量と平均単価を入力してください。',
        desc: '即座に総売上高を算出します。',
      },
      errors: { general: '有効な0以上の数値を入力してください。' },
    },
    ko: {
      title: '총매출액 (매출 총계)',
      labels: { unitsSold: '판매 수량', pricePerUnit: '평균 판매단가' },
      helpers: {
        unitsSold: '판매된 제품, 구독 또는 총 주문 수량.',
        pricePerUnit: '단위당 실현된 평균 판매 단가.',
      },
      presets: ['1,200개 @ ₩45', '500개 @ ₩120', '3,000개 @ ₩29'],
      results: { totalRevenue: '총매출액', averagePrice: '평균 단가', unitsSold: '판매 수량' },
      emptyState: {
        title: '판매 수량과 평균 단가를 입력하세요.',
        desc: '총매출 규모를 실시간으로 계산합니다.',
      },
      errors: { general: '유효한 0 이상의 숫자를 입력하세요.' },
    },
  },

  commission: {
    en: {
      title: 'Sales Commission',
      labels: { saleAmount: 'Total Sales Volume', commissionRate: 'Commission Rate', baseSalary: 'Base Salary (Optional)' },
      helpers: {
        saleAmount: 'Gross value of closed contracts or sales orders.',
        commissionRate: 'Agreed percentage payout rate.',
        baseSalary: 'Guaranteed monthly or per-period salary baseline.',
      },
      presets: ['$20k @ 7.5%', '$50k @ 10% + $2.5k', '$100k @ 5%'],
      results: { totalEarnings: 'Total Earnings', commission: 'Commission earned', baseSalary: 'Base salary', effectiveRate: 'Effective payout rate' },
      emptyState: {
        title: 'Enter sales volume and commission rate.',
        desc: 'Calculate sales commission and total compensation.',
      },
      errors: { general: 'Please enter valid non-negative numbers.' },
    },
    es: {
      title: 'Comisión de Ventas',
      labels: { saleAmount: 'Volumen de Ventas Total', commissionRate: 'Tipo de Comisión', baseSalary: 'Salario Base (Opcional)' },
      helpers: {
        saleAmount: 'Importe bruto de contratos u operaciones cerradas.',
        commissionRate: 'Porcentaje acordado sobre las ventas.',
        baseSalary: 'Sueldo base fijo garantizado en el periodo.',
      },
      presets: ['20k € @ 7,5%', '50k € @ 10% + 2,5k €', '100k € @ 5%'],
      results: { totalEarnings: 'Remuneración Total', commission: 'Comisión generada', baseSalary: 'Salario base', effectiveRate: 'Tipo efectivo total' },
      emptyState: {
        title: 'Introduzca ventas y porcentaje de comisión.',
        desc: 'Calcule la comisión comercial y la compensación global.',
      },
      errors: { general: 'Por favor, introduzca valores válidos.' },
    },
    fr: {
      title: 'Commissions de Vente',
      labels: { saleAmount: 'Volume de Vente Total', commissionRate: 'Taux de Commission', baseSalary: 'Salaire Fixe de Base (Optionnel)' },
      helpers: {
        saleAmount: 'Montant brut des contrats ou ventes finalisés.',
        commissionRate: 'Pourcentage de rémunération convenu.',
        baseSalary: 'Rémunération fixe garantie pour la période.',
      },
      presets: ['20k € @ 7,5%', '50k € @ 10% + 2,5k €', '100k € @ 5%'],
      results: { totalEarnings: 'Rémunération Totale', commission: 'Commission acquise', baseSalary: 'Salaire fixe', effectiveRate: 'Taux de rémunération effectif' },
      emptyState: {
        title: 'Indiquez ventes et taux de commission.',
        desc: 'Calculez commissions et rémunération globale.',
      },
      errors: { general: 'Veuillez saisir des chiffres valides.' },
    },
    de: {
      title: 'Vertriebsprovision',
      labels: { saleAmount: 'Gesamtumsatz / Verkaufsvolumen', commissionRate: 'Provisionssatz', baseSalary: 'Grundgehalt (Optional)' },
      helpers: {
        saleAmount: 'Bruttowert der abgeschlossenen Aufträge.',
        commissionRate: 'Vereinbarter prozentualer Provisionssatz.',
        baseSalary: 'Garantiertes fixes Grundgehalt im Abrechnungszeitraum.',
      },
      presets: ['20k € @ 7,5%', '50k € @ 10% + 2,5k €', '100k € @ 5%'],
      results: { totalEarnings: 'Gesamteinkommen', commission: 'Verdiente Provision', baseSalary: 'Grundgehalt', effectiveRate: 'Effektiver Vergütungssatz' },
      emptyState: {
        title: 'Umsatz und Provisionssatz eingeben.',
        desc: 'Berechnen Sie Provision und Gesamtvergütung.',
      },
      errors: { general: 'Bitte geben Sie gültige Beträge ein.' },
    },
    pt: {
      title: 'Comissão de Vendas',
      labels: { saleAmount: 'Volume Total de Vendas', commissionRate: 'Taxa de Comissão', baseSalary: 'Salário Base (Opcional)' },
      helpers: {
        saleAmount: 'Valor bruto dos pedidos ou contratos fechados.',
        commissionRate: 'Percentual acordado de comissão.',
        baseSalary: 'Remuneração fixa garantida do período.',
      },
      presets: ['R$ 20k @ 7,5%', 'R$ 50k @ 10% + R$ 2,5k', 'R$ 100k @ 5%'],
      results: { totalEarnings: 'Remuneração Total', commission: 'Comissão ganha', baseSalary: 'Salário fixo', effectiveRate: 'Taxa efetiva de remuneração' },
      emptyState: {
        title: 'Insira vendas e percentual de comissão.',
        desc: 'Calcule a comissão de vendas e ganhos totais.',
      },
      errors: { general: 'Por favor, insira valores válidos.' },
    },
    it: {
      title: 'Provvigioni di Vendita',
      labels: { saleAmount: 'Volume di Vendita Totale', commissionRate: 'Percentuale Provvigionale', baseSalary: 'Stipendio Base (Opzionale)' },
      helpers: {
        saleAmount: 'Valore complessivo dei contratti o vendite chiuse.',
        commissionRate: 'Percentuale provvigionale concordata.',
        baseSalary: 'Compenso fisso garantito del periodo.',
      },
      presets: ['20k € @ 7,5%', '50k € @ 10% + 2,5k €', '100k € @ 5%'],
      results: { totalEarnings: 'Compenso Totale', commission: 'Provvigione maturata', baseSalary: 'Stipendio fisso', effectiveRate: 'Percentuale effettiva di compenso' },
      emptyState: {
        title: 'Inserisci volume vendite e percentuale provvigioni.',
        desc: 'Calcola provvigioni e retribuzione complessiva.',
      },
      errors: { general: 'Inserisci numeri non negativi validi.' },
    },
    ja: {
      title: '営業歩合給・コミッション計算',
      labels: { saleAmount: '総売上実績・成約額', commissionRate: 'コミッション率', baseSalary: '基本給（任意）' },
      helpers: {
        saleAmount: '成約した契約または注文の総取引金額。',
        commissionRate: '取り決めた売上歩合率（%）。',
        baseSalary: '月次または期間の固定基本給。',
      },
      presets: ['¥20k @ 7.5%', '¥50k @ 10% + ¥2.5k', '¥100k @ 5%'],
      results: { totalEarnings: '総支給額（報酬合計）', commission: '歩合報酬額', baseSalary: '基本給', effectiveRate: '実質報酬率' },
      emptyState: {
        title: '売上実績とコミッション率を入力してください。',
        desc: '歩合給および総支給報酬を算出します。',
      },
      errors: { general: '有効な0以上の数値を入力してください。' },
    },
    ko: {
      title: '영업 수수료 및 인센티브',
      labels: { saleAmount: '총 매출 달성액', commissionRate: '수수료율 (인센티브 비율)', baseSalary: '기본급 (선택사항)' },
      helpers: {
        saleAmount: '계약 또는 성사된 총 매출 거래 규모.',
        commissionRate: '약정된 판매 인센티브 지급 비율.',
        baseSalary: '해당 기간의 보장된 고정 기본급여.',
      },
      presets: ['₩20k @ 7.5%', '₩50k @ 10% + ₩2.5k', '₩100k @ 5%'],
      results: { totalEarnings: '총 지급액', commission: '수수료 수령액', baseSalary: '기본급', effectiveRate: '실효 지급률' },
      emptyState: {
        title: '매출액과 수수료율을 입력하세요.',
        desc: '영업 수수료와 총 수령 금액을 실시간 계산합니다.',
      },
      errors: { general: '유효한 0 이상의 숫자를 입력하세요.' },
    },
  },

  roi: {
    en: {
      title: 'Return on Investment',
      labels: { initialInvestment: 'Initial Investment', finalReturn: 'Total Return / Revenue' },
      helpers: {
        initialInvestment: 'Total capital committed to project, campaign, or asset.',
        finalReturn: 'Gross cash or revenue generated from the investment.',
      },
      presets: ['$5k → $8.5k', '$10k → $25k', '$20k → $18k'],
      results: { roi: 'ROI (%)', netProfit: 'Net profit / gain', totalReturn: 'Total return', multiple: 'Multiple of cost' },
      emptyState: {
        title: 'Enter initial capital and return.',
        desc: 'Evaluate capital efficiency and net profit.',
      },
      errors: { general: 'Initial investment must be greater than 0.' },
    },
    es: {
      title: 'Retorno de la Inversión (ROI)',
      labels: { initialInvestment: 'Inversión Inicial', finalReturn: 'Retorno Total / Ingresos' },
      helpers: {
        initialInvestment: 'Capital total aportado al proyecto, campaña o activo.',
        finalReturn: 'Ingresos brutos generados por la inversión.',
      },
      presets: ['5k € → 8,5k €', '10k € → 25k €', '20k € → 18k €'],
      results: { roi: 'ROI (%)', netProfit: 'Beneficio neto', totalReturn: 'Retorno total', multiple: 'Múltiplo sobre coste' },
      emptyState: {
        title: 'Introduzca inversión y retorno.',
        desc: 'Evalúe la rentabilidad del capital y la ganancia neta.',
      },
      errors: { general: 'La inversión inicial debe ser superior a 0.' },
    },
    fr: {
      title: 'Retour sur Investissement (ROI)',
      labels: { initialInvestment: 'Investissement Initial', finalReturn: 'Retour Total / Recettes' },
      helpers: {
        initialInvestment: 'Capital engagé dans le projet ou la campagne.',
        finalReturn: 'Recettes brutes produites par l’investissement.',
      },
      presets: ['5k € → 8,5k €', '10k € → 25k €', '20k € → 18k €'],
      results: { roi: 'ROI (%)', netProfit: 'Gain net', totalReturn: 'Retour total', multiple: 'Multiple du capital' },
      emptyState: {
        title: 'Indiquez investissement et retour.',
        desc: 'Évaluez l’efficacité du capital investi.',
      },
      errors: { general: 'L’investissement initial doit être supérieur à 0.' },
    },
    de: {
      title: 'Kapitalrendite (ROI)',
      labels: { initialInvestment: 'Anfangsinvestition', finalReturn: 'Gesamtrückfluss / Ertrag' },
      helpers: {
        initialInvestment: 'Gesamtes im Vorhaben gebundenes Kapital.',
        finalReturn: 'Bruttozufluss oder Erlös aus der Investition.',
      },
      presets: ['5k € → 8,5k €', '10k € → 25k €', '20k € → 18k €'],
      results: { roi: 'ROI (%)', netProfit: 'Nettogewinn', totalReturn: 'Gesamtertrag', multiple: 'Kostenvielfaches' },
      emptyState: {
        title: 'Kapital und Ertrag eingeben.',
        desc: 'Ermitteln Sie Rendite und Nettogewinn.',
      },
      errors: { general: 'Die Anfangsinvestition muss größer als 0 sein.' },
    },
    pt: {
      title: 'Retorno sobre Investimento (ROI)',
      labels: { initialInvestment: 'Investimento Inicial', finalReturn: 'Retorno Total / Receita' },
      helpers: {
        initialInvestment: 'Capital total alocado ao projeto ou campanha.',
        finalReturn: 'Receita bruta gerada a partir do investimento.',
      },
      presets: ['R$ 5k → R$ 8,5k', 'R$ 10k → R$ 25k', 'R$ 20k → R$ 18k'],
      results: { roi: 'ROI (%)', netProfit: 'Lucro líquido', totalReturn: 'Retorno total', multiple: 'Múltiplo do custo' },
      emptyState: {
        title: 'Insira investimento inicial e retorno.',
        desc: 'Avalie a eficiência do capital e o lucro líquido.',
      },
      errors: { general: 'O investimento inicial deve ser maior que 0.' },
    },
    it: {
      title: 'Ritorno sull’Investimento (ROI)',
      labels: { initialInvestment: 'Investimento Iniziale', finalReturn: 'Ritorno Totale / Entrate' },
      helpers: {
        initialInvestment: 'Capitale impiegato nel progetto o nell’iniziativa.',
        finalReturn: 'Entrate lorde generate dall’investimento.',
      },
      presets: ['5k € → 8,5k €', '10k € → 25k €', '20k € → 18k €'],
      results: { roi: 'ROI (%)', netProfit: 'Profitto netto', totalReturn: 'Ritorno totale', multiple: 'Multiplo del costo' },
      emptyState: {
        title: 'Inserisci capitale iniziale e ritorno.',
        desc: 'Valuta l’efficienza e il rendimento del capitale.',
      },
      errors: { general: 'L’investimento iniziale deve essere superiore a 0.' },
    },
    ja: {
      title: '投資収益率（ROI・投資利益率）',
      labels: { initialInvestment: '初期投資額', finalReturn: '総回収額・収益' },
      helpers: {
        initialInvestment: 'プロジェクトや施策に投入した総資本・費用。',
        finalReturn: '投資から生み出された総収益額。',
      },
      presets: ['¥5k → ¥8.5k', '¥10k → ¥25k', '¥20k → ¥18k'],
      results: { roi: 'ROI（投資利益率）', netProfit: '純利益', totalReturn: '総回収額', multiple: '回収倍率' },
      emptyState: {
        title: '初期投資額と回収額を入力してください。',
        desc: '投資効率と純利益を即座に評価します。',
      },
      errors: { general: '初期投資額は0より大きくなければなりません。' },
    },
    ko: {
      title: '투자 수익률 (ROI)',
      labels: { initialInvestment: '초기 투자비용', finalReturn: '총 회수액 / 수익' },
      helpers: {
        initialInvestment: '프로젝트 또는 캠페인에 투입된 총 자본.',
        finalReturn: '투자를 통해 실현된 총 회수액.',
      },
      presets: ['₩5k → ₩8.5k', '₩10k → ₩25k', '₩20k → ₩18k'],
      results: { roi: 'ROI (투자수익률)', netProfit: '순이익', totalReturn: '총 회수액', multiple: '투자금 대비 배수' },
      emptyState: {
        title: '초기 투자액과 회수액을 입력하세요.',
        desc: '자본 투입 효율과 순이익률을 확인합니다.',
      },
      errors: { general: '초기 투자액은 0보다 커야 합니다.' },
    },
  },

  roas: {
    en: {
      title: 'Return on Ad Spend',
      labels: { revenue: 'Attributed Ad Revenue', adSpend: 'Total Ad Spend' },
      helpers: {
        revenue: 'Total customer sales tracked directly to ad campaigns.',
        adSpend: 'Media cost paid across advertising platforms.',
      },
      presets: ['$12k / $3k (4x)', '$25k / $5k (5x)', '$5k / $2.5k (2x)'],
      results: { roas: 'ROAS (Multiplier)', percent: 'ROAS (%)', netProfit: 'Net revenue over ad spend', costShare: 'Ad spend share' },
      emptyState: {
        title: 'Enter revenue and ad spend to calculate ROAS.',
        desc: 'Measure campaign efficiency and revenue yield per dollar spent.',
      },
      errors: { general: 'Ad spend must be greater than 0.' },
    },
    es: {
      title: 'Retorno del Gasto Publicitario (ROAS)',
      labels: { revenue: 'Ingresos Atribuidos a la Publicidad', adSpend: 'Gasto Publicitario Total' },
      helpers: {
        revenue: 'Ventas trazadas directamente a las campañas de pago.',
        adSpend: 'Inversión en medios en las plataformas publicitarias.',
      },
      presets: ['12k € / 3k € (4x)', '25k € / 5k € (5x)', '5k € / 2,5k € (2x)'],
      results: { roas: 'ROAS (Multiplicador)', percent: 'ROAS (%)', netProfit: 'Margen sobre gasto publicitario', costShare: 'Porcentaje de coste publicitario' },
      emptyState: {
        title: 'Introduzca ingresos y gasto en anuncios.',
        desc: 'Mida la eficiencia del gasto publicitario.',
      },
      errors: { general: 'El gasto publicitario debe ser superior a 0.' },
    },
    fr: {
      title: 'Retour sur Investissement Publicitaire (ROAS)',
      labels: { revenue: 'Chiffre d’Affaires Attribué aux Ads', adSpend: 'Dépenses Publicitaires Totales' },
      helpers: {
        revenue: 'Ventes générées directement par les campagnes payantes.',
        adSpend: 'Budget média dépensé sur les plateformes publicitaires.',
      },
      presets: ['12k € / 3k € (4x)', '25k € / 5k € (5x)', '5k € / 2,5k € (2x)'],
      results: { roas: 'ROAS (Multiplicateur)', percent: 'ROAS (%)', netProfit: 'Marge après dépenses pub', costShare: 'Part des dépenses pub' },
      emptyState: {
        title: 'Indiquez chiffre d’affaires et budget pub.',
        desc: 'Mesurez le rendement de vos campagnes publicitaires.',
      },
      errors: { general: 'Les dépenses publicitaires doivent être supérieures à 0.' },
    },
    de: {
      title: 'Werberendite (ROAS)',
      labels: { revenue: 'Umsatz aus Werbeanzeigen', adSpend: 'Gesamte Werbeausgaben' },
      helpers: {
        revenue: 'Direkt den Werbekampagnen zugeordneter Verkaufsumsatz.',
        adSpend: 'Bezahlte Werbekosten auf Anzeigenplattformen.',
      },
      presets: ['12k € / 3k € (4x)', '25k € / 5k € (5x)', '5k € / 2,5k € (2x)'],
      results: { roas: 'ROAS (Multiplikator)', percent: 'ROAS (%)', netProfit: 'Deckung über Werbekosten', costShare: 'Werbekostenquote' },
      emptyState: {
        title: 'Umsatz und Werbeausgaben eingeben.',
        desc: 'Messen Sie die Effizienz jedes eingesetzten Werbeeuros.',
      },
      errors: { general: 'Die Werbeausgaben müssen größer als 0 sein.' },
    },
    pt: {
      title: 'Retorno do Gasto com Anúncios (ROAS)',
      labels: { revenue: 'Receita Atribuída a Anúncios', adSpend: 'Gasto Total com Anúncios' },
      helpers: {
        revenue: 'Vendas registradas diretamente por meio dos anúncios.',
        adSpend: 'Valor investido em plataformas de mídia paga.',
      },
      presets: ['R$ 12k / R$ 3k (4x)', 'R$ 25k / R$ 5k (5x)', 'R$ 5k / R$ 2,5k (2x)'],
      results: { roas: 'ROAS (Multiplicador)', percent: 'ROAS (%)', netProfit: 'Receita líquida sobre anúncios', costShare: 'Participação do gasto com anúncios' },
      emptyState: {
        title: 'Insira receita e investimento em mídia.',
        desc: 'Avalie o rendimento das campanhas pagas.',
      },
      errors: { general: 'O investimento em anúncios deve ser maior que 0.' },
    },
    it: {
      title: 'Rendimento della Spesa Pubblicitaria (ROAS)',
      labels: { revenue: 'Fatturato Attribuito alle Campagne', adSpend: 'Spesa Pubblicitaria Totale' },
      helpers: {
        revenue: 'Vendite tracciate direttamente dalle campagne a pagamento.',
        adSpend: 'Investimento versato alle piattaforme pubblicitarie.',
      },
      presets: ['12k € / 3k € (4x)', '25k € / 5k € (5x)', '5k € / 2,5k € (2x)'],
      results: { roas: 'ROAS (Moltiplicatore)', percent: 'ROAS (%)', netProfit: 'Margine sui costi pubblicitari', costShare: 'Incidenza spesa adv' },
      emptyState: {
        title: 'Inserisci fatturato e spesa adv.',
        desc: 'Verifica l’efficienza economica delle campagne di marketing.',
      },
      errors: { general: 'La spesa pubblicitaria deve essere superiore a 0.' },
    },
    ja: {
      title: '広告費用対効果（ROAS）',
      labels: { revenue: '広告経由の売上高', adSpend: '広告費用総額' },
      helpers: {
        revenue: '広告経由で発生した直接の売上金額。',
        adSpend: '各広告プラットフォームに支払った広告媒体費。',
      },
      presets: ['¥12k / ¥3k (4倍)', '¥25k / ¥5k (5倍)', '¥5k / ¥2.5k (2倍)'],
      results: { roas: 'ROAS（回収倍率）', percent: 'ROAS（%）', netProfit: '広告費控除後差引額', costShare: '売上高広告費率' },
      emptyState: {
        title: '広告売上高と広告費用を入力してください。',
        desc: '広告費用1円あたりの売上創出効果を測定します。',
      },
      errors: { general: '広告費用は0より大きくなければなりません。' },
    },
    ko: {
      title: '광고비 대비 매출액 (ROAS)',
      labels: { revenue: '광고 기여 매출액', adSpend: '총 집행 광고비' },
      helpers: {
        revenue: '광고 캠페인을 통해 발생한 총 고객 매출.',
        adSpend: '광고 매체에 지출한 총 마케팅 비용.',
      },
      presets: ['₩12k / ₩3k (4배)', '₩25k / ₩5k (5배)', '₩5k / ₩2.5k (2배)'],
      results: { roas: 'ROAS (배수)', percent: 'ROAS (%)', netProfit: '광고비 차감 순수익', costShare: '광고비 비중' },
      emptyState: {
        title: '광고 매출과 광고비를 입력하세요.',
        desc: '광고 지출 1원당 매출 창출 효율을 계산합니다.',
      },
      errors: { general: '광고비는 0보다 커야 합니다.' },
    },
  },

  cac: {
    en: {
      title: 'Customer Acquisition Cost',
      labels: { acquisitionCosts: 'Total Sales & Marketing Spend', newCustomers: 'New Customers Acquired' },
      helpers: {
        acquisitionCosts: 'Ad spend, salaries, software tools, agency fees.',
        newCustomers: 'Count of newly onboarded paying customers.',
      },
      presets: ['$8k / 160 ($50)', '$15k / 100 ($150)', '$3k / 30 ($100)'],
      results: { cac: 'CAC', spend: 'Total marketing spend', customers: 'Customers acquired' },
      emptyState: {
        title: 'Enter total marketing costs and new customer count.',
        desc: 'Determine exact unit cost per paying customer acquired.',
      },
      errors: { general: 'New customers acquired must be greater than 0.' },
    },
    es: {
      title: 'Coste de Adquisición de Clientes (CAC)',
      labels: { acquisitionCosts: 'Gasto Total en Ventas y Marketing', newCustomers: 'Nuevos Clientes Captados' },
      helpers: {
        acquisitionCosts: 'Publicidad, sueldos de ventas, software y agencias.',
        newCustomers: 'Número de clientes de pago adquiridos en el periodo.',
      },
      presets: ['8k € / 160 (50 €)', '15k € / 100 (150 €)', '3k € / 30 (100 €)'],
      results: { cac: 'CAC', spend: 'Gasto total de captación', customers: 'Clientes captados' },
      emptyState: {
        title: 'Introduzca inversión y nuevos clientes.',
        desc: 'Conozca el coste unitario por cada cliente ganado.',
      },
      errors: { general: 'El número de nuevos clientes debe ser mayor que 0.' },
    },
    fr: {
      title: 'Coût d’Acquisition Client (CAC)',
      labels: { acquisitionCosts: 'Dépenses Ventes & Marketing', newCustomers: 'Nouveaux Clients Acquis' },
      helpers: {
        acquisitionCosts: 'Publicité, équipes commerciales, outils et agences.',
        newCustomers: 'Nombre total de nouveaux clients payants.',
      },
      presets: ['8k € / 160 (50 €)', '15k € / 100 (150 €)', '3k € / 30 (100 €)'],
      results: { cac: 'CAC', spend: 'Dépenses marketing totales', customers: 'Clients acquis' },
      emptyState: {
        title: 'Indiquez dépenses de prospection et nombre de clients.',
        desc: 'Déterminez le coût direct par nouveau client.',
      },
      errors: { general: 'Le nombre de nouveaux clients doit être supérieur à 0.' },
    },
    de: {
      title: 'Kundenakquisitionskosten (CAC)',
      labels: { acquisitionCosts: 'Vertriebs- & Marketingausgaben', newCustomers: 'Gewonnene Neukunden' },
      helpers: {
        acquisitionCosts: 'Werbung, Gehälter, Software und Agenturhonorare.',
        newCustomers: 'Anzahl neu akquirierter zahlender Kunden.',
      },
      presets: ['8k € / 160 (50 €)', '15k € / 100 (150 €)', '3k € / 30 (100 €)'],
      results: { cac: 'CAC', spend: 'Marketingaufwand gesamt', customers: 'Gewonnene Neukunden' },
      emptyState: {
        title: 'Marketingkosten und Neukundenzahl eingeben.',
        desc: 'Ermitteln Sie die exakten Kosten pro Neukunde.',
      },
      errors: { general: 'Die Anzahl der Neukunden muss größer als 0 sein.' },
    },
    pt: {
      title: 'Custo de Aquisição de Clientes (CAC)',
      labels: { acquisitionCosts: 'Gasto Total em Vendas e Marketing', newCustomers: 'Novos Clientes Adquiridos' },
      helpers: {
        acquisitionCosts: 'Anúncios, salários de vendas, ferramentas e agências.',
        newCustomers: 'Número de novos clientes pagantes conquistados.',
      },
      presets: ['R$ 8k / 160 (R$ 50)', 'R$ 15k / 100 (R$ 150)', 'R$ 3k / 30 (R$ 100)'],
      results: { cac: 'CAC', spend: 'Investimento total em aquisição', customers: 'Clientes conquistados' },
      emptyState: {
        title: 'Insira custos de marketing e novos clientes.',
        desc: 'Calcule o custo unitário por cliente adquirido.',
      },
      errors: { general: 'Por favor, insira valores válidos.' },
    },
    it: {
      title: 'Costo di Acquisizione Clienti (CAC)',
      labels: { acquisitionCosts: 'Spesa Totale Marketing e Vendite', newCustomers: 'Nuovi Clienti Acquisiti' },
      helpers: {
        acquisitionCosts: 'Budget pubblicitario, team vendite, software e agenzie.',
        newCustomers: 'Numero di clienti paganti acquisiti nel periodo.',
      },
      presets: ['8k € / 160 (50 €)', '15k € / 100 (150 €)', '3k € / 30 (100 €)'],
      results: { cac: 'CAC', spend: 'Spesa marketing complessiva', customers: 'Clienti acquisiti' },
      emptyState: {
        title: 'Inserisci spese commerciali e numero nuovi clienti.',
        desc: 'Determina il costo unitario per ogni cliente acquisito.',
      },
      errors: { general: 'Il numero di nuovi clienti deve essere superiore a 0.' },
    },
    ja: {
      title: '顧客獲得単価（CAC）',
      labels: { acquisitionCosts: '営業・マーケティング費用総額', newCustomers: '新規獲得顧客数' },
      helpers: {
        acquisitionCosts: '広告費、営業人件費、ツール費用、代理店報酬など。',
        newCustomers: '対象期間中に獲得した新規課金顧客の総数。',
      },
      presets: ['¥8k / 160件 (¥50)', '¥15k / 100件 (¥150)', '¥3k / 30件 (¥100)'],
      results: { cac: 'CAC（顧客獲得費用）', spend: '獲得費用総額', customers: '獲得顧客数' },
      emptyState: {
        title: 'マーケティング費用と新規顧客数を入力してください。',
        desc: '有料顧客1件あたりの獲得単価を正確に算出します。',
      },
      errors: { general: '獲得顧客数は0より大きくなければなりません。' },
    },
    ko: {
      title: '고객 획득 비용 (CAC)',
      labels: { acquisitionCosts: '마케팅 및 영업 총 지출', newCustomers: '신규 획득 고객 수' },
      helpers: {
        acquisitionCosts: '광고비, 영업 인건비, 마케팅 소프트웨어, 대행사 수수료.',
        newCustomers: '해당 기간 동안 유치된 신규 유료 결제 고객 수.',
      },
      presets: ['₩8k / 160명 (₩50)', '₩15k / 100명 (₩150)', '₩3k / 30명 (₩100)'],
      results: { cac: 'CAC (고객 획득 비용)', spend: '총 마케팅 지출액', customers: '신규 유치 고객 수' },
      emptyState: {
        title: '마케팅 지출액과 신규 고객 수를 입력하세요.',
        desc: '신규 결제 고객 1인당 소요된 단위 비용을 계산합니다.',
      },
      errors: { general: '신규 고객 수는 0보다 커야 합니다.' },
    },
  },

  ltv: {
    en: {
      title: 'Customer Lifetime Value',
      labels: { averagePurchaseValue: 'Average Purchase Value (AOV)', purchaseFrequency: 'Purchase Frequency (per year)', customerLifespan: 'Customer Lifespan (years)' },
      helpers: {
        averagePurchaseValue: 'Average revenue generated per customer transaction.',
        purchaseFrequency: 'Number of repeat purchases completed annually.',
        customerLifespan: 'Average years a customer maintains an active relationship.',
      },
      presets: ['$60 / 4x / 3 yrs ($720)', '$100 / 12x / 2 yrs ($2.4k)', '$35 / 6x / 1.5 yrs ($315)'],
      results: { ltv: 'Customer Lifetime Value', annual: 'Annual customer value', purchases: 'Total purchases over lifespan' },
      emptyState: {
        title: 'Enter average purchase value, frequency, and customer lifespan.',
        desc: 'Calculate projected lifetime customer revenue.',
      },
      errors: { general: 'Please enter valid non-negative numbers.' },
    },
    es: {
      title: 'Valor de Vida del Cliente (LTV)',
      labels: { averagePurchaseValue: 'Valor Medio del Pedido (AOV)', purchaseFrequency: 'Frecuencia de Compra (al año)', customerLifespan: 'Vida Media del Cliente (años)' },
      helpers: {
        averagePurchaseValue: 'Facturación media por cada pedido del cliente.',
        purchaseFrequency: 'Número de compras repetidas al año.',
        customerLifespan: 'Años que el cliente permanece activo.',
      },
      presets: ['60 € / 4x / 3 años (720 €)', '100 € / 12x / 2 años (2,4k €)', '35 € / 6x / 1,5 años (315 €)'],
      results: { ltv: 'Valor de Vida del Cliente', annual: 'Valor anual por cliente', purchases: 'Compras totales en su vida útil' },
      emptyState: {
        title: 'Introduzca ticket medio, frecuencia y duración.',
        desc: 'Calcule los ingresos proyectados por cliente.',
      },
      errors: { general: 'Por favor, introduzca valores no negativos válidos.' },
    },
    fr: {
      title: 'Valeur Vie Client (LTV)',
      labels: { averagePurchaseValue: 'Panier Moyen (AOV)', purchaseFrequency: 'Fréquence d’Achat (par an)', customerLifespan: 'Durée de Vie Client (années)' },
      helpers: {
        averagePurchaseValue: 'Revenu moyen généré par commande.',
        purchaseFrequency: 'Nombre de commandes passées chaque année.',
        customerLifespan: 'Années d’activité moyenne de la relation client.',
      },
      presets: ['60 € / 4x / 3 ans (720 €)', '100 € / 12x / 2 ans (2,4k €)', '35 € / 6x / 1,5 ans (315 €)'],
      results: { ltv: 'Valeur Vie Client', annual: 'Valeur annuelle par client', purchases: 'Commandes totales sur la durée' },
      emptyState: {
        title: 'Indiquez panier moyen, fréquence et longévité client.',
        desc: 'Projetez le revenu global par client.',
      },
      errors: { general: 'Veuillez saisir des chiffres valides.' },
    },
    de: {
      title: 'Kundenwert (Customer Lifetime Value)',
      labels: { averagePurchaseValue: 'Durchschnittlicher Warenkorb (AOV)', purchaseFrequency: 'Kauffrequenz (pro Jahr)', customerLifespan: 'Kundenbindungsdauer (Jahre)' },
      helpers: {
        averagePurchaseValue: 'Durchschnittlicher Umsatz je Transaktion.',
        purchaseFrequency: 'Anzahl jährlicher Folgebestellungen.',
        customerLifespan: 'Durchschnittliche Beziehungsdauer in Jahren.',
      },
      presets: ['60 € / 4x / 3 J. (720 €)', '100 € / 12x / 2 J. (2,4k €)', '35 € / 6x / 1,5 J. (315 €)'],
      results: { ltv: 'Customer Lifetime Value', annual: 'Jährlicher Kundenwert', purchases: 'Käufe über die Gesamtdauer' },
      emptyState: {
        title: 'Warenkorbwert, Frequenz und Dauer eingeben.',
        desc: 'Prognostizieren Sie den Gesamtertrag pro Kunde.',
      },
      errors: { general: 'Bitte geben Sie gültige Zahlen ein.' },
    },
    pt: {
      title: 'Valor do Tempo de Vida do Cliente (LTV)',
      labels: { averagePurchaseValue: 'Ticket Médio (AOV)', purchaseFrequency: 'Frequência de Compra (por ano)', customerLifespan: 'Tempo de Retenção (anos)' },
      helpers: {
        averagePurchaseValue: 'Valor médio faturado por transação.',
        purchaseFrequency: 'Número de compras repetidas ao ano.',
        customerLifespan: 'Média de anos de fidelidade do cliente.',
      },
      presets: ['R$ 60 / 4x / 3 anos (R$ 720)', 'R$ 100 / 12x / 2 anos (R$ 2,4k)', 'R$ 35 / 6x / 1,5 anos (R$ 315)'],
      results: { ltv: 'Customer Lifetime Value', annual: 'Valor anual do cliente', purchases: 'Total de compras no ciclo de vida' },
      emptyState: {
        title: 'Insira ticket médio, frequência e longevidade.',
        desc: 'Estime a receita total esperada por cliente.',
      },
      errors: { general: 'Por favor, insira valores não negativos válidos.' },
    },
    it: {
      title: 'Valore del Ciclo di Vita del Cliente (LTV)',
      labels: { averagePurchaseValue: 'Valore Medio dell’Ordine (AOV)', purchaseFrequency: 'Frequenza d’Acquisto (all’anno)', customerLifespan: 'Durata del Cliente (anni)' },
      helpers: {
        averagePurchaseValue: 'Importo medio speso per transazione.',
        purchaseFrequency: 'Numero di acquisti ripetuti nel corso dell’anno.',
        customerLifespan: 'Anni di fedeltà media del cliente.',
      },
      presets: ['60 € / 4x / 3 anni (720 €)', '100 € / 12x / 2 anni (2,4k €)', '35 € / 6x / 1,5 anni (315 €)'],
      results: { ltv: 'Customer Lifetime Value', annual: 'Valore annuo per cliente', purchases: 'Acquisti totali nel ciclo di vita' },
      emptyState: {
        title: 'Inserisci carrello medio, frequenza e durata.',
        desc: 'Calcola il valore complessivo generato da ogni cliente.',
      },
      errors: { general: 'Inserisci valori positivi validi.' },
    },
    ja: {
      title: '顧客生涯価値（LTV・ライフタイムバリュー）',
      labels: { averagePurchaseValue: '平均購入単価（AOV）', purchaseFrequency: '年間購入頻度（回/年）', customerLifespan: '継続期間（年数）' },
      helpers: {
        averagePurchaseValue: '1回の注文または決済あたりの平均売上。',
        purchaseFrequency: '1年間に購入が行われる平均回数。',
        customerLifespan: '顧客が取引を継続する平均年数。',
      },
      presets: ['¥60 / 4回 / 3年 (¥720)', '¥100 / 12回 / 2年 (¥2.4k)', '¥35 / 6回 / 1.5年 (¥315)'],
      results: { ltv: '顧客生涯価値（LTV）', annual: '年間顧客価値', purchases: '生涯総購入回数' },
      emptyState: {
        title: '購入単価、購入頻度、継続年数を入力してください。',
        desc: '顧客1人が生涯に生み出す予測売上を計算します。',
      },
      errors: { general: '有効な0以上の数値を入力してください。' },
    },
    ko: {
      title: '고객 생애 가치 (LTV)',
      labels: { averagePurchaseValue: '평균 구매액 (객단가)', purchaseFrequency: '연간 구매 빈도 (회/년)', customerLifespan: '고객 유지 기간 (년)' },
      helpers: {
        averagePurchaseValue: '1회 거래 시 고객이 결제하는 평균 금액.',
        purchaseFrequency: '고객이 1년간 반복 구매하는 평균 횟수.',
        customerLifespan: '고객과의 거래가 유지되는 평균 연수.',
      },
      presets: ['₩60 / 4회 / 3년 (₩720)', '₩100 / 12회 / 2년 (₩2.4k)', '₩35 / 6회 / 1.5년 (₩315)'],
      results: { ltv: '고객 생애 가치 (LTV)', annual: '연간 고객 가치', purchases: '생애 총 구매 횟수' },
      emptyState: {
        title: '객단가, 구매 빈도, 유지 기간을 입력하세요.',
        desc: '고객 1인이 평생 창출하는 예상 매출액을 계산합니다.',
      },
      errors: { general: '유효한 0 이상의 숫자를 입력하세요.' },
    },
  },

  'ltv-cac': {
    en: {
      title: 'Unit Economics Ratio',
      labels: { ltv: 'Customer Lifetime Value (LTV)', cac: 'Customer Acquisition Cost (CAC)' },
      helpers: {
        ltv: 'Expected total revenue or gross margin generated per customer.',
        cac: 'Direct marketing and sales expenditure to acquire a customer.',
      },
      presets: ['$900 / $200 (4.5x)', '$600 / $200 (3.0x)', '$300 / $250 (1.2x)'],
      results: { ratio: 'LTV:CAC Ratio', netValue: 'Net value created (LTV - CAC)', status: 'Ratio assessment', margin: 'LTV margin' },
      emptyState: {
        title: 'Enter LTV and CAC to calculate ratio.',
        desc: 'Benchmark customer acquisition sustainability.',
      },
      errors: { general: 'CAC must be greater than 0.' },
    },
    es: {
      title: 'Ratio de Economía Unitaria (LTV:CAC)',
      labels: { ltv: 'Valor de Vida del Cliente (LTV)', cac: 'Coste de Adquisición (CAC)' },
      helpers: {
        ltv: 'Ingreso total o margen bruto generado por cliente.',
        cac: 'Gasto directo en marketing y ventas para ganar un cliente.',
      },
      presets: ['900 € / 200 € (4,5x)', '600 € / 200 € (3,0x)', '300 € / 250 € (1,2x)'],
      results: { ratio: 'Ratio LTV:CAC', netValue: 'Valor neto generado (LTV - CAC)', status: 'Diagnóstico de viabilidad', margin: 'Margen LTV' },
      emptyState: {
        title: 'Introduzca LTV y CAC para calcular el ratio.',
        desc: 'Evalúe la sostenibilidad de su captación de clientes.',
      },
      errors: { general: 'El CAC debe ser mayor que 0.' },
    },
    fr: {
      title: 'Ratio d’Économie Unitaire (LTV:CAC)',
      labels: { ltv: 'Valeur Vie Client (LTV)', cac: 'Coût d’Acquisition Client (CAC)' },
      helpers: {
        ltv: 'Marge ou chiffre d’affaires total produit par client.',
        cac: 'Dépenses commerciales et publicitaires par nouveau client.',
      },
      presets: ['900 € / 200 € (4,5x)', '600 € / 200 € (3,0x)', '300 € / 250 € (1,2x)'],
      results: { ratio: 'Ratio LTV:CAC', netValue: 'Valeur nette créée (LTV - CAC)', status: 'Diagnostic d’efficacité', margin: 'Marge LTV' },
      emptyState: {
        title: 'Indiquez LTV et CAC pour évaluer le ratio.',
        desc: 'Mesurez la durabilité de votre modèle d’acquisition.',
      },
      errors: { general: 'Le CAC doit être supérieur à 0.' },
    },
    de: {
      title: 'Einheitenökonomie-Verhältnis (LTV:CAC)',
      labels: { ltv: 'Customer Lifetime Value (LTV)', cac: 'Kundenakquisitionskosten (CAC)' },
      helpers: {
        ltv: 'Erwarteter Gesamtumsatz oder Rohgewinn je Kunde.',
        cac: 'Direkte Marketing- und Vertriebskosten je Neukunde.',
      },
      presets: ['900 € / 200 € (4,5x)', '600 € / 200 € (3,0x)', '300 € / 250 € (1,2x)'],
      results: { ratio: 'LTV:CAC Verhältnis', netValue: 'Nettowertbeitrag (LTV - CAC)', status: 'Wirtschaftlichkeitsbewertung', margin: 'LTV-Marge' },
      emptyState: {
        title: 'LTV und CAC eingeben, um das Verhältnis zu berechnen.',
        desc: 'Prüfen Sie die Tragfähigkeit Ihres Wachstumsmodells.',
      },
      errors: { general: 'Die CAC müssen größer als 0 sein.' },
    },
    pt: {
      title: 'Proporção de Economia Unitária (LTV:CAC)',
      labels: { ltv: 'Valor do Tempo de Vida (LTV)', cac: 'Custo de Aquisição (CAC)' },
      helpers: {
        ltv: 'Receita ou margem total estimada gerada por cliente.',
        cac: 'Custo direto em vendas e marketing por novo cliente.',
      },
      presets: ['R$ 900 / R$ 200 (4,5x)', 'R$ 600 / R$ 200 (3,0x)', 'R$ 300 / R$ 250 (1,2x)'],
      results: { ratio: 'Relação LTV:CAC', netValue: 'Valor líquido criado (LTV - CAC)', status: 'Diagnóstico de sustentabilidade', margin: 'Margem LTV' },
      emptyState: {
        title: 'Insira LTV e CAC para calcular a relação.',
        desc: 'Valide a viabilidade da sua máquina de aquisição.',
      },
      errors: { general: 'O CAC deve ser maior que 0.' },
    },
    it: {
      title: 'Rapporto di Economia Unitaria (LTV:CAC)',
      labels: { ltv: 'Valore del Ciclo di Vita (LTV)', cac: 'Costo di Acquisizione (CAC)' },
      helpers: {
        ltv: 'Ricavi totali o margine lordo attesi per cliente.',
        cac: 'Spesa diretta per l’acquisizione di ogni nuovo cliente.',
      },
      presets: ['900 € / 200 € (4,5x)', '600 € / 200 € (3,0x)', '300 € / 250 € (1,2x)'],
      results: { ratio: 'Rapporto LTV:CAC', netValue: 'Valore netto creato (LTV - CAC)', status: 'Valutazione di sostenibilità', margin: 'Margine LTV' },
      emptyState: {
        title: 'Inserisci LTV e CAC per calcolare il rapporto.',
        desc: 'Verifica la sostenibilità economica delle conversioni.',
      },
      errors: { general: 'Il CAC deve essere superiore a 0.' },
    },
    ja: {
      title: 'ユニットエコノミクス比率（LTV:CAC比率）',
      labels: { ltv: '顧客生涯価値（LTV）', cac: '顧客獲得単価（CAC）' },
      helpers: {
        ltv: '顧客1人が生涯にもたらす予測総売上または粗利。',
        cac: '顧客1人を獲得するために投じた直接マーケティング・営業費。',
      },
      presets: ['¥900 / ¥200 (4.5倍)', '¥600 / ¥200 (3.0倍)', '¥300 / ¥250 (1.2倍)'],
      results: { ratio: 'LTV:CAC 比率', netValue: '顧客あたり創出純価値 (LTV - CAC)', status: '健全性評価', margin: 'LTVマージン' },
      emptyState: {
        title: 'LTVとCACを入力して比率を算出します。',
        desc: '顧客獲得モデルの健全性と収益性を評価します。',
      },
      errors: { general: 'CACは0より大きくなければなりません。' },
    },
    ko: {
      title: '단위 경제학 비율 (LTV:CAC)',
      labels: { ltv: '고객 생애 가치 (LTV)', cac: '고객 획득 비용 (CAC)' },
      helpers: {
        ltv: '고객 1인이 창출하는 총 기대 매출 또는 마진액.',
        cac: '고객 1인을 획득하는 데 투입된 직접 마케팅·영업비.',
      },
      presets: ['₩900 / ₩200 (4.5배)', '₩600 / ₩200 (3.0배)', '₩300 / ₩250 (1.2배)'],
      results: { ratio: 'LTV:CAC 비율', netValue: '고객당 창출 순가치 (LTV - CAC)', status: '수익 지속성 평가', margin: 'LTV 마진율' },
      emptyState: {
        title: 'LTV와 CAC를 입력하여 비율을 계산하세요.',
        desc: '고객 획득 비즈니스 모델의 건전성을 벤치마크합니다.',
      },
      errors: { general: 'CAC는 0보다 커야 합니다.' },
    },
  },

  'conversion-rate': {
    en: {
      title: 'Conversion Rate',
      labels: { conversions: 'Successful Conversions', visitors: 'Total Visitors / Interactions' },
      helpers: {
        conversions: 'Number of purchases, signups, or goal completions.',
        visitors: 'Total sessions, visits, or ad clicks in the same timeframe.',
      },
      presets: ['85 / 2,500 (3.4%)', '120 / 5,000 (2.4%)', '50 / 1,000 (5.0%)'],
      results: { rate: 'Conversion Rate (%)', nonConverting: 'Non-converting visitors', dropOff: 'Drop-off rate' },
      emptyState: {
        title: 'Enter conversions and total visitors.',
        desc: 'Determine funnel completion rate and drop-off counts.',
      },
      errors: { general: 'Total visitors must be greater than 0.' },
    },
    es: {
      title: 'Tasa de Conversión (CVR)',
      labels: { conversions: 'Conversiones Conseguidas', visitors: 'Visitantes Totales / Sesiones' },
      helpers: {
        conversions: 'Número de compras, suscripciones o metas alcanzadas.',
        visitors: 'Sesiones totales o clics recibidos en el mismo periodo.',
      },
      presets: ['85 / 2.500 (3,4%)', '120 / 5.000 (2,4%)', '50 / 1.000 (5,0%)'],
      results: { rate: 'Tasa de Conversión (%)', nonConverting: 'Visitas sin conversión', dropOff: 'Tasa de abandono' },
      emptyState: {
        title: 'Introduzca conversiones y visitas totales.',
        desc: 'Descubra la efectividad del embudo y el abandono.',
      },
      errors: { general: 'El total de visitantes debe ser mayor que 0.' },
    },
    fr: {
      title: 'Taux de Conversion (CVR)',
      labels: { conversions: 'Conversions Réussies', visitors: 'Visiteurs Totaux / Interactions' },
      helpers: {
        conversions: 'Nombre d’achats, d’inscriptions ou d’actions finalisées.',
        visitors: 'Total des sessions, visites ou clics sur la même période.',
      },
      presets: ['85 / 2 500 (3,4%)', '120 / 5 000 (2,4%)', '50 / 1 000 (5,0%)'],
      results: { rate: 'Taux de Conversion (%)', nonConverting: 'Visiteurs non convertis', dropOff: 'Taux d’abandon' },
      emptyState: {
        title: 'Indiquez conversions et visiteurs totaux.',
        desc: 'Mesurez l’efficacité de votre entonnoir de vente.',
      },
      errors: { general: 'Le total des visiteurs doit être supérieur à 0.' },
    },
    de: {
      title: 'Konversionsrate (Conversion Rate)',
      labels: { conversions: 'Erfolgreiche Konversionen', visitors: 'Gesamtbesucher / Interaktionen' },
      helpers: {
        conversions: 'Anzahl der Käufe, Anmeldungen oder Zielabschlüsse.',
        visitors: 'Gesamtsitzungen oder Klicks im gleichen Zeitraum.',
      },
      presets: ['85 / 2.500 (3,4%)', '120 / 5.000 (2,4%)', '50 / 1.000 (5,0%)'],
      results: { rate: 'Konversionsrate (%)', nonConverting: 'Nicht-konvertierende Besucher', dropOff: 'Abbruchquote' },
      emptyState: {
        title: 'Konversionen und Gesamtzahl der Besucher eingeben.',
        desc: 'Messen Sie Trichtererfolg und Absprungraten.',
      },
      errors: { general: 'Die Gesamtbesucherzahl muss größer als 0 sein.' },
    },
    pt: {
      title: 'Taxa de Conversão (CVR)',
      labels: { conversions: 'Conversões Concluídas', visitors: 'Visitantes Totais / Sessões' },
      helpers: {
        conversions: 'Número de compras, cadastros ou metas alcançadas.',
        visitors: 'Total de sessões, acessos ou cliques no mesmo período.',
      },
      presets: ['85 / 2.500 (3,4%)', '120 / 5.000 (2,4%)', '50 / 1.000 (5,0%)'],
      results: { rate: 'Taxa de Conversão (%)', nonConverting: 'Visitantes sem conversão', dropOff: 'Taxa de desistência' },
      emptyState: {
        title: 'Insira conversões e visitantes totais.',
        desc: 'Descubra a eficiência de conversão do seu funil.',
      },
      errors: { general: 'O total de visitantes deve ser maior que 0.' },
    },
    it: {
      title: 'Tasso di Conversione (CVR)',
      labels: { conversions: 'Conversioni Concluse', visitors: 'Visitatori Totali / Sessioni' },
      helpers: {
        conversions: 'Numero di ordini, registrazioni o traguardi completati.',
        visitors: 'Sessioni complessive o click nello stesso periodo.',
      },
      presets: ['85 / 2.500 (3,4%)', '120 / 5.000 (2,4%)', '50 / 1.000 (5,0%)'],
      results: { rate: 'Tasso di Conversione (%)', nonConverting: 'Visitatori non convertiti', dropOff: 'Tasso di abbandono' },
      emptyState: {
        title: 'Inserisci conversioni e visitatori complessivi.',
        desc: 'Misura la percentuale di completamento del funnel.',
      },
      errors: { general: 'Il numero totale di visitatori deve essere superiore a 0.' },
    },
    ja: {
      title: 'コンバージョン率（転換率・CVR）',
      labels: { conversions: 'コンバージョン達成数', visitors: '総訪問者数・アクセス数' },
      helpers: {
        conversions: '購入、会員登録、または目標達成の完了件数。',
        visitors: '同一期間内の総セッション数、訪問者数、クリック数。',
      },
      presets: ['85件 / 2,500人 (3.4%)', '120件 / 5,000人 (2.4%)', '50件 / 1,000人 (5.0%)'],
      results: { rate: 'コンバージョン率（%）', nonConverting: '未達成訪問者数', dropOff: '離脱率' },
      emptyState: {
        title: '達成件数と総訪問者数を入力してください。',
        desc: 'ファネル完了率および離脱者数を即座に測定します。',
      },
      errors: { general: '総訪問者数は0より大きくなければなりません。' },
    },
    ko: {
      title: '전환율 (Conversion Rate, CVR)',
      labels: { conversions: '전환 완료 건수', visitors: '총 방문자 수 (세션 수)' },
      helpers: {
        conversions: '구매 완료, 회원가입, 문의 등 목표 달성 건수.',
        visitors: '동일 기간 내 총 유입 방문자 수 또는 클릭 수.',
      },
      presets: ['85건 / 2,500명 (3.4%)', '120건 / 5,000명 (2.4%)', '50건 / 1,000명 (5.0%)'],
      results: { rate: '전환율 (%)', nonConverting: '미전환 방문자 수', dropOff: '이탈률' },
      emptyState: {
        title: '전환 건수와 총 방문자 수를 입력하세요.',
        desc: '퍼널 달성률과 이탈 비율을 실시간 계산합니다.',
      },
      errors: { general: '총 방문자 수는 0보다 커야 합니다.' },
    },
  },
};

export function getWidgetTranslation(slug: string, locale: SupportedLocale = 'en'): WidgetTranslation {
  const normalized = slug.replace(/-calculator$/, '');
  const calcDict = WIDGET_TRANSLATIONS[slug] || WIDGET_TRANSLATIONS[normalized];
  if (!calcDict) {
    return {
      labels: {},
      helpers: {},
      presets: [],
      results: {},
      emptyState: { title: '', desc: '' },
      errors: {},
    };
  }
  return calcDict[locale] || calcDict.en;
}
