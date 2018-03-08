/**
 * Created by zjq on 2017/7/18.
 * 加载弹窗
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Modal,
} from 'react-native';
import {scaleSize,setSpText, screenW,screenH} from '../Util/ScreenUtils';
export default class Loading extends Component{

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShow:false
        };
    }

    show(){
        this.setState({
            isShow:true
        });
    }

    dismiss(){
        this.setState({
            isShow:false
        });
    }

    render(){
        const {isShow} = this.state;
        return(
            <Modal
                animationType ={'none'}
                transparent={true}
                visible={isShow}
                onRequestClose={()=>{return null}}>
                <View style={styles.container}>
                    <View style={styles.view}>
                        <ActivityIndicator animating={true} color={'#afafaf'} size="large"/>
                        <Text style={styles.text}>努力加载中。。。</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:screenW,
        height:screenH,
        justifyContent: 'center',
        padding:scaleSize(100),
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: 0,
        left: 0
    },
    view:{
        justifyContent:'center' ,
        alignItems: 'center',
        height:scaleSize(200),
        borderRadius:scaleSize(20),
        backgroundColor:'#fefefe'
    },
    text:{
        fontSize:scaleSize(30),
    }
});