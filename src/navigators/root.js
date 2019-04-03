import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoading from '../screens/authorization/auth-loading';
import AuthStack from '../navigators/auth-stack';
import AppStack from '../navigators/app-stack';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));