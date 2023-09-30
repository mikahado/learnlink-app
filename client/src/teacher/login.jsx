function LoginTeacher() {
  return (
    <div className="font-inter text-center flex flex-col justify-center w-100 h-screen border-2 rounded">
      <h1 className="text-5xl font-thin">Welcome to LearnLink</h1>
      <br />
      <div className="flex flex-col items-center mt-15 w-100">
        <form className="space-y-2 text-center m-4 w-100">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email or Username"
            className="block font-thin indent-2 border rounded-lg  placeholder-black border-black bg-slate-300 lg:w-96 md:w-62 sm:w-40"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="block border font-thin indent-2 rounded-lg placeholder-black border-black bg-slate-300 lg:w-96 md:w-62 sm:w-40"
          />
        </form>
        <button
          type="submit"
          className="block m-4 border font-thin rounded-lg border-black bg-slate-300 lg:w-48 md:w-40 sm:w-24"
        >
          Login
        </button>
        <button className="block border rounded-lg font-thin border-black lg:w-48 md:w-40 sm:w-24">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginTeacher;
