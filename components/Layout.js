import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Blog Application</p>
      </footer>
      <style jsx>{`
        header, footer {
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
        }
        nav ul {
          display: flex;
          justify-content: center;
          list-style: none;
        }
        nav ul li {
          margin: 0 1rem;
        }
        main {
          padding: 1rem;
        }
        @media (max-width: 600px) {
          nav ul {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
