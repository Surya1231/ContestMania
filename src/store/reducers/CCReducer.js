const LOCAL_CC_CONTEST_LIST = ' LOCAL_CC_CONTEST_LIST';
const LOCAL_CC_FILTERS = 'LOCAL_CC_FILTERS';

const UPDATE_CC_CONTEST_LIST = 'UPDATE_CC_CONTEST_LIST';
const UPDATE_CC_FILTERS = 'UPDATE_CC_FILTERS';

export const updateCodeChefContestListAction = (ccContestList) => {
  return {
    type: UPDATE_CC_CONTEST_LIST,
    payload: ccContestList,
  };
};

export const updateCodeChefFiltersAction = (ccFilters) => {
  return {
    type: UPDATE_CC_FILTERS,
    payload: ccFilters,
  };
};

const ccCategories = {
  LongChallenge: { name: 'Long Challenge', search: 'Challenge' },
  LunchTime: { name: 'Lunch Time', search: 'Lunchtime' },
  CookOff: { name: 'Cook Off', search: 'Cook-off' },
  ICPC: { name: 'ICPC', search: 'ICPC' },
};

const initialState = {
  ccContestList: JSON.parse(localStorage.getItem(LOCAL_CC_CONTEST_LIST) || '[]'),
  ccFilters: JSON.parse(localStorage.getItem(LOCAL_CC_FILTERS) || '{}'),
  ccCategories,
};

export const CCReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CC_CONTEST_LIST: {
      localStorage.setItem(LOCAL_CC_CONTEST_LIST, JSON.stringify(action.payload));
      return { ...state, ccContestList: action.payload };
    }

    case UPDATE_CC_FILTERS: {
      localStorage.setItem(LOCAL_CC_FILTERS, JSON.stringify(action.payload));
      return { ...state, ccFilters: action.payload };
    }

    default:
      return state;
  }
};
