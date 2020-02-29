export function addFilter(filterObject,typeAction){
    return {
        type: typeAction,
        payload: {
            filterObject
        }
    }
}
