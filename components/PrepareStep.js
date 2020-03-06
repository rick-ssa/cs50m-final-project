import React from 'react';
import {View,Image,Text,TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors'

export default function PrepareStep({
    step,
    description,
}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.stepDescription}>
                <Text style={styles.stepNumber}>Step {step}:</Text> {description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft:16,
        paddingRight: 16,
    },

    stepNumber: {
        fontSize: 18,
        color: colors.RED,
        borderRadius: 16,
        paddingLeft: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    stepDescription: {
        padding:4,
        fontSize: 18,
        color: colors.DARKGREEN,
        textAlign: 'justify',
    }
})