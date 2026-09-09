export type PlatformOption = 'Walmart' | 'TikTok Shop' | 'Both' | 'General Inquiry';

export interface ServiceItem {
  id: string;
  name: string;
  problem: string;
  solution: string;
  deliverables: string[];
}

export interface ServiceCategory {
  id: string;
  categoryNumber: number;
  title: string;
  shortDescription: string;
  services: ServiceItem[];
  platform: 'Walmart' | 'TikTok Shop' | 'Cross-Platform';
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  platform: 'Walmart' | 'TikTok Shop' | 'Both' | 'Cross-Platform';
  isDemo: boolean;
  projectType: string;
  problem: string;
  analysis: string;
  workPerformed: string[];
  keyImprovements: string[];
  deliverables: string[];
  beforeMetrics?: {
    title: string;
    scoreOrValue: string;
    details: string;
  };
  afterMetrics?: {
    title: string;
    scoreOrValue: string;
    details: string;
  };
  beforeAfterComparison?: {
    item: string;
    beforeText: string;
    afterText: string;
    highlight: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  platform: PlatformOption;
  message: string;
  storeUrl?: string;
}

export interface AuditRequestData {
  name: string;
  email: string;
  platform: PlatformOption;
  storeUrl: string;
  currentBottleneck: string;
}
