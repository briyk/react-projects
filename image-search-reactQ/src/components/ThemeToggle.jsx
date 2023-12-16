import { useAppContext } from "../context/GalleryContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, handleToggleTheme } = useAppContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={() => handleToggleTheme()}>
        {!isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
