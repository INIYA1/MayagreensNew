import { View, Text } from 'react-native'
import React from 'react'

export default function MotoroneSensor() {

        return (
          <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.sensorContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', left: 5, top: 5, fontSize: 15 }}>Water Level</Text>
                <Image source={require('../../images/tower-red-icon.png')} style={{ height: 30, width: 30, top: 5, left: 80 }} />
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Image source={require('../../images/water_level_50.png')} style={{ height: 60, width: 60, top: 5, }} />
              <Image source={require('../../images/graph.png')} style={{ height: 35, width: 35, top: 30, }} />
              <Image source={require('../../images/battery_0.png')} style={{ height: 35, width: 35, top: 30,  }} />
              </View>
              <View style={{flexDirection:'row',top:10,justifyContent:'space-around',left:8}}>
                <Text style={{color:'black', fontWeight:'500'}}>50%</Text>
                <Text style={{color:'black', fontWeight:'500'}}>View</Text>
                <Text style={{color:'black', fontWeight:'500'}}>0%</Text>
              </View>
            </View>
            <View style={styles.sensorContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', left: 5, top: 5, fontSize: 15 }}>Pressure</Text>
                <Image source={require('../../images/tower-icon.png')} style={{ height: 30, width: 30, top: 5, left: 80 }} />
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Image source={require('../../images/pressure.png')} style={{ height: 50, width: 50, top:20, }} />
              <Image source={require('../../images/graph.png')} style={{ height: 35, width: 35, top: 30, }} />
              <Image source={require('../../images/battery_100.png')} style={{ height: 35, width: 35, top: 30,  }} />
              </View>
              <View style={{flexDirection:'row',top:10,justifyContent:'space-around',left:8,}}>
                <Text style={{color:'black', fontWeight:'500',top:12}}>0 Psi</Text>
                <Text style={{color:'black', fontWeight:'500',top:12}}>View</Text>
                <Text style={{color:'black', fontWeight:'500',top:12}}>90%</Text>
              </View>
            </View>
          </View>
          </View>
        )
      }
 