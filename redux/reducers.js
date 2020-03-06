import {
        ADD_FILTER_CUISINE, 
        ADD_FILTER_DIET, 
        ADD_FILTER_INTOLERANCES, 
        CHANGE_QUERY_TEXT,
        SHOW_FILTER,
        HIDE_FILTER,
        GET_RECIPES,
        SET_RECIPE_POINTER,
        SET_LOADING_ITEMS,
    } from './actions/action_types'
const initialState = require('../state.json')

export default function recipeApp(state = initialState,action) {
    
    switch(action.type) {
        case ADD_FILTER_CUISINE:
            return {...state, 
                    filters: state.filters.map(filter=>{
                        if(filter.name==='Cuisine') {
                            return (
                                {
                                    name: filter.name,
                                    show: filter.show,
                                    data: filter.data.map(cuisine=>{
                                        if(cuisine.name===action.payload.filterObject.name) {
                                            return action.payload.filterObject
                                        }
                                        return {...cuisine}
                                    })
                                }
                            )
                        }

                        return {...filter}
                    })
                }
        case ADD_FILTER_DIET:
            return {...state, 
                    filters: state.filters.map(filter=>{
                        if(filter.name==='Diet') {
                            return (
                                {
                                    name: filter.name,
                                    show: filter.show,
                                    data: filter.data.map(diet=>{
                                        if(diet.name===action.payload.filterObject.name) {
                                            return action.payload.filterObject
                                        }
                                        return {...diet}
                                    })
                                }
                            )
                        }

                        return {...filter}
                    })
                }
        case ADD_FILTER_INTOLERANCES:
            return {...state, 
                    filters: state.filters.map(filter=>{
                        if(filter.name==='Intolerances') {
                            return (
                                {
                                    name: filter.name,
                                    show: filter.show,
                                    data: filter.data.map(intolerance=>{
                                        if(intolerance.name===action.payload.filterObject.name) {
                                            return action.payload.filterObject
                                        }
                                        return {...intolerance}
                                    })
                                }
                            )
                        }

                        return {...filter}
                    })
                }
        case CHANGE_QUERY_TEXT:
            return {...state,query: action.payload.text}
        case SHOW_FILTER:
            return {
                ...state, filters: state.filters.map(filter=>{
                    if(filter.name===action.payload.filterName) {
                        return {...filter,show: true}
                    }

                    return {...filter}
                })
            }
        case HIDE_FILTER:
                return {
                    ...state, filters: state.filters.map(filter=>{
                        if(filter.name===action.payload.filterName) {
                            return {...filter,show: false}
                        }
    
                        return {...filter}
                    })
                }
        case GET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload.recipes],
                loadingItems: false,
            }
        case SET_LOADING_ITEMS:
            return {
                ...state, loadingItems: action.payload.load
            }
        case SET_RECIPE_POINTER:
            return {
                ...state,
                recipePointer: {
                    id: action.payload.id,
                    title: action.payload.title,
                    ingredients: [...action.payload.ingredients],
                    prepare: [...action.payload.prepare]                
                }
            }
        default:
            return state
    }
}