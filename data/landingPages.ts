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
      storyImage: "/placeholder.svg?height=500&width=500",
      storyImageDescription: "Nossa História"
    },
    solution: {
    aboutsolution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac aliquam magna, non molestie lorem. Cras convallis dui in orci sollicitudin, eget efficitur ex euismod. Quisque rutrum nec urna et posuere. Donec imperdiet molestie leo, vel finibus magna mollis et. Nullam non est vel mauris varius porta ut in enim. Curabitur imperdiet sem a sem fermentum, et vestibulum neque rhoncus. Quisque hendrerit odio orci, ut pharetra ipsum viverra sit amet.",
    solutionTitle_1: "Lorem Ipsum",
    solutionText_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac aliquam magna, non molestie lorem. Cras convallis dui in orci sollicitudin, eget efficitur ex euismod. Quisque rutrum nec urna et posuere.",
    solutionTitle_2: "Lorem Ipsum",
    solutionText_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac aliquam magna, non molestie lorem. Cras convallis dui in orci sollicitudin, eget efficitur ex euismod. Quisque rutrum nec urna et posuere.",
    solutionTitle_3: "Lorem Ipsum",
    solutionText_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac aliquam magna, non molestie lorem. Cras convallis dui in orci sollicitudin, eget efficitur ex euismod. Quisque rutrum nec urna et posuere.",
    solutionctatext_1: "Lorem ipsum dolor sit amet",
    solutionctalink_1: "#contato",
    solutionctatext_2: "Lorem ipsum dolor sit amet",
    solutionctalink_2: "#contato",
    solutionctatext_3: "Lorem ipsum dolor sit amet",
    solutionctalink_3: "#contato",
    },
    benefits: [
      { title: "Personalização", description: "Soluções adaptadas às suas necessidades específicas, garantindo que cada aspecto da tecnologia esteja alinhado com seus objetivos de negócio.", icon: "CheckCircle" },
      { title: "Eficiência", description: "Otimização de processos para maior produtividade, eliminando gargalos e maximizando o desempenho de sua equipe e sistemas.", icon: "Award" },
      { title: "Inovação", description: "Acesso às mais recentes tecnologias e práticas, mantendo sua empresa à frente da concorrência e preparada para o futuro.", icon: "Zap" },
      { title: "Análise de Dados", description: "Insights poderosos através de análises avançadas, permitindo tomadas de decisão mais informadas e estratégicas.", icon: "BarChart2" },
      { title: "Suporte Contínuo", description: "Assistência técnica dedicada e atualizações constantes, garantindo que seus sistemas estejam sempre funcionando no seu melhor.", icon: "Headphones" }
    ],
    cta: {
      ctaText: "Pronto para transformar seu negócio com tecnologia personalizada?",
      ctaButton: "Fale Conosco",
      ctaLink: "#contato"
    }
  }
}
