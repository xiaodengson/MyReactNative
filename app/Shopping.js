/**
 * Created by zjq on 2017/7/10.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    WebView,
    BackHandler,
    View
} from 'react-native';
import {screenW} from './Util/ScreenUtils';
export default class Shopping extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.isFirstPage = true;
        BackHandler.addEventListener('hardwareBackPress',this.BackHandler);
      }
    BackHandler =()=>{
        if (this.webView&&this.isFirstPage ==false) {
            this.postMessage();
            return true;
        }else if(this.isFirstPage == true){
            return false;
        }
    };
    //接收WebView JS事件消息
    onMessage = e => {
        alert(e.nativeEvent.data);
    }
    //执行JS代码，会被转为字符串，使用injectedJavaScript方法用eval执行字符串方法
    postMessage = () => {
            // this.webView.postMessage('window.postMessage("Title：");');//设置网页回调RN
            this.webView.postMessage('window.history.go(-1)');//设置网页返回上一级
    }
    NavigationStateChange = (navState)=>{//每次webview状态改变都会回调，在这里做判断
        if(navState.url =="http://hao.uc.cn/?uc_param_str=dnfrpfbivecpbtnt"){//天猫首页
            this.isFirstPage = true;
        }else {
            this.isFirstPage = false;
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress',this.BackHandler);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                {/*<Text style={styles.textStyle}*/}
                      {/*onPress={()=>{navigate('Test1')}}>*/}
                    {/*购物*/}
                {/*</Text>*/}
                {/*<Text style={styles.textStyle} onPress={this.postMessage}>触发web调用rn</Text>*/}
                <WebView ref={(webView)=>this.webView = webView}
                         source={{uri:"http://hao.uc.cn/?uc_param_str=dnfrpfbivecpbtnt",method:'GET'}}
                         style={{flex:1,width:screenW, borderWidth:1, borderColor:'red'}}
                         automaticallyAdjustContentInsets={true}
                         scalesPageToFit={true}
                         javaScriptEnabled={true}
                         domStorageEnabled={true}
                         injectedJavaScript="document.addEventListener('message', function(e) {eval(e.data);});"
                         onMessage={this.onMessage}
                         onNavigationStateChange={this.NavigationStateChange}
                />
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
