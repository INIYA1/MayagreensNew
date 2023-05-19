import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IrrigationPageStyle } from '../../../styles/irrigationPageStyle';
import GroupManual from './GroupManual';


const MotoroneGroup = () => {

    const [selectedTab, setSelectedTab] = useState('');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    const groupTabContent = () => {
        switch (selectedTab) {
            case 'manual':
                return <GroupManual />
            case 'cycle':
                return <Text>cycle</Text>;
            case 'sensor':
                return <Text>sensor</Text>;
            default:
                return null;
        }
    };


    return (
        <View>
            <View style={IrrigationPageStyle.tabContainer}>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('manual')}>
                    <Text style={IrrigationPageStyle.tabText}>MANUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('cycle')}>
                    <Text style={IrrigationPageStyle.tabText}>CYCLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('sensor')}>
                    <Text style={IrrigationPageStyle.tabText}>SENSOR</Text>
                </TouchableOpacity>
            </View>
            <View>
                {groupTabContent()}
            </View>
        </View>
    )
}

export default MotoroneGroup;

