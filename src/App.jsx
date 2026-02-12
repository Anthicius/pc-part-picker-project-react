import { useState, useEffect } from "react";
import ComputerParts from "./components/ComputerParts";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  const [theme, setTheme] = useState("white");
  
  const [selectedParts, setSelectedParts] = useState({
    cpus: null,
    gpus: null,
    ram: null
  });

  const handleSelectPart = (part, category) => {
    setSelectedParts((prev) => {
      const currentPart = prev[category];
      const isSamePart = currentPart && currentPart.id === part.id;

      if (isSamePart) {
        return { ...prev, [category]: null };
      } else {
        return { ...prev, [category]: part };
      }
    });
  };

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === "white" ? "dark" : "white"));
  };

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "white-mode";
  }, [theme]);

  return (
    <div className="app">
      <Header onThemeSwtich={handleThemeSwitch} theme={theme} />
      <Summary selectedParts={selectedParts} />
      <ComputerParts 
        onSelectPart={handleSelectPart} 
        selectedParts={selectedParts} 
      />
    </div>
  );
}

export default App;