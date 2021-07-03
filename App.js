import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Pressable, Alert, SafeAreaView, ScrollView} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

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
    return (
        <View style={styles.container2}>
            <Image style={styles.Image} source={require('./assets/image/beau.jpg')}/>
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
                <Stack.Screen name='Room' options={{title: '房間'}} component={Room}/>
                <Stack.Screen name='Memory' options={{title:'回憶錄'}} component={MemoryDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

