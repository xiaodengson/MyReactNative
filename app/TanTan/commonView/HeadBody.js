/**
 * Created by dengfuming on 2018/1/31.
 */
import React, {PureComponent} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {screenW,scaleSize,setSpText} from '../../Util/ScreenUtils'
export default class HeadBody extends PureComponent {
    static propTypes = {
        imageLeft: React.PropTypes.number, //左侧图片地址
        imageRight:React.PropTypes.number, //右侧图片地址
        onPressLeft:React.PropTypes.func,//左侧点击事件
        onPressRight:React.PropTypes.func,//右侧点击事件
        title:React.PropTypes.string
    }
    // 构造
    constructor(props) {
        super(props);
    }

    render(){
        const {imageLeft,imageRight,title,onPressLeft,onPressRight} = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>onPressLeft()}>
                    <Image style={styles.image} source={imageLeft}/>
                </TouchableOpacity>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity onPress={()=>onPressRight()}>
                    <Image style={styles.image} source={imageRight}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:screenW,
        height:scaleSize(100),
        flexDirection:'row',
        padding:scaleSize(20),
        alignItems:'center',
        backgroundColor:'#f25c50'
    },
    image:{
        width:scaleSize(60),
        height:scaleSize(60),
        resizeMode:'stretch'
    },
    text:{
        flex:1,
        alignSelf:'center',
        textAlign:'center',
        fontSize:setSpText(10),
        color:'#fbfffb'
    }
});