import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            {post.title === "The Ultimate Guide to Going Viral on TikTok" ? (
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.title}
              </a>
            ) : (
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a className="text-blue-500 hover:underline">{post.title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
