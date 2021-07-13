const initialState = {
  users: [
    { 
      name: "Sandeep", email: "sandeep.k@gmail.com", phone: 7894561230, dob: "2001-04-24" 
    },
    {
      name: "Sanu", email: "sanu.singh01@gmail.com", phone: 9874563210, dob: "2000-01-02"
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      const newUserList = state.users.filter(
        (user) => user.email !== action.payload
      );
      return {
        ...state,
        users: newUserList,
      };
    case "UPDATE_USER":
      const userIndex = state.users.findIndex(
        (user) => (user.email = action.payload.email)
      );
      const newState = state;
      newState.users[userIndex] = action.payload;
      return {
        ...newState,
        users: [...newState.users],
      };
    default:
      return state;
  }
};
export default userReducer;
