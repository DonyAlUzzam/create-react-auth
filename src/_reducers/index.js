import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { register } from './user.reducer';


const rootReducer = combineReducers({ 
    authentication,
    register
});

export default rootReducer;