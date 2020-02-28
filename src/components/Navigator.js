import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import TabNav from './TabNav';
import Register from '../screens/Register';
import Profile from '../screens/Profile';

const stackConfig = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  TabNav: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
};
const AppNav = createStackNavigator(stackConfig, {
  initialRouteName: 'Register',
});
const AppContainer = createAppContainer(AppNav);
export default AppContainer;
