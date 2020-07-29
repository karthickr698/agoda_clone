import { SELECTED_FILTERS, ADD_ALL_HOTELS } from "./actionTypes"

const initialState = {
    selectedFilters: [],
    hotels: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SELECTED_FILTERS:
        return { ...state, selectedFilters: payload }
    
    case ADD_ALL_HOTELS:
        console.log(payload)
        return { ...state, hotels: payload}

    default:
        return state
    }
}
