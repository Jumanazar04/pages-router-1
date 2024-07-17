'use-client'

import { useRouter } from 'next/router';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Category Details for {id}</h1>
    </div>
  );
};

export default CategoryDetailPage;
