import { useEffect, useState } from "react";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="border-2">Name</th>
              <th className="border-2">Email</th>
              <th className="border-2"> Role</th>
              <th className="border-2">Make Admin</th>
              <th className="border-2">Delete</th>
            </tr>
          </thead>
          {allUsers.map((usr) => (
            <tbody key={usr._id}>
              <tr>
                <td className="border-2">{usr.name}</td>
                <td className="border-2"> {usr.email}</td>
                <td className="border-2">{usr.role}</td>
                <td className="border-2">Canada</td>
                <td className="border-2">
                  <button className="btn">Delete</button>
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
