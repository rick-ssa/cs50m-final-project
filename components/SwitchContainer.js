import React from 'react'
import {View, Text, StyleSheet,Switch} from 'react-native'
import colors from '../assets/colors'
import {connect} from 'react-redux'
import {addFilter} from '../redux/actions/action_creators'

function SwitchContainer({title,switchs,onSwitch}) {
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>{title}</Text>
            {
                switchs.map((swt,i)=>{
                    return(<View 
                                key = {`switch ${i}`}
                                style = {styles.itemWrap}
                            >
                                    <Text style = {styles.textItem}>{swt.text}</Text>
                                    <Switch 
                                        value={swt.selected}
                                        trackColor={{false:'lightgray', true: colors.LIGHTGREEN}}
                                        onValueChange = {v=>onSwitch(
                                                            {name:swt.text, selected:v},
                                                            `addFilter${title}`
                                                        )}
                                    />
                            </View>
                        )
                })
            }
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: colors.LIGHT,
        marginBottom: 15,
        overflow: 'hidden',
        borderRadius: 4
    },

    title: {
        padding: 5,
        paddingBottom: 10,
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.DARKGREEN,
    },
    itemWrap: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 8,
        paddingRight:8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.YELLOW
    },
    textItem: {
        color: colors.DARKGREEN,
        fontSize: 16,
    },
})

const mapDispatchToProps = dispatch => {
    return {
        onSwitch: (obj,act) => {
            dispatch(addFilter(obj,act))
        }
    }
}

export default connect(null,mapDispatchToProps)(SwitchContainer)