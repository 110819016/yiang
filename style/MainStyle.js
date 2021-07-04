import {StyleSheet} from "react-native";

export const loginStyle = StyleSheet.create({

    loginContainer:{
        flex: 1,
        height: 'auto',
        backgroundColor: 'rgba(255,209,209,0.45)',
        alignItems:'center',
        paddingTop: '20%',
    },

    titleContainer:{
        height: 120,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleEngText:{
        fontSize: 36,
        color: '#424242',
        fontFamily: 'NotoRegular',
        marginBottom: 10,
        lineHeight: 49,
        textShadowColor: '#a0a0a0',
        textShadowRadius: 4,
        textShadowOffset:{
            height: 1,
            width: 2,
        }
    },

    titleChinText:{
        fontSize: 15,
        color: '#424242',
        fontFamily: 'NotoBold',
        lineHeight: 30,
        letterSpacing: 2,
        textShadowColor: '#a0a0a0',
        textShadowRadius: 4,
        textShadowOffset:{
            height: 1,
            width: 2,
        }
    },

    loginID:{
        backgroundColor: 'rgba(255,255,255,0.86)',
        borderRadius: 15,
        width: 233,
        height: 31,
        marginTop: 50,
        marginBottom: 20,
        borderColor: '#848484',
        borderWidth: 1,
        textAlign: 'center',
    },

    loginPassword:{
        backgroundColor: 'rgba(255,255,255,0.86)',
        borderRadius: 15,
        width: 233,
        height: 31,
        marginBottom: 20,
        borderColor: '#848484',
        borderWidth: 1,
        textAlign: 'center',
    },

    loginPressable:{
        backgroundColor: '#DFC2CD',
        borderRadius: 15,
        width: 233,
        height: 31,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    },

    loginPressableText:{
        fontSize: 16,
        color: '#434343',
    },

    loginContent:{
        height: 25,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginContentText:{
        fontSize: 14,
        letterSpacing: 1.5,
        color: '#B07D7D',
        fontFamily: 'NotoBold',
    },

    divider:{
        width: '50%',
        marginTop:20,
        borderColor: 'rgba(168,168,168,0.97)',
        borderBottomWidth: 1,
    },

    itemContentText:{
        fontSize: 14,
        color: 'rgba(130,130,130,0.97)',
        fontFamily: 'NotoBold',
        letterSpacing: 2,
    },
})

export const settingStyle = StyleSheet.create({

    settingScreenContainer:{
        backgroundColor: 'rgba(255,197,197,0.84)',
        flex: 1,
        padding: 16,
    },

    titleContainer:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: 10,
    },

    titleRightText:{
        fontSize: 18,
        fontFamily: 'NotoBold',
        lineHeight: 28,
        color: '#4e4e4e',
    },

    divider:{
        borderColor: 'rgba(99,99,99,0.97)',
        borderBottomWidth: 1,
        marginBottom: 20,
    },

    settingTitle:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: 'rgba(123,123,123,0.54)',
        borderRadius: 15,
        height: '5%',
        marginBottom: 20,
    },

    settingTitleText:{
        fontSize: 18,
        fontFamily: 'NotoLight',
        lineHeight: 30,
        color: '#454545',
        paddingTop:5,
        paddingRight: 10,
    },

    settingContainer:{
        backgroundColor: 'rgba(123,123,123,0.54)',
        borderRadius: 15,
        height: '30%',
        marginBottom: 30,
        paddingTop: 20,
        paddingRight: 10,
    },

    settingContainerText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 30,
        fontFamily: 'NotoBold',
        lineHeight: 50,
        color: '#4e4e4e',
        marginBottom: 15,
    },
})
export const styles = StyleSheet.create({

    divider:{
        borderColor:'grey',
        borderBottomWidth:1,
        marginBottom: 16,
    },

    titleLeftText:{
        color: '#222',
        fontSize: 20,
    },

    titleRightText:{
        color: '#222',
        fontSize: 20,
    },

    titleContainer:{
        width: '100%',
        height: 42,
        flexDirection: 'row',
        justifyContent: 'space-between', //直
    },

    memoryContainer: {
        height: 'auto',
        alignItems: 'center', //橫
        justifyContent: 'flex-start', //直
    },

    memoryItemTitle:{
        fontSize: 20,
        fontFamily: 'NotoLight',
        lineHeight: 22,
    },

    memoryItemText:{
        fontSize: 16,
        fontFamily: 'NotoLight',
        lineHeight: 26,
    },

    memoryItem:{
        margin:8,
        width: '95%',
        padding: 16,
        height: 84,
        borderRadius: 16,
        elevation: 10,
        shadowColor:"#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {
          height: 1,
          width: 0,
        },

        backgroundColor: 'rgba(255,254,254,0.97)',
        alignItems: 'flex-start', //目前的主軸線軸線垂直
        justifyContent: 'center', //目前的主軸線
    },

    roomContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: 'rgba(255,184,207,0.76)',
    },

    container2: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center', //橫
        justifyContent: 'center', //直
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        // flexDirection: 'row', //預設是column
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 15,
        fontSize: 25,
    },
    Image: {
        borderRadius: 25,
        width: 150,
        height: 150,
        marginBottom: 15,
    },
    button: {
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'salmon',
        padding: 10
    },
    buttonTitle: {
        fontSize: 20,
        color: 'salmon',
    },
    button2: {
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'rgba(55,60,245,0.75)',
        padding: 10
    },
    buttonTitle2: {
        fontSize: 20,
        color: 'rgba(55,60,245,0.75)',
    },
});