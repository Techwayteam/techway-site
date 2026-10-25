import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json';
import ArticleContent, { ContentBlock } from '../../components/blog/ArticleContent';
import styles from '../../styles/BlogArticle.module.css';
import Seo from '../../components/Seo';
import { articleStructuredData } from '../../lib/seo';

type Section = {
  title: string;
  text: string;
  blocks?: ContentBlock[];
  image?: string;
  imageDescription?: string;
};

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  featuredImage: string;
  featuredImageAlt?: string;
  featuredImageWidth?: number;
  featuredImageHeight?: number;
  layout?: 'editorial';
  seoTitle?: string;
  metaDescription?: string;
  content: {
    introduction: string;
    introductionBlocks?: ContentBlock[];
    sections: Section[];
    conclusion: string;
    conclusionBlocks?: ContentBlock[];
  };
  sources?: { title: string; url: string }[];
  related?: { title: string; slug: string }[];
  cta: {
    text: string;
    link: string;
  };
  tags: string[];
};

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const coverSizes: Record<string, { width: number; height: number }> = {
    '/produtividade_capa.webp': { width: 1792, height: 1024 },
    '/automacao_capa.webp': { width: 1792, height: 1024 },
    '/empreendedor_dilema_capa.webp': { width: 1536, height: 1024 },
  };
  const coverSize = coverSizes[post.featuredImage];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Seo
        title={post.seoTitle || `${post.title} | Blog TECHWAY`}
        description={post.metaDescription || post.subtitle}
        path={`/blog/${post.slug}`}
        image={post.featuredImage}
        imageAlt={post.featuredImageAlt || post.title}
        imageWidth={post.featuredImageWidth || coverSize?.width}
        imageHeight={post.featuredImageHeight || coverSize?.height}
        publishedTime={post.date}
        structuredData={articleStructuredData(post)}
      />
      <Head>
        <meta name="keywords" content={`tecnologia, produtividade, blog, ${post.tags.join(', ')}`} />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <article className={styles.article} lang="pt-BR">
          <header className={styles.header}>
            <Link href="/blog" className={styles.backLink}>← Todos os artigos</Link>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subtitle}>{post.subtitle}</p>
            <p className={styles.byline}>
              <span>Por {post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{new Date(`${post.date}T12:00:00Z`).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</time>
            </p>
          </header>

          <figure className={styles.cover}>
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              width={post.featuredImageWidth || coverSize?.width || 1600}
              height={post.featuredImageHeight || coverSize?.height || 900}
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 896px) calc(100vw - 64px), 832px"
              priority
            />
          </figure>

          <div className={styles.body}>
            {post.content.introductionBlocks ? (
              <ArticleContent blocks={post.content.introductionBlocks} />
            ) : (
              <p className="article-paragraph">{post.content.introduction}</p>
            )}

            {post.content.sections.map((section, index) => (
              <section key={index} className={styles.section} aria-labelledby={`section-${index}`}>
                <h2 id={`section-${index}`} className={styles.sectionTitle}>{section.title}</h2>
                {section.image && (
                  <figure className={styles.sectionImage}>
                    <Image
                      src={section.image}
                      alt={section.imageDescription || section.title}
                      width={1024}
                      height={1024}
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 64px), 320px"
                      loading="lazy"
                    />
                  </figure>
                )}
                {section.blocks ? <ArticleContent blocks={section.blocks} /> : <p className="article-paragraph">{section.text}</p>}
              </section>
            ))}

            <section className={styles.conclusion} aria-label="Conclusão">
              <p className={styles.conclusionLabel}>Para finalizar</p>
              {post.content.conclusionBlocks ? (
                <ArticleContent blocks={post.content.conclusionBlocks} />
              ) : (
                <p className="article-paragraph">{post.content.conclusion}</p>
              )}
            </section>

            {post.sources && post.sources.length > 0 && (
              <aside className="mb-8" aria-label="Fontes do artigo">
                <h2 className="text-xl font-semibold mb-3">Fontes e referências</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} className="text-blue-700 underline">{source.title}</a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {post.related && post.related.length > 0 && (
              <aside className="mb-8" aria-label="Artigos relacionados">
                <h2 className="text-xl font-semibold mb-3">Continue a leitura</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {post.related.map((related) => (
                    <li key={related.slug}>
                      <Link href={`/blog/${related.slug}`} className="text-blue-700 underline">{related.title}</Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <div className={styles.ctaContainer}>
              <Link
                href={post.cta.link}
                className={styles.cta}
              >
                {post.cta.text}
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
