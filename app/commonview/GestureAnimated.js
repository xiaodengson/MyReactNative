/**
 * Created by dengfuming on 2017/8/30.
 * 手势动画
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Animated,
    View,
} from 'react-native';
import GestureRecognition from "./GestureRecognition";

export default class GestureAnimated extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bounceValue: new Animated.Value(1),
            rotateValue: new Animated.Value(0),
            translateValue: new Animated.ValueXY({x: 0, y: 0})
        };
    }

    onDoubleClick = () => {
        //双击放大
        const {bounceValue} = this.state;
        let value = (bounceValue.__getValue() == 1) ? 1.1 : 1;
        Animated.spring(
            bounceValue, {
                toValue: value,
                friction: 1,// 摩擦力，默认为7.
                tension: 40,// 张力，默认40。
            }
        ).start(status =>{alert(status.finished)});
    }

    moveToDown = (start_point, displacement) => {
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: 0, y: displacement.y / 2},
                friction: 2,
            }
        ).start();
    }
    moveToUp = (start_point, displacement) => {
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: 0, y: displacement.y / 2},
                friction: 2,
            }
        ).start();
    }
    moveToLeft = (start_point, displacement) => {
        let value = displacement.x / 200;
        Animated.spring(
            this.state.rotateValue, {
                toValue: value,
                friction: 2,
            }).start();
    }
    moveToRight = (start_point, displacement) => {
        console.log("----displacement---x:" + displacement.x + "; y:" + displacement.y);
        let value = displacement.x / 200;
        Animated.spring(
            this.state.rotateValue, {
                toValue: value,
                friction: 2,
            }).start();
    }
    moveEnd = () => {
        Animated.spring(
            this.state.rotateValue, {
                toValue: 0,
                friction: 2,
            }).start();
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: 0, y: 0},
                friction: 2,
            }
        ).start();

    }

    render() {
        const {bounceValue, rotateValue, translateValue} = this.state;
        return (
            <View style={{marginTop: 10}}>
                <Animated.View style={{
                    transform: [
                        {
                            rotate: rotateValue.interpolate({// 旋转，使用插值函数做值映射
                                inputRange: [0, 1],
                                outputRange: ['0deg', '60deg']
                            })
                        },
                        {rotateY:  rotateValue.interpolate({// 旋转，使用插值函数做值映射
                            inputRange: [0, 1],
                            outputRange: ['0deg', '60deg']
                        })
                        },
                        {scale: bounceValue},//缩放
                        {translateX: translateValue.x},
                        {translateY: translateValue.y}
                    ]
                }}>
                    <Image source={require('../../resources/background.jpg')} style={styles.image}/>
                </Animated.View>
                <GestureRecognition
                    style={{marginTop: -200, height: 200, width: 200, backgroundColor: 'transparent'}}
                    onDoubleClick={this.onDoubleClick}
                    moveToDown={this.moveToDown}
                    moveToUp={this.moveToUp}
                    moveToLeft={this.moveToLeft}
                    moveToRight={this.moveToRight}
                    moveEnd={this.moveEnd}>
                </GestureRecognition>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        // resizeMode:'stretch',//设置了stretch就不能设置borderRadius，否则图片不能显示
        height: 200,
        width: 200,
        borderRadius: 10,
    }
});
