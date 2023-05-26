import { StyleSheet } from "react-native";

export default StyleSheet.create({
    LinearGradient: {
       
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