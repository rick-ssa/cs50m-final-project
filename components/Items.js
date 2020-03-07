import React from 'react';
import {FlatList,StyleSheet, View, Text} from 'react-native';
import Item from './Item'
import ItemSeparator from './ItemSeparator'
import colors from '../assets/colors'

import {connect} from 'react-redux'

function zerosToFourDigits (number){
    let result = ''
    for(let i=0; i<4 - number.toString().length;i++){
        result += '0'
    }

    return result
}

function Items({recipes, navigation}) {
    return (            
        <FlatList 
            data = {recipes}
            renderItem = {({item})=>(
                <Item 
                    title = {item.title}
                    id = {item.id}
                    type = {item.image ? item.image.match(/\.(\w{3,4})$/)[1] : ''}
                    time = {item.readyInMinutes}
                    serves = {item.servings}
                    zeros = {zerosToFourDigits(item.readyInMinutes)}
                    navigation = {navigation}
                />
            )}
            ListEmptyComponent = {()=>(
                <View style={styles.emptyContainer}>
                    <Text style ={styles.emptyText}>Nothing has returned. Please try to redo your search.</Text>
                </View>
            )}
            keyExtractor = {item=>('i'+item.id )}
            ItemSeparatorComponent = {()=><ItemSeparator/>}
            initialNumToRender = {12}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    emptyText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.DARKGREEN,
    }
})

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps) (Items);

