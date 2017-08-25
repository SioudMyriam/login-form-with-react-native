/**
 * Created by msioud on 25/08/17.
 */
import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/login';
import HomeScreen from './components/home';

const SomeStack = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: "login"
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home"
        }
    }

});

export default SomeStack;