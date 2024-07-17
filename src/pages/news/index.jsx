import Link from 'next/link';

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
      <ul>
        <li><Link href="/news/1">News Article 1</Link></li>
        <li><Link href="/news/2">News Article 2</Link></li>
      </ul>
    </div>
  );
};

export default NewsPage;
