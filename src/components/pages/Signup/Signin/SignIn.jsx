import { useContext } from "react";
import { AuthContext } from "../../../providers/auth/AuthProvider";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const role = e.target.role.value;

    if (password === confirm) {
      // create user
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          e.target.reset();
        })
        .catch((error) => {
          console.log(error.message);
        });
      console.log(name, email, phone, password, confirm, role);
    } else {
      console.log("Password not matched");
    }
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
                name="name"
                className="input"
                placeholder="Full Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
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
              <select name="role" className="select">
                <option>User</option>
                <option>Admin</option>
                <option>Developer</option>
                <option>Moderator</option>
              </select>
              <button className="btn btn-neutral mt-4">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
