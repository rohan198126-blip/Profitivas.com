export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  decimals: number;
}

export type DocumentType =
  | 'invoice'
  | 'quotation'
  | 'proforma'
  | 'estimate'
  | 'purchase_order'
  | 'receipt'
  | 'credit_note'
  | 'debit_note'
  | 'delivery_challan'
  | 'custom';

export type TaxMode = 'none' | 'custom' | 'gst';
export type GstSupplyType = 'cgst_sgst' | 'igst';

export interface DocumentLineItem {
  id: string;
  description: string;
  hsnSac?: string;
  quantity: number;
  unit?: string;
  unitPrice: number;
  discountPercent?: number;
  taxPercent?: number;
}

// Backward compatibility alias
export type InvoiceLineItem = DocumentLineItem;

export type DocumentLayout = 'classic' | 'modern' | 'minimal' | 'compact';
export type DocumentDensity = 'comfortable' | 'compact';

export interface TableColumnSettings {
  index: boolean;
  item: boolean;
  hsn: boolean;
  unit: boolean;
  qty: boolean;
  rate: boolean;
  discount: boolean;
  tax: boolean;
  amount: boolean;
}

export interface SectionVisibilitySettings {
  shipping: boolean;
  references: boolean;
  payment: boolean;
  notes: boolean;
  terms: boolean;
  declaration: boolean;
  signature: boolean;
}

export interface CommercialDocumentState {
  version: 2;
  documentType: DocumentType;
  layout: DocumentLayout;
  density: DocumentDensity;
  tableColumns: TableColumnSettings;
  sectionsConfig: SectionVisibilitySettings;
  customTitle?: string;
  documentNumber: string;
  documentDate: string;
  dueDate: string;
  validUntil: string;
  currency: string;
  copyLabel?: string;
  placeOfSupply?: string;
  placeOfSupplyCode?: string;

  // Supplier
  sellerName: string;
  sellerLogo: string;
  sellerAddress: string;
  sellerEmail: string;
  sellerPhone: string;
  sellerTaxId: string; // GSTIN / Tax ID
  sellerPan?: string;
  sellerState?: string;
  sellerStateCode?: string;
  sellerWebsite: string;

  // Customer
  customerCompany: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
  customerPhone: string;
  customerTaxId: string; // GSTIN / Tax ID
  customerPan?: string;
  customerState?: string;
  customerStateCode?: string;

  // Shipping (Consignee)
  shippingEnabled?: boolean;
  shippingSameAsCustomer?: boolean;
  shippingName?: string;
  shippingAddress?: string;
  shippingTaxId?: string;
  shippingDestination?: string;

  // References
  refOrderNumber?: string;
  refOrderDate?: string;
  refPoNumber?: string;
  refPoDate?: string;
  refQuoteNumber?: string;
  refQuoteDate?: string;
  refDeliveryNote?: string;

  // Tax
  taxMode: TaxMode;
  gstSupplyType: GstSupplyType;
  reverseCharge?: boolean;
  enableRoundOff?: boolean;

  // Banking / Payment
  bankDetailsEnabled?: boolean;
  bankName?: string;
  bankAccountName?: string;
  bankAccountNumber?: string;
  bankIfsc?: string;
  bankBranch?: string;
  bankUpiId?: string;
  paymentMethod?: string;
  paymentTerms: string;

  // Legal & Signatory
  notes: string;
  termsAndConditions?: string;
  declaration?: string;
  jurisdiction?: string;
  signatoryEnabled?: boolean;
  signatoryName?: string;
  signatoryDesignation?: string;
  signatoryImage?: string;

  // Items
  items: DocumentLineItem[];
}

// Legacy structure compatibility alias
export type InvoiceData = Partial<CommercialDocumentState>;

export interface InvoiceTranslations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  header: {
    eyebrow: string;
    h1: string;
    subtitle: string;
  };
  docTypes: Record<DocumentType, string>;
  sections: {
    document: string;
    seller: string;
    customer: string;
    shipping: string;
    references: string;
    invoiceDetails: string;
    items: string;
    taxConfig: string;
    banking: string;
    summary: string;
    notes: string;
    legal: string;
    signatory: string;
    preview: string;
  };
  fields: {
    docType: string;
    customTitle: string;
    businessName: string;
    businessLogo: string;
    uploadLogo: string;
    removeLogo: string;
    address: string;
    email: string;
    phone: string;
    taxId: string; // GSTIN / Tax ID
    pan: string;
    state: string;
    stateCode: string;
    website: string;
    clientName: string;
    companyName: string;
    invoiceNumber: string;
    invoiceDate: string;
    dueDate: string;
    validUntil: string;
    currency: string;
    placeOfSupply: string;
    sameAsCustomer: string;
    recipientName: string;
    destination: string;
    orderNumber: string;
    orderDate: string;
    poNumber: string;
    poDate: string;
    quoteNumber: string;
    quoteDate: string;
    taxMode: string;
    noTax: string;
    customTax: string;
    indianGst: string;
    cgstSgst: string;
    igst: string;
    reverseCharge: string;
    roundOff: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    ifsc: string;
    branch: string;
    upiId: string;
    paymentMethod: string;
    paymentTerms: string;
    itemDescription: string;
    hsnSac: string;
    unit: string;
    quantity: string;
    unitPrice: string;
    discountPercent: string;
    taxPercent: string;
    lineAmount: string;
    addItem: string;
    removeItem: string;
    notesAndTerms: string;
    terms: string;
    declaration: string;
    jurisdiction: string;
    signatoryName: string;
    signatoryTitle: string;
    notesPlaceholder: string;
    termsPlaceholder?: string;
  };
  document: {
    invoiceTitle: string;
    invoiceNumberLabel: string;
    dateLabel: string;
    dueDateLabel: string;
    validUntilLabel: string;
    fromLabel: string;
    billToLabel: string;
    shipToLabel: string;
    descHeader: string;
    hsnHeader: string;
    unitHeader: string;
    qtyHeader: string;
    priceHeader: string;
    discountHeader: string;
    taxHeader: string;
    amountHeader: string;
    subtotalLabel: string;
    discountTotalLabel: string;
    taxableTotalLabel: string;
    taxTotalLabel: string;
    cgstLabel: string;
    sgstLabel: string;
    igstLabel: string;
    roundOffLabel: string;
    totalLabel: string;
    amountInWordsLabel: string;
    paymentTermsLabel: string;
    bankDetailsLabel: string;
    upiIdLabel: string;
    notesLabel: string;
    termsLabel: string;
    declarationLabel: string;
    jurisdictionLabel: string;
    signatoryLabel: string;
    computerGeneratedNotice: string;
  };
  actions: {
    printInvoice: string;
    savePdf: string;
    loadSample: string;
    clearDraft: string;
    confirmClear: string;
    editMode: string;
    previewMode: string;
    addGstin: string;
    addPan: string;
    addPhone: string;
    addWebsite: string;
    addShipTo: string;
    addReferences: string;
    addBankDetails: string;
    addHsn: string;
    addDiscount: string;
    addTax: string;
    addNotes: string;
    addTerms: string;
    removeTerms: string;
    addDeclaration: string;
    addSignature: string;
    addJurisdiction: string;
  };
  customizer: {
    title: string;
    subtitle: string;
    layoutLabel: string;
    layouts: {
      classic: string;
      modern: string;
      minimal: string;
      compact: string;
    };
    densityLabel: string;
    densities: {
      comfortable: string;
      compact: string;
    };
    customizeTable: string;
    customizeSections: string;
    columns: {
      index: string;
      item: string;
      hsn: string;
      unit: string;
      qty: string;
      rate: string;
      discount: string;
      tax: string;
      amount: string;
    };
    sections: {
      shipping: string;
      references: string;
      payment: string;
      notes: string;
      terms: string;
      declaration: string;
      signature: string;
    };
  };
  privacyNotice: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedCalculators: {
    heading: string;
    subtitle: string;
  };
  homepageFeatured: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: string;
    trustLine: string;
    exampleBadge: string;
    exampleBusinessName: string;
    exampleCustomerName: string;
    exampleItem1: string;
    exampleItem2: string;
  };
}
