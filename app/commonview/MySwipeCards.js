/**
 * Created by dengfuming on 2018/1/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    View,
    Text, Image
} from 'react-native';
import GestureRecognition from "./GestureRecognition";
const defaultDatas = ["第1张", "第2张", "第3章", "第4张", "第5张", "第6张", "第7张", "第8张"]
export default class MySwipeCards extends Component {
    static propTypes = {
        onDoubleClick: React.PropTypes.func, //双击回调
        moveToUp: React.PropTypes.func, //向上滑动
        moveToDown: React.PropTypes.func,//向下滑动
        moveToRight: React.PropTypes.func,//向右滑动
        moveToLeft: React.PropTypes.func,//向左滑动
        moveEnd: React.PropTypes.func,//停止移动
        renderCard: React.PropTypes.func,//卡片组件
        renderEmptyCard:React.PropTypes.func,//卡片组件
        cards: React.PropTypes.array,//卡片数据
        offset: React.PropTypes.number,//卡片偏移
        Height:React.PropTypes.number,//卡片高度
        Width:React.PropTypes.number//卡片宽度
    }
    static defaultProps = {
        cards: defaultDatas,
        onDoubleClick: () => {
        },
        moveToUp: () => {
        }, //向上滑动
        moveToDown: () => {
        },//向下滑动
        moveToRight: () => {
        },//向右滑动
        moveToLeft: () => {
        },//向左滑动
        renderCard: (card) => {
            return(
                <View style={[styles.view]}>
                    <Text style={styles.text}>{card}</Text>
                </View>
            );
        },//卡片组件
        renderEmptyCard:()=>{
            return(
                <View style={[styles.view]}>
                    <Text style={styles.text}>没有更多数据了</Text>
                </View>
            );
        },
        moveEnd: () => {
        },//停止移动
        offset: 10,
        Height:200,
        Width:200
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rotateValue: new Animated.Value(0),
            translateValue: new Animated.ValueXY({x: 0, y: 0}),
            card: this.props.cards[0],
            nextCard: this.props.cards[1],
            cards: this.props.cards,
        };
        this.index = 0;
        this.showEmpty = false;
    }

    moveToRight = (start_point, displacement) => {
        Animated.spring(
            this.state.rotateValue, {
                toValue: 1,
                friction: 5,
            }).start();
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: displacement.x, y: displacement.y},
                friction: 2,
            }
        ).start();
        this.props.moveToRight(this.index);
    }
    moveToLeft = (start_point, displacement) => {
        Animated.spring(
            this.state.rotateValue, {
                toValue: -1,
                friction: 5,
            }).start();
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: displacement.x, y: displacement.y},
                friction: 2,
            }
        ).start();
        this.props.moveToLeft(this.index);
    }
    moveToUp = (start_point, displacement) => {
        Animated.spring(
            this.state.rotateValue, {
                toValue: (displacement.x >= 0) ? 1 : -1,
                friction: 5,
            }).start();
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: displacement.x, y: displacement.y},
                friction: 2,
            }
        ).start();
        this.props.moveToUp(this.index);
    }
    moveToDown = (start_point, displacement) => {
        Animated.spring(
            this.state.rotateValue, {
                toValue: (displacement.x >= 0) ? 1 : -1,
                friction: 5,
            }).start();
        Animated.spring(
            this.state.translateValue, {
                toValue: {x: displacement.x, y: displacement.y},
                friction: 2,
            }
        ).start();
        this.props.moveToDown(this.index);
    }
    moveEnd = (start_point, displacement) => {
        // console.log("--test--:"+displacement.x+";"+displacement.y)
        const {moveEnd} = this.props;
        this.setNextCard(displacement.x,displacement.y);
        moveEnd();
    }

    setNextCard = (x,y)=>{
        const {cards,rotateValue,translateValue} = this.state;
        const {Height, Width,moveEnd} = this.props;
        if (this.index < cards.length-1&&(Math.abs(x)>(Width/3)||Math.abs(y)>(Height/3))) {
            this.index++;
            if (this.index + 1 === cards.length){
                this.showEmpty = true;
            } else {
                this.showEmpty = false;
            }
            this.setState({
                card: cards[this.index],
                nextCard: (this.index + 1 === cards.length) ? cards[this.index] : cards[this.index + 1]
            });
        }
        rotateValue.setValue(0);
        translateValue.setValue({x: 0, y: 0});
    }
    forceLeftSwipe = ()=>{
        let delay = 300;
        Animated.spring(
            this.state.rotateValue, {
                toValue: -1,
                friction: 5,
            }).start();
        Animated.timing(
            this.state.translateValue, {
                toValue: {x:-500, y: 0},
                duration:delay
            }
        ).start();
        setTimeout(() => {
            this.setNextCard(-500,0);
        }, delay);
    }
    forceRightSwipe =()=>{
        let delay = 300;
        Animated.spring(
            this.state.rotateValue, {
                toValue: 1,
                friction: 5,
            }).start();
        Animated.timing(
            this.state.translateValue, {
                toValue: {x:500, y: 0},
                duration:delay
            }
        ).start();
        setTimeout(() => {
            this.setNextCard(-500,0);
        }, delay);
    }
    onDoubleClick = () => {
        this.props.onDoubleClick();
    }

    renderCard = () => {
        const {cards, card, nextCard, rotateValue, translateValue} = this.state;
        const {offset,renderCard,renderEmptyCard,Height,Width} = this.props;
        let Cards = cards.slice(0, 3).reverse();
        return (
            Cards.map((data, i) => {
                let scale = 0.9 + (0.1 / Cards.length) * (i + 1);
                let lastScale = 0.9 + (0.1 / Cards.length) * i;
                let offsetX = offset * (i);
                let lastOffsetX = offsetX + offset;
                let offsetY = offset * (Cards.length - i + 1);
                let lastOffsetY = offsetY + offset;
                let STYLE = {
                    position: 'absolute',
                    top: offsetY
                };

                if (i + 1 === Cards.length) {
                    return (
                        <Animated.View key={i} style={[STYLE,styles.container,{
                            transform: [
                                {rotate: rotateValue.interpolate({// 旋转，使用插值函数做值映射
                                    inputRange: [-1, 0, 1],
                                    outputRange: ['-20deg', '0deg', '20deg']
                                })},
                                {translateX: translateValue.x},
                                {translateY: translateValue.y},
                                {scale:
                                    rotateValue.interpolate({
                                        inputRange: [-1, 0, 1],
                                        outputRange: [scale, lastScale, scale]
                                    })}
                            ],
                            opacity: rotateValue.interpolate({// 透明度，使用插值函数做值映射
                                inputRange: [-1, 0, 1],
                                outputRange: [0.8, 1, 0.8]
                            })}
                            ]}>
                            {renderCard(card)}
                            <GestureRecognition
                                style={{marginTop: -Height, height: Height, width: Width, backgroundColor: 'transparent',}}
                                moveToRight={this.moveToRight}
                                moveToLeft={this.moveToLeft}
                                moveToUp={this.moveToUp}
                                moveToDown={this.moveToDown}
                                moveEnd={this.moveEnd}
                                onDoubleClick={this.onDoubleClick}
                            />
                        </Animated.View>)
                }
                return (
                    <Animated.View key={i} style={[STYLE, styles.container, {
                        transform: [{
                            scale: rotateValue.interpolate({
                                inputRange: [-1, 0, 1],
                                outputRange: [scale, lastScale, scale]
                            })
                        }]
                    }
                    ]}>
                        {(this.showEmpty)?renderEmptyCard():renderCard(nextCard)}
                    </Animated.View>);
            }));
    }

    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                {this.renderCard()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
        fontSize: 13
    },
    view: {
        height: 200,
        width: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3cccb6"
    }
});