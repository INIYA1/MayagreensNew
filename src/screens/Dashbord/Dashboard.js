import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DashboardData from '../../components/DashboardData';






export default function Dashboard({navigation}) {
    return (
        <View>
            <LinearGradient
                colors={['#7a857e', '#ffff']}
                style={styles.LinearGradient}>
                <ScrollView>
                    <View style={styles.card1}>
                        <Image source={require('../../images/farmer.jpg')} style={styles.farmerImg} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.tex1}>Test - 1</Text>
                            <Text style={styles.number}> 9150688467 </Text>
                            <Text style={styles.number}> 8825648251 </Text>

                        </View>

                    </View>
                    <View style={styles.card2}>
                        <Text style={styles.text2}> Test Farm </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', right: 20 }}>
                            <Image source={require('../../images/weather-icon.png')} style={styles.weatherImg} />
                            <Text style={styles.text3}> 28 C</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", flexWrap: 'wrap', alignSelf:'center',justifyContent:'center'}}>
                            {
                                DashboardData.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity style={styles.dashboardOptions} onPress={()=>navigation.navigate(item.naviPage)}>
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
const styles = StyleSheet.create({
    LinearGradient: {
        height: "100%",
        width: "100%",
        // opacity:0.95
    },
    card1: {
        height: 190,
        width: "98%",
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5,
        elevation: 10,
        flexDirection: 'row'
    },
    farmerImg: {
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        height: 150,
        width: 150
    },
    tex1: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        left: 110,
        top: 50,
        textAlign: 'center',
        lineHeight: 50
    },
    card2: {
        width: "98%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 1,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    text2: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        top: 12,
        left: 20,
        flexDirection: 'row'
    },
    weatherImg: {
        height: 25,
        width: 25,
        // left: 350,
        bottom: 10
    },
    text3: {
        color: 'black',
        bottom: 5,
        fontWeight: '500',
        fontSize: 15
    },
    dashboardOptions: {
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 15,
        paddingVertical: 8,
        elevation: 5,
        width: 170,
        height: 150,
        borderRadius: 15,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    number: {
        color: 'black',
        fontSize: 15,
        left: 110,
        top: 50,
        letterSpacing: 0.2
    },
})