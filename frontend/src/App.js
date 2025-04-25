import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import AboutMe from "./AboutMe";

function App() {
  const [selection, setSelection] = useState("");

  return (
    <div className="App">
      <h1>EquiLang(dummy data)</h1>
      <DropdownMenu onSelect={setSelection} />
      <div id="output">
        {selection === "totalELL" && (
          <p>Total ELLs in 50 states: 4,754,139</p>
        )}
        {selection === "studentsWithDisabilities" && (
          <>
            <p>Total students with disabilities in Michigan: 660,357</p>
            <p>Percentage: 13.9%</p>
          </>
        )}
        {selection === "bar" && <BarChart />}
        {selection === "pie" && <PieChart />}
        {selection === "about" && <AboutMe />}
      </div>
    </div>
  );
}

export default App;