import { SELECTED_FILTERS, ADD_ALL_HOTELS, GOT_HOTEL_ENTITY, SET_NUMBER_OF_PEOPLE } from "./actionTypes"

const initialState = {
    selectedFilters: [],
    hotels: [],
    hotel:[],
    numberOfPeople: 1
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
            hotel: [...payload[0]]
        }
    case SET_NUMBER_OF_PEOPLE:
        return {
            ...state,
            numberOfPeople: payload
        }

    default:
        return state
    }
}
