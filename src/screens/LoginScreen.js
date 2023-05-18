import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import loginPageStyle from '../styles/loginPageStyle';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
      return;
    }

    const isPhoneNumberCorrect = isNumberCorrect(phoneNumber);
    if (isPhoneNumberCorrect) {
      generateAndSendOTP(phoneNumber);
      navigation.navigate('otp');
    } else {
      Alert.alert('Incorrect Phone Number', 'Please enter the correct phone number to proceed.');
    }
  };

  const isNumberCorrect = (phoneNumber) => {
    // Implement your logic here to determine if the given phone number is correct
    // You can compare it with a default number or use any other condition

    const defaultNumber = '9150688467'; // Example default number
    return phoneNumber === defaultNumber;
  };

  const generateAndSendOTP = (phoneNumber) => {
    // Simulate OTP generation and sending logic
    // Replace this with your actual OTP generation and sending mechanism
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
    // Send the OTP to the user's phone number via SMS or any other method

    // You can also store the OTP in state or a global variable to use in the OTP verification screen
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require('../images/logo.png')} style={loginPageStyle.image} />
        <View style={{ top: 100 }}>
          <Text style={loginPageStyle.text1}> Phone Number :</Text>
          <View style={{ flexDirection: 'row', left: 40, top: 40 }}>
            <Icon name='person' size={25} />
            <TextInput
              style={loginPageStyle.textInput}
              maxLength={10}
              keyboardType='numeric'
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <View style={{ top: 100 }}>
            <TouchableOpacity style={loginPageStyle.login} onPress={handleLogin}>
              <Text style={loginPageStyle.loginText}> Log in </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


// import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import React, { useState } from 'react';
// import loginPageStyle from '../styles/loginPageStyle';
// import Icon from 'react-native-vector-icons/Ionicons';

// export default function LoginScreen({ navigation }) {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleLogin = () => {
//     if (phoneNumber.length !== 10) {
//       Alert.alert('Invalid Phone Number', 'Please enter a 10-digit phone number.');
//       return;
//     }

//     // Perform further validation for the correct phone number
//     const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
//     if (!isPhoneNumberValid) {
//       Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
//       return;
//     }

//     // Simulate OTP generation and sending logic
//     generateAndSendOTP(phoneNumber);
//     navigation.navigate('otp');
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     // Implement your validation logic here
//     // Return true if the phone number is valid, false otherwise
//     // You can use regular expressions or any other validation method

//     // Example validation using regular expression
//     const regex = /^[0-9]{10}$/; // Matches a 10-digit number
//     return regex.test(phoneNumber);
//   };

//   const generateAndSendOTP = (phoneNumber) => {
//     // Simulate OTP generation and sending logic
//     // Replace this with your actual OTP generation and sending mechanism
//     const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
//     // Send the OTP to the user's phone number via SMS or any other method

//     // You can also store the OTP in state or a global variable to use in the OTP verification screen
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View>
//         <Image source={require('../images/logo.png')} style={loginPageStyle.image} />
//         <View style={{ top: 100 }}>
//           <Text style={loginPageStyle.text1}> Phone Number :</Text>
//           <View style={{ flexDirection: 'row', left: 40, top: 40 }}>
//             <Icon name='person' size={25} />
//             <TextInput
//               style={loginPageStyle.textInput}
//               maxLength={10}
//               keyboardType='numeric'
//               value={phoneNumber}
//               onChangeText={text => setPhoneNumber(text)}
//             />
//           </View>
//           <View style={{ top: 100 }}>
//             <TouchableOpacity style={loginPageStyle.login} onPress={handleLogin}>
//               <Text style={loginPageStyle.loginText}> Log in </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
