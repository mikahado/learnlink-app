import MaskFace from "./Mask group.png";
import { Link } from 'react-router-dom';

function StudentProfile() {
  const name = "Joey W.";
  const currentLesson = "The Scorpion and The Frog";
  const yearlyProgress = "On Schedule";
  const progress = "75";
  const accommodations = "Enlarged Text";
  const buttonClassname =
    "w-[121px] h-[32px] top-[104px] left-[20px] rounded-[10px] bg-blue-500 hover:bg-blue-600 text-white";

  return (
    <div className="bg-secondaryPurple h-screen xsm:h-screen">
      <nav class="bg-primaryPurple p-4">
        <div class="container mx-auto flex justify-start items-center gap-3">
          <img src={MaskFace} />
          <h1 className="text-3xl font-barlow ">{name}</h1>
        </div>
      </nav>

      <div className="flex flex-col sm:flex-row sm:justify-between justify-between gap-4 md:gap-8 font-barlow font-thin py-2 px-8 md:px-16">
        <button className={buttonClassname}>Reading</button>
        <button className={buttonClassname}>Math</button>
        <button className={buttonClassname}>Science</button>
        <button className={buttonClassname}>Social Studies</button>
        <button className={buttonClassname}>Spelling</button>
      </div>

      <div className="container mx-auto px-4 mt-10 font-thin bg-textGround rounded-3xl py-20 xsm:w-4/5 xsm:h-5/6 h-[70vh]">
        <div className="grid grid-cols-2 grid-rows-2 gap-20 mt-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-xl font-bold">Current Lesson</h1>
            <h4 className="text-sm">{currentLesson}</h4>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-xl font-bold">Yearly Progress</h1>
            <h4 className="text-sm">{yearlyProgress}</h4>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-xl font-bold">Progress</h1>
            <h4 className="text-sm">{progress}% Completed</h4>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-xl font-bold">Student Accommodations</h1>
            <h4 className="text-sm">{accommodations}</h4>
          </div>
        </div>

        <div className="flex flex-col container mx-auto items-center mt-10">
          <label className="font-bold">Notes</label>
          <textarea
            name="notes"
            placeholder="Add your notes here..."
            className="container mx-auto border break-all border-black rounded-xl outline-none w-1/2 h-[208px]"
            type="text"
          />

          <Link to="/students/1"><button className="px-2 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white mt-5" >Student Workspace</button></Link>
        </div>

        
       
        

      </div>
    </div>
  );
}

export default StudentProfile;
