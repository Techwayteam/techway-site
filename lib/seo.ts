import site from '../data/site.json';

// A raiz usa /; as demais rotas publicadas usam caminhos sem barra final.
export const absoluteUrl = (path: string) => new URL(path, `${site.origin}/`).href;

type ArticleMetadata = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  featuredImage: string;
  metaDescription?: string;
  tags: string[];
};

export function articleStructuredData(post: ArticleMetadata) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const isTeam = post.author === 'Equipe TECHWAY';
  // O cargo permanece no crédito visível; não faz parte do nome da pessoa.
  const [name, jobTitle] = post.author.split(' - ');

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.metaDescription || post.subtitle,
    image: [absoluteUrl(post.featuredImage)],
    datePublished: post.date,
    author: isTeam
      ? { '@type': 'Organization', name: post.author }
      : { '@type': 'Person', name, ...(jobTitle ? { jobTitle } : {}) },
    publisher: { '@type': 'Organization', name: site.name, url: absoluteUrl('/') },
    inLanguage: site.language,
    keywords: post.tags,
  };
}

export const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c');
