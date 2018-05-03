/**
 * Created by dengfuming on 2018/5/3.
 */
import { createStore } from "redux";
import rootReducer from '../reducers/HomeReducer';


export default ()=>{
    // 根据 reducer 初始化 store
    const store = createStore(rootReducer);

    return store;
};