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
    introduction: {
      text: string;
      image: string;
      imageDescription: string;
    };
    sections: Array<{
      title: string;
      text: string;
      image: string;
      imageDescription: string;
    }>;
    conclusion: {
      text: string;
      cta: {
        text: string;
        link: string;
      };
    };
  };
  featuredImage: string;
  tags: string[];
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
        <meta
          name="description"
          content={`Leia "${post.title}" e descubra insights valiosos.`}
        />
        <meta
          name="keywords"
          content={`tecnologia, produtividade, blog, ${post.tags.join(', ')}`}
        />
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
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introdução</h2>
            <img
              src={post.content.introduction.image}
              alt={post.content.introduction.imageDescription}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              {post.content.introduction.text}
            </p>
          </section>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <section key={index} className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <img
                src={section.image}
                alt={section.imageDescription}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 leading-relaxed">{section.text}</p>
            </section>
          ))}

          {/* Conclusion */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Conclusão</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {post.content.conclusion.text}
            </p>
            <a
              href={post.content.conclusion.cta.link}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-block"
            >
              {post.content.conclusion.cta.text}
            </a>
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
