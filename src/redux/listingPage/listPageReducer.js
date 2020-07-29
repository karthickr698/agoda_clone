import { SELECTED_FILTERS, ADD_ALL_HOTELS, GOT_HOTEL_ENTITY } from "./actionTypes"

const initialState = {
    selectedFilters: [],
    hotels: [],
    hotel:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SELECTED_FILTERS:
        return { ...state, selectedFilters: payload }
    
    case ADD_ALL_HOTELS:
        console.log(payload)
        return { ...state, hotels: payload}

    case GOT_HOTEL_ENTITY:
        return {
            ...state,
            hotel: payload
        }

    default:
        return state
    }
}
