import {SHOW_FILTER,HIDE_FILTER, GET_RECIPES, SET_RECIPE_POINTER} from './action_types'

export function addFilter(filterObject,typeAction){
    return {
        type: typeAction,
        payload: {
            filterObject
        }
    }
}

export function changeQuery(text,action) {
    return {
        type: action,
        payload: {
            text
        }
    }
}

export function showFilter(filterName) {
    return {
        type: SHOW_FILTER,
        payload: {
            filterName
        }
    }
}

export function hideFilter(filterName) {
    return {
        type: HIDE_FILTER,
        payload: {
            filterName
        }
    }
}

export function getRecipes(recipes) {
    return {
        type: GET_RECIPES,
        payload: {
            recipes
        }
    }
}

export function setRecipePointer(ingredients, prepare) {
    return {
        type: SET_RECIPE_POINTER,
        ingredients,
        prepare,
    }
}
