import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import Pill from './Pill'
import colors from '../assets/colors'

export default function PillsContainer(props) {
    return (
        <View style = {styles.container}>
            <View style ={styles.titleWrap}>
                <Text style = {styles.titleText}>{props.title}</Text>
                <TouchableOpacity style = {styles.addButton} onPress = {props.onAdd}>
                    <Text style = {styles.textButton}>&#10010;</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.pillsWrap}>
                {
                    props.pills ?
                    props.pills.map(pill=>{
                        return <Pill text = {pill.text} onClose = {pill.onClose} marginAround = {pill.marginAround}/>
                    }) :
                    <Text></Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: colors.LIGHT,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        overflow: 'hidden',
        borderRadius: 4
    },

    titleWrap: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        /* borderBottomColor: 'white',
        borderBottomWidth: 3, */
    },
    titleText: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.DARKGREEN,
    },
    addButton: {
        backgroundColor: colors.LIGHT,
        borderRadius: 20,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        color: colors.DARKGREEN
    },

    pillsWrap:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15,
        paddingBottom: 15,
    }
})