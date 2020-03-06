import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
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
    }
})

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps) (Items);

