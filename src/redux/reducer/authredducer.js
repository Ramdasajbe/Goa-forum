import { LOGIN_SUCCESS, LOGOUT } from "../constant/authconstant";

const initialState = {
  loading: false,
  userDetails: null,
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  console.log("Auth Reducer: ", { type, payload });
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        error: null,
      };

    case LOGOUT:
      return {
        ...state,
        userDetails: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
