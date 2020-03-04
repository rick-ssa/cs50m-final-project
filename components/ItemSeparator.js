import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../assets/colors'

function ItemSeparator() {
    return (
        <View>
            <View style = {[styles.darkLine, styles.line]}/>
            <View style = {[styles.lightLine, styles.line]}/>
        </View>
    )
}

const styles = StyleSheet.create( 
    {
        darkLine: {
            backgroundColor: colors.YELLOW,
        },

        lightLine: {
            backgroundColor: 'white'
        },

        line: {
            height: 1,
            width:'100%',
        }
    }
)

export default ItemSeparator