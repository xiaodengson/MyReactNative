/**
 * Created by dengfuming on 2018/1/30.
 */
import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {screenW,screenH,setSpText,scaleSize} from '../../Util/ScreenUtils';

export default class ContentLeftItem extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        const {url,title} = this.props;
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={url}/>
                <Text>{title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    image:{
        height:scaleSize(30),
        width:scaleSize(30),
        resizeMode:'stretch'
    },
    text:{
      fontSize:setSpText(15)
    }
});