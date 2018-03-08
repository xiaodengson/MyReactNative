/**
 * Created by dengfuming on 2017/9/7.
 */
import React, {Component} from 'react';
import {} from 'react-native';
import {
    View,
    Image,
    Text,
    StyleSheet
} from "react-native";
export default class BadgeView extends Component {
    static propTypes = {
        showMessage: React.PropTypes.bool,//是否显示消息数
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        source: React.PropTypes.number,
        messageNumber: React.PropTypes.string//消息数量
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        const {showMessage, width, height, source, messageNumber} = this.props;
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', width: width, height: height}}>
                <Image style={{width: width , height: height, resizeMode: 'stretch'}} source={source}/>
                {(showMessage) ?
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#f6fff6',
                        backgroundColor: 'red',
                        borderRadius: 5,
                        width: 20,
                        height: 15,
                        alignSelf: 'flex-end',
                        justifyContent: 'center', alignItems: 'center',
                        marginTop: -( height)
                    }}>
                        <Text style={{color: '#f6fff6', fontSize: 10,}}>{messageNumber}</Text>
                    </View> :
                    <View style={{
                        width: 20,
                        height: 15,
                        marginTop: -( height )
                    }}></View>}
            </View>
        );
    }
}
