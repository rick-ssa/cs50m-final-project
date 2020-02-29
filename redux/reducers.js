import {ADD_FILTER_CUISINE, ADD_FILTER_DIET, ADD_FILTER_INTOLERANCES} from './actions/action_types'
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
        case ADD_FILTER_INTOLERANCES:
            return {...state, 
                    filters: state.filters.map(filter=>{
                        if(filter.name==='Intolerances') {
                            return (
                                {
                                    name: filter.name,
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
        default:
            return state
    }
}