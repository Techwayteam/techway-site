import type { CheckCircle, Award, Zap, BarChart2, Headphones } from 'lucide-react'

export interface PageData {
  seo: {
    pageTitle: string
    pageDescription: string
    pageKeywords: string
  }
  hero: {
    heroTitle: string
    heroSubtitle: string
    heroCTA: string
    heroImage: string
  }
  story: {
    storyTitle: string
    storyText: string
    storyImage: string
  }
  benefits: Array<{
    title: string
    description: string
    icon: 'CheckCircle' | 'Award' | 'Zap' | 'BarChart2' | 'Headphones'
  }>
  solution: {
    solutionTitle: string
    solutionText: string
  }
  cta: {
    ctaText: string
    ctaButton: string
    ctaLink: string
  }
}
