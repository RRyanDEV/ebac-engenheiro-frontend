import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function ButtonToggle() {
  let [darkMode, setDarkMode] = useState("false");
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="z-10 pr-3 dark:text-white text-black text-xl 
        max-md:self-end 
        max-md:pr-3 
        max-md:my-3 
        max-sm:self-end 
        max-sm:pr-3 
        max-sm:my-3 rounded"
      >
        {darkMode ? <IoSunny /> : <FaMoon />}
      </button>
    </>
  );
}
