import { Link } from "react-router-dom";

function LoginTeacher() {
  const inputCss =
    "block font-thin indent-2 border rounded-2xl placeholder-black border-black bg-white h-[64px] lg:w-80 xl:w-280 md:w-48 sm:w-40";

    


  return (
    <div className="font-inter text-center content-around w-100 bg-primaryPurple h-screen">
      <h1 className="text-5xl font-bold pt-20">Welcome to LearnLink</h1>
      <br />
      <form className="container mx-auto mt-40">
      <div className="grid grid-cols-1 place-items-center m-0 space-y-8">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email or Username"
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
