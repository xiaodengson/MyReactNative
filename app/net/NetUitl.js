'use strict';
import React, {Component} from 'react';
class NetUitl extends Component {

    //post请求
    static  postFrom(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //表单形式
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'data=' + data + ''
        };

        fetch(url, fetchOptions).then((response) => response.text())
            .then((responseText) => {
                alert(responseText);
                callback(JSON.parse(responseText));

            }).done();
    }


    static postJson(url, data, callback, errorCallback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            })
            .catch((error) => {
                errorCallback(error);
            })

            .done();
    }


    /**
     * get请求 (不带参数)
     * @param url   请求的地址
     * @param callback  获取数据成功的回调方法
     * @param errorCallback  获取数据失败时的回调方法
     */

    static  get(url, callback, errorCallback) {
        console.log("调用的URL:" + url);
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                console.log("responseText:" + JSON.stringify(responseText))
                callback(JSON.parse(responseText));

            })
            .catch((error) => {
                console.log("error:" + error);
                errorCallback(error);
            }).done();
    }


    /**
     * 基于 fetch 封装的 GET请求(带参数)
     * 参考:http://www.tuicool.com/articles/M7NRr27
     * @param url  请求的地址
     * @param params  附加的拼接字符串 没有用 '' 占位
     * @param callback   获取数据成功的回调方法
     * @param errorCallback  获取数据失败时的回调方法
     */
    static  get(url, params, callback, errorCallback) {

        if (params) {
            let paramsArray = []

            Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))

            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }

        }
        console.log("调用的URL:" + url);
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                //TODO:打包时关闭
                console.log("responseText:" + JSON.stringify(responseText))
                callback(JSON.parse(responseText));

            }).catch((error) => {
            console.log(url + "  " + error)
            errorCallback(error);

        }).done();
    }


}

module.exports = NetUitl;
