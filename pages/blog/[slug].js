import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch('/data/data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const foundPost = data.find(post => post.slug === slug);
          setPost(foundPost);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.description}</p>
      <p className="mb-4">{post.author}</p>
      <p className="mb-4">{post.date}</p>

    </Layout>
  );
};

export default Post;

