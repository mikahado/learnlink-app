import Table from "./TableOfStudents";
import { Link } from "react-router-dom";

function ClassPage() {
  const buttonClassname ="border border-black rounded-lg  px-2 w-full sm:w-full";
  return (
    <div>
      <nav class="bg-slate-300 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 className="text-md font-inter">Hello Mr.Smith</h1>
        </div>
      </nav>

      <div className="flex flex-col sm:flex-row sm:justify-between justify-between gap-4 md:gap-8 font-inter py-2 px-8 md:px-16">
        <button className={buttonClassname}>Reading</button>
        <button className={buttonClassname}>Math</button>
        <button className={buttonClassname}>Science</button>
        <button className={buttonClassname}>Social Studies</button>
        <button className={buttonClassname}>Spelling</button>
      </div>
      <div className="py-4">
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
