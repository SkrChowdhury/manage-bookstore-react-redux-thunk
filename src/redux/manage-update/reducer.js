const initialState = {
  status: false,
  data: { feature: false },
};

const updateBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        status: action.payload.status,
        data: { ...action.payload.data },
      };
    default:
      return state;
  }
};
export default updateBookReducer;
