/**
 * Created by zjq on 2017/7/7.
 */
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
    DrawerItems,
    SafeAreaView
} from 'react-navigation';
import {
    Image,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text,
    BackHandler,
    AsyncStorage, ScrollView
} from 'react-native';
import React from 'react';

import Home from '../Home';
import Test1 from '../Test1';
import Test from '../Test';
import Shopping from '../Shopping';
import Me from '../Me';
import CardDetails from '../detail/CardDetails';
import GLOBAL from '../Util/GlobalConfig';
import {scaleSize} from '../Util/ScreenUtils';
import Loading from './Loading';
import MyMap from './MyMap';
import FetchTest from './FetchTest';
import MyAnimated from './MyAnimated';
import StackOptions from './StackOptions';
import MyLinking from './MyLinking';
import TanHome from "../TanTan/TanHome";
import ContentLeftItem from "../TanTan/commonView/ContentLeftItem";


const ImageHome = require('../../resources/home_normal.png');
const ImageHomeFocused = require('../../resources/home_select.png');
const ImageShopping = require('../../resources/shopping_normal.png');
const ImageShoppingFocused = require('../../resources/shopping_select.png');
const ImageMine = require('../../resources/mine_normal.png');
const ImageMineFocused = require('../../resources/mine_select.png');
const ImageTanTan = require('../../resources/tantan.png');

// 1 API
// DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
// 2 DrawerNavigatorConfig
// drawerWidth 抽屉的宽度
// drawerPosition 抽屉的位置 值有left 、right 默认是left
// contentComponent 用来自定义抽屉的组件，默认的组件是DrawerView 但DrawerView是不能滑动的
// contentOptions  配置内容
// 3 contentOptions
// initialRouteName 默认页面组件
// activeTintColor 选中文字颜色
// activeBackgroundColor 选中背景颜色
// inactiveTintColor未选中文字颜色
// inactiveBackgroundColor未选中背景颜色
// style样式
// labelStyle 抽屉标签样式
// onItemPress 每次调用按钮Item时调用该方法
// drawerLabel 抽屉标注，可以是元素 或一个函数这个函数返回一个元素
// drawerIcon 抽屉图标 可以是元素 或一个函数这个函数返回一个元素
const DrawerNav = DrawerNavigator({
    Test1:{
        screen:Test1
    },
    FetchTest: {
        screen: FetchTest
    },
    MyAnimated: {
        screen: MyAnimated
    }
},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'right', // 抽屉在左边还是右边
    // contentComponent: ContentLeftItem,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: Test1, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#2791f2', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});

const DrawerTanTanLeft = DrawerNavigator({
    TanTan:{
        screen:TanHome,
        navigationOptions:{
            drawerLabel: '探探',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../../resources/tantan.png')}
                    style={{height: scaleSize(40), width: scaleSize(40),tintColor: tintColor}}
                />
            ),
        }
    },
    Test1:{
        screen:Test1,
        navigationOptions:{
            drawerLabel: '测试',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../../resources/tantan.png')}
                    style={{height: scaleSize(40), width: scaleSize(40),tintColor: tintColor}}
                />
            ),
        }
    },

},{
    drawerWidth: scaleSize(300), // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    drawerBackgroundColor:'#2f2f2f',
    contentOptions: {
        initialRouteName: TanHome, // 默认页面组件
        activeTintColor: '#f25c50',  // 选中文字颜色
        // activeBackgroundColor: '#2f2f2f', // 选中背景颜色
        inactiveTintColor: '#fbfffb',  // 未选中文字颜色
        // inactiveBackgroundColor: '#2f2f2f', // 未选中背景颜色
        iconContainerStyle : {  // 样式
            width:scaleSize(50),
            height: scaleSize(50),
            alignSelf:'center',
        },
        labelStyle:{
            flex:1,
            fontSize: scaleSize(35),
            marginLeft:0,
            alignSelf:'center',
        },
        itemStyle:{
            justifyContent:'center',
            alignItems: 'center',
            height:scaleSize(100),
        }
    }
});

const MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: '卡卷',
            headerStyle: {
                height: scaleSize(80),
                backgroundColor: '#2791f2'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            // header:{}, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
            // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。

            headerRight: (
                <TouchableOpacity onPress={() => {
                    alert('功能还不具备')
                }}>
                    <Text style={{
                        color: '#fefefe',
                        alignSelf: 'center',
                        borderRadius: scaleSize(4),
                        fontSize: scaleSize(30),
                        backgroundColor: '#2a6cfc',
                        padding: scaleSize(5),
                        marginRight: scaleSize(10)
                    }}> 统计分析</Text>
                </TouchableOpacity>
            ), // 设置导航条右侧。可以是按钮或者其他。
            headerLeft: (
                <TouchableOpacity style={{flex: 1, width: scaleSize(200), justifyContent: 'center'}} onPress={() => {
                    BackHandler.exitApp()
                }}>
                    <Image
                        source={require('../../resources/back.png')}
                        style={{
                            height: scaleSize(40),
                            width: scaleSize(40),
                            resizeMode: 'stretch',
                            marginLeft: scaleSize(20)
                        }}
                    />
                </TouchableOpacity>
            ), // 设置导航条左侧。可以是按钮或者其他。
            headerTitleStyle: {        
                fontSize: scaleSize(30),
                color: 'white'
            },
            tabBarLabel: '卡卷',
            tabBarIcon: (({focused, tintColor}) => {
                return (
                    <Image
                        source={ImageHome}
                        style={[{height: scaleSize(40), width: scaleSize(40)}, {tintColor: tintColor}]}
                    />
                )
            }),
        },
    },
    Shopping: {
        screen: Shopping,
        navigationOptions: {
            header: null,
            tabBarLabel: '购物',
            tabBarIcon: (({focused, tintColor}) => {
                return (
                    <Image
                        source={ ImageShopping}
                        style={[{height: scaleSize(40), width: scaleSize(40)}, {tintColor: tintColor}]}
                    />
                )
            }),
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            header: null,
            tabBarLabel: '我的',
            tabBarIcon: (({focused, tintColor}) => {
                return (
                    <Image
                        source={ImageMine}
                        style={[{height: scaleSize(40), width: scaleSize(40)}, {tintColor: tintColor}]}
                    />
                )
            }),
        },
    },
    TanTan:{
        screen:DrawerTanTanLeft,
        navigationOptions: {
            header: null,
            tabBarLabel: '探探',
            tabBarIcon: (({focused, tintColor}) => {
                return (
                    <Image
                        source={ImageTanTan}
                        style={[{height: scaleSize(40), width: scaleSize(40)}, {tintColor: tintColor}]}
                    />
                )
            }),
        },
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    initialRouteName: 'Home',
    lazy: true,
    //backBehavior:'none',//按 back 键是否跳转到第一个Tab(首页)默认跳转到第一个Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#6dfc81', // label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: '#fefefe',//label和icon的前景色 活跃状态下（未选中）
        showIcon: true,
        indicatorStyle: {height: 0},
        iconStyle: {height: scaleSize(40), width: scaleSize(40)},
        labelStyle: {fontSize: scaleSize(30)},
        headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        style: {
            height: scaleSize(130),
            backgroundColor: '#29c1fc'
        },
    }
});
const MyNav = StackNavigator({
    MyTab: {
        screen: MyTab,
    },
    Test1: {
        screen: Test1,
        navigationOptions: ({navigation}) => StackOptions({navigation}, "测试1", true, "返回", true, "右侧标题", false)
    },
    Test: {
        screen: Test,
        navigationOptions: ({navigation}) => StackOptions({navigation}, "测试", true)
    },
    CardDetails: {
        screen: CardDetails,
        navigationOptions: ({navigation}) => StackOptions({navigation}, "会员卡", true)
    },
    MyMap: {
        // screen: MyMap
        screen:DrawerNav,
        navigationOptions: {
            header:null
        }
    },
    FetchTest: {
        screen: FetchTest,
    },
    MyAnimated: {
        screen: MyAnimated,
        navigationOptions: ({navigation}) => StackOptions({navigation}, "动画", true)
    },
    MyLinking:{
        screen:MyLinking
    }
});

export default MyNav;