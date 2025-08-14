import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/auth/AuthProvider";

const Client = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // const userData = useLoaderData();
  // console.log(userData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const updateUser = { name, email };

    fetch(`http://localhost:4000/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated");
        }
        form.reset();
      });
  };

  return (
    <div>
      <form className="fieldset" onSubmit={handleUpdate}>
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          defaultValue={user?.displayName}
        />
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          defaultValue={user?.email}
        />
        <button className="btn btn-neutral mt-4">Update</button>
      </form>
    </div>
  );
};

export default Client;
