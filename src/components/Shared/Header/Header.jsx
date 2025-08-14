import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PiUserSwitchFill } from "react-icons/pi";
import { AuthContext } from "../../providers/auth/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User log out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const menu = (
    <>
      {user?.emailVerified ? (
        <>
          <li>
            <NavLink to="/dashboard" className="text-white font-bold">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleLogout} className="text-white font-bold">
              Log Out
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/" className="text-white font-bold">
              Log in
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar  bg-[#24A1C8] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-red-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-white text-xl">World IT Ltd</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <PiUserSwitchFill className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Header;
