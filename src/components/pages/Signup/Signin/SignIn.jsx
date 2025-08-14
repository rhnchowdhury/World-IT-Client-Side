import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/auth/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../../../firebase/firebase.config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { updateUser, createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const role = e.target.role.value;

    // reset error message
    setError("");

    // password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{6,}$/;
    if (!passwordRegex.test(password && confirm)) {
      setError("Use at least one Capital Word & Small word & a special symbol");
      return;
    }

    if (password === confirm) {
      // create user
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          e.target.reset();

          // sent email verification
          sendEmailVerification(auth.currentUser).then(() => {
            toast.error("Verify your email");
          });

          // update user profile
          const profile = {
            displayName: name,
            phoneNumber: phone,
          };

          updateUser(profile).then(() => {
            console.log("Update profile");
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setError("Password not matched");
    }

    // users save in database
    const users = { email, password, name, phone, role };
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message));
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
              {error && <p className=" text-red-400">{error}</p>}
              <button className="btn btn-neutral mt-4">Sign in</button>
            </form>
            <p style={{ color: "#675444" }}>
              Already have an account?{" "}
              <Link to="/" className="text-[#24A1C8] font-bold">
                Please login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
