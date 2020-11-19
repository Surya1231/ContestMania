const { companyQuestions, companyCategories } = require('../../api/data/companyQuestions');

const LOCAL_COMPANY_USER_DATA = ' LOCAL_COMPANY_USER_DATA';
const LOCAL_COMPANY_FILTERS = 'LOCAL_COMPANY_FILTERS';

const UPDATE_COMPANY_FILTERS = 'UPDATE_COMPANY_FILTERS';
const UPDATE_COMPANY_USER_DATA = 'UPDATE_COMPANY_USER_DATA';
const CLEAR_COMPANY_USER_DATA = 'CLEAR_COMPANY_USER_DATA';

// let a = [];
// companyQuestions.forEach((item) => (a = [...a, ...item.tags]));
// a = [...new Set(a)];
// a.sort();
// console.log(JSON.stringify(a));

export const updateCompanyFiltersAction = (filters) => {
  return {
    type: UPDATE_COMPANY_FILTERS,
    payload: filters,
  };
};

export const updateCompanyUserDataAction = (userData) => {
  return {
    type: UPDATE_COMPANY_USER_DATA,
    payload: userData,
  };
};

export const clearCompanyUserDataAction = () => {
  return {
    type: CLEAR_COMPANY_USER_DATA,
  };
};

const initialState = {
  problems: companyQuestions,
  categories: companyCategories,
  userData: JSON.parse(localStorage.getItem(LOCAL_COMPANY_USER_DATA) || '{}'),
  filters: JSON.parse(localStorage.getItem(LOCAL_COMPANY_FILTERS) || '{}'),
};

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_FILTERS: {
      localStorage.setItem(LOCAL_COMPANY_FILTERS, JSON.stringify(action.payload));
      return { ...state, filters: action.payload };
    }

    case UPDATE_COMPANY_USER_DATA: {
      localStorage.setItem(LOCAL_COMPANY_USER_DATA, JSON.stringify(action.payload));
      return { ...state, userData: action.payload };
    }

    case CLEAR_COMPANY_USER_DATA: {
      localStorage.removeItem(LOCAL_COMPANY_USER_DATA);
      return { ...state, userData: {} };
    }

    default:
      return state;
  }
};
