import { cfTotalProblems } from '../../api/data/cfTotalData';

const LOCAL_CF_FILTERS = 'LOCAL_CF_FILTERS ';
const LOCAL_CF_CONTEST = 'LOCAL_CF_CONTEST';

const UPDATE_CF_FILTERS = 'UPDATE_CF_FILTERS';
const UPDATE_CF_CONTEST = 'UPDATE_CF_CONTES';

export const UpdateCfFiltersAction = (filters) => {
  return {
    type: UPDATE_CF_FILTERS,
    payload: filters,
  };
};

export const UpdateCfContestAction = (contestList) => {
  return {
    type: UPDATE_CF_CONTEST,
    payload: contestList,
  };
};

const categories = {
  All: { name: 'All', value: 'All', search: '' },
  Div3: { name: 'Div 3', value: 'Div3', search: '(Div. 3)' },
  Educational: { name: 'Educational', value: 'Educational', search: 'Educational' },
  Div2: { name: 'Div 2', value: 'Div2', search: '(Div. 2' },
  Div1: { name: 'Div 1', value: 'Div1', search: 'Div. 1' },
  Global: { name: 'Global', value: 'Global', search: 'Global' },
  Funny: { name: 'Funny', value: 'Funny', search: 'April' },
  Technocup: { name: 'Technocup', value: 'Technocup', search: 'Technocup' },
  VKCup: { name: 'Vk Cup', value: 'VKCup', search: 'VK Cup' },
  KotlinHeroes: { name: 'Kotlin Heroes', value: 'KotlinHeroes', search: 'Kotlin Heroes' },
  Microsoft: { name: 'Microsoft', value: 'Microsoft', search: 'Microsoft' },
  BetaRounds: { name: 'Beta Rounds', value: 'BetaRounds', search: 'Codeforces Beta Round' },
};

const initialState = {
  categories,
  contestList: JSON.parse(localStorage.getItem(LOCAL_CF_CONTEST) || '[]'),
  filters: JSON.parse(localStorage.getItem(LOCAL_CF_FILTERS) || '{}'),
  cfTotal: cfTotalProblems,
};

export const CfReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CF_FILTERS: {
      localStorage.setItem(LOCAL_CF_FILTERS, JSON.stringify(action.payload));
      return {
        ...state,
        filters: action.payload,
      };
    }

    case UPDATE_CF_CONTEST: {
      localStorage.setItem(LOCAL_CF_CONTEST, JSON.stringify(action.payload));
      return {
        ...state,
        contestList: action.payload,
      };
    }

    default:
      return state;
  }
};
