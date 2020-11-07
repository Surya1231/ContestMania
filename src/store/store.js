import { createStore, combineReducers } from 'redux';
import { CfReducer } from './reducers/CfReducer';
import { CfUsersReducer } from './reducers/CfUsersReducer';
import { ProblemsReducer } from './reducers/ProblemsReducer';
import { CCReducer } from './reducers/CCReducer';
import { UpcomingReducer } from './reducers/UpcomingReducer';

const rootReducer = combineReducers({
  codeforces: CfReducer,
  cfUsers: CfUsersReducer,
  cfProblems: ProblemsReducer,
  codechef: CCReducer,
  upcoming: UpcomingReducer,
});

export const store = createStore(rootReducer);
