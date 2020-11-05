import { createStore, combineReducers } from 'redux';
import { CfReducer } from './reducers/CfReducer';
import { CfUsersReducer } from './reducers/CfUsersReducer';
import { ProblemsReducer } from './reducers/ProblemsReducer';

const rootReducer = combineReducers({
  codeforces: CfReducer,
  cfUsers: CfUsersReducer,
  cfProblems: ProblemsReducer,
});

export const store = createStore(rootReducer);
