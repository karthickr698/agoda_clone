import {
    SELECTED_FILTERS,
    ADD_ALL_HOTELS,
    GOT_HOTEL_ENTITY,
    SET_NUMBER_OF_PEOPLE,
    SENDING_BILL_DATA_REQUEST,
    SENDING_BILL_DATA_SUCCESS,
    SENDING_BILL_DATA_FAILURE
} from "./actionTypes"

const initialState = {
    selectedFilters: [],
    hotels: [],
    hotel: [],
    numberOfPeople: 0,
    pay: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SELECTED_FILTERS:
            return { ...state, selectedFilters: payload }

        case ADD_ALL_HOTELS:
            console.log(payload)
            return { ...state, hotels: payload }

        case GOT_HOTEL_ENTITY:
            console.log(payload[0])
            return {
                ...state,
                hotel: [...payload[0]]
            }

        case SET_NUMBER_OF_PEOPLE:
            return {
                ...state,
                numberOfPeople: payload
            }

        case SENDING_BILL_DATA_REQUEST:
            return {
                isLoading: true,
                error: false
            };

        case SENDING_BILL_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataFromRazorpay: payload,
                pay: true
            };

        case SENDING_BILL_DATA_FAILURE:
            return {
                isLoading: false,
                error: true
            };

        default:
            return state
    }
}
