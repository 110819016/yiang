import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View, Image, Pressable, Alert, ScrollView, Switch, TextInput} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {styles, settingStyle, loginStyle} from "./style/MainStyle";
import {useFonts} from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddMemory({navigation}){

}

const setData = async (text) =>{
    try{
        await AsyncStorage.setItem('key',text)
        console.log(text + " set.")
        console.log(getData())
    } catch(error){
        console.log(error)
    }
}

const getData = async ()=>{
    try{
        const data = AsyncStorage.getItem('key')
        console.log(data + " get.")
        if(data !== null) {
            return data
        }
    } catch(error){
        console.log(error)
    }
}

function loginScreen({navigation}){
    const [userName,setUserName] = useState("")
    const [userPassword,setUserPassword] = useState("")



    return(
        <View style={loginStyle.loginContainer}>
            <View style={loginStyle.titleContainer}>
                <Text style={loginStyle.titleEngText}>Yiang Map</Text>
                <Text style={loginStyle.titleChinText}>情侶的專屬解答</Text>
            </View>
            <TextInput
                style={loginStyle.loginID}
                placeholder={"Email / Username"}
                onChangeText={setUserName}
                value={userName}
            />
            <TextInput
                style={loginStyle.loginPassword}
                placeholder={"Password"}
                onChangeText={setUserPassword}
                value={userPassword}
            />
            <Pressable style={loginStyle.loginPressable} onPress={()=> setData(userName)}>
                <Text style={loginStyle.loginPressableText}>登入</Text>
                <Text style={loginStyle.loginPressableText}></Text>
            </Pressable>
            <Pressable style={loginStyle.loginContent}>
                <Text style={loginStyle.loginContentText}>沒有帳號？ 註冊</Text>
            </Pressable>
            <Pressable style={loginStyle.loginContent}>
                <Text style={loginStyle.loginContentText}>或 以訪客登入</Text>
            </Pressable>
            <View style={loginStyle.divider}></View>
            <StatusBar style="auto"/>
            <Pressable style={loginStyle.itemContent}>
                <Text style={loginStyle.itemContentText}>使用社群帳號登入</Text>
            </Pressable>
        </View>

    )
}

function Room({navigation}) {
    return (
        <View style={styles.roomContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleLeftText}>Room</Text>
                <Text style={styles.titleRightText}>房間</Text>
            </View>
            <View style={styles.divider}></View>
            <ScrollView contentContainerStyle={styles.memoryContainer}>
                <Pressable style={styles.memoryItem} onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>

                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
                <Pressable style={styles.memoryItem}onPress={()=>navigation.navigate('Memory')}>
                    <Text style={styles.memoryItemTitle}>
                        D+211
                    </Text>
                    <Text style={styles.memoryItemText}>
                        我好快樂今天有網路學習react
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

function MemoryDetailsScreen({navigation}){
    return(
        <Pressable onPress={()=>navigation.goBack()}>
            <Text>Go Back</Text>
        </Pressable>
    )
}

function SettingScreen({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false)

    return (
        <View style={settingStyle.settingScreenContainer}>
            <View style={settingStyle.titleContainer}>
                <Text style={settingStyle.titleRightText}>SETTINGS</Text>
            </View>
            <View style={settingStyle.divider}></View>
            <View style={settingStyle.settingTitle}>
                <Text style={settingStyle.settingTitleText}>外觀</Text>
            </View>
            <View style={settingStyle.settingContainer}>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#d72f2f" : "#ff2e2e"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>深色模式</Text>
                </View>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>使用背景</Text>
                </View>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>字體大小</Text>
                </View>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>色盲模式</Text>
                </View>
            </View>
            <View style={settingStyle.divider}></View>
            <View style={settingStyle.settingTitle}>
                <Text style={settingStyle.settingTitleText}>通知</Text>
            </View>
            <View style={settingStyle.settingContainer}>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>開啟通知</Text>
                </View>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>震動</Text>
                </View>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>鈴聲</Text>
                </View>
                <View style={settingStyle.settingContainerText}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#c18db2" }}
                        thumbColor={isEnabled ? "#fcfcfc" : "#fdfdfd"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                    <Text>最愛宜宜</Text>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>

    )
}

function YiyiScreen({navigation}) {
    return (
        <View style={styles.container2}>
            <Image style={styles.Image} source={require('./assets/image/beau.jpg')}/>
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
            <Pressable style={styles.button} onPress={() => navigation.navigate('Room')}>
                <Text style={styles.buttonTitle}>房間</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>

    )
}

function LiangScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={require('./assets/image/cute.jpg')}/>
            <Text style={styles.text}>Name:Liang</Text>
            <Text style={styles.text}>Age:20</Text>
            <Pressable style={styles.button2} onPress={() => Alert.alert("拎北已經有女友了謝謝")}>
                <Text style={styles.buttonTitle2}>想認識我嗎?</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('Yiyi')}>
                <Text style={styles.buttonTitle2}>宜宜唷</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.popToTop()}>
                <Text style={styles.buttonTitle2}>回首頁</Text>
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

    const [loaded] = useFonts({
        NotoLight: require('./assets/fonts/NotoSansTC-Light.otf'),
        NotoBold: require('./assets/fonts/NotoSansTC-Bold.otf'),
        NotoRegular: require('./assets/fonts/NotoSansTC-Regular.otf')
    })

    if(!loaded){
        return null
    }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Liang' options={{title: '亮亮'}} component={LiangScreen}/>
                <Stack.Screen name='Yiyi' options={{title: '宜宜'}} component={YiyiScreen}/>
                <Stack.Screen name='Setting' options={{title: '設定'}} component={SettingScreen}/>
                <Stack.Screen name='Room' options={{title: '房間'}} component={Room}/>
                <Stack.Screen name='Memory' options={{title:'回憶錄'}} component={MemoryDetailsScreen}/>
                <Stack.Screen name='Login' options={{title: '登入頁'}} component={loginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

