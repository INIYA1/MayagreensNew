import { View, Text } from 'react-native';
import React from 'react';
import { IrrigationPageStyle } from '../../../styles/irrigationPageStyle';
import { toggleButton } from '../MotoroneValve';

const manualCard = (heading, duration, time) => {
    return (
        <View style={IrrigationPageStyle.manualCard}>
       <View style>
       {toggleButton()}
       </View>
            <Text style={IrrigationPageStyle.groupText1}>{heading}</Text>
            <Text style={IrrigationPageStyle.groupText2}>{duration}</Text>
            <Text style={IrrigationPageStyle.groupText3}>{time}</Text>
            {/* <Text style={IrrigationPageStyle.groupText3}>{time}</Text> */}
        </View>
    )
}


export default function GroupManual() {
    return (
        <View>
            {manualCard('We', 'DURATION : ', 'LAST OFF TIME :')}
            {manualCard('We', 'DURATION : ', 'LAST OFF TIME :')}
            {toggleButton()}
        </View>
    )
}