/**
 * Created by zjq on 2017/7/12.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
    Image
} from 'react-native';
import {observer} from 'mobx-react/native';
import {observable, action, computed} from 'mobx';
import {scaleSize} from '../Util/ScreenUtils';
var {height, width} = Dimensions.get('window');
export default class CouponItem extends Component{

    onPress = ()=>{
        const {navigate,data} = this.props;
        navigate('CardDetails',{data:data});
    };
    render(){
        const {data} = this.props;
        return(
            <View style={styles.container}>
                    <Image style={{flex:3, tintColor:'#F5FCFF',resizeMode:'stretch', height:scaleSize(200),}} source={require('../../resources/coupon_left.png')}>
                        <View style={styles.viewLeft}>
                            <Text style={styles.textLeftTop}>{data.name}</Text>
                            <View style={{flexDirection: 'row',alignItems: 'center', marginTop:scaleSize(5)}}>
                                <Image
                                    style={styles.imageLeft}
                                    source={require('../../resources/problem.png')}
                                />
                                <Text style={styles.textLeftBottom}>{data.couponSubTitle}</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems: 'center', marginTop:scaleSize(5)}}>
                                <Image
                                    style={styles.imageLeft}
                                    source={require('../../resources/validity.png')}
                                />
                                <Text style={styles.textLeftBottom}>{data.effectiveDate}</Text>
                            </View>
                        </View>
                    </Image>
                    <Image style={{flex:1,tintColor:'#2791f2', resizeMode:'stretch', height:scaleSize(200),}} source={require('../../resources/coupon_right.png')}>
                        <View style={styles.viewRight}>
                            <Image
                                style={styles.imageRight}
                                source={require('../../resources/plan.png')}
                            />
                            <Text style={styles.textRight}>立即派发</Text>
                        </View>
                    </Image>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width-scaleSize(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewLeft:{
        flex:1,
        height:scaleSize(200),
        paddingLeft: scaleSize(30),
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopLeftRadius: scaleSize(10),
        borderBottomLeftRadius: scaleSize(10),
    },
    viewRight:{
        flex:1,
        height:scaleSize(200),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: scaleSize(10),
        borderBottomRightRadius: scaleSize(10),
    },
    imageLeft:{
        height:scaleSize(25),
        width:scaleSize(25)
    },
    imageRight:{
        height:scaleSize(80),
        width:scaleSize(80)
    },
    textLeftTop:{
        fontSize:scaleSize(30),
        color:'#2791f2'
    },
    textLeftBottom:{
        marginLeft:scaleSize( 25),
        fontSize:scaleSize(25),
        color:'#a6a6a6'
    },
    textRight:{
        fontSize:scaleSize(25),
        color:'#ffffff'
    }
});

