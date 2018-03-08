/**
 * Created by zjq on 2017/7/11.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
// import {observer} from 'mobx-react/native';
// import {observable, action, computed} from 'mobx';
import Test from "./Test";
export default class ScrollViewItem extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // @observable
    // selectedItem = false;
    // @observable
    // string = '哈哈';
    // @observable
    // index = 0;
    //
    //
    // @computed
    // get square() {
    //     if (this.index > 10)
    //         return this.index * this.index;
    // }
    //
    // @action
    // onpress() {
    //     this.selectedItem = !this.selectedItem;
    // }
    //
    // onClick() {
    //     this.onpress();
    //     this.index++;
    // }
    //
    // @observer
    // render() {
    //     const {title} = this.props;
    //     return (
    //         <View style={styles.container}>
    //             <View style={styles.view}>
    //                 <Text style={styles.text} onPress={() => this.onClick()}>切换图片</Text>
    //                 <Text style={styles.text}>{this.square+title}</Text>
    //             </View>
    //             {
    //                 (this.selectedItem) ?
    //                     <Image style={styles.image}
    //                            source={require('../resources/shopping_normal.png')}/>
    //                     : <Image style={styles.image}
    //                              source={require('../resources/shopping_select.png')}/>
    //             }
    //
    //         </View>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    view: {
        width: 200,
        height: 160,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    text: {
        fontSize: 25,
        color: '#6dfc81',
        alignSelf: 'center', borderColor: 'black', borderWidth: 1
    },
    image: {
        width: 50,
        height: 50,
        borderWidth:1,
        // resizeMode:'stretch',//resizeMode设置后图片不显示，不清楚原因
        borderColor: 'red',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
});