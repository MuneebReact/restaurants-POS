import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import LoginScreen from '../screens/login';
import SplashScreen from '../screens/splash';
import DashBoardScreen from '../screens/dashboard';
import HomeScreen from '../screens/Home';
import Header from '../components/Header';
import DrewarPopUp from '../components/DrawerPopUP';
import CreditInfoPopUp from '../components/CreditInfoPopUp';
import PrinterTesting from '../screens/PrinterTesting';
import BarCodeGenerator from '../components/BarCodeGenerator';
import PrivacyPolicy from '../components/PrivacyPolicy';
import BottomTabBar from '../components/BottomTabBar';
import OrdersScreen from '../screens/orders';
import TableBookingScreen from '../screens/TableBooking';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'home'}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'splash'}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'login'}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'TableBook'}
        component={TableBookingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'printer'}
        component={PrinterTesting}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'header'}
        component={Header}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'home'}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'dashboard'}
        component={DashBoardScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'drewarPopUp'}
        component={DrewarPopUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'creditInfoPopUp'}
        component={CreditInfoPopUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'BG'}
        component={BarCodeGenerator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'PP'}
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'BTB'}
        component={BottomTabBar}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'order'}
        component={OrdersScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
