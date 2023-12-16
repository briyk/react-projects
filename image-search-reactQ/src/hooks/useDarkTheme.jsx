import { useState, useEffect } from 'react'
import { setItemToLocalStorage , getItemFromLocalStorage } from "../utils/localStorage";


 const useDarkTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false) ;
    
    const handleToggleTheme = () =>{
        const newTheme = !isDarkTheme ;
        setIsDarkTheme(newTheme) ;
        setItemToLocalStorage("dark-theme", newTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', newTheme) ;
    }
    useEffect(() => {
        const storedDarkTheme = getItemFromLocalStorage("dark-theme");
        const body = document.querySelector('body');
        if(storedDarkTheme){

            body.classList.toggle('dark-theme') ;
        }
        console.log(storedDarkTheme)
        setIsDarkTheme(storedDarkTheme)
      }, []);

    return { isDarkTheme, handleToggleTheme };
};
export default useDarkTheme ;