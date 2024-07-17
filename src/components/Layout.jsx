import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className='bg-slate-300'>
          <ul className='container mx-auto flex justify-evenly py-4 px-8 text-3xl font-bold'>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/news">News</Link></li>
          </ul>
        </nav>
      </header>
      <main className='container mx-auto p-4'>{children}</main>
      <footer className='container mx-auto text-center'>
        <p>© 2024 My Next.js App</p>
      </footer>
    </div>
  );
};

export default Layout;
