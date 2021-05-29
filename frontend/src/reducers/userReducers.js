import * as actions from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actions.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actions.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case actions.USER_SIGNOUT:
      return {}; //removes data from userInfo
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_REGISTER_REQUEST:
      return { loading: true };
    case actions.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actions.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case actions.USER_DETAILS_REQUEST:
      return { loading: true };
    case actions.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case actions.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case actions.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case actions.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case actions.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
