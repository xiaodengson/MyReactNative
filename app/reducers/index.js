/**
 * Created by dengfuming on 2018/5/3.
 */
import HomeReducer from './HomeReducer'
import { combineReducers } from 'redux';

const allReducer ={
    home:HomeReducer,
}

export const rootRefucer = combineReducers(allReducer);