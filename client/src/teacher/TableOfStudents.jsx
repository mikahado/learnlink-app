import React, { useState } from "react";

const Table = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1"); // State to track the selected dropdown option

  const ProgressTime = ["Yearly Progress",  "Monthly Progress", "Weekly Progress", "Daily Progress"];
  const CurrentLesson = ["Current Lesson", "Next Lesson", "Previous Lesson"];

  const handleDropdownChange = (event) => {
    console.log(event.target.value)
    setSelectedOption(event.target.value);
  };

  function dropDownMenu(array) {
    return (
      <select
        value={selectedOption}
        onChange={handleDropdownChange}
        className="outline-none"
      >
        {array.map((name) => (
          <option value={name} >{name}</option>
        ))}
      </select>
    );
  }
  return (
    <div className="overflow-x-auto font-inter">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-black text-center">
            <th className="px-6 py-3 leading-4 border-r font-light border-black">
              Student Name
            </th>
            <th className="px-6 py-3 leading-4 border-r font-light border-black">
            {dropDownMenu(CurrentLesson)}
            </th>
            <th className="px-6 py-3 leading-4 border-r font-light border-black">
              Current Progress
            </th>
            <th className="px-6 py-3 leading-4 border-r font-light border-black">
              {dropDownMenu(ProgressTime)}
            </th>
            <th className="px-6 py-3 leading-4 font-light">Device</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {[1, 2, 3, 4, 5].map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex !== 4 ? "border-b border-black" : ""}`}
            >
              {[1, 2, 3, 4, 5].map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 whitespace-no-wrap ${
                    colIndex < 4 ? "border-r border-black" : ""
                  }`}
                >
                  Row {rowIndex + 1}, Col {colIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
