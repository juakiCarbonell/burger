import * as actionTypes from "../actions/actionsTypes";

const initalState = {
  token: null,
  userId: null,
  error: null,
  loading: null,
  authRedirectPath: "/"
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
