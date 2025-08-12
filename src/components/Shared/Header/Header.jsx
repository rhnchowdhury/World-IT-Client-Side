import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = (
    <>
      <li>
        <NavLink to="/" className="text-white">
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/sign" className="text-white">
          <a>Sign Up</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="text-white">
          <a>Log in</a>
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white">
          <a>Home</a>
        </NavLink>
      </li>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-white text-xl">World IT Ltd</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
