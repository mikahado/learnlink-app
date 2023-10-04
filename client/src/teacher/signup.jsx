import { Link } from "react-router-dom";
import React, { useContext,useState,useEffect } from "react";
// import { UserContext } from "../App";

function SignUp() {
  const buttonClassname =
    "border border-black rounded-lg px-2 w-48 sm:w-24 mt-20 bg-ctaGreen";

  // const [teacher,setTeacher] = useContext(UserContext)

  function handleFormSubmit(e) {
    e.preventDefault();
    const teacherInfo = {
        "First Name": e.target["first-name"].value,
        "Last Name": e.target["last-name"].value,
        email: e.target["email"].value,
        username: e.target["username"].value,
        password: e.target["password"].value,
        school: e.target["school"].value,
    };
      fetch("/teachers/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              "first_name": teacherInfo['First Name'],
              "last_name": teacherInfo['Last Name'],
              "email": teacherInfo.email,
              "username": teacherInfo.username,
              "school": teacherInfo.school,
              "password": teacherInfo.password,
             }),
          })
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
            // setTeacher(teacherInfo)
        });
    e.target.reset();
    console.log(teacherInfo);
  }

  const inputCss =
    "block font-thin indent-2 border rounded-2xl placeholder-black border-black bg-white h-[64px] lg:w-80 xl:w-280 md:w-48 sm:w-40";

  return (
    <div className="bg-primaryPurple h-screen text-center">
      <h1 className="text-5xl font-bold pt-20">Enter Information</h1>
      <form onSubmit={handleFormSubmit} className="container mx-auto mt-40">
        <div className="grid grid-cols-2 place-items-center m-0">
          <div className="col-span-1 space-y-8">
            <input
              name="first-name"
              className={inputCss}
              placeholder="First Name"
            />
            <input name="email" className={inputCss} placeholder="Email" />
            <input name="username" className={inputCss} placeholder="Username" />
          </div>
          <div className="col-span-1 space-y-8">
            <input
              name="last-name"
              className={inputCss}
              placeholder="Last Name"
            />
            <input
              name="password"
              type="password"
              className={inputCss}
              placeholder="Password"
            />
            <input name="school" className={inputCss} placeholder="School" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <button type="submit" className={buttonClassname}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
