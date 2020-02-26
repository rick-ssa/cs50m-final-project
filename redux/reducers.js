import {ADD_FILTER_CUISINE,ADD_FILTER_EXCLUDE_INGREDIENTS, ADD_FILTER_DIET, ADD_FILTER_INTOLERANCES} from './actions/action_types'

function recipeApp(state,action) {
    switch(action.type) {
        case ADD_FILTER_CUISINE:
            return true

        default:
            return state
    }
}