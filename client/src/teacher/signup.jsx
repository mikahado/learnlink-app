import React, { useContext,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useNavigate  } from "react-router-dom";
import MaskGroup from './Mask group.svg'

function SignUp() {

  const { setUser } = useContext(UserContext); 

  const buttonClassname =
    "border border-black rounded-lg px-2 w-48 sm:w-24 mt-20 bg-ctaGreen";

  // const [teacher,setTeacher] = useContext(TeacherContext)
  const [allTeachers,setAllTeachers] = useState([])
  const navigate = useNavigate();
  
  useEffect(()=>{
    fetch('/teachers')
    .then(r=>r.json())
    .then(data=>{
        setAllTeachers(data)
    })
  },[])
  
  function handleFormSubmit(e) {
    e.preventDefault();
    const teacherInfo = {
        first_name: e.target["first-name"].value,
        last_name: e.target["last-name"].value,
        email: e.target["email"].value,
        username: e.target["username"].value,
        password: e.target["password"].value,
        school_name: e.target["school"].value,
    };
    if (allTeachers.filter((obj)=>obj.username == teacherInfo.username).length == 0 && teacherInfo.password.length >= 8){

      fetch("/teachers/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              "first_name": teacherInfo.first_name,
              "last_name": teacherInfo.last_name,
              "email": teacherInfo.email,
              "username": teacherInfo.username,
              "school_name": teacherInfo.school_name,
              "password": teacherInfo.password,
             }),
          })
        .then(r=>r.json())
        .then(data=>{

            setUser(data)
            
          navigate('/recordvoice');

        })
        .catch((error) => {
          // Handle the error and return a statement to the client
          console.error("An error occurred: " + error.message);
          // You can return a statement or update your client's state accordingly
        })
    }
    else if (teacherInfo.password.length < 8){
      window.alert("Password must be at least 8 characters long.")
    }
    else{
      window.alert("Username not available and all fields must be filled.")
    }
    e.target.reset();
    console.log(teacherInfo);
  }

  const inputCss =
    "block font-thin indent-2 border rounded-2xl placeholder-black border-black bg-white h-[64px] lg:w-80 xl:w-280 md:w-48 sm:w-40";

  return (
    <>
    <div className="bg-primaryPurple h-screen text-center ">

        <div className="flex flex-col items-center justify-center">
          <div className='flex flex-col text-center font-barlow italic mt-4'>
            <h1 className='text-5xl'>OSEA</h1> {/* Adjusted text size */}
            <label className='mt-2' >All for learning and learning for All</label>
          </div>
          <img src={MaskGroup} className="w-40 h-40 pt-5" alt="logo" />
        </div>

      <p className='mt-8'>JOIN OSEA!</p>
      <form onSubmit={handleFormSubmit} className="container mx-auto mt-5">
        
        <div className="grid grid-cols-2 place-items-center m-10">
          <div className="col-span-1 space-y-8">
            <input
              name="first-name"
              className={inputCss}
              placeholder="First Name"
            />
            <input name="email" className={inputCss} placeholder="Email" />
            <input name="username" className={inputCss} placeholder="Username"/>
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
  <button type="submit" className={`${buttonClassname} py-2 px-4 text-xl`}>
    Next
  </button>
</div>

      </form>
    </div>
    </>
  );
}

export default SignUp;
