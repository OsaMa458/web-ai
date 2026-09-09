import { CaseStudy } from '../types';

export const portfolioDemonstrations: CaseStudy[] = [
  {
    id: 'walmart-listing-optimization-demo',
    title: 'Walmart Listing Quality Optimization & Attribute Recovery',
    category: 'Listing Optimization',
    platform: 'Walmart',
    isDemo: true,
    projectType: 'Portfolio Demonstration • Home & Kitchen Category',
    problem: 'Listing suffered from a low Walmart Listing Quality Score (52/100), missing backend product taxonomy attributes, an unstructured 38-character title without key search terms, and vague feature bullets leading to poor search indexation and high return inquiries.',
    analysis: 'An in-depth review of Walmart Search revealed top-ranking competitor listings had 90%+ attribute completeness and clear title syntax ([Brand] + [Item Type] + [Key Specification] + [Pack/Material]). The target listing had 14 unfilled backend attributes required by Walmart’s 2025 item spec standard.',
    workPerformed: [
      'Extracted high-intent Walmart search queries from marketplace data',
      'Restructured item title following Walmart-recommended syntax standards',
      'Rewrote all bullet points with bold benefit headers and precise dimensions',
      'Filled 14 previously omitted Walmart catalog attributes (material, finish, capacity, care instructions)',
      'Constructed a clean, mobile-first product description with bulleted specs'
    ],
    keyImprovements: [
      'Listing Quality Score (LQS) modeled to jump from 52/100 to 94/100',
      'Title indexed for 6 additional high-frequency search keywords',
      'Zero missing mandatory or recommended attributes in Seller Center',
      'Mobile-optimized key features answer customer objections before purchase'
    ],
    deliverables: [
      'Optimized Title Formula (85 characters, keyword-dense & human readable)',
      '5 Benefit-Driven Feature Bullets with clear sizing & materials',
      'Walmart Backend Spec Attribute Data Sheet (Ready for CSV / API upload)',
      'Rich Text HTML Product Description & Care Guidelines'
    ],
    beforeMetrics: {
      title: 'Initial State',
      scoreOrValue: '52 / 100 LQS',
      details: 'Short title, 14 missing backend specs, 2 sentence description'
    },
    afterMetrics: {
      title: 'Optimized Framework',
      scoreOrValue: '94 / 100 LQS',
      details: 'Walmart-compliant syntax, 100% backend spec coverage, structured benefits'
    },
    beforeAfterComparison: {
      item: 'Product Title & Spec Architecture',
      beforeText: 'Stainless Steel Insulated Tumbler Mug with Lid',
      afterText: 'ThermoPro 20oz Stainless Steel Vacuum Insulated Tumbler, Double Wall Travel Mug with Leak-Proof Splash Lid (Midnight Black)',
      highlight: 'Structured syntax incorporating brand, capacity, insulation tech, lid mechanism, and exact finish.'
    }
  },
  {
    id: 'tiktok-shop-product-launch-demo',
    title: 'TikTok Shop Storefront Setup & Mobile Listing Architecture',
    category: 'Shop Setup',
    platform: 'TikTok Shop',
    isDemo: true,
    projectType: 'Portfolio Demonstration • Beauty & Personal Care',
    problem: 'A brand seeking to launch on TikTok Shop had incomplete warehouse profiles causing shipping SLA mismatches, unverified tax documents, and dense desktop-oriented listings unsuitable for fast smartphone browsing.',
    analysis: 'TikTok Shop requires rapid 2-day dispatch compliance and ultra-clear mobile product presentation. Listings must present essential details in the first 2 screen scrolls, with variations clearly labeled to avoid buyer confusion.',
    workPerformed: [
      'Audited Seller Center warehouse and returns configuration to ensure SLA compliance',
      'Built a streamlined 5-step mobile product listing blueprint',
      'Formulated high-contrast mobile gallery cards (hero image, benefit infographic, bundle contents)',
      'Created standardized variation labels (Size / Shade) with high-clarity swatch labels',
      'Verified platform compliance against TikTok Shop beauty claim restrictions'
    ],
    keyImprovements: [
      'Warehouse setup configured for automatic 48-hour dispatch compliance',
      'Mobile listing formatted for rapid 3-second comprehension on smartphone screens',
      'Clear swatch variations eliminating customer confusion',
      'Affiliate sample showcase readiness configured in Seller Center'
    ],
    deliverables: [
      'TikTok Shop Seller Center Onboarding Configuration Guide',
      'Mobile-First Product Presentation Template',
      '7-Slide Creative Gallery Blueprint for Smartphone Viewers',
      'TikTok Shop Policy & Restricted Claims Review Checklist'
    ],
    beforeMetrics: {
      title: 'Initial State',
      scoreOrValue: 'Unconfigured',
      details: 'No warehouse sync, desktop copy dumped into mobile form, SLA risks'
    },
    afterMetrics: {
      title: 'Optimized Framework',
      scoreOrValue: 'Launch-Ready',
      details: 'Configured SLA rules, mobile-first gallery blueprint, verified claims'
    },
    beforeAfterComparison: {
      item: 'Mobile Feature Presentation',
      beforeText: 'This moisturizing serum contains hyaluronic acid and vitamin C. Good for daily use on face and neck. Apply morning and night for best results. Comes in 30ml bottle with dropper.',
      afterText: '💧 DEEP HYDRATION: 2% Pure Hyaluronic Acid locks moisture for 24 hours\n✨ BRIGHTENING: Stable Vitamin C visibly evens skin tone\n🌿 CLEAN FORMULA: Fragrance-free, non-greasy, absorbs in 15 seconds\n📏 SIZE: 1.0 fl oz (30ml) dropper bottle with anti-spill seal',
      highlight: 'Replaced block text with mobile scannable bullets, emoji anchors, and immediate benefit callouts.'
    }
  },
  {
    id: 'walmart-store-audit-framework',
    title: 'Walmart Marketplace 360° Store Health & Catalog Audit',
    category: 'Store Audit',
    platform: 'Walmart',
    isDemo: true,
    projectType: 'Portfolio Demonstration • Electronics & Accessories',
    problem: 'A multi-SKU seller experienced declining impressions and lost Buy Box share across 18 catalog items despite maintaining inventory, without clear visibility into root causes in Seller Center.',
    analysis: 'Conducted systematic audit across 4 core operational pillars: (1) Buy Box competitiveness & shipping lag, (2) Listing Quality Scores & taxonomy defects, (3) Walmart Fulfillment Services (WFS) vs merchant-fulfilled parity, (4) Customer review friction patterns.',
    workPerformed: [
      'Evaluated all 18 active SKUs against Walmart Listing Quality Index',
      'Identified 6 listings missing WFS badge or offering 5+ day delivery times losing to 2-day competitor offers',
      'Discovered 4 suppressed variation items due to mismatched parent-child category IDs',
      'Synthesized customer feedback highlighting confusion around cable compatibility',
      'Developed a prioritized, step-by-step remediation action plan'
    ],
    keyImprovements: [
      'Mapped 12 concrete remediation items categorized by urgency and impact',
      'Identified exact 4 listings eligible for immediate WFS enrollment to regain 2-Day tags',
      'Fixed parent-child variation broken links to restore organic rank pooling',
      'Added compatibility diagram recommendations to prevent recurring customer returns'
    ],
    deliverables: [
      'Comprehensive Store Audit Report (Executive Summary + Action Plan)',
      'SKU-by-SKU Listing Quality Score (LQS) Diagnostic Matrix',
      'Buy Box Competitiveness & Shipping Gap Breakdown',
      'Actionable Quick-Wins Implementation Roadmap'
    ],
    beforeMetrics: {
      title: 'Audit Findings',
      scoreOrValue: '12 Defects Found',
      details: '4 broken variation groups, 6 shipping lag penalties, 3 unaddressed review trends'
    },
    afterMetrics: {
      title: 'Remediation Roadmap',
      scoreOrValue: 'Clear Action Plan',
      details: 'Step-by-step fix guide prioritizing WFS conversion and taxonomy fixes'
    },
    beforeAfterComparison: {
      item: 'Store Health Diagnostic Format',
      beforeText: 'Seller relied on vague impressions of sales dropping without SKU-level attribution.',
      afterText: 'Structured 4-pillar audit framework mapping exact SKU defects, Buy Box loss causes, and prioritized 7-day correction milestones.',
      highlight: 'Systematic diagnosis replacing guesswork with verifiable marketplace operational steps.'
    }
  },
  {
    id: 'ecommerce-creative-infographic-demo',
    title: 'E-commerce Product Imagery & Feature Infographic Framework',
    category: 'Product Creative',
    platform: 'Cross-Platform',
    isDemo: true,
    projectType: 'Portfolio Demonstration • Sports & Fitness',
    problem: 'Product images consisted of a solitary manufacturer white-background render. Shoppers could not visualize product scale, portability, resistance levels, or included accessories, resulting in high bounce rates.',
    analysis: 'Marketplace buyers scan imagery on mobile before reading titles or descriptions. An effective image gallery requires a visual narrative: Main compliance hero -> Dimension/Scale guide -> Key technology callout -> What’s in the box -> Real-life lifestyle use.',
    workPerformed: [
      'Structured a complete 6-slide listing creative asset hierarchy',
      'Designed a clear dimension infographic specifying precise measurements in inches and cm',
      'Engineered an exploded-view diagram showing multi-layer composite durability',
      'Created a comprehensive "Package Includes" visual checklist reducing missing-item support tickets',
      'Formatted all assets for crisp rendering on high-DPI smartphone displays'
    ],
    keyImprovements: [
      'Replaced single static render with a 6-image conversion-engineered gallery',
      'Zero ambiguity on dimensions, eliminating the #1 customer inquiry',
      'Visual demonstration of build materials establishes premium quality perception',
      'Complies with marketplace pure-white background rules for primary slot'
    ],
    deliverables: [
      '6-Slide E-commerce Product Image Architecture Blueprint',
      'Dimension & Scale Infographic Layout Spec',
      'Feature & Material Benefit Callout Design Standards',
      'Mobile-Optimized Crop & Contrast Guidelines'
    ],
    beforeMetrics: {
      title: 'Initial State',
      scoreOrValue: '1 Single Image',
      details: 'Basic supplier render with no scale, specs, or benefit explanation'
    },
    afterMetrics: {
      title: 'Optimized Framework',
      scoreOrValue: '6-Slide Narrative',
      details: 'Dimensions, materials, exploded view, package contents & lifestyle cues'
    },
    beforeAfterComparison: {
      item: 'Listing Visual Experience',
      beforeText: 'Single flat photo of a resistance band set with no indication of tension or included handles.',
      afterText: 'Full 6-image sequence with color-coded resistance chart (10-50 lbs), foam handle close-up, and carrying pouch breakdown.',
      highlight: 'Transforms an ambiguous product into a transparent, self-explanatory purchase decision.'
    }
  }
];
