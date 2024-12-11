import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json';

type Section = {
  title: string;
  text: string;
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
  content: {
    introduction: string;
    sections: Section[];
    conclusion: string;
  };
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
        <title>{post.title} | Blog TECHWAY</title>
        <meta name="description" content={post.subtitle} />
        <meta name="keywords" content={`tecnologia, produtividade, blog, ${post.tags.join(', ')}`} />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        <div className="relative w-full h-[60vh]">
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
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
            <p className="text-xl text-gray-600 mb-4">{post.subtitle}</p>
            <p className="text-gray-500 text-sm">
              Por {post.author} • {new Date(post.date).toLocaleDateString()}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8">{post.content.introduction}</p>

            {post.content.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                {section.image && (
                  <div className="mb-4">
                    <Image
                      src={section.image}
                      alt={section.imageDescription || section.title}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <p>{section.text}</p>
              </section>
            ))}

            <section className="mb-12 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
              <p className="text-lg font-semibold mb-4">Para finalizar:</p>
              <p>{post.content.conclusion}</p>
            </section>

            <div className="text-center mt-12">
              <Link href={post.cta.link}>
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300">
                  {post.cta.text}
                </a>
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
