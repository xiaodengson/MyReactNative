/**
 * Created by zjq on 2017/7/13.
 * 说明Item
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    Image
} from 'react-native';
import {scaleSize, screenW} from '../Util/ScreenUtils';
export default class DetailItem extends Component{
    static propTypes = {
        isShow:React.PropTypes.bool,//是否显示右边图片
        urlLeft:React.PropTypes.number,
        urlRight:React.PropTypes.number,
        text:React.PropTypes.string,
    };


    render(){
        const {isShow,urlLeft,urlRight,text} = this.props;
        return(
            <View style={styles.container}>
                <Image style={styles.imageLeft} source={urlLeft}/>
                <Text style={styles.text}>{text}</Text>
                <View style={{flex:1,flexDirection: 'row', justifyContent:'flex-end'}}>
                    {(isShow)?<Image style={styles.imageRight} source={urlRight}/>:null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: screenW,
        backgroundColor:'#fefefe'
    },
    imageLeft:{
        marginLeft: scaleSize(10),
        width:scaleSize(30),
        height:scaleSize(30),
        borderRadius:scaleSize(15)
    },
    imageRight:{
        marginRight: scaleSize(10),
        width:scaleSize(30),
        height:scaleSize(30),
    },
    text:{
        marginLeft:scaleSize(10),
        fontSize:scaleSize(30),
        color:'#000000'
    }
});
