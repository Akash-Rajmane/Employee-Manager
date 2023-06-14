type payload = {
  id: string;
  name: string;
  mobileNum: string;
  address: string;
};

export const add = (payload: payload) => {
  const { id, name, mobileNum, address } = payload;

  return {
    type: "Add",
    payload: {
      id,
      name,
      mobileNum,
      address,
    },
  };
};

export const edit = (payload: payload) => {
  const { id, name, mobileNum, address } = payload;
  return {
    type: "Edit",
    payload: {
      id,
      name,
      mobileNum,
      address,
    },
  };
};

export const deleteEmployee = (id: string) => {
  return {
    type: "Delete",
    id,
  };
};
