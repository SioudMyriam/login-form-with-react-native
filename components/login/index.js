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
    TouchableOpacity,
    Alert,
    AsyncStorage
} from  "react-native"

const PASSKEY = "pass";
const LOGINKEY = "login";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            password: "",
            login: ""
        };
    }

    componentDidMount() {
        AsyncStorage.multiGet([PASSKEY, LOGINKEY], (error, data)=> {
            if (error == null) {
                this.setState({password : data[0][1]});
                this.setState({login : data[1][1]});
            }
        })

    };

    handleClick() {
        if (this.state.password == "" || this.state.login == "") {
            this.setState({
                error: "Something wrong here!"
            })
        } else {

            let data = JSON.stringify({
                "login": this.state.login,
                "password": this.state.password
            });
            fetch("https://go.fxw.io/demo/login.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: data
                }).then((response)=> {
                if (response.ok) {
                    AsyncStorage.multiSet([[PASSKEY, this.state.password], [LOGINKEY, this.state.login]]);
                    this.props.navigation.navigate("Home", {param: "just a param"})
                } else {
                    Alert.alert("login Error", "Please check your data!", [
                        {text: 'Try again', onPress: ()=>this.handleClick()},
                        {text: 'Cancel', style: "cancel"}
                    ])
                }
            })
                .catch((error)=>this.setState({error: "There is something wrong :( !"}));

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
                    <TextInput style={styles.inputLayout__Input} onChangeText={(value) => this.setState({login : value})}
                               value={this.state.login}/>
                </View>
                <View style={styles.inputLayout}>
                    <Text style={styles.inputLayout__Text}>Password</Text>
                    <TextInput style={styles.inputLayout__Input}
                               onChangeText={(value) => this.setState({password : value})}
                               value={this.state.password}/>
                </View>
                <View style={styles.buttonLayout}>
                    <TouchableOpacity style={styles.buttonDesign} onPress={() => this.handleClick()}>
                        <Text style={styles.buttonTextDesign}>Login</Text>
                    </TouchableOpacity>
                    <Text>{this.state.error}</Text>
                </View>
            </View>

        )
    }
}

export  default  LoginScreen;