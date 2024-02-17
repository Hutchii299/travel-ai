"use client";
import { useEffect, useState } from "react";
import Toggle from "./Toggle";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const onToggle = (toggle: boolean) => {
    setEnabled(toggle);
    if (toggle) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <Toggle text="Light/Dark mode" enabled={enabled} onToggle={onToggle} />
  );
};

export default ThemeToggle;
