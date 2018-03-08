/**
 * Created by dengfuming on 2017/8/22.
 * 手势识别
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    PanResponder,
    ToastAndroid,
    View
} from 'react-native';
export default class GestureRecognition extends Component{

    static propTypes = {
        onDoubleClick:React.PropTypes.func, //双击回调
        moveToUp:React.PropTypes.func, //向上滑动
        moveToDown:React.PropTypes.func,//向下滑动
        moveToRight:React.PropTypes.func,//向右滑动
        moveToLeft:React.PropTypes.func,//向左滑动
        moveEnd:React.PropTypes.func,//停止移动
    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.firstTime = 0;
        this.secondTime = 0;
        this.firstClick = true;//第一次点击
      }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });
    }

    _handleStartShouldSetPanResponder = (e, gestureState)=>{
          console.log("----handleStartShouldSetPanResponder----");
          return true;
    }
    _handleMoveShouldSetPanResponder = (e, gestureState)=>{
        console.log("----_handleMoveShouldSetPanResponder----");
        return true;
    }
    _handlePanResponderGrant = (e, gestureState)=>{
        console.log("----_handlePanResponderGrant----");
    }
    _handlePanResponderMove = (e, gestureState)=>{
        const {moveToDown,moveToUp,moveToLeft,moveToRight} = this.props;
        console.log("----_handlePanResponderMove----");
        let startX = gestureState.x0;
        let startY = gestureState.y0;
        let moveX = gestureState.moveX;
        let moveY = gestureState.moveY;
        let relativeX = moveX -startX;
        let relativeY = moveY -startY;
        let start_point = {
            x:startX,y:startY
        };
        let displacement ={
            x:relativeX,y:relativeY
        };

        if(relativeX>0){
            //1，4像限
            if( relativeX>Math.abs(relativeY)){
                console.log("move to right");
                moveToRight(start_point,displacement);
            }else if(relativeX<Math.abs(relativeY)){
                if(relativeY>0){
                    console.log("move to down");
                    moveToDown(start_point,displacement);
                }else{
                    console.log("move to up");
                    moveToUp(start_point,displacement);
                }
            }
        }else if(relativeX<0){
            //2,3像限
            if(Math.abs(relativeX)>Math.abs(relativeY)){
                console.log("move to left");
                moveToLeft(start_point,displacement);
            }else if(Math.abs(relativeX)<Math.abs(relativeY)){
                if(relativeY > 0){
                    console.log("move to down");
                    moveToDown(start_point,displacement);
                }else{
                    console.log("move to up");
                    moveToUp(start_point,displacement);
                }
            }

        }
    }
    _handlePanResponderEnd = (e, gestureState)=>{
        const {onDoubleClick,moveEnd} = this.props;
        console.log("----_handlePanResponderEnd----");
        let startX = gestureState.x0;
        let startY = gestureState.y0;
        let moveX = gestureState.moveX;
        let moveY = gestureState.moveY;
        let relativeX = moveX -startX;
        let relativeY = moveY -startY;
        let start_point = {
            x:startX,y:startY
        };
        let displacement ={
            x:relativeX,y:relativeY
        };
        if(this.isDoubleClick(displacement)){
            // ToastAndroid.show("双击",ToastAndroid.SHORT);
            onDoubleClick();
        }
        if (!(displacement.x==0&&displacement.y==0)){
            moveEnd(start_point,displacement);
        }
    }
    isDoubleClick= (displacement)=>{
        // console.log("--test--:"+displacement.x+"  ;"+displacement.y)
        if ((displacement.x==0&&displacement.y==0)){//滑动不算点击

            let time = new Date().getTime();
            //和前一次点击时间间隔大于500，认为是第一次点击
            if(time-this.firstTime>500){
                this.firstClick = true;
            }
            if(this.firstClick){
                this.firstTime = new Date().getTime();
                this.firstClick = false;//认为下一次点击是第二次
            }else{
                this.secondTime=new Date().getTime();
                this.firstClick = true;
            }
            let timeDifference = this.secondTime-this.firstTime;
            if(timeDifference>0&&timeDifference<500){
                return true;
            }else if(timeDifference>=500){//认为下一次点击是第一次
                this.firstClick = true;
                return false;
            }
        }
        return false;
    }

    render(){
        return(
            <View
                {...this.props}
                {...this._panResponder.panHandlers}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        height:200,
        width:200,
        // flex:1,
        backgroundColor:'transparent'
    }
});