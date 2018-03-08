/**
 * Created by zjq on 2017/7/13.
 * 详情页头部
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
let{width, height} = Dimensions.get('window');
export default class DetailsHeader extends Component{

    static propTypes = {//默认参数属性
        url:React.PropTypes.string,
        name:React.PropTypes.string,
        brandName:React.PropTypes.string,
        effectiveDate:React.PropTypes.string,
        bgColor:React.PropTypes.string
    };
    render(){
        const {url,name,brandName,effectiveDate,bgColor} = this.props;
        return(
            <View style={[styles.container,{backgroundColor:bgColor}]}>
                <Image source={{uri:url}} style={styles.image}/>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textBrandName}>{brandName}</Text>
                <Text style={styles.textBrandName}>{effectiveDate}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        width:width,
        alignItems: 'center',
        justifyContent:'center'
    },
    image:{
        width:scaleSize(100),
        height:scaleSize(100),
        borderRadius:scaleSize(50)
    },
    textName:{
        alignSelf: 'center',
        marginTop: scaleSize(10),
        fontSize:scaleSize(30),
        color:'#fefefe'
    },
    textBrandName:{
        alignSelf: 'center',
        marginTop: scaleSize(10),
        fontSize:scaleSize(25),
        color:'#fefefe'
    }
});