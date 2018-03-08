/**
 * Author : Venco
 * Time : 2017/9/1
 * FLAG : I have no bug!
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
} from 'react-native'
import {
    StackNavigator,
} from 'react-navigation'

const {width, height} = Dimensions.get('window');

// export default function CommunalStackNav({navigation}){
//     let {state,goBack} = navigation;
//
//     const visible = state.params.isViewable;
//     let header;
//     if (visible === true){
//         header = null;
//     }
//     const headerStyle = {backgroundColor: '#4ECBFC'};
//     const headerTitle = state.params.title;
//     const headerTitleStyle = {color:'white', fontWeight:'500'}
//     const headerBackTitle = false;
//     const headerLeft = (
//         <Image source={{uri: 'mipmap/hot_icon_20x20'}} style={{height:20, width:20}}/>
//     );
//     const headerRight = (
//         <Image source={{uri: 'mipmap/hot_icon_20x20'}} style={{height:20, width:20}}/>
//     );
//     return {headerStyle, headerTitle, headerTitleStyle, headerBackTitle, headerLeft, headerRight, header}
// };

export default class CommunalStackNav extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            leftItem:this.props.leftItem
        };
      }

    static propTypes = {
        leftItem: React.PropTypes.func,
        titleItem: React.PropTypes.func,
        rightItem: React.PropTypes.func,
    };

    renderLeftItem() {
        if (this.props.leftItem === undefined) return;
        return this.props.leftItem();
    }

    renderTitleItem() {
        if (this.props.titleItem === undefined) return;
        return this.props.titleItem();
    }

    renderRightItem() {
        if (this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.renderLeftItem()}
                </View>
                <View>
                    {this.renderTitleItem()}
                </View>
                <View>
                    {this.renderRightItem()}
                </View>>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingTop:Platform.OS === 'ios' ? 15 : 0
    }
});