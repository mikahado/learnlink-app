function StudentSetUp() {
  const inputCss =
    "block font-thin indent-2 border rounded-lg  placeholder-black border-black bg-slate-300 lg:w-80 md:w-48 sm:w-40";
  const buttonClassname =
    "border border-black rounded-lg px-2 <w-48></w-48> sm:w-24";

  function handleFormSubmit(e) {
    e.preventDefault();
    const studentInput = {
      'studentInfo':{
      "First Name": e.target["first-name"].value,
      "Last Initial": e.target["last-initial"].value,
      "Age": e.target["age"].value,
      "Grade": e.target["grade"].value,
      "Device": e.target["device"].value,
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
  }

  return (
    <div className="font-inter font-thin">
      <nav class="bg-slate-300 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 className="text-md font-inter">Student Setup</h1>
        </div>
      </nav>

      <div className="container mx-auto py-20 px-5">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-4 grid-rows-2 place-items-center m-0">
            <div className="col-span-2 row-span-3">
              <h3 className="mb-2">First Name</h3>
              <input name="first-name" className={inputCss} />
              <h3 className="mt-2 mb-2">Last Initial</h3>
              <input name="last-initial" className={inputCss} />
              <h3 className="mt-2 mb-2">Age</h3>
              <input name="age" className={inputCss} />
            </div>
            <div className="col-span-2 row-span-3">
              <h3 className="mb-2">Grade</h3>
              <input name="grade" className={inputCss} />
              <h3 className="mt-2 mb-2">Device Number</h3>
              <input name="device" className={inputCss} />
              <h3 className="mt-2 mb-2">Pin Number</h3>
              <input type="password" name="pin" className={inputCss} />
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

          <div className="flex flex-col container mx-auto items-center mt-20">
            <label className="">Notes</label>
            <textarea
              name="notes"
              placeholder="Add your notes here..."
              className="container mx-auto border break-all border-black rounded-xl outline-none sm:w-screen lg:w-screen xl:w-1/2 h-[208px]"
              type="text"
            />
          </div>
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
