import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json';
import Seo from '../../components/Seo';
import site from '../../data/site.json';

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  featuredImage: string;
  featuredImageAlt?: string;
  tags: string[];
};

interface BlogProps {
  posts: Post[];
}

const BlogHome: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="tw-revamp tw-blog flex flex-col min-h-screen bg-white text-gray-900">
      <Seo title={site.blogTitle} description={site.blogDescription} path="/blog" />
      <Head>
        <meta name="keywords" content="tecnologia, produtividade, soluções empresariais, blog" />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      <Header />

      <main className="tw-blog-index flex-grow">
        <section className="tw-blog-hero">
          <div className="mx-auto max-w-6xl px-4">
            <p className="tw-kicker-pill"><span aria-hidden="true">✦</span> CONTEÚDO TECHWAY</p>
            <h1>Ideias para seu negócio <span>render mais.</span></h1>
            <p className="tw-blog-lead">
              Atendimento, automação e inteligência artificial sem complicação.
              Leituras práticas para quem empreende e faz de tudo um pouco.
            </p>
          </div>
        </section>

        <section className="tw-blog-listing" aria-labelledby="tw-blog-posts-heading">
          <div className="mx-auto max-w-6xl px-4">
            <div className="tw-blog-section-label">
              <div>
                <p className="tw-blog-eyebrow">EXPLORE O BLOG</p>
                <h2 id="tw-blog-posts-heading">Para aprender e colocar em prática.</h2>
              </div>
              <span>{posts.length} artigos</span>
            </div>
            <div className="tw-blog-cards">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="tw-blog-card group">
                  <div className="tw-blog-card-media">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      fill
                      sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) 50vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="tw-blog-card-content">
                    <p className="tw-blog-card-meta">
                      <time dateTime={post.date}>{new Date(`${post.date}T12:00:00Z`).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</time>
                      <span aria-hidden="true">·</span>
                      <span>Leitura Techway</span>
                    </p>
                    <h3>{post.title}</h3>
                    <p className="tw-blog-card-summary">{post.subtitle}</p>
                    <div className="tw-blog-tags">
                      {post.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                    <span className="tw-blog-card-action">Ler artigo <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)),
    },
  };
};

export default BlogHome;
