import React from 'react';
import {
    StyleSheet,
    SafeAreaView, 
    ActivityIndicator,
} from 'react-native';

import colors from '../assets/colors'
import Items from '../components/Items'

import {connect} from 'react-redux'

function RecipesScreen({loading}) {
    console.log(loading)
    return (
        <SafeAreaView style = {styles.container}>
            {
                loading
                ?
                <ActivityIndicator 
                    color = {colors.RED}
                    size = {60}
                />
                :
                <Items />
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
})

const mapStateToProps = state => {
    return {
        loading: state.loadingItems,
    }
}

export default connect(mapStateToProps) (RecipesScreen);

