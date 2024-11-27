import type { PageData } from '../types/PageData'

export const landingPages: Record<string, PageData> = {
  default: {
    seo: {
      pageTitle: "Aumente sua Produtividade com Soluções TECHWAY",
      pageDescription: "Descubra como a TECHWAY pode otimizar seus processos e aumentar sua eficiência com soluções tecnológicas personalizadas.",
      pageKeywords: "eficiência no trabalho, produtividade, automação de processos, soluções tecnológicas, TECHWAY"
    },
    hero: {
      heroTitle: "Chega de Perder Tempo com Tarefas Manuais!",
      heroSubtitle: "A TECHWAY transforma sua rotina com soluções tecnológicas simples, rápidas e eficazes.",
      heroCTA: "Fale com um Especialista",
    },
    story: {
      storyTitle: "Você não precisa fazer tudo sozinho",
      storyText: "Sabemos como é cansativo lidar com tarefas repetitivas que poderiam ser otimizadas. A TECHWAY nasceu para ajudar pessoas como você a transformar a rotina com tecnologia simples e acessível. Nossa missão é garantir que cada solução entregue faça uma diferença real no seu dia a dia.",
      storyImage: "/caotic_work_load.webp",
      storyImageDescription: "Pessoa estressada, com trabalho atrasado e muita desorganização"
    },
    solution: {
      aboutsolution: "Com a TECHWAY, você pode automatizar o que toma tempo, organizar informações importantes em um único lugar e tomar decisões mais rápidas e inteligentes.",
      solutionTitle_1: "Automação de Tarefas",
      solutionText_1: "Elimine processos manuais repetitivos e concentre-se no que realmente importa. Economize horas do seu dia.",
      solutionTitle_2: "Dashboards Personalizados",
      solutionText_2: "Tenha uma visão clara do que precisa ser feito com dashboards organizados, desenvolvidos sob medida para você.",
      solutionTitle_3: "Análise de Dados Eficiente",
      solutionText_3: "Transforme dados confusos em insights práticos, permitindo decisões rápidas e assertivas.",
      solutionctatext_1: "Descubra como otimizar seu tempo",
      solutionctalink_1: "#contato",
      solutionctatext_2: "Veja seus dados organizados",
      solutionctalink_2: "#contato",
      solutionctatext_3: "Saiba mais sobre nossas análises",
      solutionctalink_3: "#contato"
    },
benefits: [
  { title: "Menos Tempo Perdido", description: "Automatize tarefas repetitivas e reduza o desperdício de tempo em atividades manuais.", icon: "Clock" },
  { title: "Foco no Importante", description: "Concentre-se no que realmente importa, sem distrações com processos desnecessários.", icon: "Target" },
  { title: "Resultados Visíveis", description: "Veja a transformação real no seu trabalho, com aumento de produtividade e eficiência.", icon: "TrendingUp" },
  { title: "Simples e Intuitivo", description: "Soluções que qualquer pessoa pode usar, sem complicações ou treinamentos extensivos.", icon: "Box" },
  { title: "Apoio Constante", description: "Nossa equipe está com você em cada passo, oferecendo suporte e atualizações sempre que precisar.", icon: "Headphones" }
],
simulate: {
  simulateTitle: "Como será a sua rotina com a TECHWAY?",
  simulateText: "Com a nossa parceria, as tarefas manuais e repetitivas são coisa do passado. Junto com a TECHWAY, você terá mais tempo para se concentrar no que realmente importa, enquanto nossas soluções simplificam e otimizam seus processos. Não é apenas produtividade, é liberdade para focar no crescimento e nos resultados.",
  simulateImage: "/peacefull_time_saved.webp",
  simulateImageDescription: "Pessoa relaxada em ambiente organizado, representando eficiência e tranquilidade."
},
    cta: {
      ctaText: "Pronto para transformar seu trabalho?",
      ctaButton: "Converse com um Especialista",
      ctaLink: "#contato"
    }
  }
}
