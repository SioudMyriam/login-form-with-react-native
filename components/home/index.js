/**
 * Created by msioud on 25/08/17.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class HomeScreen extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <Text>{"Hello Home screen: " + this.props.navigation.state.params.param}</Text>
            </View>
        )
    }
}
export default HomeScreen;