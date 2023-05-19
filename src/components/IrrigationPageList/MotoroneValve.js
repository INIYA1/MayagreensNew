import { View, Text, Image, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react';
import IrrigationValveList from '../../components/irrigationvalvelist';
import { IrrigationPageStyle } from '../../styles/irrigationPageStyle';



export function toggleButton  () {
    return (
        <TouchableOpacity>
            <Image source={require('../../images/toggle-off.png')} style={IrrigationPageStyle.toggleBtn} />
        </TouchableOpacity>
    )
}

const valvecardtop = (name, direction, towerimg) => {
    return (
        <View >
            <Text style={IrrigationPageStyle.title}>{name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={IrrigationPageStyle.title}>{direction}</Text>
                <Image source={towerimg} style={IrrigationPageStyle.towerImg} />
                {toggleButton()}
            </View>
        </View>
    )
}

const valveOffImage = () => {
    return (
        <TouchableOpacity>
            <Image source={require('../../images/valve_off.png')} style={{ height: 50, width: 50, left: 7, }} />
        </TouchableOpacity>
    )
}

const valveCardBottom = (thunderimg) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {valveOffImage()}
            <View>
                <Image source={require('../../images/clock-icon.png')} style={{ height: 35, width: 35, left: 25, }} />
                <Image source={thunderimg} style={IrrigationPageStyle.thunderImg} />
                <Text style={{ color: 'red', left: 30, bottom: 20 }}>0.00</Text>
            </View>
        </View>
    )
}

const valverenderItem = ({ item }) => (
    <View style={IrrigationPageStyle.item}>
        {valvecardtop(item.valvename, item.direction, item.towerimg)}
        {valveCardBottom(item.thunderimg)}
    </View>
);

export default function MotoroneValve() {
    return (
        <FlatList
            data={IrrigationValveList}
            renderItem={valverenderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    )
}


