import {createContext, useState, useContext} from 'react'

export const  ThemeContext = createContext();

export const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState("dark");


    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }


    const value = {
        theme,
        setTheme,
        toggleTheme
    }



    return(
        <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
    )

}