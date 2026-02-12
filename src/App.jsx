import {useState } from "react";
import ComputerParts from "./components/ComputerParts";
import Header from "./components/Header";
import Summary from "./components/Summary";
function App() {
  const [theme, setTheme] = useState("white")
  const [selectedParts, setSelectedParts] = useState([])

  const handleSelectPart = (part)=>{
    const isSelected = selectedParts.find(selectedPart => selectedPart.id === part.id)
    console.log(isSelected)
    if(isSelected){
      setSelectedParts(selectedParts.filter(selectedPart => selectedPart.id !== part.id))
    } else {
      setSelectedParts([...selectedParts, part])
    }
1
  }

  const handleThemeSwitch = () => {
    setTheme((prev)=> prev === "white"? "dark":"white")
  }

  return (
    <div className={`app ${theme}-mode`}>
      <Header onThemeSwtich = {handleThemeSwitch} theme={theme} />
      <Summary selectedParts={selectedParts}/>
      <ComputerParts onSelectPart = {handleSelectPart}/>
    </div>
  );
}

export default App;
