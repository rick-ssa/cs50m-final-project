import React from 'react';
import {View,Image,Text,TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/colors'

function setImageUrl(id,size,type) {
    return `https://spoonacular.com/recipeImages/${id}-${size}.${type}`
}

function Item({
    title,
    time,
    serves,
    zeros,
    id,
    type}){

    return (
        <TouchableOpacity style = {styles.itemContainer}>
            
            <Image 
                style = {styles.image}
                source = {type ? {uri: setImageUrl(id,'90x90',type)} : require('../assets/defaultImage.jpg')}
                resizeMode = 'cover'
                defaultSource = {require('../assets/defaultImage.jpg')}
            />
            
            <Text 
                style = {styles.title}
                numberOfLines = {2}
            > 
                {title.trim()}
            </Text>

            <View style = {styles.details}>
                <View style = {styles.iconContainer}>
                    <Icon 
                        style= {styles.icon}
                        name = 'clock'
                    />
                    {/* <Text style ={styles.zeros}>{zeros}</Text> */}
                    <Text style = {styles.iconText}>{time}m</Text>
                </View>

                <View style = {styles.iconContainer}>
                    <Icon 
                        style= {styles.icon}
                        name = 'users'
                    />
                    <Text style = {styles.iconText}>{serves}</Text>
                </View>                    
            </View>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        backgroundColor: colors.LIGHT,
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.YELLOW,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.DARKGREEN,
        padding: 5,
        paddingRight: 10,
        paddingLeft: 16,
        flex: 1,
    },

    details: {
        minWidth:75
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
    },

    icon: {
        paddingRight: 5,
        color: colors.RED,
        fontSize: 14,
    },

    zeros: {
        color: colors.LIGHT
    },

    iconText: {
        color: colors.RED,
        textAlign: 'right',

    },
})

export default Item;