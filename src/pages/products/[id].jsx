'use-client'

import { useRouter } from 'next/router';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Details for {id}</h1>
    </div>
  );
};

export default ProductDetailPage;
