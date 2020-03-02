import React from 'react'
import {View, Text, StyleSheet,Switch} from 'react-native'
import colors from '../assets/colors'
import {connect} from 'react-redux'
import {addFilter, showFilter,hideFilter} from '../redux/actions/action_creators'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

function SwitchContainer({title,switchs,onSwitch,showFilter,onShowFilter,onHideFilter}) {
    const colorTitle = switchs.find((switchData=>switchData.selected===true)) ? {color: colors.RED} : {color: colors.DARKGREEN}

    return (
        <View style = {styles.container}>
            <TouchableOpacity 
                style = {styles.titleWrap} 
                onPress = {()=>{
                    showFilter ? onHideFilter(title) : onShowFilter(title)
                }} 
            >
            
                <Text 
                    style={[styles.title,colorTitle]}
                >
                    {title.toUpperCase()}
                </Text>

                    <Icon 
                        name={`ios-${showFilter?'remove':'add'}-circle-outline`} 
                        color ={colors.DARKGREEN}
                        size = {32}
                    />
            </TouchableOpacity>
            
            {   
                showFilter ?
                switchs.map((swt,i,arr)=>{
                    return(<TouchableOpacity 
                                onPress = {()=>onSwitch(
                                    {name:swt.text, selected:!swt.selected},
                                    `addFilter${title}`
                                )}
                                key = {`switch ${i}`}
                                style = {(i+1)===arr.length ? styles.lastItemWrap : styles.itemWrap}
                            
                            >   
                            
                                <Text style = {styles.textItem}>
                                    {swt.text}
                                </Text>
                                
                                
                                <Switch 
                                    value={swt.selected}
                                    trackColor={{false:'lightgray', true: colors.LIGHTGREEN}}
                                    onValueChange = {v=>onSwitch(
                                                        {name:swt.text, selected:v},
                                                        `addFilter${title}`
                                                    )}
                                />
                            </TouchableOpacity>
                        )
                })
                :
                null
            }
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginBottom: 16,
        overflow: 'hidden',
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
    },

    titleWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        flex:1,
        padding: 10,
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemWrap: {
        flexDirection: 'row',
        padding: 24,
        paddingLeft: 8,
        paddingRight:8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.YELLOW
    },
    lastItemWrap: {
        flexDirection: 'row',
        padding: 24,
        paddingLeft: 8,
        paddingRight:8,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex:1,
        color: colors.LIGHTGREEN,
        fontSize: 16,
    },
})

const mapDispatchToProps = dispatch => {
    return {
        onSwitch: (obj,act) => {
            dispatch(addFilter(obj,act))
        },
        onShowFilter: (filterName) => {
            dispatch(showFilter(filterName))
        },
        onHideFilter: (filterName) => {
            dispatch(hideFilter(filterName))
        }
    }
}

export default connect(null,mapDispatchToProps)(SwitchContainer)