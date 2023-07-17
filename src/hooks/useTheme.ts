import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/feature/theme.slice";
import { RootState } from "../store/store";

function useTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch(setTheme());
  };

  return { theme, toggleTheme };
}

export default useTheme;
