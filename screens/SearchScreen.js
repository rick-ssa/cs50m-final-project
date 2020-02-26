import React from 'react'
import {View, Text,TextInput, TouchableOpacity,ScrollView, StyleSheet} from 'react-native'
import PillsContainer from '../components/PillsContainer'
import colors from '../assets/colors'

export default function SeachScreen(props) {
    return (
        <View  style={styles.container}>
            <View style={styles.inputQueryWrap}>

                <TextInput 
                    style={styles.inputQuery} 
                    placeholder = 'Type your query'
                />

            </View>
            <ScrollView style={styles.filterContainer}>
                <PillsContainer />
                <PillsContainer />
                <PillsContainer />
                <PillsContainer />
            </ScrollView>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.textSearchButton}></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },

    inputQueryWrap: {
        height: 20,
        borderColor: colors.DARKGREEN,
        borderRadius: 5,
        width: 300,
    },

    /* inputQuery: {

    },

    filterContainer: {

    },

    searchButton: {

    },

    textSearchButton: {

    }
 */

})