import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = () => {
  const employees = useSelector((state: any) => state.employees);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const deleteHandler = (id: string) => {
    dispatch({ type: "Delete", payload: id });
  };

  const editHandler = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <ul className="list">
      {employees.length === 0 ? (
        <p>"List is Empty. Please add employee first "</p>
      ) : (
        employees.map((el: any) => {
          return (
            <li key={el.id} className="listItem">
              <p>{el.name}</p>
              <p>Employment Id: {el.id}</p>
              <p>Mobile Number: {el.mobileNum}</p>
              <p>Address: {el.address}</p>
              <button className="delBtn" onClick={() => deleteHandler(el.id)}>
                Delete
              </button>
              <button className="editBtn" onClick={() => editHandler(el.id)}>
                Edit
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default List;
