function addFilter(filter,typeAction){
    return {
        type: typeAction,
        payload: {
            filter
        }
    }
}