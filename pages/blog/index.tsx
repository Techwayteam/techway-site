import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json'; // Importa o JSON criado no passo 1

type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  featuredImage: string;
};

interface BlogProps {
  posts: Post[];
}

const BlogHome: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Head Section */}
      <Head>
        <title>Blog TECHWAY - Insights e Soluções</title>
        <meta
          name="description"
          content="Descubra insights valiosos e soluções tecnológicas que podem transformar sua rotina e sua empresa. Explore nosso blog!"
        />
        <meta name="keywords" content="tecnologia, produtividade, soluções empresariais, blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Blog TECHWAY</h1>
          <p className="text-gray-400 mb-12">
            Explore nossos artigos e descubra como nossas soluções podem transformar sua rotina e sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Por {post.author} • {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-blue-400 hover:underline">Leia Mais →</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
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
