import React from "react";

const DropdownMenu = ({ onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Option</option>
      <option value="totalELL">Display the total ELL's in 50 states</option>
      <option value="studentsWithDisabilities">Students with Disabilities in Michigan</option>
      <option value="bar">Show Bar Chart</option>
      <option value="pie">Show Pie Chart</option>
      <option value="about">About Me</option>
    </select>
  );
};

export default DropdownMenu;
