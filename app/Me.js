/**
 * Created by zjq on 2017/7/10.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    Picker,
    WebView,
    Alert,
    LayoutAnimation,
    Animated,
    Image,
    View,
    ActivityIndicator
} from 'react-native';
import {screenW} from './Util/ScreenUtils';
import QRCode from 'react-native-qrcode';
import RefreshListView from 'react-native-refresh-list-view';
import Loading from "./commonview/Loading";
import GestureRecognition from '../app/commonview/GestureRecognition';
import GestureAnimated from "./commonview/GestureAnimated";
import MySwipeCards from "./commonview/MySwipeCards";
export default class Me extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value:180
        };
      }

    componentDidMount() {
          setTimeout(()=>{
              LayoutAnimation.configureNext({
                  duration: 800,
                  create: {
                      type: LayoutAnimation.Types.spring,
                      property: LayoutAnimation.Properties.scaleXY,
                  },
                  update: {
                      type: LayoutAnimation.Types.spring,
                      property: LayoutAnimation.Properties.scaleXY,
                  },
              });
              this.setState({
                  value:200
              });
          },3000);
          this.es6();

    }

    es6(){
        // // alert(Object.is("s","s"));
        //  var s1 = Symbol('foo');
        // var s2 = Symbol('foo');
        // alert(s1===s2);
    }
    render(){
        const {navigate} = this.props.navigation;
        const {value} = this.state;
        let pic = {uri: 'https://facebook.github.io/react/img/logo_og.png'};
        return(
            <View style={styles.container}>
                {/*<StatusBar backgroundColor={'#2791f2'} translucent ={true} />*/}
                <Text style={styles.textStyle}
                      onPress={()=>{navigate('Test1',{})}}>
                    我的
                </Text>
                <Text style={styles.textStyle}
                      onPress={()=>{navigate('MyMap',{})}}>
                    抽屉导航
                </Text>
                <Text style={styles.textStyle}
                      onPress={()=>{navigate('FetchTest',{})}}>
                    网络测试
                </Text>
                <Text style={styles.textStyle}
                      onPress={()=>{navigate('MyLinking',{})}}>
                    Linking
                </Text>
                <Text style={styles.textStyle}
                      onPress={()=>{navigate('MyAnimated',{})}}>
                    动画
                </Text>
                <Text style={styles.textStyle}
                      onPress={()=>{
                          this.refs.Loading.show();
                          setTimeout(()=>{
                              this.refs.Loading.dismiss();
                          },2000);
                      }}>
                    加载弹窗
                </Text>
                <Text style={styles.textStyle}> 手势动画</Text>
                {/*<GestureAnimated/>*/}
                <MySwipeCards/>
                <Loading ref="Loading"/>
                {/*<QRCode*/}
                    {/*value={'http://facebook.github.io/react-native/'}*/}
                    {/*size={value}*/}
                    {/*bgColor='black'*/}
                    {/*fgColor='white'/>*/}
                {/*<Image source={pic} style={{height:100,width:100}}/>*/}
                {/*<Picker style={{height:100,width:200}} selectedValue ={value}*/}
                        {/*onValueChange={(value)=>this.setState({value:value})} mode={'dropdown'} >*/}
                    {/*<Picker.Item label="测试1" value={1}/>*/}
                    {/*<Picker.Item label="测试2" value={2}/>*/}
                    {/*<Picker.Item label="测试3" value={3}/>*/}
                    {/*<Picker.Item label="测试4" value={4}/>*/}
                {/*</Picker>*/}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        margin: 5,
    },

});
