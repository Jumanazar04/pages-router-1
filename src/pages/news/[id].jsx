'use-client'

import { useRouter } from 'next/router';

const NewsDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>News Details for {id}</h1>
    </div>
  );
};

export default NewsDetailPage;
