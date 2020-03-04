import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import Item from './Item'
import ItemSeparator from './ItemSeparator'
import colors from '../assets/colors'

import {connect} from 'react-redux'

function Items({recipes}) {
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

