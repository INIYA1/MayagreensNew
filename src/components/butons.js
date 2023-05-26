import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IrrigationPageStyle } from '../styles/irrigationPageStyle';

export const gManualbtn = (btnName) => {
    return (
        <TouchableOpacity style={IrrigationPageStyle.gManualbtn}>
            <Text style={IrrigationPageStyle.gManualbtnText}>{btnName}</Text>
        </TouchableOpacity>
    )
}
export const tabBTNGreen = (title, width) => {
    return (
        <View style={[IrrigationPageStyle.tabContainer, { height: 70 }]}>
        <TouchableOpacity style={[IrrigationPageStyle.tabBTNGreen, { width: width }]}>
            <Text style={IrrigationPageStyle.tabBTNGreenText}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}
export const groupManualButton = () => {
    return (
        <View style={{ flexDirection: 'row', top: 25, justifyContent: 'space-around' }}>
            {gManualbtn('SHOW')}
            {gManualbtn('EDIT')}
        </View>
    )
}

export const buttonsType = () => {
    return (
        groupManualButton()
    )
}


// export const GManualBtn = ({ btnName, onPress }) => {
//   return (
//     <TouchableOpacity style={IrrigationPageStyle.gManualbtn} onPress={onPress}>
//       <Text style={IrrigationPageStyle.gManualbtnText}>{btnName}</Text>
//     </TouchableOpacity>
//   );
// };

// const GroupManualButton = () => {
//   const [buttonText, setButtonText] = useState('SHOW');

//   const toggleButton = () => {
//     setButtonText(buttonText === 'SHOW' ? 'HIDE' : 'SHOW');
//   };

//   return (
//     <View style={{ flexDirection: 'row', top: 25, justifyContent: 'space-around' }}>
//       <GManualBtn btnName={buttonText} onPress={toggleButton} />
//       <GManualBtn btnName="EDIT" />
//     </View>
//   );
// };

// export const buttonsType = () => {
//   return <GroupManualButton />;
// };