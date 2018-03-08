/**
 * Created by zjq on 2017/7/11.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import ViewItem from '../ViewItem';
import CardItem from './CardItem';
import CouponItem from './CouponItem';
import {scaleSize} from '../Util/ScreenUtils';
// import {observer} from 'mobx-react/native';
// import {observable, action, computed} from 'mobx';
import Loading from './Loading';
export default class MyFlatList extends React.PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        // for (let i = 0; i < 20; i++) {
        //     data.push({key: i, title: i + ''});
        // }
        this.state = {
            data: '',
            isRefreshing: false,
        };
    }

    // @observable
    // isRefreshing = false;
    // @observable
    // dataSource = '';
    //
    // @action
    // setRefreshing(isRefreshing) {
    //     this.isRefreshing = isRefreshing;
    // }
    //
    // @action
    // setDataSource() {
    //     // alert(data.length);
    //     return this.dataSource = '';
    // }

    ItemSeparator = () => {
        return (
            <View style={{flex: 1, height: 5, backgroundColor: 'transparent'}}/>
        );
    }

    onPress(item) {
        const {navigate} = this.props;
        this.refs.Loading.show();//显示加载中
        setTimeout(() => {
            this.refs.Loading.dismiss();
            navigate('CardDetails', {data: item})
        }, 1000);

    };

    _renderItem = ({item}) => {
        const {navigate} = this.props;
        return (
            <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => this.onPress(item)}>
                {
                    (item.type == 1) ?
                        <CardItem data={item} navigate={navigate}/> :
                        <CouponItem data={item} navigate={navigate}/>
                }
            </TouchableOpacity>
        );

    }

    //刷新时调用
    onRefresh = () => {
        // this.setRefreshing(true);
        // setTimeout(() => {
        //     this.setRefreshing(false);
        // },5000);
    }
    //加载更多调用
    onEndReached = () => {
        // for(let i=20;i<30;i++){
        //     data.push({key:i, title: '哈哈' + i});
        // }
        // this.setDataSource();
    }

    //
    listFooter = () => {
        return (
            <Text>到底了</Text>
        );
    }

    // @observer
    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={data}
                    initialNumToRender={6}
                    ItemSeparatorComponent={this.ItemSeparator}
                    renderItem={this._renderItem}
                    // refreshing={this.isRefreshing}
                    // onRefresh={this.onRefresh}
                    onEndReachedThreshold={0.05}
                    onEndReached={this.onEndReached}
                    ListFooterComponent={this.listFooter}
                >
                </FlatList>
                <Loading ref="Loading"/>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    list: {
        flex: 1,
        marginTop: scaleSize(10)
        // height: 500,高度设置无效
    }
});
