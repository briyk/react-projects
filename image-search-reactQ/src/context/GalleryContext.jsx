import { createContext, useContext, } from "react";
import {useDarkTheme , useSearchTerm} from '../hooks'
const GalleryContext = createContext();

export const useAppContext = () => {
    return useContext(GalleryContext)
};


export const AppProvider = ({ children }) => {
    const { isDarkTheme, handleToggleTheme } = useDarkTheme();
    const [searchTerm, setSearchTerm] = useSearchTerm()
    return (
        <GalleryContext.Provider value={{ isDarkTheme, handleToggleTheme, searchTerm, setSearchTerm }}>
            {children}
        </GalleryContext.Provider>
    )
}


