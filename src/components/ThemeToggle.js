import React, { useState } from 'react';
import { LineIcon } from './Icons';

const THEME_COLORS = { dark: '#0f172a', light: '#f8fafc' };

// Every visit opens in dark mode (<html data-theme="dark"> in public/index.html);
// the toggle switches theme for the current visit only.
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.add('theme-transition');
  root.setAttribute('data-theme', theme);
  window.setTimeout(() => root.classList.remove('theme-transition'), 500);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
}

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const toggle = () => {
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className={`theme-toggle-icon ${theme === 'dark' ? 'is-visible' : ''}`}>
        <LineIcon name="moon" size={20} />
      </span>
      <span className={`theme-toggle-icon ${theme === 'light' ? 'is-visible' : ''}`}>
        <LineIcon name="sun" size={20} />
      </span>
    </button>
  );
}

export default ThemeToggle;
