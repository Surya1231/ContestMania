const LOCAL_CF_USERNAMES = 'LOCAL_CF_USERNAMES';

const UPDATE_CF_USERNAMES = 'UPDATE_CF_USERNAMES';
const UPDATE_CF_USERSTATUS = 'UPDATE_CF_USERSTATUS';
const UPDATE_CF_USERDATA = 'UPDATE_CF_USERDATA';
const LOGOUT_CF_USERS = 'LOGOUT_CF_USERS';

export const updateCfUserNamesAction = (usernames) => {
  return {
    type: UPDATE_CF_USERNAMES,
    payload: usernames,
  };
};

export const updateCfUserStatusAction = (userStatus) => {
  return {
    type: UPDATE_CF_USERSTATUS,
    payload: userStatus,
  };
};

export const updateCfUserDataAction = (userData) => {
  return {
    type: UPDATE_CF_USERDATA,
    payload: userData,
  };
};

export const logoutCfUsersAction = () => {
  return {
    type: LOGOUT_CF_USERS,
  };
};

const initialState = {
  usernames: localStorage.getItem(LOCAL_CF_USERNAMES) || '',
  userStatus: {},
  userData: {},
};

export const CfUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CF_USERNAMES: {
      localStorage.setItem(LOCAL_CF_USERNAMES, action.payload);
      return { ...state, usernames: action.payload };
    }

    case UPDATE_CF_USERSTATUS: {
      return { ...state, userStatus: action.payload };
    }

    case UPDATE_CF_USERDATA: {
      return { ...state, userData: action.payload };
    }

    case LOGOUT_CF_USERS: {
      localStorage.removeItem(LOCAL_CF_USERNAMES);
      return { ...state, usernames: '', userStatus: {}, userData: {} };
    }

    default:
      return state;
  }
};
