/**
 * Created by dengfuming on 2017/9/13.
 */
"use strict";
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Linking,
    Share,
    Vibration
} from 'react-native';

export default class MyLinking extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    //链接
    onClick(url) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('无法打开该URI: ' + url);
            }
        });
    }

    //分享
    shareMessage = () => {
        Share.share({
            message: '我是被分享的本文信息',
            url: 'http://www.lcode.org',
            title: 'React Native'
        }, {
            dialogTitle: '分享博客地址',
        })
            .then()
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }
    //震动
    onClickVibration = ()=>{
        // alert(1)
        Vibration.vibrate([0,500,1000,500],false)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}
                      onPress={() => this.onClick('http://www.reactnative.vip')}>点击打开reactNative网页</Text>
                <Text style={styles.text} onPress={() => this.onClick('tel:13667377378')}>点击拨打电话</Text>
                <Text style={styles.text} onPress={() => this.onClick('smsto:18927492940')}>点击发送短信</Text>
                <Text style={styles.text} onPress={this.shareMessage}>点击分享文本</Text>
                <Text style={styles.text} onPress={this.onClickVibration}>点击震动</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 12,
        marginTop: 5
    }
});