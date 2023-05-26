import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DashboardData from '../components/DashboardData';
import dashboardPageStyle from '../styles/dashboardPageStyle';


export default function Dashboard({navigation}) {
    return (
        <View>
            <LinearGradient
                colors={['#7a857e', '#ffff']}
                style={dashboardPageStyle.LinearGradient}>
                <ScrollView>
                    <View style={dashboardPageStyle.card1}>
                        <Image source={require('../images/farmer.jpg')} style={styles.farmerImg} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={dashboardPageStyle.tex1}>Test - 1</Text>
                            <Text style={dashboardPageStyle.number}> 9150688467 </Text>
                            <Text style={dashboardPageStyle.number}> 8825648251 </Text>

                        </View>

                    </View>
                    <View style={dashboardPageStyle.card2}>
                        <Text style={dashboardPageStyle.text2}> Test Farm </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', right: 20 }}>
                            <Image source={require('../images/weather-icon.png')} style={styles.weatherImg} />
                            <Text style={dashboardPageStyle.text3}> 28 C</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", flexWrap: 'wrap', alignSelf:'center',justifyContent:'center'}}>
                            {
                                DashboardData.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity style={dashboardPageStyle.dashboardOptions} onPress={()=>navigation.navigate(item.naviPage)}>
                                                <Text style={{bottom:10,color:'black',fontSize:15,fontWeight:'500'}}>{item.heading}</Text>
                                                <Image source={item.image} style={{ height: 70, width: 70 ,justifyContent:'center',top:10}} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>

                </ScrollView>

            </LinearGradient>
        </View>
    )
}
