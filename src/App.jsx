import React from "react";
import { Header } from "./components/header/header";
import { ThemeTogglerButton } from "./components/theme-toggler-button/theme-toggler-button";
import { ThemeProvider } from "./contexts/theme-context";
import { AppRoutes } from "./pages/routes";
import './style/App.css'


function App() {
  return (
    <ThemeProvider>
      <Header />
      <ThemeTogglerButton />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App