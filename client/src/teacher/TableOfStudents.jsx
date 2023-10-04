import React, { useState } from "react";
import MaskFace from "./Mask group.png";

const Table = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1"); // State to track the selected dropdown option

  const students = [
    {
      id: 1,
      name: "John Doe",
      lesson: "Math",
      progress: "75%",
      progressTime: "2 hours",
      device: "Desktop",
    },
    {
      id: 2,
      name: "Jane Smith",
      lesson: "Science",
      progress: "90%",
      progressTime: "1.5 hours",
      device: "Laptop",
    },
    // Add more student data as needed
  ];

  const ProgressTime = [
    "Yearly Progress",
    "Monthly Progress",
    "Weekly Progress",
    "Daily Progress",
  ];
  const CurrentLesson = ["Current Lesson", "Next Lesson", "Previous Lesson"];

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
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
          <option value={name}>{name}</option>
        ))}
      </select>
    );
  }
  return (
    <div className="overflow-x-auto font-barlow text-center">
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
        {students.map((student, rowIndex) => (
          <tr
            key={student.id}
            className={`${rowIndex !== students.length - 1 ? "border-b border-black" : ""}`}
          >
            {Object.values(student).map((col, colIndex) => (
              <td
                key={colIndex}
                className={`px-6 py-4 whitespace-no-wrap ${
                  colIndex < Object.values(student).length - 1 ? "border-r border-black" : ""
                }`}
              >
                {colIndex === 0 ? (
                  <div className="flex items-center justify-center">
                    <img src={MaskFace} alt="MaskFace" className="mr-2" />
                    <span>{col}</span>
                  </div>
                ) : (
                  col
                )}
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
