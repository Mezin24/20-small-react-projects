import { useCallback, useEffect, useState } from 'react';
import './style.css';

interface Product {
  id: number;
  title: string;
}

interface ScrollIndicatorProps {
  dataUrl: string;
}

const ScrollIndicator = ({ dataUrl }: ScrollIndicatorProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [scrolledPercentage, setScrolledPercentage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data: { products: Product[] } = await response.json();

        if (data && data.products && data.products.length > 0) {
          setProducts(data.products);
        }
      } catch (error) {
        console.log(error);
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(dataUrl);
  }, [dataUrl]);

  const handleScroll = useCallback(() => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolledPercentage((scrolled / height) * 100);
  }, []);

  console.log(scrolledPercentage);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className='scroll-header'>
        <h1>ScrollIndicator</h1>
        <div className='scroll-container'>
          <div
            className='progress-bar'
            style={{ width: `${scrolledPercentage}%` }}
          ></div>
        </div>
      </div>
      <ul className='products-list'>
        {products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};
export default ScrollIndicator;
