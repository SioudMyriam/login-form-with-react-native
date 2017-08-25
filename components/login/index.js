/**
 * Created by msioud on 24/08/17.
 */
import React, {Component} from "react";
import styles from './styles'

import  {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from  "react-native"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.password = "";
        this.login = "";
    }

    handleClick() {
        if (this.password == "" || this.login == "") {
            this.setState({
                error: "Something wrong here!"
            })
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.imageLayout}>
                    <Image source={require('../../images/happy-02.jpg')} style={{flex:1}} resizeMode="contain"/>
                </View>
                <View style={styles.inputLayout}>
                    <Text style={styles.inputLayout__Text}>Login</Text>
                    <TextInput style={styles.inputLayout__Input} onChangeText={(value) => this.login = value}/>
                </View>
                <View style={styles.inputLayout}>
                    <Text style={styles.inputLayout__Text}>Password</Text>
                    <TextInput style={styles.inputLayout__Input} onChangeText={(value) => this.password = value}/>
                </View>
                <View style={styles.buttonLayout}>
                    <TouchableOpacity onPress={() => this.handleClick()}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <Text>{this.state.error}</Text>
                </View>
            </View>

        )
    }
}

export  default  Login;