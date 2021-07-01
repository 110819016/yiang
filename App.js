import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Pressable, Alert, SafeAreaView, ScrollView} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

function SettingScreen({navigation}) {
    return (
        <View style={styles.container2}>
            <Image style={styles.Image} source={require('./assets/beau.jpg')}/>
            <Text style={styles.text}>Name:Yiyi</Text>
            <Text style={styles.text}>Age:19</Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonTitle}>回上一頁</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.popToTop()}>
                <Text style={styles.buttonTitle}>回主畫面</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>

    )
}

function YiyiScreen({navigation}) {
    return (
        <View style={styles.container2}>
            <Image style={styles.Image} source={require('./assets/beau.jpg')}/>
            <Text style={styles.text}>Name:Yiyi</Text>
            <Text style={styles.text}>Age:19</Text>
            <Pressable style={styles.button} onPress={() => Alert.alert("下一位謝謝")}>
                <Text style={styles.buttonTitle}>想認識我嗎?</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Liang')}>
                <Text style={styles.buttonTitle}>亮亮唷</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Setting')}>
                <Text style={styles.buttonTitle}>設定</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>

    )
}

function LiangScreen({navigation}) {
    // const [count, setCount] = useState(0)
    // const [text, setText] = useState("Give me cookies")
    //
    // //const[count, setCount] = useState(//initial state) -> hook
    // //      變數    要改變變數的函數
    // function increase() {
    //     setCount(count => count + 1)
    // }
    //
    // useEffect(() => {
    //     // if(count%2 === 0){
    //     //   setText("Yiyi love liang")
    //     // }
    //     // else {
    //     //   setText("Liang love Yiyi")
    //     // }
    //     if (count === 21) {
    //         setText("I love you!")
    //     }
    // })
    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={require('./assets/cute.jpg')}/>
            <Text style={styles.text}>Name:Liang</Text>
            <Text style={styles.text}>Age:20</Text>
            <Pressable style={styles.button2} onPress={() => Alert.alert("拎北已經有女友了謝謝")}>
                <Text style={styles.buttonTitle2}>想認識我嗎?</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('Yiyi')}>
                <Text style={styles.buttonTitle2}>宜宜唷</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('Setting')}>
                <Text style={styles.buttonTitle2}>設定</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.push('Liang')}>
                <Text style={styles.buttonTitle2}>亮多一個</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>
    );
}

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Liang">
                <Stack.Screen name='Liang' options={{title: '亮亮'}} component={LiangScreen}/>
                <Stack.Screen name='Yiyi' options={{title: '宜宜'}} component={YiyiScreen}/>
                <Stack.Screen name='Setting' options={{title: '設定'}} component={SettingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: 'rgba(255,181,173,0.77)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(14,145,226,0.65)',
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