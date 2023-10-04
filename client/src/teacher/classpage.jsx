import Table from "./TableOfStudents";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useContext } from "react";

function ClassPage() {
  const activeButton ="w-[121px] h-[32px] top-[104px] left-[20px] rounded-[10px] font-barlow bg-ctaGreen text-black";
  const inactiveButton ="w-[121px] h-[32px] top-[104px] left-[20px] rounded-[10px] font-barlow bg-inactiveGray hover:bg-primaryPurple text-black";
  const {teacher, setTeacher} = useContext(UserContext)
  console.log(teacher)


  return (
    <div className="bg-secondaryPurple h-screen font-barlow">
      <nav class="bg-primaryPurple p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-barlow">Hello Mr.Smith</h1>
        </div>
      </nav>

      <div className="flex flex-col sm:flex-row sm:justify-between justify-between gap-4 md:gap-8 font-thin py-2 px-8 md:px-16">
        <button className={activeButton}>Reading</button>
        <button className={inactiveButton}>Math</button>
        <button className={inactiveButton}>Science</button>
        <button className={inactiveButton}>Social Studies</button>
        <button className={inactiveButton}>Spelling</button>
      </div>
      <div className="container mx-auto px-4 mt-10 font-thin bg-white rounded-3xl py-20 xsm:w-4/5 xsm:h-5/6">
        <Table />
      </div>
      <div className="flex justify-center py-4">
        <div className="w-40">
          <Link to="/newstudent">
          <button className="border border-black rounded-lg px-2 w-full">
            Add Student
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClassPage;
