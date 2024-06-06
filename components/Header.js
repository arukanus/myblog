import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-end space-x-4">
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
    </nav>
  </header>
);

export default Header;
