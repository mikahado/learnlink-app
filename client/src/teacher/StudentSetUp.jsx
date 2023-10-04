import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useNavigate  } from "react-router-dom";

function StudentSetUp() {
   
    //User Context variables

    const {teacherData, setTeacherData} = useContext(UserContext)
    const navigate = useNavigate();

    console.log(teacherData)


  const inputCss =
  "block font-thin indent-2 border rounded-2xl placeholder-black border-black bg-inactiveGray h-[64px] lg:w-80 xl:w-280 md:w-48 sm:w-40";
  const buttonClassname =
    "border border-black rounded-lg px-2 <w-48></w-48> sm:w-24";

  function handleFormSubmit(e) {
    e.preventDefault();
    // const date = moment(e.target["DOB"].value).format("DD MMMM YYYY"); // Format as "DD Month YYYY"     console.log(date)
    const studentInput = {
      'studentInfo':{
      "first_name": e.target["first-name"].value,
      "last_initial": e.target["last-initial"].value,
      "Pin": e.target["pin"].value},
      'accommodations':{
        "Color Variations":e.target["color-variations"].checked,
        "Enlarged Text":e.target["enlarged-text"].checked,
        "Screen Reader":e.target["screen-reader"].checked,
        "Speech To Text":e.target["speech-to-text"].checked,
        "Visual Aids":e.target["visual-aids"].checked,
      },
      'subjects':{
        "Reading":e.target["reading"].checked,
        "Math":e.target["math"].checked,
        "Science":e.target["science"].checked,
        "Social Studies":e.target["social-studies"].checked,
        "Spelling":e.target["spelling"].checked,
      },
      'notes':e.target["notes"].value

    };
    e.target.reset()
    console.log(studentInput);

    //student fetch
  //   fetch("/teachers/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ 
  //       "first_name": studentInput.studentInfo.first_name,
  //       "last_name": studentInput.studentInfo.last_name,
  //       "DOB": studentInput.studentInfo.DOB,
  //       "pin": studentInput.studentInfo.Pin,
  //       "accommodations": studentInput.accommodations
  //      }),
  //   })
  // .then(r=>r.json())
  // .then(data=>{

  //     setTeacherData(data)
      
  //   navigate('/classpage');

  // })
  // .catch((error) => {
  //   // Handle the error and return a statement to the client
  //   console.error("An error occurred: " + error.message);
  //   // You can return a statement or update your client's state accordingly
  // })
    


  }

  return (
    <div className="font-barlow bg-secondaryPurple h-screen">
  <nav className="p-4 bg-primaryPurple">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-barlow">New Student</h1>
    </div>
  </nav>

  <div className="container mx-auto px-4 mt-10 font-thin bg-white rounded-3xl py-10 xsm:w-4/5 xsm:h-[80vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh]">
        <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 place-items-center m-0">
          <div className="col-span-1 space-y-4">
            <input
              name="first_name"
              className={inputCss}
              placeholder="First Name"
            />
            <input name="DOB" className={inputCss} placeholder="DOB" />
          </div>
          <div className="col-span-1 space-y-4">
            <input
              name="last_name"
              className={inputCss}
              placeholder="Last Initial"
            />
            <input name="pin" className={inputCss} placeholder="Pin" />
          </div>
        </div>

          <div className="grid grid-cols-4 grid-rows-2 place-items-center mt-10">
            <div className="col-span-2 row-span-3">
              <h1 className="mb-4 col-span-2">Student Accommodations</h1>
              <div class="flex items-center">
                <input name="color-variations" type="checkbox" />
                <label className="text-sm ml-2">Color Variations</label>
              </div>
              <div>
                <input name="enlarged-text" type="checkbox" />
                <label className="text-sm ml-2">Enlarged Text</label>
              </div>
              <div>
                <input name="screen-reader" type="checkbox" />
                <label className="text-sm ml-2">Screen Reader</label>
              </div>
              <div>
                <input name="speech-to-text" type="checkbox" />
                <label className="text-sm ml-2">Speech To Text</label>
              </div>
              <div>
                <input name="visual-aids" type="checkbox" />
                <label className="text-sm ml-2">Visual Aids</label>
              </div>
            </div>
            <div className="col-span-2 row-span-3">
              <h1 className="mb-4">Subjects</h1>
              <div>
                <input name="reading" type="checkbox" />
                <label className="text-sm ml-2">Reading</label>
              </div>
              <div>
                <input name="math" type="checkbox" />
                <label className="text-sm ml-2">Math</label>
              </div>
              <div>
                <input name="science" type="checkbox" />
                <label className="text-sm ml-2">Science</label>
              </div>
              <div>
                <input name="social-studies" type="checkbox" />
                <label className="text-sm ml-2">Social Studies</label>
              </div>
              <div>
                <input name="spelling" type="checkbox" />
                <label className="text-sm ml-2">Spelling</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col container mx-auto items-center mt-10">
      <label className="">Notes</label>
      <textarea
        name="notes"
        placeholder="Add your notes here..."
        className="container mx-auto border break-all border-black rounded-xl outline-none w-1/2 max-h-[150px]"
        type="text"
      />
    </div>
          {/* if submit is sucessfull, useNavigate to the classpage */}
          <div className="flex flex-col items-center mt-2">
            <button type="submit" className={buttonClassname}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentSetUp;
