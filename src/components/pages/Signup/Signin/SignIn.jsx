const SignIn = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Sign Up!!</h1>
        </div>
        <div className="card bg-base-100 py-8 w-full max-w-sm  shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="Full Name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Phone</label>
              <input
                type="number"
                name="phone"
                className="input"
                placeholder="Phone Number"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input "
                placeholder="Password"
              />
              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirm"
                className="input "
                placeholder="Confirm Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
