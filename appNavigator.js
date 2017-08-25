/**
 * Created by msioud on 25/08/17.
 */
import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/login';
import ListScreen from './components/list';

const SomeStack = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: "login"
        }
    },
    List: {
        screen: ListScreen,
        navigationOptions: {
            title: "list"
        }
    }

});

export default SomeStack;