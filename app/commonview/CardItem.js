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
    Image
} from 'react-native';
import {observer} from 'mobx-react/native';
import {observable, action, computed} from 'mobx';
import {scaleSize} from '../Util/ScreenUtils';
var {height, width} = Dimensions.get('window');
export default class CardItem extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        const {data} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.viewLeft}>
                    <Text style={[styles.textLeftTop,{color:data.color}]}>{data.name}</Text>
                    <View style={{flexDirection: 'row',alignItems: 'center', marginTop:scaleSize(5)}}>
                        <Image
                            style={styles.imageLeft}
                            source={require('../../resources/validity.png')}
                        />
                        <Text style={styles.textLeftBottom}>{data.effectiveDate}</Text>
                    </View>
                </View>
                <View style={[styles.viewRight,{backgroundColor:data.color}]}>
                    <Image
                        style={styles.imageRight}
                        source={require('../../resources/plan.png')}
                    />
                    <Text style={styles.textRight}>立即派发</Text>
                </View>
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
        flex:3,
        height:scaleSize(200),
        paddingLeft: scaleSize(20),
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopLeftRadius: scaleSize(10),
        borderBottomLeftRadius: scaleSize(10),
        backgroundColor: '#F5FCFF',
    },
    viewRight:{
        flex:1,
        height:scaleSize(200),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: scaleSize(10),
        borderBottomRightRadius: scaleSize(10),
        backgroundColor: '#23b24a',
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
        color:'#23b24a'
    },
    textLeftBottom:{
        marginLeft: scaleSize(25),
        fontSize:scaleSize(25),
        color:'#a6a6a6'
    },
    textRight:{
        fontSize:scaleSize(25),
        color:'#ffffff'
    }
});
