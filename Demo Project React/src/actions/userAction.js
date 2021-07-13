export const addUser = (data) => {
    return {
        type:'ADD_USER',
        payload:data
    }
}

export const delteUser = (email) => {
  return {
    type: "DELETE_USER",
    payload: email,
  };
};

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER",
    payload: data,
  };
};