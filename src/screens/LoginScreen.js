import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import loginPageStyle from '../components/loginPageStyle'
import Icon from 'react-native-vector-icons/Ionicons'

export default function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require('../images/logo.png')} style={loginPageStyle.image} />
        <View style={{ top: 100 }}>
          <Text style={styles.text1}> Phone Number :</Text>
          <View style={{ flexDirection: 'row', left: 40, top: 40 }}>
            <Icon name='person' size={25} />
            <TextInput style={styles.textInput}
              maxLength={10}
              keyboardType='numeric'
            />

          </View>
          <View style={{ top: 100 }}>
            <TouchableOpacity style={styles.login} onPress={()=>navigation.navigate('otp')}>
              <Text style={styles.loginText}> Log in </Text>
            </TouchableOpacity>
          </View>

        </View>


      </View>


    </View>

  )
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: "70%",
    fontSize: 20,
    bottom: 20,
    left: 20
  },
  text1: {
    fontWeight: '400',
    fontSize: 23,
    marginLeft: 40
  },
  login: {
    backgroundColor: 'grey',
    height: 50,
    width: "70%",
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    elevation:6
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '800',
    fontSize: 20
  }
})