import React, { useState, useEffect } from 'react';
import {
    StyleSheet, 
    ActivityIndicator,
    View,
    ScrollView,
    Image,
    Text,
} from 'react-native';

import {connect} from 'react-redux'

import colors from '../assets/colors'
import IngredientItem from '../components/IngredientItem';
import PrepareStep from '../components/PrepareStep';
import {setRecipePointer} from '../js/request'
import {actSetRecipePointer} from '../redux/actions/action_creators'


function DirectionScreen({recipe}) {
    
    return (
        
            <View style = {styles.container}>
                <Image 
                    style ={styles.recipeImage}
                    source = {{uri: `https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`}}
                />
                <View style = {styles.imgIngredientsContainer}>
                    {
                        recipe.ingredients.filter((ing,i)=>i<4).map(ing=>{
                            return (<Image 
                                style = {styles.imgIngredient} 
                                source = {{uri: `https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`}}
                            />)
                        })
                    }
                    
                </View>

                <ScrollView style = {styles.scroll}>
                    <Text 
                        style = {styles.title}
                        numberOfLines = {2}
                    > 
                        {recipe.title}
                    </Text>


                    <Text style = {styles.subTitle}>Directions</Text> 
                    {
                        recipe.prepare.map(dir=>{
                            return(
                                <PrepareStep step = {dir.number} description={dir.step}/>
                            )
                        })
                    }
                
                </ScrollView>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
    },

    containerActivity: {
        flex: 1,
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center',
    },

    recipeImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        backgroundColor: colors.DARKGREEN,
    },

    imgIngredientsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: -35,
    },

    imgIngredient: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderWidth: 5,
        borderColor: colors.ye,
        borderRadius: 35,
        backgroundColor: colors.YELLOW,
    },

    scroll: {
        top: -30,
    },

    title: {
        padding: 16,
        fontSize: 22,
        textAlign: 'center',
        color: colors.DARKGREEN,
        fontWeight: 'bold',
    },

    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        paddingTop: 20,
    }

})

const mapStateToProps = state => {
    return {
        recipe: state.recipePointer,
    }
}


export default connect(mapStateToProps)(DirectionScreen)