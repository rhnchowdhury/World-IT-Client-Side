import { useContext } from "react";
import { AuthContext } from "../../../providers/auth/AuthProvider";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    console.log(email, password, role);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className=" bg-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Login Now!!</h1>
        </div>
        <div className="card bg-base-100 py-12 w-full max-w-sm  shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input "
                placeholder="Password"
              />
              <select
                name="role"
                defaultValue="Pick a color"
                className="select">
                <option>User</option>
                <option>Admin</option>
                <option>Developer</option>
                <option>Moderator</option>
              </select>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
