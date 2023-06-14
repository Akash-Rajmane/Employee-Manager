const initialState = {
  employees: [],
};

const employeeReducer: any = (state = initialState, action: any) => {
  debugger;
  switch (action.type) {
    case "Add":
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            id: action.payload.id,
            name: action.payload.name,
            mobileNum: action.payload.mobileNum,
            address: action.payload.address,
          },
        ],
      };

    case "Delete":
      let newEmployees = state.employees.filter(
        (el: any) => el.id !== action.payload
      );

      return {
        ...state,
        employees: newEmployees,
      };

    case "Edit":
      //   const { id, name, address, monbileNum } = action.payload;
      let editedEmployees = state.employees.filter((el: any) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            id: action.payload.id,
            name: action.payload.name,
            address: action.payload.address,
            mobileNum: action.payload.mobileNum,
          };
        }
        return el;
      });
      return {
        ...state,
        employees: editedEmployees,
      };

    default:
      return state;
  }
};

export default employeeReducer;
