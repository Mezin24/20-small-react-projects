interface SuggestionsProps {
  users: string[];
  onClick?: (value: string) => void;
}

const Suggestions = ({ users, onClick }: SuggestionsProps) => {
  return (
    <ul style={{ marginTop: '1rem' }}>
      {users && users.length
        ? users.map((user) => (
            <li
              key={user}
              style={{ cursor: 'pointer' }}
              onClick={() => onClick && onClick(user)}
            >
              {user}
            </li>
          ))
        : null}
    </ul>
  );
};
export default Suggestions;
