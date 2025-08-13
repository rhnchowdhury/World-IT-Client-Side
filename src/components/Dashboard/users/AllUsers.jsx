import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // make a admin
  const handleAdmin = (id) => {
    fetch(`http://localhost:4000/users/admin/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin created");
        }
      });
  };

  // delete user
  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:4000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("User Deleted");
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="border-2"></th>
              <th className="border-2">Name</th>
              <th className="border-2">Email</th>
              <th className="border-2"> Role</th>
              <th className="border-2">Make Admin</th>
              <th className="border-2">Delete</th>
            </tr>
          </thead>
          {allUsers.map((usr, i) => (
            <tbody key={usr._id}>
              <tr>
                <th className="border-2">{i + 1}</th>
                <td className="border-2">{usr.name}</td>
                <td className="border-2"> {usr.email}</td>
                <td className="border-2">{usr.role}</td>
                <td className="border-2">
                  {usr.role === "Admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="btn btn-xs"
                      onClick={() => handleAdmin(usr._id)}>
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border-2">
                  <button
                    className="btn btn-warning  btn-outline"
                    onClick={() => handleDelete(usr._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
