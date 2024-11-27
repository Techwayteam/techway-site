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
    storyImageDescription: string
  }
    solution: {
    aboutsolution: string
    solutionTitle_1: string
    solutionText_1: string
    solutionTitle_2: string
    solutionText_2: string
    solutionTitle_3: string
    solutionText_3: string
    solutionctatext_1: string
    solutionctalink_1: string
    solutionctatext_2: string
    solutionctalink_2: string
    solutionctatext_3: string
    solutionctalink_3: string
  }
  benefits: Array<{
    title: string
    description: string
    icon: 'CheckCircle' | 'Award' | 'Zap' | 'BarChart2' | 'Headphones'
  }>
  cta: {
    ctaText: string
    ctaButton: string
    ctaLink: string
  }
}
