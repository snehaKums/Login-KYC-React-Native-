import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import KYC_Id from '../screens/KYC_Id';
import KYC_Form from '../screens/KYC_Form';
import KYC_Pic from '../screens/KYC_Pic';

const stackConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  KYC_Id: {
    screen: KYC_Id,
    navigationOptions: {
      header: null,
    },
  },
  KYC_Form: {
    screen: KYC_Form,
    navigationOptions: {
      header: null,
    },
  },
  KYC_Pic: {
    screen: KYC_Pic,
    navigationOptions: {
      header: null,
    },
  },
};
const AppNav = createStackNavigator(stackConfig, {
  initialRouteName: 'Home',
});
const HomeNav = createAppContainer(AppNav);
export default HomeNav;
