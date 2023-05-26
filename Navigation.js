import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import OtpVerification from './src/screens/OtpVerification';
import Dashboard from './src/screens/Dashboard'
import IrrigationScreen from './src/screens/IrrigationScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import FarmControlScreen from './src/screens/FarmControlScreen';
import ForecastandReportScreen from './src/screens/ForecastandReportScreen';
import Crops from './src/screens/Crops';
import MarketPlaceScreen from './src/screens/MarketPlaceScreen';
import SupportScreen from './src/screens/SupportScreen';
import Fertigation from './src/screens/Fertigation';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' screenOptions={{ header: () => null }}>
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='otp' component={OtpVerification} />
                <Stack.Screen name='dashboard' component={DrawerNavigator} />
                <Stack.Screen name='Irrigation' component={IrrigationScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Dashboard'>
            <Drawer.Screen name='Dashboard' component={Dashboard} />
            <Drawer.Screen name='Irrigation' component={IrrigationScreen}  />
            <Drawer.Screen name='weather' component={WeatherScreen} />
            <Drawer.Screen name='fertigation' component={Fertigation} />
            <Drawer.Screen name='farm control' component={FarmControlScreen} />
            <Drawer.Screen name='forecast' component={ForecastandReportScreen} />
            <Drawer.Screen name='crops' component={Crops} />
            <Drawer.Screen name='marketplace' component={MarketPlaceScreen} />
            <Drawer.Screen name='support' component={SupportScreen} />
        </Drawer.Navigator>
    )
}
export default Navigation;