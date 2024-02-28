import React, { useState } from "react";
import "./displayForm.css";
const DisplayForm = () => {
  const [Fname, setFirstName] = useState("");
  const [Lname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = `${Fname} ${Lname}`;
    setFullName(fullName);
  };

  return (
    <div className="displayform">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name:
          <input
            name="firstname"
            type="text"
            value={Fname}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          Last Name:
          <input
            name="lastname"
            type="text"
            value={Lname}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div>
          <label>Full Name: {fullName}</label>
        </div>
      )}
    </div>
  );
};

export default DisplayForm;
