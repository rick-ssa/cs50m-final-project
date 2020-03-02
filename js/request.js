import axios from 'axios'

const config = require('../config.json')

axios.defaults.baseURL = 'https://api.spoonacular.com/'


export async function getRecipes(query,callBack,number=10,offset=0,cuisine, diet, intolerances){
    let urlRequest = `recipes/search?apiKey=${config.SPOONACULAR_API_KEY}&query=${query}&number=${number}&offset=${offset}`

    urlRequest+= cuisine ? `&cuisine=${cuisine}` : ''
    urlRequest+= diet ? `&diet=${diet}` : ''
    urlRequest+= intolerances ? `&intolerances=${intolerances}` : ''
    try {
        const response = await axios.get(urlRequest)
        
        callBack([...response.data.results], null, response.status)
    } 
    catch (error) {
        callBack(null,error,response.status)
    }
}

export async function setRecipePointer(id,callback) {
    axios.all([
                axios.get(`recipes/${id}/ingredientWidget.json?apiKey=${config.SPOONACULAR_API_KEY}`),
                axios.get(`recipes/${id}/analyzedInstructions?apiKey=${config.SPOONACULAR_API_KEY}`)
            ]
    )
    .then(axios.spread((ingredients, prepare)=>{callback(ingredients.data.ingredients,prepare.data[0].steps,null)}),
    err=>callback(null,null,err))

}



