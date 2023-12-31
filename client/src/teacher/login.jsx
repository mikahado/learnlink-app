import { Link } from "react-router-dom";
import React, { useContext,useState,useEffect } from "react";
//import { TeacherContext } from "../App";
import MaskGroup from './Mask group.svg'

import { useNavigate  } from "react-router-dom";


function LoginTeacher() {
  const inputCss =
    "block font-thin indent-2 border rounded-2xl placeholder-black border-black bg-white h-[64px] lg:w-80 xl:w-280 md:w-48 sm:w-40";

  //const [teacher,setTeacher] = useContext(TeacherContext)
  const navigate = useNavigate();

  function handleFormSubmit(e){
      e.preventDefault();
      const teacherLogin = {
          username: e.target["username"].value,
          password: e.target["password"].value,
      };
        fetch("/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "username": teacherLogin.username,
                "password": teacherLogin.password,
                }),
            })
            .then((r) => {
              if (r.ok) {
                r.json().then((user) => {
                  //setTeacher(user)
                });
                navigate("/classpage")
              }
              else {
                window.alert("Incorrect username or password")
              }
            });
      e.target.reset();
      // console.log(teacherLogin);
  }



  return (
    <div className="font-barlow text-center content-around w-100 bg-primaryPurple h-screen">
       
        <div className="flex flex-col items-center justify-center">
          <div className='flex flex-col text-center font-barlow italic mt-8'>
            <h1 className='text-5xl'>OSEA</h1> {/* Adjusted text size */}
          </div>
          <img src={MaskGroup} className="w-40 h-40 pt-2" alt="logo" />
        </div>
        
      <form onSubmit={handleFormSubmit} className="container mx-auto mt-10">
      <div className="grid grid-cols-1 place-items-center m-0 space-y-5">
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Username"
            className={inputCss}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={inputCss}
          />
        <button
          type="submit"
          className="block m-4 text-sm rounded-2xl bg-ctaGreen h-[36px] lg:w-48 md:w-40 sm:w-24 px-3"
        >
          Login
        </button>
        <Link to='/signup'>
        <button className="block border rounded-2xl text-sm  text-white h-[36px] border-white lg:w-48 md:w-40 sm:w-24 px-3">
          Sign Up
        </button>
        </Link>
      </div>
        </form>
    </div>
  );
}

export default LoginTeacher;
