import React from 'react'
import {View,Text, StyleSheet, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../assets/colors'

export default function Pill(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{props.text}</Text>
            <TouchableOpacity style ={styles.closeButton} onPress = {props.onClose}>
                <Text style = {styles.textButton}>&times;</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.LIGHTGREEN,
        flexDirection: 'row',
        padding: 4,
        height: 30,
        alignItems: 'center',
        shadowColor: colors.DARKGREEN,
        shadowOffset: {width:2,height:2},
        shadowOpacity: 1,
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        color: '#f5f7d4',
    },
    closeButton: {
        backgroundColor: colors.DARKGREEN,
        borderRadius: 20,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: colors.YELLOW,
        fontSize: 20,
    }
})