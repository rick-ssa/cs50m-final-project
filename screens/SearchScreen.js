import React from 'react'
import {View, Text,TextInput, TouchableOpacity,ScrollView, StyleSheet} from 'react-native'
import SwitchContainer from '../components/SwitchContainer'
import colors from '../assets/colors'
import { connect } from 'react-redux'
import {changeQuery} from '../redux/actions/action_creators'
import {CHANGE_QUERY_TEXT} from '../redux/actions/action_types'
import Icon from 'react-native-vector-icons/Ionicons'
import {setRecipePointer} from '../js/request'

function SearchScreen({filters,query,onQueryChange}) {

    return (
        <View  style={styles.container}>
            <View style={styles.inputQueryWrap}>

                <TextInput 
                    style={styles.inputQuery} 
                    value = {query}
                    placeholder = 'Type your query (REQUIRED)'
                    onChangeText = {(text)=>onQueryChange(text)}
                    autoFocus                     
                />

                <Icon 
                    name='ios-paper' 
                    size={32}
                    color={colors.LIGHTGREEN}
                />

            </View>
            <Text style={styles.textFilter}>Filters:</Text>
            <ScrollView style={styles.filterContainer}>
                {
                    filters.map((filter,i) =>{
                        return (<SwitchContainer 
                            key = {`filterContainer${i}`}
                            title = {filter.name} 
                            switchs = {filter.data.map(dt => ({text: dt.name, selected: dt.selected}))}
                            showFilter = {filter.show}
                        />)
                    })
                }
            </ScrollView>
            {
                query ?

                <TouchableOpacity 
                    style={styles.searchButton}
                    onPress = {()=>setRecipePointer(559729,console.log)}
                >
                    <Icon 
                        style= {styles.searchIcon} 
                        name='ios-search'
                        size={32}  
                        color = {colors.LIGHT}
                    />

                    <Text style={styles.textSearchButton}> Search</Text>
                </TouchableOpacity>

                :

                <View style={styles.searchButtonDisable}>
                    <Icon 
                        style= {styles.searchIcon} 
                        name='ios-search'
                        size={32}  
                        color = {colors.LIGHT}
                    />

                    <Text style={styles.textSearchButton}> Search</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 16,
    },

    inputQueryWrap: {
        flexDirection: 'row',
        height: 50,
        marginTop: 16,
        marginBottom: 16,
        borderColor: colors.DARKGREEN,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
    },

    inputQuery: {
        flex: 1,
        color: colors.LIGHTGREEN,
    },

    textFilter: {
        color: colors.DARKGREEN,
        fontSize: 18,
        marginTop: 16,
        marginBottom: 8,
    },  

    filterContainer: {
        flex: 1
    },

    searchButton: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: colors.DARKGREEN,
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchButtonDisable: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'rgba(10,52,9,0.5)',
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchIcon:{
        padding: 8,
        paddingLeft:15,
    },
    textSearchButton: {
        flex:1,
        color: colors.LIGHT,
        fontSize: 20,
        textAlign: 'center',
    }


})

const mapStateToProps = state => {
    return {
            query: state.query,
            filters: state.filters
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onQueryChange: (text)=>{
            dispatch(changeQuery(text,CHANGE_QUERY_TEXT))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SearchScreen)