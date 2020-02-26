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
                    autoFocus 
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
        flexDirection: 'row',
        height: 50,
        margin: 8,
        marginTop: 15,
        marginBottom: 15,
        borderColor: colors.DARKGREEN,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
    },

    inputQuery: {
        flex: 1,
    },

    filterContainer: {
        
    },

    searchButton: {

    },

    textSearchButton: {

    }


})