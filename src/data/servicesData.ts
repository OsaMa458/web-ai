import { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'walmart-store-services',
    categoryNumber: 1,
    title: 'Walmart Store Services',
    shortDescription: 'End-to-end marketplace infrastructure, technical store configuration, daily operational oversight, and health audits for Walmart Marketplace sellers.',
    platform: 'Walmart',
    iconName: 'Building2',
    services: [
      {
        id: 'walmart-store-setup',
        name: 'Store Setup',
        problem: 'Navigating Walmart Marketplace application hurdles, tax/banking requirements, seller center configuration, shipping templates, and account approval delays.',
        solution: 'Help clients establish and configure their Walmart Marketplace presence with the essential store structure, catalog configuration, return policies, and onboarding requirements.',
        deliverables: [
          'Seller Center account configuration & verification guidance',
          'Shipping templates, transit times & fulfillment rules setup',
          'Brand Portal registration & tax/banking verification check',
          'Initial catalog structure & category taxonomy assignment'
        ]
      },
      {
        id: 'walmart-store-management',
        name: 'Store Management',
        problem: 'Operational friction, out-of-stock penalties, unaddressed customer inquiries, catalog glitches, and Seller Center health metric slips.',
        solution: 'Help sellers maintain day-to-day marketplace operations, inventory feeds, listing maintenance, catalog tasks, Seller Center case resolution, and ongoing store health.',
        deliverables: [
          'Daily Seller Center monitoring & inventory sync checks',
          'Listing maintenance & buy-box status tracking',
          'Customer service inquiry routing & response tracking',
          'Case log management with Walmart Partner Support'
        ]
      },
      {
        id: 'walmart-store-audit',
        name: 'Store Audit & Optimization',
        problem: 'Low catalog visibility, unrecognized listing defects, poor content quality scores, and unoptimized operational configurations draining potential sales.',
        solution: 'Identify store-level problems, missed organic ranking opportunities, listing defects, and operational bottlenecks, delivering an actionable roadmap for improvement.',
        deliverables: [
          'Comprehensive store health & listing quality score review',
          'Buy box competitiveness & fulfillment speed check',
          'Category attribute compliance analysis',
          'Prioritized action checklist with quick-win fixes'
        ]
      }
    ]
  },
  {
    id: 'walmart-product-services',
    categoryNumber: 2,
    title: 'Walmart Product Services',
    shortDescription: 'Data-driven catalog expansion, viable supplier identification, and high-ranking listing development tailored to Walmart search algorithms.',
    platform: 'Walmart',
    iconName: 'PackageSearch',
    services: [
      {
        id: 'walmart-product-research',
        name: 'Product Research',
        problem: 'Risk of launching saturated or low-margin items without evaluating Walmart-specific customer demand, competitive density, or fee structures.',
        solution: 'Research and evaluate potential Walmart product opportunities based on real search demand, competitor catalog depth, pricing dynamics, and margin viability.',
        deliverables: [
          'Walmart search volume & competitive gap evaluation',
          'Fee breakdown, referral cost & margin modeling',
          'Competitor price-point & review velocity mapping',
          'Clear launch feasibility assessment'
        ]
      },
      {
        id: 'walmart-product-sourcing',
        name: 'Product Sourcing',
        problem: 'Uncertainty over supplier credibility, lead times, MOQ thresholds, quality standards, and compliance for marketplace fulfillment.',
        solution: 'Help identify suitable sourcing options, assess supplier specifications, and evaluate product units against practical operational and margin requirements.',
        deliverables: [
          'Target supplier screening & capability evaluation',
          'Cost-per-unit & landed cost estimation',
          'Packaging, barcode (UPC/GTIN) & compliance validation',
          'Sample verification guidance'
        ]
      },
      {
        id: 'walmart-listing-optimization',
        name: 'Listing Optimization',
        problem: 'Low Listing Quality Scores (LQS), sparse item specifications, missed search keywords, and uninformative titles suppressing Walmart organic visibility.',
        solution: 'Improve product listings through structured titles, rich key features, complete backend specifications, targeted keywords, and conversion-focused presentation.',
        deliverables: [
          'Keyword-rich title architecture following Walmart standards',
          'Engaging bullet points & rich description formatting',
          'Complete backend specification attribute filling',
          'High Listing Quality Score (LQS) target alignment'
        ]
      }
    ]
  },
  {
    id: 'tiktok-shop-services',
    categoryNumber: 3,
    title: 'TikTok Shop Services',
    shortDescription: 'Dedicated launch and operational management for TikTok Shop, capturing high-growth social commerce demand with compliant listings and store structure.',
    platform: 'TikTok Shop',
    iconName: 'Video',
    services: [
      {
        id: 'tiktok-shop-setup',
        name: 'Shop Setup',
        problem: 'Complex TikTok Shop Seller Center onboarding, warehouse setting confusion, tax document verification, and integration with e-commerce systems.',
        solution: 'Help brands establish and organize their TikTok Shop presence from initial application through warehouse setup, shipping configuration, and catalog initialization.',
        deliverables: [
          'TikTok Shop Seller Center setup & business verification',
          'Warehouse address & shipping profile configuration',
          'E-commerce store or fulfillment integration linkage',
          'Initial catalog upload & compliance review'
        ]
      },
      {
        id: 'tiktok-shop-management',
        name: 'Shop Management',
        problem: 'Strict TikTok Shop SLA deadlines, cancellation rate thresholds, late dispatch rate penalties, and fast-moving inventory tracking.',
        solution: 'Support ongoing TikTok Shop operations, product catalog updates, inventory level adjustments, order status oversight, and account health compliance.',
        deliverables: [
          'Dispatch time & SLA metric monitoring',
          'Product catalog sync & stock adjustment oversight',
          'Seller performance metric tracking to protect account standing',
          'Creator affiliate sample setting & showcase maintenance'
        ]
      },
      {
        id: 'tiktok-product-research',
        name: 'Product Research',
        problem: 'Attempting to sell products poorly suited to mobile video discovery, impulse purchasing, or TikTok trending dynamics.',
        solution: 'Research products and category opportunities specifically suited to TikTok Shop’s social commerce environment, price sensitivity, and viral appeal.',
        deliverables: [
          'Trending product & niche opportunity identification',
          'Viral visual hook & demonstration feasibility evaluation',
          'Impulse pricing sweet-spot ($15–$50) validation',
          'Competitive TikTok Shop storefront review'
        ]
      },
      {
        id: 'tiktok-listing-optimization',
        name: 'Listing Optimization',
        problem: 'Mobile users bouncing due to text-heavy descriptions, missing key product specs, uninviting cover photos, or weak promotional highlights.',
        solution: 'Improve product presentation, mobile-first information structure, creative gallery assets, and conversion-focused listing elements tailored to smartphone shoppers.',
        deliverables: [
          'Short, punchy mobile-first product titles',
          'Key product benefit highlights formatted for quick mobile scanning',
          'Variation and sizing clarity to minimize customer returns',
          'TikTok Shop compliance check on claims and restrictions'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-creative-services',
    categoryNumber: 4,
    title: 'E-commerce Creative Services',
    shortDescription: 'Conversion-centered product imagery, promotional ad assets, and store branding specifically tailored for marketplace conversions, not generic graphic design.',
    platform: 'Cross-Platform',
    iconName: 'Image',
    services: [
      {
        id: 'creative-product-images',
        name: 'Product Images',
        problem: 'Plain supplier photos that fail to answer buyer doubts, showcase dimensions, or communicate core product benefits.',
        solution: 'Create clear, professional product visuals designed specifically to communicate product value, illustrate scale, highlight features, and improve listing presentation.',
        deliverables: [
          'Crisp, compliant hero images on clean white/neutral backgrounds',
          'Infographic callouts explaining key features and materials',
          'Dimension, sizing & bundle breakdown graphics',
          'High-contrast mobile-optimized detail crops'
        ]
      },
      {
        id: 'creative-ad-creatives',
        name: 'Ad Creatives',
        problem: 'Marketplace ad spend wasted on generic images that blend into feeds without stopping the scroll or generating clicks.',
        solution: 'Create conversion-focused promotional visuals and static carousel assets engineered for e-commerce advertising campaigns on TikTok and marketplace placements.',
        deliverables: [
          'High-converting promotional display banners',
          'Scroll-stopping TikTok promotional cards',
          'Offer and discount badge callouts formatted for readability',
          'Platform-compliant aspect ratios (1:1, 9:16, 4:5)'
        ]
      },
      {
        id: 'creative-store-graphics',
        name: 'Store Graphics',
        problem: 'Bare or generic storefronts that look untrustworthy to prospective shoppers looking for established brands.',
        solution: 'Create supporting brand banners, promotional headers, and marketplace storefront visual assets to give your store an authoritative, professional look.',
        deliverables: [
          'Walmart brand page header banners & collection banners',
          'TikTok Shop showcase category headers & logo badges',
          'Seasonal promotional banners & bundle graphics',
          'Cohesive brand color scheme application across assets'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-growth-optimization',
    categoryNumber: 5,
    title: 'E-commerce Growth & Optimization',
    shortDescription: 'Systematic diagnosis of storefront bottlenecks, conversion friction, and organic search leaks based on marketplace metrics and qualitative analysis.',
    platform: 'Cross-Platform',
    iconName: 'TrendingUp',
    services: [
      {
        id: 'growth-store-audit',
        name: 'Store Audit',
        problem: 'Sellers feeling stuck without understanding why their listings receive traffic but fail to convert, or why their impressions suddenly dropped.',
        solution: 'Thoroughly inspect the store to identify hidden operational weaknesses, search ranking drop-offs, pricing disadvantages, and untapped quick wins.',
        deliverables: [
          'Deep audit of top 5–10 core catalog listings',
          'Listing Quality Score & attribute completeness evaluation',
          'Fulfillment method (WFS vs merchant) & shipping competitiveness audit',
          'Actionable priority scorecard with clear next steps'
        ]
      },
      {
        id: 'growth-listing-conversion',
        name: 'Listing Conversion Optimization',
        problem: 'High traffic costs with low unit session rates due to unclear copy, missing social proof cues, confusing variations, or weak hero imagery.',
        solution: 'Refine listing presentation, attribute clarity, and persuasive messaging so qualified shoppers understand product benefits instantly and feel confident buying.',
        deliverables: [
          'Review analysis to address recurring customer objections in copy',
          'Restructured bullet points addressing top purchasing questions',
          'Above-the-fold image sequence optimization',
          'Variation setup restructuring for intuitive selection'
        ]
      },
      {
        id: 'growth-performance-analysis',
        name: 'Product/Store Performance Analysis',
        problem: 'Drowning in raw Seller Center data reports without knowing which numbers indicate real bottlenecks or where to focus attention.',
        solution: 'Analyze available marketplace performance reports to identify trends, inventory velocity dips, cancellation spikes, and specific areas for sustainable improvement.',
        deliverables: [
          'Seller Center metrics breakdown (impressions, CTR, CVR, buy box %)',
          'Return rate & negative feedback root-cause review',
          'Fulfillment SLA and account health benchmark review',
          'Practical monthly maintenance and optimization recommendations'
        ]
      }
    ]
  }
];
