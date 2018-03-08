/**
 * Created by zjq on 2017/7/7.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SingleTest from './SingleTest';
import ScrollView from './ViewItem';
import MyFlatList from './commonview/MyFlatList';
import Loading from './commonview/Loading'
export default class Test1 extends Component {
    // static navigationOptions = ({navigation,screenProps}) => ({
    //
    //     headerTitle:'测试',
    // });
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showLoading: false
        };
    }

    componentDidMount() {
        setTimeout(
            () => this.setState({
                showLoading: false
            }), 5000);

    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const {showLoading} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}
                      onPress={() => {
                          this.setState({
                              showLoading: !showLoading
                          });
                          this.props.navigation.navigate('DrawerOpen')
                      }
                      }>
                    测试1
                </Text>
                <MyFlatList/>
                <Loading isShow={showLoading}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
