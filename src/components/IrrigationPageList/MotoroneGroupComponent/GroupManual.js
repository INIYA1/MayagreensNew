import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IrrigationPageStyle } from '../../../styles/irrigationPageStyle';
import { toggleButton } from '../MotoroneValve';
import { buttonsType, tabBTNGreen } from '../../butons';

const manualCard = (heading, duration, time) => {
    return (
        <View style={IrrigationPageStyle.manualCard}>
            <View style={IrrigationPageStyle.toggleBtn1}>
                {toggleButton()}
            </View>
            <Text style={IrrigationPageStyle.groupText1}>{heading}</Text>
            <Text style={IrrigationPageStyle.groupText2}>{duration}</Text>
            <Text style={IrrigationPageStyle.groupText3}>{time}</Text>
            <View>
                {buttonsType()}
            </View>
        </View>
    )
}


export default function GroupManual() {
    return (
        <View>
            <View>
                {manualCard('We', 'DURATION :  00.05 ', 'LAST OFF TIME :  00.00')}
                {manualCard('We', 'DURATION :  00.05 ', 'LAST OFF TIME :  00.00')}
            </View>
            {tabBTNGreen('CREATE NEW GROUP', 220)}

        </View>
    )
}