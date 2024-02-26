import { useCallback, useRef } from 'react';
import { useFetch } from '../useFetch/useFetch';
import { ApiResponse, API } from '../useFetch/UseFetchTest';

const ScrollToTopAndBottom = () => {
  const { data, error, isLoading } = useFetch<ApiResponse>({
    url: `${API}/products?limit=100`,
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleScrollBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>ScrollToTopAndBottom</h1>
      <button onClick={handleScrollBottom}>Scroll to bottom</button>
      <ul>
        {data &&
          data.products &&
          data.products.length &&
          data.products.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
      <div ref={bottomRef} />
      <button onClick={handleScrollTop}>Scroll to top</button>
    </div>
  );
};
export default ScrollToTopAndBottom;
