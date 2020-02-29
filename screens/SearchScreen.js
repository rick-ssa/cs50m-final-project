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
            <Text style={styles.textFilter}>Filters:</Text>
            <ScrollView style={styles.filterContainer}>
                <PillsContainer 
                    pills = {[{text:'Mexican', onClose: ()=>console.log('mexican cuisine')}]} 
                    title = 'Cuisine'
                />
                <PillsContainer 
                    pills = {[
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                                {text:'Vegan', onClose: ()=>console.log('vegan diet')},
                            ]} 
                    title = 'Diet'
                    pillMarginAround = {8}
                    pillOnClose = {(i)=>console.log('my index is ' + i)}
                />
                <PillsContainer title = 'Exclude Ingredient'/>
                <PillsContainer title = 'Intolerances'/>
            </ScrollView>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.textSearchButton}> Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
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

    textFilter: {
        color: colors.DARKGREEN,
        fontSize: 18,
        margin: 8,
        marginTop: 15,
    },  

    filterContainer: {
        flex: 1
    },

    searchButton: {
        height: 50,
        backgroundColor: colors.DARKGREEN,
        margin: 8,
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textSearchButton: {
        color: colors.LIGHT,
        fontSize: 20
    }


})