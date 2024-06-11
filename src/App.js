// import { Login } from "./Components/Login";
// import { Profile } from "./Components/Profile";
// import { UserContextProvider } from "./context/UserContextProvider";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import { Themebtn } from "./Components/Themebtn";
import { Card } from "./Components/Card";


function App() {
  const [themeMode, setThemeMode] = useState("light");

  function darkTheme(){
    setThemeMode("dark");
  }

  function lightTheme(){
    setThemeMode("light");
  }


  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode]);
  
  return (
    //  <UserContextProvider>
    //  <h1>Context api react file</h1>
    //  <Login/>
    //  <Profile/>
    //  </UserContextProvider>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/> 
          </div>
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App;
