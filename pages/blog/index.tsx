import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json';

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  featuredImage: string;
  tags: string[];
};

interface BlogProps {
  posts: Post[];
}

const BlogHome: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Blog TECHWAY - Insights e Soluções</title>
        <meta
          name="description"
          content="Descubra insights valiosos e soluções tecnológicas que podem transformar sua rotina e sua empresa. Explore nosso blog!"
        />
        <meta name="keywords" content="tecnologia, produtividade, soluções empresariais, blog" />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog TECHWAY</h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore nossos artigos e descubra como nossas soluções podem transformar sua rotina e sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <a className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.subtitle}</p>
                    <p className="text-sm text-gray-500">
                      Por {post.author} • {new Date(post.date).toLocaleDateString()}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: blogPosts,
    },
  };
};

export default BlogHome;
