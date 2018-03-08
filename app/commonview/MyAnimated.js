/**
 * Created by dengfuming on 2017/8/23.
 * 推荐学习 http://www.jianshu.com/p/2532c0e99c85
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Image, TouchableOpacity,
} from "react-native";
import {scaleSize,screenW} from '../Util/ScreenUtils';

export default class MyAnimated extends Component{
    // static navigationOptions = ({navigation,screenProps}) => ({
    //     // headerTitle:'动画',
    //     // headerStyle:{
    //     //     height: scaleSize(80),
    //     //     backgroundColor:'#2888ff'
    //     // },
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
    // });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fadeAnim:new Animated.Value(0.5),
            bounceValue:new Animated.Value(1),
            rotateValue:new Animated.Value(0),
            rotateXValue:new Animated.Value(0),
            rotateYValue:new Animated.Value(0),
            skewYValue:new Animated.Value(0),
            translateValue:new Animated.ValueXY({x:10,y:0})
        };
        this.value =10;
      }

    //弹跳动画
    spring = () =>{
          let value = (this.state.bounceValue.__getValue() == 1)?1.1:1;
          Animated.spring(
              this.state.bounceValue,{
                  toValue:value,
                  friction: 1,// 摩擦力，默认为7.
                  tension: 40,// 张力，默认40。
              }
          ).start();
    }
    //decay渐变动画
    decay = ()=>{
        if(this.value == 10){
            this.value = -10;
        }else{
            this.value =10;
        }
        Animated.decay(
            this.state.translateValue,{
                velocity: {x:this.value,y:0},// 起始速度，必填参数。
                deceleration: 0.8,// 速度衰减比例，默认为0.997
            }
        ).start();
    }
    //360度旋转动画
    rotateTiming = () =>{
        let value = (this.state.rotateValue.__getValue() == 0)?1:0;
        Animated.timing(
            this.state.rotateValue,{
                toValue:value
            }).start();
    }
    //x轴旋转
    rotateX =()=>{
        let value = (this.state.rotateXValue.__getValue() == 0)?1:0;
        Animated.timing(
            this.state.rotateXValue,{
                toValue:value
            }).start();
    }
    //Y轴旋转
    rotateY =()=>{
        let value = (this.state.rotateYValue.__getValue() == 0)?1:0;
        Animated.timing(
            this.state.rotateYValue,{
                toValue:value
            }).start();
    }
    //斜y轴旋转
    skewY =()=>{
        let value = (this.state.skewYValue.__getValue() == 0)?1:0;
        Animated.timing(
            this.state.skewYValue,{
                toValue:value
            }).start();
    }
    //timing渐变动画
    timing = () =>{
        let value = (this.state.fadeAnim.__getValue()==0.5)?1:0.5;
        Animated.timing(
            this.state.fadeAnim,{
                toValue:value,
                duration:1000//动画的持续时间（毫秒）。默认值为500.
            }).start();
    }
    //组合动画
    animatorSet = () =>{
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,{
                    toValue:(this.state.fadeAnim.__getValue()==0.5)?1:0.5,
                    duration:1000//动画的持续时间（毫秒）。默认值为500.
                }),
            Animated.delay(500),//延时500ms
            Animated.timing(
                this.state.rotateValue,{
                    toValue:(this.state.rotateValue.__getValue() == 0)?1:0
                }),
            Animated.delay(500),//延时500ms
            Animated.spring(
                this.state.bounceValue,{
                    toValue:(this.state.bounceValue.__getValue() == 1)?1.1:1,
                    friction: 1,// 摩擦力，默认为7.
                    tension: 40,// 张力，默认40。
                }
            ),
            Animated.delay(500),//延时500ms
            Animated.decay(
                this.state.translateValue,{
                    velocity: {x:10,y:0},// 起始速度，必填参数。
                    deceleration: 0.8,// 速度衰减比例，默认为0.997
                }
            ),
            Animated.delay(500),//延时500ms
            Animated.decay(
                this.state.translateValue,{
                    velocity: {x:-10,y:0},// 起始速度，必填参数。
                    deceleration: 0.8,// 速度衰减比例，默认为0.997
                }
            ),
        ]).start();
    }

    render(){
        const {fadeAnim,bounceValue,rotateValue,translateValue,rotateXValue,rotateYValue,skewYValue} = this.state;
        return(
            <View style={styles.container}>
                <View style={{flexWrap:'wrap', flexDirection:'row'}}>
                    <TouchableOpacity style={styles.textView} onPress={this.spring}>
                        <Text style={styles.text} >弹跳动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.decay}>
                        <Text style={styles.text}>decay渐变动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.timing}>
                        <Text style={styles.text}>timing渐变动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.rotateTiming}>
                        <Text style={styles.text} >360度旋转动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.animatorSet}>
                        <Text style={styles.text}>组合动画</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.rotateX}>
                        <Text style={styles.text}>x轴旋转</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.rotateY}>
                        <Text style={styles.text}>Y轴旋转</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textView} onPress={this.skewY}>
                        <Text style={styles.text}>斜Y轴旋转</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{flex:1,opacity:fadeAnim,
                    transform:[
                        {scale:bounceValue},//缩放
                        {rotate:rotateValue.interpolate({// 旋转，使用插值函数做值映射
                            inputRange:[0,1],
                            outputRange:['0deg','360deg']
                        })},
                        {rotateX:rotateXValue.interpolate({// 旋转，使用插值函数做值映射
                            inputRange:[0,1],
                            outputRange:['0deg','60deg']
                        })},
                        {rotateY:rotateYValue.interpolate({// 旋转，使用插值函数做值映射
                            inputRange:[0,1],
                            outputRange:['0deg','60deg']
                        })},
                        {skewY:skewYValue.interpolate({// 旋转，使用插值函数做值映射
                            inputRange:[0,1],
                            outputRange:['0deg','60deg']
                        })},
                        {translateX:translateValue.x},
                        {translateY:translateValue.y}
                    ]}}>
                    <Image source={require('../../resources/background.jpg')} style={styles.image} loadingIndicatorSource={require('../../resources/home_select.png')}/>
                </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textView:{
        marginTop:10,
        width:screenW/2-2,
        height: 40,
        borderWidth:1,
        borderRadius:5,
        backgroundColor: '#11a5ff',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:16,
        color:'#f6fff6',
    },
    image:{
        // resizeMode:'stretch',//设置了stretch就不能设置borderRadius，否则图片不能显示
        height:200,
        width:200,
        marginTop:40,
        borderRadius:10,
    }



});
