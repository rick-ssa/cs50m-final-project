import {createStore} from 'redux'
import recipeApp from './reducers'

const store = createStore(recipeApp)

export default store