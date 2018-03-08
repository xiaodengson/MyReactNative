/**
 * Created by zjq on 2017/7/10.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SingleTest from './SingleTest';
import ScrollView from './ViewItem';
export default class Test extends Component{
    // static navigationOptions = ({navigation,screenProps}) => ({
    //     header:null,
    //     headerTitle:'测试'
    // });

    render(){
        // const {goBack} =this.props.navigation;
        // const {name} = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                {/*<View style={styles.container}>*/}
                {/*<Text style={styles.textStyle} onPress={()=>{goBack()}}>*/}
                {/*{name}*/}
                {/*</Text>*/}
                {/*<ScrollView/>*/}
                {/*</View>*/}
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