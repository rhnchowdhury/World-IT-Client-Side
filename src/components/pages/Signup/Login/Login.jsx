import { useContext, useRef } from "react";
import { AuthContext } from "../../../providers/auth/AuthProvider";
import { auth } from "../../../../firebase/firebase.config";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // user login
    loginUser(email, password)
      .then((result) => {
        const user = result.user;

        // email verify
        if (!user.emailVerified) {
          toast.warning("Please verify your email");
        } else {
          e.target.reset();
        }
      })
      .catch((err) => console.log(err.message));
  };

  // forget password
  const forgetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please give your email");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.warning("Reset email send. Check your inbox");
      });
    }
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
                ref={emailRef}
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input "
                placeholder="Password"
              />
              <label onClick={forgetPass}>
                <a href="#">Forget password?</a>
              </label>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
