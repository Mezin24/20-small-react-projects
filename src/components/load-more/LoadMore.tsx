import { useEffect, useState } from 'react';
import './style.css';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

interface ProductsData {
  total: number;
  skip: number;
  products: Product[];
}

const LoadMore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        if (response.ok) {
          const data: ProductsData = await response.json();
          if (data && data.products && data.products.length) {
            setProducts((prev) => [...prev, ...data.products]);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [count]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className='products-container'>
        {products && products.length
          ? products.map(({ id, thumbnail, title }) => (
              <div className='product' key={id}>
                <img src={thumbnail} alt={title} key={id} />
                <p>{title}</p>
              </div>
            ))
          : null}
      </div>
      <div className='load-more-btn-container'>
        {products.length >= 100 ? (
          <h1>That's the end off goods</h1>
        ) : (
          <button onClick={() => setCount((prev) => prev + 1)}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};
export default LoadMore;
