import { combineReducers } from 'redux';
import defaultReducer from './reducers/default.reducer';

const rootReducer = combineReducers({
    default: defaultReducer,
});

export default rootReducer;
