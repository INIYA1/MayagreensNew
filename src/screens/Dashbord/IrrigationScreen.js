import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import MotoroneValve from '../../components/IrrigationPageList/MotoroneValve';
import MotoroneSensor from '../../components/IrrigationPageList/MotoroneSensor';
import MotoroneGroup from '../../components/IrrigationPageList/MotoroneGroupComponent/MotoroneGroup';
import { IrrigationPageStyle } from '../../styles/irrigationPageStyle';
// import IrrigationValveList from '../../components/irrigationvalvelist'



export default function IrrigationScreen() {


  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [selectedTab, setSelectedTab] = useState('')


  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  }


  const tabContent = () => {
    switch (selectedTab) {
      case 'valve':
        return <MotoroneValve />
      case 'sensor':
        return <MotoroneSensor />
      case 'group':
        return <MotoroneGroup />
      case 'filter':
        return <Text>filter1</Text>;
      default:
        return <></>
    }
  };

  // CURENT DATE AND TIME

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);


  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };




  

  return (

    <LinearGradient
      colors={['#7a857e', '#ffff']}
      style={styles.LinearGradient}>

      <View style={styles.card1}>

        <View style={{ flexDirection: 'row', top: 20 }}>
          <Text style={{ color: "black", left: 15, fontWeight: "700", fontSize: 20 }}>Test Farm</Text>
          <Image source={require('../../images/location-icon.png')} style={{ left: 270 }} />
        </View>

        <View style={{ flexDirection: 'row', top: 30, left: 180 }}>
          <Image source={require('../../images/connected-icon.png')} style={{ height: 40, width: 40 }} />
          <Text style={{ left: 30, top: 10, color: 'black', fontSize: 15 }}>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
        </View>
      </View>
      <ScrollView>

        <View style={styles.card2}>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <TouchableOpacity>
              <Icon name='setting' size={35} />
            </TouchableOpacity>
            <Text style={styles.text1}>POWER</Text>
            <Image source={require('../../images/batter-icon.png')} style={{ height: 40, width: 40, left: 65 }} />
            <Text style={styles.text2}>  {formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
          </View>
          <View style={styles.separateline} />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image source={require('../../images/motor-icon-new.jpg')} style={{ height: 80, width: 80, left: 7, top: 8 }} />

            </TouchableOpacity>
            <View style={{ alignItems: 'center', left: 60 }}>

              <Text style={{ color: 'black', fontSize: 22, fontWeight: '800' }}>STATUS</Text>
              <Text style={{ color: 'red', top: 2, fontSize: 18, fontWeight: '600' }}>OFF-Normal</Text>
              <Text style={{ color: 'black', fontSize: 16, top: 7 }} >{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../images/on-off.png')} style={{ height: 60, width: 60, left: 90, top: 8 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={{ color: 'black', fontWeight: '800', left: 12, fontSize: 18 }}>Motor-1</Text>
          </View>
          <View style={styles.separateline} />

          <View style={{ flexDirection: "row" }}>
            <Image source={require('../../images/valve_on.png')} style={{ height: 50, width: 50, left: 7, }} />

            <Text style={{ top: 5, color: 'black', fontWeight: 'bold', fontSize: 16 }}>+   0</Text>
            <TouchableOpacity>
              <Image source={require('../../images/calender-icon.png')} style={{ height: 45, width: 45, left: 90, top: 8 }} />
            </TouchableOpacity>
            <Text style={{ left: 120, fontSize: 18, fontWeight: 'bold', color: 'black', top: 15 }}>MODE - MANUAL</Text>
          </View>
          <View style={styles.separateline} />
          <TouchableOpacity onPress={handleToggle1}>
            <ArrowIcon style={{ height: 25, width: 25, alignSelf: 'center' }} name={isExpanded1 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
          </TouchableOpacity>
        </View>
        <View>
          {isExpanded1 && (
            <View>
              <View style={IrrigationPageStyle.tabContainer}>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('valve')}>
                  <Text style={IrrigationPageStyle.tabText}>Valve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('sensor')}>
                  <Text style={IrrigationPageStyle.tabText}>Sensor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('group')}>
                  <Text style={IrrigationPageStyle.tabText}>Group</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IrrigationPageStyle.tabItem} onPress={() => handleTabPress('filter')}>
                  <Text style={IrrigationPageStyle.tabText}>Filter</Text>
                </TouchableOpacity>
              </View>
              <View>
                {tabContent()}
              </View>


            </View>
          )}
        </View>
        {/* <View>
              {isExpanded2&&(
                  <View>
                  <View style={styles.tabContainer}>
                  <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('MANUAL')}>
                  <Text style={styles.tabText}>MANUAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('CYCLE')}>
                  <Text style={styles.tabText}>CYCLE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('SENSOR')}>
                  <Text style={styles.tabText}>SENSOR</Text>
                </TouchableOpacity>
                </View>
                {groupTabContent()}
                
                  </View>
                 
                )
              }
              </View> */}




        <View style={styles.card2}>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <TouchableOpacity>
              <Icon name='setting' size={35} />
            </TouchableOpacity>
            <Text style={styles.text1}>POWER</Text>
            <Image source={require('../../images/batter-icon.png')} style={{ height: 40, width: 40, left: 65 }} />
            <Text style={styles.text2}>  {formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
          </View>
          <View style={styles.separateline} />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image source={require('../../images/motor-icon-new.jpg')} style={{ height: 80, width: 80, left: 7, top: 8 }} />

            </TouchableOpacity>
            <View style={{ alignItems: 'center', left: 60 }}>

              <Text style={{ color: 'black', fontSize: 22, fontWeight: '800' }}>STATUS</Text>
              <Text style={{ color: 'red', top: 2, fontSize: 18, fontWeight: '600' }}>OFF-Normal</Text>
              <Text style={{ color: 'black', fontSize: 16, top: 7 }} >{formatDate(currentDateTime)} {formatTime(currentDateTime)}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../images/on-off.png')} style={{ height: 60, width: 60, left: 90, top: 8 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={{ color: 'black', fontWeight: '800', left: 12, fontSize: 18 }}>Motor-1</Text>
          </View>
          <View style={styles.separateline} />

          <View style={{ flexDirection: "row" }}>
            <Image source={require('../../images/valve_on.png')} style={{ height: 50, width: 50, left: 7, }} />
            <Text style={{ top: 5, color: 'black', fontWeight: 'bold', fontSize: 16 }}>+   0</Text>
            <TouchableOpacity>
              <Image source={require('../../images/calender-icon.png')} style={{ height: 45, width: 45, left: 90, top: 8 }} />
            </TouchableOpacity>
            <Text style={{ left: 120, fontSize: 18, fontWeight: 'bold', color: 'black', top: 15 }}>MODE - MANUAL</Text>
          </View>
          <View style={styles.separateline} />
          <TouchableOpacity onPress={handleToggle2}>
            <ArrowIcon style={{ height: 25, width: 25, alignSelf: 'center' }} name={isExpanded2 ? 'angle-double-up' : 'angle-double-down'} size={32} color='black' />
          </TouchableOpacity>
        </View>
        <View>
          {isExpanded2 && (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>Hi</Text>
            </View>
          )}
        </View>
        <View><Text></Text></View>
      </ScrollView>
    </LinearGradient>


  )
}
const styles = StyleSheet.create({
  LinearGradient: {
    height: "100%",
    width: "100%",
  },
  card1: {
    height: 120,
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  card2: {
    height: 310,
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    elevation: 6
    // flex:1
  },
  text1: {
    color: 'black',
    left: 50,
    fontSize: 20,
    fontWeight: '600',
    top: 7
  },
  text2: {
    color: 'black',
    left: 75,
    top: 12,
    fontSize: 17
  },
  separateline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
    // bottom: 10
  },
  tabContainer: {
    // height:60,
    margin: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    alignSelf:'center',
    // width:"96%",
    // marginVertical: 10,
    // marginLeft: 10,
    // marginRight: 10,
    elevation: 5,
    // height:60
  },
  tabText: {
    margin: 10,
    fontSize: 18,
    color: 'black',
  },
  tabItem: {
    padding: 16,
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    elevation: 8
  },
  title: {
    color: 'black',
    right: 12,
    // bottom: 10,
    fontSize: 15,
    fontWeight: '500'
  },

})