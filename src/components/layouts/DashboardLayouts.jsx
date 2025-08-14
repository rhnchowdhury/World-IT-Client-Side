import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/auth/AuthProvider";
import useDeveloper from "../../hooks/useDeveloper";
import useModerator from "../../hooks/useModerator";

const DashboardLayouts = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isDeveloper] = useDeveloper(user?.email);
  const [isModerator] = useModerator(user?.email);

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 sm:w-12  p-4">
          {/* Sidebar content here */}

          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/admin">Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/client">User</Link>
              </li>
              <li>
                <Link to="/dashboard/dev">Developer</Link>
              </li>
              <li>
                <Link to="/dashboard/moderator">Moderator</Link>
              </li>
            </>
          )}
          {isDeveloper && (
            <li>
              <Link to={`/dashboard/developer/${user.email}`}>Developer</Link>
            </li>
          )}
          {isModerator && (
            <li>
              <Link to={`/dashboard/moderator/${user.email}`}>Moderator</Link>
            </li>
          )}

          {/* {user?.role === "User" && (
            
          )} */}
          <li>
            <Link to="/dashboard/client">User</Link>
          </li>
          <li>
            <Link to="/">Go to Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayouts;
