import React, { useState } from "react";
import MaskFace from "./Mask group.png";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1"); // State to track the selected dropdown option

  const navigate = useNavigate()

  const students = [
    {
      name: "John Doe",
      lesson: "Math",
      progress: "75%",
      progressTime: "2 hours",
      device: "Desktop",
    },
    {
      name: "Alice Smith",
      lesson: "English",
      progress: "88%",
      progressTime: "1.8 hours",
      device: "Laptop",
    },
    {
      name: "Bob Johnson",
      lesson: "History",
      progress: "62%",
      progressTime: "2.5 hours",
      device: "Tablet",
    },
    {
      name: "Emily Davis",
      lesson: "Science",
      progress: "95%",
      progressTime: "1.2 hours",
      device: "Smartphone",
    },
    {
      name: "Michael Brown",
      lesson: "Geography",
      progress: "70%",
      progressTime: "2.3 hours",
      device: "Desktop",
    },
    {
      name: "Olivia Wilson",
      lesson: "Music",
      progress: "82%",
      progressTime: "1.5 hours",
      device: "Laptop",
    },
  ];
  
  // Rest of your code to render the table with the students data
  
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
  <tr className={`${rowIndex !== students.length - 1 ? "border-b border-black" : ""}`}>
  {Object.keys(student).map((key, colIndex) => {
    if (key !== "id") { // Exclude the "id" column
      return (
        <td
          key={colIndex}
          className={`px-6 py-4 whitespace-no-wrap ${
            colIndex < Object.keys(student).length - 1 ? "border-r border-black" : ""
          }`}
        >
          {colIndex === 0 ? (
            <div className="flex items-center text-center justify-center" onClick={() => navigate("/studentprofile")}>
              <img src={MaskFace} alt="MaskFace" className="mr-2" style={{ width: "24px", height: "24px" }} />
              {student[key]}
            </div>
          ) : (
            student[key]
          )}
        </td>
      );
    }
    return null; // Exclude the "id" column
  })}
</tr>

  ))}
</tbody>


    </table>
  </div>
  );
};

export default Table;
