import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const params = useParams();
  const pid: any = params.id;
  const employees = useSelector((state: any) => state.employees);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [mobileNum, setMobileNum] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const dispatch = useDispatch();
  let currentEmployee = employees.filter((el: any) => el.id === pid);
  const {
    name: currName,
    id: currId,
    address: currAddress,
    mobileNum: currMobileNum,
  } = currentEmployee[0];

  useEffect(() => {
    if (employees.length > 0) {
      setName(currName);
      setId(currId);
      setMobileNum(currMobileNum);
      setAddress(currAddress);
    }
  }, [currName, currId, currAddress, currMobileNum, employees.length]);

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

  const editHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "" || id === "" || mobileNum === "" || address === "") {
      alert("Plase enter data in all the fields");
    }
    dispatch({
      type: "Edit",
      payload: {
        id,
        name,
        mobileNum,
        address,
      },
    });
    navigate("/");
  };

  return (
    <form onSubmit={editHandler} className="form">
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
      <button type="submit">Save Edited Data</button>
    </form>
  );
};

export default Form;
