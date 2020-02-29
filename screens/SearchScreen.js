import React from 'react'
import {View, Text,TextInput, TouchableOpacity,ScrollView, StyleSheet} from 'react-native'
import SwitchContainer from '../components/SwitchContainer'
import colors from '../assets/colors'
import { connect } from 'react-redux'


function SearchScreen({filters}) {

    return (
        <View  style={styles.container}>
            <View style={styles.inputQueryWrap}>

                <TextInput 
                    style={styles.inputQuery} 
                    placeholder = 'Type your query (REQUIRED)'
                    autoFocus                     
                />

            </View>
            <Text style={styles.textFilter}>Filters:</Text>
            <ScrollView style={styles.filterContainer}>
                {
                    filters.map(filter =>{
                        return (<SwitchContainer 
                            title = {filter.name} 
                            switchs = {filter.data.map(dt => ({text: dt.name, selected: dt.selected}))}
                        />)
                    })
                }
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

const mapStateToProps = state => {
    return {
            filters: state.filters
    }

}

export default connect(mapStateToProps) (SearchScreen)