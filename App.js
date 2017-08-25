import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SomeStack from './appNavigator'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SomeStack></SomeStack>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }
});
