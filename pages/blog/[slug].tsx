import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blogPosts.json'; // Importa o JSON com os posts

type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  content: {
    intro: string;
    development: string;
    conclusion: string;
  };
  featuredImage: string;
};

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Head Section */}
      <Head>
        <title>{post.title} | Blog TECHWAY</title>
        <meta name="description" content={`Leia "${post.title}" e descubra insights valiosos.`} />
        <meta name="keywords" content={`tecnologia, produtividade, blog, ${post.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <article className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-400 text-sm mb-8">
            Por {post.author} • {new Date(post.date).toLocaleDateString()}
          </p>
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Introdução</h2>
              <p className="text-gray-300 leading-relaxed">{post.content.intro}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Desenvolvimento</h2>
              <p className="text-gray-300 leading-relaxed">{post.content.development}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Conclusão</h2>
              <p className="text-gray-300 leading-relaxed">{post.content.conclusion}</p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
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
  const post = blogPosts.find((post) => post.slug === params?.slug);

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
