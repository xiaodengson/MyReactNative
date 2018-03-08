/**
 * Created by zjq on 2017/7/13.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import DetailsHeader from './DetailsHeader';
import Qrcode from './Qrcode';
import DetailItem from './DetailItem';
let {width, height} = Dimensions.get('window');
import {scaleSize} from '../Util/ScreenUtils';
export default class CardDetails extends Component {

    // static navigationOptions = ({navigation,screenProps}) => ({
    //     // headerTitle:'会员卡',
    //     headerStyle:{
    //         height: scaleSize(80),
    //         backgroundColor:navigation.state.params.data.color
    //     },
    //     // headerLeft:(
    //     //     <TouchableOpacity style={{flex:1,width:scaleSize(200), justifyContent:'center'}}onPress={()=>{navigation.goBack()}}>
    //     //         <Image
    //     //             source={require('../../resources/back.png')}
    //     //             style={{height:scaleSize(40), width:scaleSize(40),resizeMode:'stretch', marginLeft:scaleSize(20)}}
    //     //         />
    //     //     </TouchableOpacity>
    //     // ),
    //     // headerTitleStyle:{
    //     //     fontSize:scaleSize(30),
    //     //     color:'white'
    //     // },
    //
    // });
    render() {
        const {navigate} = this.props.navigation;
        const {data} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <DetailsHeader url={data.shopLogoUrl} name={data.name} brandName={data.brandName}
                               effectiveDate={data.effectiveDate} bgColor={data.color}/>
                <Qrcode url={data.qrcodeUrl}/>
                <View style={{flex: 1, marginTop: scaleSize(10), width: width}}>
                    <View style={styles.itemView}>
                        <DetailItem isShow={false} text={'特权说明'} urlLeft={require('../../resources/vip.png')}/>
                        <Text style={styles.text}>{data.notice}</Text>
                    </View>
                    <View style={{
                        marginTop: scaleSize(1),
                        borderRadius: scaleSize(5),
                        flex: 1,
                        justifyContent: 'center',
                        backgroundColor: '#fefefe'
                    }}>
                        <DetailItem isShow={true} text={'适合门店'} urlLeft={require('../../resources/vip.png')}
                                    urlRight={require('../../resources/back_right.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d4dbde',
        marginBottom: scaleSize(30)
    },
    text: {
        marginLeft: scaleSize(30),
        marginTop: scaleSize(5),
        fontSize: scaleSize(20),
        color: '#afafaf'
    },
    itemView: {
        flex: 2,
        backgroundColor: '#fefefe',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: scaleSize(10)
    }
});
