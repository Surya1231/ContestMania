const LOCAL_UPCOMING_CONTEST = 'LOCAL_UPCOMING_CONTEST';

const UPDATE_UPCOMING_CONTEST = 'UPDATE_UPCOMING_CONTEST';

export const updateUpcomingContestAction = (contestList) => {
  return {
    type: UPDATE_UPCOMING_CONTEST,
    payload: contestList,
  };
};

const initialState = {
  contestList: JSON.parse(localStorage.getItem(LOCAL_UPCOMING_CONTEST) || '[]'),
};

export const UpcomingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_UPCOMING_CONTEST: {
      localStorage.setItem(LOCAL_UPCOMING_CONTEST, JSON.stringify(action.payload));
      return { ...state, contestList: action.payload };
    }

    default:
      return state;
  }
};
