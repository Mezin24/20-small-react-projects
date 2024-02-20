import { useState } from 'react';
import './style.css';
import User from './User';

export interface UserData {
  message?: string;
  avatar_url?: string;
  created_at?: string;
  name?: string;
  login: string;
  followers?: string;
  following?: string;
  public_repos?: string;
  html_url?: string;
}

const GithubFinder = () => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [notFound, setNotFound] = useState(false);

  const fetchUser = async (userName: string) => {
    setLoading(true);
    setNotFound(false);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data: UserData = await response.json();

      if (data && !data.message) {
        setUser(data);
      } else {
        setNotFound(true);
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!input.trim()) return;
    fetchUser(input);
    setInput('');
  };

  console.log(user);

  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '2rem',
      }}
    >
      <h2>GithubFinder</h2>
      <div className='gh-search-container'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter GH nick'
          className='gh-input'
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <h3>Loading...</h3>}
      {notFound && <h3>User Not Found! Try Again...</h3>}
      {user && <User user={user} />}
    </div>
  );
};
export default GithubFinder;
