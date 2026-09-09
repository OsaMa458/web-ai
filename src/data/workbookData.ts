export interface ProductResearchRow {
  product: string;
  supplier: string;
  unitCost: number;
  shipping: number;
  wmPrice: number;
  wmFeeRate: number; // 0.15 standard Walmart
  ttPrice: number;
  ttFeeRate: number; // 0.08 standard TikTok Shop US
  estMonthlyDemand: number;
  demandScore: number; // 1-5
}

export const productResearchData: ProductResearchRow[] = [
  {
    product: 'Insulated Water Bottle 32oz',
    supplier: 'Alibaba - Verified Supplier',
    unitCost: 4.20,
    shipping: 1.10,
    wmPrice: 24.99,
    wmFeeRate: 0.15,
    ttPrice: 22.99,
    ttFeeRate: 0.08,
    estMonthlyDemand: 850,
    demandScore: 5,
  },
  {
    product: 'Silicone Phone Grip Stand',
    supplier: '1688.com Wholesale',
    unitCost: 0.65,
    shipping: 0.35,
    wmPrice: 8.99,
    wmFeeRate: 0.15,
    ttPrice: 7.99,
    ttFeeRate: 0.08,
    estMonthlyDemand: 1200,
    demandScore: 4,
  },
  {
    product: 'LED Desk Organizer Lamp',
    supplier: 'Alibaba - Trade Assurance',
    unitCost: 6.80,
    shipping: 2.20,
    wmPrice: 32.99,
    wmFeeRate: 0.15,
    ttPrice: 29.99,
    ttFeeRate: 0.08,
    estMonthlyDemand: 320,
    demandScore: 3,
  },
  {
    product: 'Reusable Produce Bag Set',
    supplier: 'Alibaba - Verified Supplier',
    unitCost: 1.90,
    shipping: 0.80,
    wmPrice: 14.99,
    wmFeeRate: 0.15,
    ttPrice: 13.99,
    ttFeeRate: 0.08,
    estMonthlyDemand: 540,
    demandScore: 4,
  },
  {
    product: 'Magnetic Cable Organizer',
    supplier: '1688.com Wholesale',
    unitCost: 0.90,
    shipping: 0.40,
    wmPrice: 11.99,
    wmFeeRate: 0.15,
    ttPrice: 10.99,
    ttFeeRate: 0.08,
    estMonthlyDemand: 970,
    demandScore: 5,
  },
  {
    product: 'Compact Travel Pill Case',
    supplier: 'Alibaba - Gold Supplier',
    unitCost: 1.10,
    shipping: 0.50,
    wmPrice: 9.99,
    wmFeeRate: 0.15,
    ttPrice: 8.99,
    ttFeeRate: 0.08,
    estMonthlyDemand: 210,
    demandScore: 2,
  },
];

export interface SupplierComparisonRow {
  product: string;
  supplier: string;
  unitCost: number;
  shipping: number;
  moq: string;
  leadTime: string;
  evidence: string;
  backupAvailable: string;
  status: string;
}

export const supplierComparisonData: SupplierComparisonRow[] = [
  {
    product: 'Insulated Water Bottle 32oz',
    supplier: 'Alibaba - Verified Supplier',
    unitCost: 4.20,
    shipping: 1.10,
    moq: '500 pcs',
    leadTime: '15-18 days',
    evidence: 'ISO9001 + FDA lab food-grade test report',
    backupAvailable: 'Yes (Supplier C - Yiwu)',
    status: 'Verified & Approved',
  },
  {
    product: 'Silicone Phone Grip Stand',
    supplier: '1688.com Wholesale',
    unitCost: 0.65,
    shipping: 0.35,
    moq: '1,000 pcs',
    leadTime: '7-10 days',
    evidence: 'RoHS material compliance record',
    backupAvailable: 'Yes (Dongguan Plastic)',
    status: 'Verified & Approved',
  },
  {
    product: 'LED Desk Organizer Lamp',
    supplier: 'Alibaba - Trade Assurance',
    unitCost: 6.80,
    shipping: 2.20,
    moq: '300 pcs',
    leadTime: '20-25 days',
    evidence: 'FCC / CE electrical certification',
    backupAvailable: 'Reviewing secondary Shenzhen source',
    status: 'In Sample Testing',
  },
  {
    product: 'Reusable Produce Bag Set',
    supplier: 'Alibaba - Verified Supplier',
    unitCost: 1.90,
    shipping: 0.80,
    moq: '500 sets',
    leadTime: '12-15 days',
    evidence: 'GOTS organic cotton certificate',
    backupAvailable: 'Yes (Ningbo Textile)',
    status: 'Verified & Approved',
  },
  {
    product: 'Magnetic Cable Organizer',
    supplier: '1688.com Wholesale',
    unitCost: 0.90,
    shipping: 0.40,
    moq: '500 pcs',
    leadTime: '7-10 days',
    evidence: 'Neodymium magnet strength report',
    backupAvailable: 'Yes (Zhejiang Hardware)',
    status: 'Verified & Approved',
  },
  {
    product: 'Compact Travel Pill Case',
    supplier: 'Alibaba - Gold Supplier',
    unitCost: 1.10,
    shipping: 0.50,
    moq: '1,000 pcs',
    leadTime: '10-14 days',
    evidence: 'BPA-Free polymer certificate',
    backupAvailable: 'Yes (Guangdong Plastics)',
    status: 'Verified & Approved',
  },
];

export interface StoreChecklistRow {
  step: string;
  status: 'Complete' | 'Review' | 'In Progress';
  notes: string;
}

export const storeSetupChecklist: StoreChecklistRow[] = [
  { step: 'Business Profile & Tax Verification (W-9 / EIN / Certificate)', status: 'Complete', notes: 'Verified business profile & banking setup' },
  { step: 'Shipping Settings & Lead Time Templates (2-day transit / WFS)', status: 'Complete', notes: 'Configured standard shipping & regional transit tables' },
  { step: 'Return Policy & Warehouse Return Location Setup', status: 'Complete', notes: '30-day customer return policy aligned with marketplace SLAs' },
  { step: 'Catalog & Product Feed Validation (Barcodes UPC/GTIN)', status: 'Complete', notes: '100% GS1 compliant barcodes mapped without conflicts' },
  { step: 'Listing Readiness (Title SEO, 5 Bullet Points, Rich Specs)', status: 'Complete', notes: 'LQS targeted at 90%+ across primary catalog' },
  { step: 'Pre-Launch Operational Run-Through & Support Queue', status: 'Complete', notes: 'Order test run complete; notification routing tested' },
];

export const complianceAuditData = [
  { check: 'Restricted Product & Category Verification', result: 'PASS', notes: 'No regulated pesticide, hazardous, or gated ingredients' },
  { check: 'Trademark & Brand Authorization (USPTO clearance)', result: 'PASS', notes: 'Direct brand ownership clearance / letter of authorization' },
  { check: 'Listing Claims & Verifiable Attributes Review', result: 'PASS', notes: 'Removed unsupported superlative claims to comply with FTC' },
  { check: 'Category-Specific Mandatory Attributes', result: 'PASS', notes: '100% completed capacity, dimensions, material, and care tags' },
  { check: 'Image Policy & Mobile Cropping Review', result: 'PASS', notes: 'Pure white background primary image + 6 secondary lifestyle callouts' },
];
