import { useFetch } from './useFetch';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ApiResponse {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
}

export const API = 'https://dummyjson.com';

const UseFetchTest = () => {
  const { data, error, isLoading } = useFetch<ApiResponse>({
    url: `${API}/products`,
  });

  return (
    <div>
      <h1>Use Fetch</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data &&
        data?.products &&
        data.products.length &&
        data.products.map(({ id, title }) => <p key={id}>{title}</p>)}
    </div>
  );
};
export default UseFetchTest;
