import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light'
  );

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header>
      <div className='container flex justify-between align-center'>
        <h1>Notes</h1>
        <button onClick={handleThemeChange}>
          {theme === 'dark' ? (
            <RiMoonLine className='theme-icon' />
          ) : (
            <RiSunLine className='theme-icon' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
