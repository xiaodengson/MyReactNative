/**
 * Created by zjq on 2017/7/13.
 * 二维码
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
import {scaleSize} from '../Util/ScreenUtils';
import QRCode from 'react-native-qrcode';
let{width, height} = Dimensions.get('window');
export default class Qrcode extends Component{
    static propTypes = {
        url:React.PropTypes.string,
    };
    render(){
        const {url}=this.props;
        return(
            <View style={styles.container}>
                {/*<Image source={url} style={styles.image}/>*/}
                <QRCode value={url} size={scaleSize(350)} bgColor='black' fgColor='white'/>
                <Text style={styles.text}>微信扫一扫，领取会员卡</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        width:width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fefefe',
    },
    image:{
        width:scaleSize(350),
        height:scaleSize(350),
    },
    text:{
        marginTop:scaleSize(25),
        fontSize:scaleSize(25),
        color:'#000000'
    }
});
