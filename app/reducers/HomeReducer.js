/**
 * Created by dengfuming on 2018/5/3.
 */

import {CARD_LIST,getCardList} from '../actions/CardAction'

const homeReducer =(state =getCardList(null), action)=>{

    // alert(JSON.stringify(action))
    switch (action.type){
        case CARD_LIST:
            return{
                ...state,
                list:action.list
            }
        default:
            return state
    }
}
export default homeReducer