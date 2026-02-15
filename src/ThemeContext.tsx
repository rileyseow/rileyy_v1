import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
} | null>(null);

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Update the data-theme attribute on the document element whenever the theme changes
  // Note: Theme setting on initial load is handled in `index.html`
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
    localStorage.setItem('theme', theme); // Persist theme in local storage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error(
      'useTheme must be used within the ThemeProvider.'
    );
  }
  return themeContext;
};
