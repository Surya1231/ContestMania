import { globalSolutions } from '../../api/data/cfProblemsSolutions';
import { problemsCategories } from '../../api/data/problemsData';

const LOCAL_PROBLEMS_FILTERS = 'LOCAL_PROBLEMS_FILTERS';
const LOCAL_PROBLEMS = 'LOCAL_PROBLEMS';

const UPDATE_PROBLEMS_FILTERS = 'UPDATE_PROBLEMS_FILTERS';
const UPDATE_PROBLEMS = 'UPDATE_PROBLEMS';

export const updateProblemsFiltersAction = (filters) => {
  return {
    type: UPDATE_PROBLEMS_FILTERS,
    payload: filters,
  };
};

export const updateProblemsAction = (problems) => {
  return {
    type: UPDATE_PROBLEMS,
    payload: problems,
  };
};

const initialState = {
  problems: JSON.parse(localStorage.getItem(LOCAL_PROBLEMS) || '[]'),
  filters: JSON.parse(localStorage.getItem(LOCAL_PROBLEMS_FILTERS) || '{}'),
  categories: problemsCategories,
  globalSolutions,
};

export const ProblemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROBLEMS: {
      let categories = new Set();
      const problems = action.payload;
      problems.forEach((problem) => {
        const { tags } = problem;
        tags.forEach((tag) => categories.add(tag));
      });
      categories = [...categories].sort();
      localStorage.setItem(LOCAL_PROBLEMS, JSON.stringify(problems));
      return { ...state, problems, categories };
    }

    case UPDATE_PROBLEMS_FILTERS: {
      localStorage.setItem(LOCAL_PROBLEMS_FILTERS, JSON.stringify(action.payload));
      return { ...state, filters: action.payload };
    }

    default:
      return state;
  }
};
