import {StyleSheet} from "react-native";

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