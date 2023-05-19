import { View, Text, Image } from 'react-native'
import React from 'react'
import { IrrigationPageStyle } from '../../styles/irrigationPageStyle'

const boxHead = (value, image) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={IrrigationPageStyle.boxHead}>{value}</Text>
      {image}
    </View>
  )
}

const towerOffImg = () => {
  return (
    <Image source={require('../../images/tower-red-icon.png')} style={{ height: 30, width: 30, top: 5, left: 80 }} />
  )
}

const towerOnImg = () => {
  return (
    <Image source={require('../../images/tower-icon.png')} style={{ height: 30, width: 30, left: 80 }} />
  )
}

const waterLevelImg = () => {
  return (
    <Image source={require('../../images/water_level_50.png')} style={{ height: 60, width: 60, top: 5, }} />
  )
}

const graphViewImg = () => {
  return (
    <Image source={require('../../images/graph.png')} style={{ height: 35, width: 35, top: 28, }} />
  )
}

const battery0Img = () => {
  return (
    <Image source={require('../../images/battery_0.png')} style={{ height: 35, width: 35, top: 30, }} />
  )
}

const battery100Img = () => {
  return (
    <Image source={require('../../images/battery_100.png')} style={{ height: 35, width: 35, top: 30 }} />
  )
}

const pressureImg = () => {
  return (
    <Image source={require('../../images/pressure.png')} style={{ height: 55, width: 55, top: 7 }} />
  )
}

const cardText = (level, graph, battery) => {
  return (
    <View style={{ flexDirection: 'row', top: 13, justifyContent: 'space-around', left: 8 }}>
      <Text style={IrrigationPageStyle.cardText}>{level}</Text>
      <Text style={IrrigationPageStyle.cardText}>{graph}</Text>
      <Text style={IrrigationPageStyle.cardText}>{battery}</Text>
    </View>
  )
}

export default function MotoroneSensor() {
  return (
    <View style={IrrigationPageStyle.alignment}>
       <View style={IrrigationPageStyle.sensorContainer}>
      {boxHead('WaterLevel', towerOffImg())}
      <View style={IrrigationPageStyle.alignment}>
        {waterLevelImg()}
        {graphViewImg()}
        {battery0Img()}
      </View>
      {cardText('50%', 'View', '0%')}
    </View>
    <View style={IrrigationPageStyle.sensorContainer}>
      {boxHead('Pressure', towerOnImg())}
      <View style={IrrigationPageStyle.alignment}>
        {pressureImg()}
        {graphViewImg()}
        {battery100Img()}
      </View>
      {cardText('50%', 'View', '0%',)}
    </View>
    </View>
  )
}
