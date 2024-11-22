import * as LucideIcons from 'lucide-react';

export type PageData = {
  seo: {
    pageTitle: string;
    pageDescription: string;
    pageKeywords: string;
  }
  hero: {
    heroTitle: string;
    heroSubtitle: string;
    heroCTA: string;
    heroImage: string;
  }
  story: {
    storyTitle: string;
    storyText: string;
    storyImage: string;
  }
  benefits: Array<{
    title: string;
    description: string;
    icon: keyof typeof LucideIcons;
  }>
  solution: {
    solutionTitle: string;
    solutionText: string;
  }
  cta: {
    ctaText: string;
    ctaButton: string;
    ctaLink: string;
  }
}
