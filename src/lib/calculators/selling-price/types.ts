export interface MarginModeInput {
  cost: number;
  targetMargin: number;
}

export interface MarkupModeInput {
  cost: number;
  targetMarkup: number;
}

export interface SellingPriceResult {
  cost: number;
  sellingPrice: number;
  profit: number;
  margin: number;
  markup: number;
  mode: 'margin' | 'markup';
  isValid: boolean;
  errorMessage?: string;
}
