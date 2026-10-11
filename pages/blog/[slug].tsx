import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json';
import ArticleContent, { ContentBlock } from '../../components/blog/ArticleContent';

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
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>{post.seoTitle || `${post.title} | Blog TECHWAY`}</title>
        <meta name="description" content={post.metaDescription || post.subtitle} />
        <link rel="canonical" href={`https://techway.one/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.subtitle} />
        <meta property="og:url" content={`https://techway.one/blog/${post.slug}`} />
        <meta property="og:image" content={`https://techway.one${post.featuredImage}`} />
        <meta property="og:image:alt" content={post.featuredImageAlt || post.title} />
        {post.featuredImageWidth && <meta property="og:image:width" content={String(post.featuredImageWidth)} />}
        {post.featuredImageHeight && <meta property="og:image:height" content={String(post.featuredImageHeight)} />}
        <meta name="keywords" content={`tecnologia, produtividade, blog, ${post.tags.join(', ')}`} />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      <Header />

      <main className={`flex-grow ${post.layout === 'editorial' ? 'pt-20' : ''}`}>
        {post.layout !== 'editorial' && <div className="relative w-full h-[60vh]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
          <div className="absolute inset-x-0 bottom-0 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                {post.title}
              </h1>
            </div>
          </div>
        </div>}

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            {post.layout === 'editorial' && <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">{post.title}</h1>}
            <p className="text-xl text-gray-600 mb-4">{post.subtitle}</p>
            <p className="text-gray-500 text-sm">
              Por {post.author} • {new Date(`${post.date}T12:00:00Z`).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
            </p>
          </header>

          {post.layout === 'editorial' && (
            <figure className="mb-10">
              <Image src={post.featuredImage} alt={post.featuredImageAlt || post.title} width={post.featuredImageWidth || 1600} height={post.featuredImageHeight || 900} sizes="(max-width: 896px) 100vw, 848px" className="w-full h-auto rounded-2xl" priority />
            </figure>
          )}

          <div className="prose prose-lg max-w-none text-lg leading-relaxed">
            {post.content.introductionBlocks ? (
              <ArticleContent blocks={post.content.introductionBlocks} />
            ) : (
              <p className="mb-8">{post.content.introduction}</p>
            )}

            {post.content.sections.map((section, index) => (
              <section key={index} className="my-12">
                <div className={`flex flex-col lg:flex-row items-center gap-10 ${section.image ? 'min-h-[320px]' : ''}`}>
                  <div className={`w-full ${section.image ? 'lg:w-1/2' : ''} prose self-center`}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                    {section.blocks ? <ArticleContent blocks={section.blocks} /> : <p>{section.text}</p>}
                  </div>
                  {section.image && (
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                      <Image
                        src={section.image}
                        alt={section.imageDescription || section.title}
                        width={500}
                        height={350}
                        className="rounded-lg mx-auto"
                      />
                    </div>
                  )}
                </div>
              </section>
            ))}

            <section className="mb-12 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
              <p className="text-lg font-semibold mb-4">Para finalizar:</p>
              {post.content.conclusionBlocks ? (
                <ArticleContent blocks={post.content.conclusionBlocks} />
              ) : (
                <p>{post.content.conclusion}</p>
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

            <div className="text-center mt-12">
              <Link
                href={post.cta.link}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
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
