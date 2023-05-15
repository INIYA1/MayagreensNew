import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import OtpVerification from './src/screens/OtpVerification';
import Dashboard from './src/screens/Dashbord/Dashboard';
import IrrigationScreen from './src/screens/Dashbord/IrrigationScreen';
import WeatherScreen from './src/screens/Dashbord/WeatherScreen';
import FarmControlScreen from './src/screens/Dashbord/FarmControlScreen';
import ForecastandReportScreen from './src/screens/Dashbord/ForecastandReportScreen';
import Crops from './src/screens/Dashbord/Crops';
import MarketPlaceScreen from './src/screens/Dashbord/MarketPlaceScreen';
import SupportScreen from './src/screens/Dashbord/SupportScreen';
import Fertigation from './src/screens/Dashbord/Fertigation';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name='dashboard' component={Dashboard} />
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='otp' component={OtpVerification} />
                <Stack.Screen name='irrigation' component={IrrigationScreen} />
                <Stack.Screen name='weather' component={WeatherScreen} />
                <Stack.Screen name='fertigation' component={Fertigation} />
                <Stack.Screen name='farm control' component={FarmControlScreen} />
                <Stack.Screen name='forecast' component={ForecastandReportScreen}/>
                <Stack.Screen name='crops' component={Crops} />
                <Stack.Screen name='marketplace' component={MarketPlaceScreen} />
                <Stack.Screen name='support' component={SupportScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Navigation
