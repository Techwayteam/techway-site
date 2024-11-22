import type { PageData } from '../types/PageData'

export const landingPages: Record<string, PageData> = {
  default: {
    seo: {
      pageTitle: "Soluções Tecnológicas Personalizadas | TECHWAY",
      pageDescription: "Transforme seu negócio com soluções tecnológicas personalizadas da TECHWAY. Aumente a eficiência e impulsione o crescimento.",
      pageKeywords: "soluções tecnológicas, personalização, eficiência empresarial, transformação digital"
    },
    hero: {
      heroTitle: "Transforme Seu Negócio com Tecnologia Personalizada",
      heroSubtitle: "Soluções sob medida para impulsionar sua eficiência e crescimento",
      heroCTA: "Solicite uma Demonstração",
      heroImage: "/placeholder.svg?height=1080&width=1920"
    },
    story: {
      storyTitle: "Nossa História",
      storyText: "Há uma década, vimos empresas lutando com soluções tecnológicas genéricas que não atendiam suas necessidades específicas. Foi então que decidimos criar a TECHWAY, com a missão de oferecer soluções verdadeiramente personalizadas que se adaptam perfeitamente ao seu negócio.",
      storyImage: "/placeholder.svg?height=500&width=500"
    },
    benefits: [
      { title: "Personalização", description: "Soluções adaptadas às suas necessidades específicas, garantindo que cada aspecto da tecnologia esteja alinhado com seus objetivos de negócio.", icon: "CheckCircle" },
      { title: "Eficiência", description: "Otimização de processos para maior produtividade, eliminando gargalos e maximizando o desempenho de sua equipe e sistemas.", icon: "Award" },
      { title: "Inovação", description: "Acesso às mais recentes tecnologias e práticas, mantendo sua empresa à frente da concorrência e preparada para o futuro.", icon: "Zap" },
      { title: "Análise de Dados", description: "Insights poderosos através de análises avançadas, permitindo tomadas de decisão mais informadas e estratégicas.", icon: "BarChart2" },
      { title: "Suporte Contínuo", description: "Assistência técnica dedicada e atualizações constantes, garantindo que seus sistemas estejam sempre funcionando no seu melhor.", icon: "Headphones" }
    ],
    solution: {
      solutionTitle: "Nossa Abordagem",
      solutionText: "Na TECHWAY, não acreditamos em soluções de tamanho único. Nossa equipe de especialistas trabalha em estreita colaboração com você para entender profundamente seus desafios e objetivos. Com base nessa compreensão, desenvolvemos soluções tecnológicas sob medida que se integram perfeitamente ao seu negócio, impulsionando a eficiência e o crescimento."
    },
    cta: {
      ctaText: "Pronto para transformar seu negócio com tecnologia personalizada?",
      ctaButton: "Fale Conosco",
      ctaLink: "#contato"
    }
  },
  // You can add more variations here
  ecommerce: {
    // ... e-commerce specific content
  },
  fintech: {
    // ... fintech specific content
  }
}
