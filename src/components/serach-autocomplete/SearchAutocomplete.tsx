import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Suggestions from './Suggesctions';

interface UserData {
  firstName: string;
}

const SearchAutocomplete = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/users');
        const { users }: { users: UserData[] } = await response.json();

        if (users && users.length > 0) {
          setUsers(users.map((user) => user.firstName));
        }
      } catch (error) {
        console.log(error);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toLowerCase();
      setSearchParams(value);

      if (value.length > 1) {
        setFilteredUsers(
          users.filter((user) => user.toLowerCase().includes(value))
        );
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    },
    [users]
  );

  const handleSelect = useCallback((user: string) => {
    setSearchParams(user);
    setFilteredUsers([]);
    setShowSuggestions(false);
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        paddingBlock: '1rem',
      }}
    >
      <input
        type='text'
        placeholder='Enter search params ...'
        value={searchParams}
        onChange={handleChange}
      />
      {loading && <h2 style={{ marginTop: '1rem' }}>Loading...</h2>}
      {error && <h2 style={{ marginTop: '1rem' }}>{error}</h2>}
      {showSuggestions && (
        <Suggestions users={filteredUsers} onClick={handleSelect} />
      )}
    </div>
  );
};
export default SearchAutocomplete;
