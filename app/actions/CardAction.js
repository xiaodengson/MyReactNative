/**
 * Created by dengfuming on 2018/5/3.
 */

export const CARD_LIST = 'CARD_LIST';

export const getCardList = (list)=>{
    return {
        type:CARD_LIST,
        list:list
    }
}
