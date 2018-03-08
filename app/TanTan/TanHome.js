/**
 * Created by dengfuming on 2018/1/30.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, DrawerLayoutAndroid
} from 'react-native';
import HeadBody from "./commonView/HeadBody";
import MySwipeCards from "../commonview/MySwipeCards";
import {scaleSize,screenW,screenH,setSpText} from '../Util/ScreenUtils'

export default class TanHome extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showSwipe:true,
        };
        this.datas=[
            {name: '测试1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
            {name: '测试2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
            {name: '测试3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
            {name: '测试4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
            {name: '测试5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
            {name: '测试6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
            {name: '测试7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
            {name: '测试8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
            {name: '测试9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
        ]
    }
    onPressLeft = ()=>{
        this.props.navigation.navigate('DrawerOpen');
    }

    onPressRight = ()=>{
        // alert('right')
    }

    onDoubleClick = ()=>{
        // const {showSwipe} = this.state;
        this.setState({
            showSwipe:false,
        });

    }

    renderCard =(card)=>{
        return(
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri:card.image}}/>
                <View style={styles.cardView}>
                    <Text style={styles.cardText}>{card.name}</Text>
                </View>
            </View>
        );
    }
    render(){
        const {showSwipe} = this.state;
        return(
            <View style={styles.container}>
                <HeadBody imageRight={require('./resource/message.png')}
                          imageLeft={require('./resource/menu.png')}
                          onPressLeft={this.onPressLeft}
                          onPressRight={this.onPressRight}
                          title={"探探"}/>
                <View style={{width:screenW,height:(showSwipe)?scaleSize(800):0}}>
                    <MySwipeCards
                        ref="MySwipeCards"
                        width={scaleSize(600)}
                        height={scaleSize(700)}
                        cards={this.datas}
                        offset={scaleSize(30)}
                        onDoubleClick={this.onDoubleClick}
                        renderCard={this.renderCard}/>
                </View>
                {(showSwipe)? null:<View style={{width:screenW,height:scaleSize(800), backgroundColor:'yellow'}}></View>}
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=>{
                        this.setState({showSwipe:true});
                        this.refs.MySwipeCards.forceLeftSwipe();
                    }}>
                        <Image style={styles.buttonImage} source={require('./resource/left_swipe.png')}/>
                    </TouchableOpacity>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({showSwipe:true});
                            this.refs.MySwipeCards.forceRightSwipe();
                        }}>
                            <Image style={styles.buttonImage} source={require('./resource/right_swipe.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    cardImage:{
        flex:1,
        borderTopLeftRadius:scaleSize(10),
        borderTopRightRadius:scaleSize(10),
        resizeMode:'stretch'
    },
    card:{
        width:scaleSize(600),
        height:scaleSize(700),
        borderRadius:scaleSize(10),
        backgroundColor:'#f25c50',
        flexDirection:'column',
        borderWidth:1
    },
    cardView:{
        width:scaleSize(600),
        height:scaleSize(100),
        borderBottomLeftRadius:scaleSize(10),
        borderBottomRightRadius:scaleSize(10),
        justifyContent:'center',
        alignItems:'center'
    },
    cardText:{
        fontSize:setSpText(12),
        color:'#ffffff'
    },
    buttonView:{
        width:screenW,
        height:scaleSize(100),
        paddingLeft:scaleSize(100),
        paddingRight:scaleSize(100),
        flexDirection:'row',
        alignItems:'center',
        position: 'absolute',
        bottom:scaleSize(60),
    },
    buttonImage:{
        width:scaleSize(100),
        height:scaleSize(100),
        resizeMode:'stretch'
    }
});