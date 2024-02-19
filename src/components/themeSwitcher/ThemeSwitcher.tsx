import { useLocalStorage } from './useLocalStorage';
import './styles.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('themeSwitcher', 'dark');

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='theme-container' data-theme={theme}>
      <h1 className='theme-title'>Theme Switcher</h1>
      <button onClick={switchTheme} className='theme-btn'>
        Change Theme
      </button>
    </div>
  );
};
export default ThemeSwitcher;
