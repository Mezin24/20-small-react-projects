import { UserData } from './GithubFinder';

interface UserProps {
  user: UserData;
}

const User = ({ user }: UserProps) => {
  const {
    login,
    avatar_url,
    created_at,
    followers,
    following,
    name,
    public_repos,
    html_url,
  } = user;

  return (
    <div className='gh-user'>
      <div className='gh-avatar-container'>
        <img src={avatar_url} alt='avatar' className='gh-avatar' />
      </div>
      <a href={html_url} className='gh-name'>
        {name || login}
      </a>
      <p>Created at {new Date(created_at!).toLocaleDateString('en-us')}</p>
      <div className='gh-info'>
        <div>
          <p className='gh-subtitle'>Followers</p>
          <p className='gh-stat'>{followers}</p>
        </div>
        <div>
          <p className='gh-subtitle'>Following</p>
          <p className='gh-stat'>{following}</p>
        </div>
        <div>
          <p className='gh-subtitle'>Public Repos</p>
          <p className='gh-stat'>{public_repos}</p>
        </div>
      </div>
    </div>
  );
};
export default User;
