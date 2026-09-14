export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  decimals: number;
}

export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discountPercent: number;
  taxPercent: number;
}

export interface InvoiceData {
  // Seller
  sellerName: string;
  sellerLogo: string;
  sellerAddress: string;
  sellerEmail: string;
  sellerPhone: string;
  sellerTaxId: string;
  sellerWebsite: string;
  // Customer
  customerName: string;
  customerCompany: string;
  customerAddress: string;
  customerEmail: string;
  customerPhone: string;
  customerTaxId: string;
  // Invoice Meta
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  currency: string;
  paymentTerms: string;
  // Items
  items: InvoiceLineItem[];
  // Notes
  notes: string;
}

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
  sections: {
    seller: string;
    customer: string;
    invoiceDetails: string;
    items: string;
    summary: string;
    notes: string;
    preview: string;
  };
  fields: {
    businessName: string;
    businessLogo: string;
    uploadLogo: string;
    removeLogo: string;
    address: string;
    email: string;
    phone: string;
    taxId: string;
    website: string;
    clientName: string;
    companyName: string;
    invoiceNumber: string;
    invoiceDate: string;
    dueDate: string;
    currency: string;
    paymentTerms: string;
    itemDescription: string;
    quantity: string;
    unitPrice: string;
    discountPercent: string;
    taxPercent: string;
    lineAmount: string;
    addItem: string;
    removeItem: string;
    notesAndTerms: string;
    notesPlaceholder: string;
  };
  document: {
    invoiceTitle: string;
    invoiceNumberLabel: string;
    dateLabel: string;
    dueDateLabel: string;
    fromLabel: string;
    billToLabel: string;
    descHeader: string;
    qtyHeader: string;
    priceHeader: string;
    discountHeader: string;
    taxHeader: string;
    amountHeader: string;
    subtotalLabel: string;
    discountTotalLabel: string;
    taxTotalLabel: string;
    totalLabel: string;
    paymentTermsLabel: string;
    notesLabel: string;
  };
  actions: {
    printInvoice: string;
    savePdf: string;
    clearDraft: string;
    confirmClear: string;
    editMode: string;
    previewMode: string;
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
