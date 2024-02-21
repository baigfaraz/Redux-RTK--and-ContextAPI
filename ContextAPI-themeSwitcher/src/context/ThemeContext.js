import React from "react";

const ThemeContext = React.createContext({
  themeMode: "light",
  // darkTheme: () => {},
  // lightTheme: () => {},
  // setThemeMode: () => {}
});

export default ThemeContext;
