const { createContext, useState } = require("react");

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;

