/**
 * Created by dengfuming on 2017/8/23.
 * 后台任务
 */
import React,{Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

const MyTask = {

}
module.exports = async (taskData) => {
    // 要做的事情
    console.log("--------后台服务测试--------");
}
AppRegistry.registerHeadlessTask('MyTask', () => require('MyTask'));