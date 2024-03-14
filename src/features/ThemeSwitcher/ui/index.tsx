import { Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

//@TODO: MAKE IT WITH REDUX WITH HOOKS!!!!!!!!!!!!!!!

const getTheme = () => {
  const currentTheme = document.body.classList.value;
  return currentTheme;
};

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(getTheme());

  const changeTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    document.body.classList.remove("light", "dark");
    document.body.classList.add(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="light" onPress={() => changeTheme()} isIconOnly>
      <div className="w-6 h-6">
        {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
      </div>
    </Button>
  );
};

export default ThemeSwitcher;
