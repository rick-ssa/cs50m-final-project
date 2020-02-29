import {ADD_FILTER_CUISINE,ADD_FILTER_EXCLUDE_INGREDIENTS, ADD_FILTER_DIET, ADD_FILTER_INTOLERANCES} from './actions/action_types'
const initialState = require('../state.json')

export default function recipeApp(state = initialState,action) {
    switch(action.type) {
        case ADD_FILTER_CUISINE:
            return {...state, 
                    filters: [
                        {name: action.payload.filter.name, data: action.payload.filter.data.map(f=>f)},
                        {name: state.filters[1].name, data: state.filters[1].data.map(f=>f)},
                        {name: state.filters[2].name, data: state.filters[2].data.map(f=>f)},
                        {name: state.filters[3].name, data: state.filters[3].data.map(f=>f)}
                    ]}

        default:
            return state
    }
}