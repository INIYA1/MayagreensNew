import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IrrigationPageStyle } from '../../../styles/irrigationPageStyle'
import { buttonsType, gManualbtn, groupManualButton, tabBTNGreen } from '../../butons';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';

const expandedCard = () => {
    return (
      <View style={IrrigationPageStyle.expandedCard}>
        <Text>Expanded Card Content</Text>
      </View>
    );
  };
  
const gCycleText = (text) => {
    return (
        <Text style={IrrigationPageStyle.gCycleText1}>{text}</Text>
    )
}

export default function GroupCycle() {

    const [isExpanded1, setIsExpanded1] = useState(false);

    const handleToggle1 = () => {
        setIsExpanded1(!isExpanded1);
    };



    return (
        <View style={IrrigationPageStyle.cycleCard}>
            <Text style={IrrigationPageStyle.gCycleHeading}>Mm</Text>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <View style={{ left: 10 }} >
                    {gCycleText('LAST OFF TIME :')}
                    {gCycleText('LAST OFF TIME :')}
                    {gCycleText('RESCHEDULD : Will be Rescheduld')}
                </View>
                <View>
                    <View style={{ left: 80 }}>
                        {gCycleText('STATUS')}
                        {gCycleText('SUSPEND')}
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', top: 25, justifyContent: 'space-around' }}>
                {gManualbtn('RESUME')}
                <TouchableOpacity onPress={handleToggle1}>
                    <ArrowIcon style={{ height: 25, width: 25, alignSelf: 'center' }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
                </TouchableOpacity>
                {gManualbtn('EDIT')}
            </View>
            <View>
            {tabBTNGreen('CREATE NEW GROUP', 220)}
            </View>
           
        </View>
    )
}
