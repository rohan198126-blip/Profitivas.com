/**
 * Profitivas Advertising & Monetization Configuration
 *
 * GOOGLE ADSENSE READINESS:
 * Advertising is disabled by default until official Google AdSense application approval.
 * No fake publisher IDs or third-party ad scripts are loaded in production.
 *
 * ADS.TXT INSTRUCTIONS:
 * Upon approval from Google AdSense, create /public/ads.txt with your verified publisher record:
 * google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
 */

export interface AdSlotConfig {
  id: string;
  slotId: string | null;
  name: string;
  description: string;
  position: 'top' | 'in-content' | 'bottom' | 'sidebar';
  allowedFormats: ('auto' | 'rectangle' | 'horizontal')[];
}

export interface AdvertisingConfiguration {
  /**
   * Master toggle for advertising scripts and slots.
   * MUST remain false until real AdSense account is approved.
   */
  enabled: boolean;

  /**
   * Google AdSense Publisher Client ID (e.g., 'ca-pub-XXXXXXXXXXXXXXXX').
   * Must be null when inactive. Never use placeholder or fake credentials.
   */
  publisherId: string | null;

  /**
   * Test mode flag for local/staging validation.
   */
  testMode: boolean;

  /**
   * Defined ad slot placements conforming to Google AdSense Better Ads Standards.
   */
  slots: Record<'top' | 'inContent' | 'bottom', AdSlotConfig>;

  /**
   * ads.txt setup specifications.
   */
  adsTxt: {
    recommendedPath: string;
    expectedFormat: string;
    isConfigured: boolean;
  };
}

export const ADS_CONFIG: AdvertisingConfiguration = {
  enabled: false,
  publisherId: null,
  testMode: false,
  slots: {
    top: {
      id: 'slot-header-leaderboard',
      slotId: null,
      name: 'Top Header Banner',
      description: 'Placed below main navigation, non-intrusive, well-separated from calculator title.',
      position: 'top',
      allowedFormats: ['horizontal', 'auto'],
    },
    inContent: {
      id: 'slot-content-mid',
      slotId: null,
      name: 'In-Content Unit',
      description: 'Positioned between calculator results section and explanatory editorial content. Never overlaps interactive controls.',
      position: 'in-content',
      allowedFormats: ['auto', 'rectangle'],
    },
    bottom: {
      id: 'slot-footer-unit',
      slotId: null,
      name: 'Bottom Editorial Unit',
      description: 'Positioned above site footer and below FAQs/related calculators.',
      position: 'bottom',
      allowedFormats: ['horizontal', 'auto'],
    },
  },
  adsTxt: {
    recommendedPath: '/public/ads.txt',
    expectedFormat: 'google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0',
    isConfigured: false,
  },
};
