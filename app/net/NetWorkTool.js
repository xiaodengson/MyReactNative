/**
 * Created by yangjun
 * 检查网络链接状态
 */

import React, {
    NetInfo
} from 'react-native';

const NOT_NETWORK = "网络不可用，请稍后再试";
const HAS_NETWORK = "网络已恢复";
const TAG_NETWORK_CHANGE = "NetworkChange";
const WIFI = "当前网络为WiFi";
const NOT_WIFI = "当前网络为手机流量";

/***
 * 检查网络链接状态
 * @param callback
 */
const checkNetworkState = (callback) => {

    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
}
/**
 * 检查网络是否需要计费，即3G/4G还是WiFI
 * 目前只适合android
 * 会警告用Promise来优化，后期优化
 */

const isWiFi = (callback) => {

    NetInfo.isConnectionExpensive((isConnectionExpensive) => {
        console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));
        callback(isConnectionExpensive);
    });
}

//调用方法
// NetWorkTool.isWiFi((isExpensive) => {
//     if (!isExpensive){
//         ToastAndroid.show(NetWorkTool.WIFI,1000);
//     }
//     else
//     {
//         ToastAndroid.show(NetWorkTool.NOT_WIFI,1000);
//     }
//
// });


/***
 * 移除网络状态变化监听
 * @param tag
 * @param handler
 */
const removeEventListener = (tag, handler) => {
    NetInfo.isConnected.removeEventListener(tag, handler);
}

/***
 * 添加网络状态变化监听
 * @param tag
 * @param handler
 */
const addEventListener = (tag, handler)=> {
    NetInfo.isConnected.addEventListener(tag, handler);
}

export default{
    checkNetworkState,
    isWiFi,
    addEventListener,
    removeEventListener,
    NOT_NETWORK,
    HAS_NETWORK,
    TAG_NETWORK_CHANGE,
    WIFI,
    NOT_WIFI
}
