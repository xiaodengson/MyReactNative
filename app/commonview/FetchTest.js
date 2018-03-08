/**
 * Created by dengfuming on 2017/8/21.
 */
"use strict"
import React, {Component} from 'react';
import {
    Button, Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import StackOptions from './StackOptions';
import {scaleSize} from '../Util/ScreenUtils';
import BadgeView from "./BadgeView";
const URL = "http://218.17.116.67:9090/cisopenapi/webcatinterface/getContentList.ac?parentCode=0930103552526&pagesize=10&pageindex=1";

let value = "";
let _This ;
//方法只能放组件外，否则会掉用不到
const test = (navigation) => {

    _This.gettest(20)
    navigation.navigate('MyAnimated', {});
};
export default class FetchTest extends Component {


    static navigationOptions = ({navigation}) => StackOptions({navigation}, "网络测试", true, undefined, undefined, "动画", true, test);
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: null,
            showMessage:false,
            number:1
        };
        _This = this;

    }

    // componentWillMount() {
    //     this.setState({
    //        number:2
    //     });
    //     this.setState({
    //         number:3
    //     });
    // }
    gettest=(test)=>{
        alert(test);
    }

    getData = () => {
        console.log("-----getData-----");

        fetch(URL)
            .then((response) => response.json())
            .then((responData) => {
                    this.setState({
                        data: responData.searchResults[0].contentName
                    });
                    value = responData.searchResults[0].contentName;
                }
            )
            .catch((error) => alert(error)).done();
    }

    render() {
        // alert(this.state.number);
        const {showMessage} = this.state;
        return (
            <View>
                <Button style={{flex: 1}} title={"从网络获取数据"} onPress={this.getData}/>
                <Button style={{flex: 1,marginTop:5}} title="修改状态" onPress={()=>{
                    this.setState({
                        number:this.state.number+1,
                        showMessage:!showMessage
                    })
                }} />
                <Text  style={[{width: 200, height: 30, marginTop:5, fontSize:20},{color:"red"}]}>我有{this.state.number}块钱</Text>
                <Text style={{width: 100, height: 20}}>{this.state.data}</Text>
                <BadgeView showMessage={showMessage} height={40} width={50} source={require('../../resources/shopping_select.png')} messageNumber={"99+"}/>

                {/*<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>*/}
                {/*<Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

