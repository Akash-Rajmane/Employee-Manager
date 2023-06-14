import React, { useState } from "react";
import "./form.css";
import { useDispatch } from "react-redux";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [mobileNum, setMobileNum] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const dispatch = useDispatch();

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const idHandler = (e: any) => {
    setId(e.target.value);
  };

  const mobileNumHandler = (e: any) => {
    setMobileNum(e.target.value);
  };

  const addressHandler = (e: any) => {
    setAddress(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "" || id === "" || mobileNum === "" || address === "") {
      alert("Plase enter data in all the fields");
    }
    dispatch({
      type: "Add",
      payload: {
        id,
        name,
        mobileNum,
        address,
      },
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        placeholder="Employee Name"
        onChange={nameHandler}
        value={name}
      />
      <input
        type="text"
        placeholder="Employement Id"
        onChange={idHandler}
        value={id}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        onChange={mobileNumHandler}
        value={mobileNum}
        minLength={10}
        maxLength={10}
      />
      <input
        type="text"
        placeholder="address"
        onChange={addressHandler}
        value={address}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default Form;
