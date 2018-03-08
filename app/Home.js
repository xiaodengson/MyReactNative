/**
 * Created by zjq on 2017/7/7.
 */

import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    PixelRatio,
    View
} from 'react-native';
import CardItem from './commonview/CardItem';
import CouponItem from './commonview/CouponItem';
import MyFlatList from './commonview/MyFlatList';
import CardCouponBase from './base/CardCouponBase';
var {height, width} = Dimensions.get('window');
import {scaleSize} from './Util/ScreenUtils';
let list;
export default class Home extends Component{

    constructor(){
        super();
    }

    componentWillMount() {
        list = new Array();
        for(let i=1;i<11;i++){
            let data = new CardCouponBase();
            data.key = i;
            data.type = i%2;
            data.name = '测试会员卡有效期'+i;
            data.effectiveDate = '有效期: '+i+'天';
            data.color = (i%3==1)?'#b22e2b': '#23b24a';
            data.couponSubTitle = '0.5折';
            data.notice = '没什么说明，就是干';
            data.brandName = '深圳云移-集成';
            data.qrcodeUrl = 'http://m.zb25.com.cn//pay/scan/result?pid=20892327181907398656&sid=10549840601068216320&sign=74A6A960CBB9FA1F5B56A4C0976DA3B9';
            data.shopLogoUrl ="https://facebook.github.io/react/img/logo_og.png";
            list.push(data);
    }

    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                {/*<Text style={styles.textStyle}*/}
                      {/*onPress={()=>{navigate('Test1',{name:'哈哈哈哈哈'})}}>*/}
                    {/*首页*/}
                {/*</Text>*/}
                <MyFlatList data={list} navigate={navigate}/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d4dbde',
    },
    textStyle: {
        fontSize: scaleSize(20),
        textAlign: 'center',
        margin: scaleSize(10),
    },
});