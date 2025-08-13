import { Link, Outlet } from "react-router-dom";

const DashboardLayouts = () => {
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

          <li>
            <Link to="/dashboard/admin">Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/user">User</Link>
          </li>
          <li>
            <Link to="/dashboard/developer">Developer</Link>
          </li>
          <li>
            <Link to="/dashboard/moderator">Moderator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayouts;
