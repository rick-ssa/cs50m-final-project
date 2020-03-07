import React from 'react';
import {View,Image,Text,TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors'

export default function IngredientItem({
    quantity,
    unit,
    ingredient,
}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.metric}>
                <Text style = {styles.qtde}>{quantity}</Text>
                <Text style = {styles.unit}>{unit}</Text>
            </View>
            <Text style = {styles.text}>{ingredient}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft:16,
        paddingRight: 16,
        alignItems: 'center',
    },

    metric: {
        flex: 2,
        flexDirection: 'row',
        paddingRight: 8,
    },

    qtde: {
        paddingRight: 4,
        fontSize: 18,
        color: colors.DARKGREEN,
        fontStyle: 'italic',
        paddingRight: 4,
    },
    
    unit: {
        fontSize: 18,
        color: colors.DARKGREEN,
        fontStyle: 'italic',
        paddingRight: 4,
    },

    text: {
        flex: 4,
        padding:4,
        fontSize: 18,
        color: colors.DARKGREEN,
    }
})