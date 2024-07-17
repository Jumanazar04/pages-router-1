import Link from 'next/link';

const CategoriesPage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        <li><Link href="/categories/1">Category 1</Link></li>
        <li><Link href="/categories/2">Category 2</Link></li>
      </ul>
    </div>
  );
};

export default CategoriesPage;
