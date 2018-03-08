/**
 * Created by dengfuming on 2017/8/18.
 * 我的地图（react-native-amap3d有问题，无效）
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import {screenW,scaleSize} from '../Util/ScreenUtils';
import {MapView, Marker, Polyline} from 'react-native-amap3d'

export default class MyMap extends Component{
    render(){
        return(
            <View style={styles.container}>
                <MapView
                    style={{flex:1,width:screenW,borderWidth:2,borderColor:'red'}}
                    coordinate={{latitude: 39.91095, longitude: 116.37296}}
                    locationEnabled = {true}
                    onLocation={({nativeEvent}) =>alert(nativeEvent.latitude)}
                    mapType="satellite"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
