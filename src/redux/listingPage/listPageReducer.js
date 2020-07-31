import {
    SELECTED_FILTERS,
    ADD_ALL_HOTELS,
    GOT_HOTEL_ENTITY,
    SET_NUMBER_OF_PEOPLE,
    SENDING_BILL_DATA_REQUEST,
    SENDING_BILL_DATA_SUCCESS,
    SENDING_BILL_DATA_FAILURE,
    SET_NUMBER_OF_DAYS
} from "./actionTypes"

const initialState = {
    selectedFilters: [],
    hotels: [],
    hotel: [],
    numberOfPeople: 0,
    numberOfDays: '',
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
        
        case SET_NUMBER_OF_DAYS:
            let { startDate, endDate, min_date } = payload
            startDate = startDate[0] || min_date
            endDate = endDate[0] || '0-0-0'
            startDate = startDate.split('-')
            endDate = endDate.split('-')
            startDate = new Date(...startDate)
            endDate = new Date(...endDate)
            startDate = parseInt(startDate.getTime() / 1000)
            endDate = parseInt(endDate.getTime() / 1000)
            let numberOfDays = Math.ceil((endDate - startDate) / (60*60*24))
            numberOfDays = numberOfDays < 0 ? 1 : numberOfDays + 1
            console.log("No of days : " + numberOfDays)
            return { 
                ...state,
                numberOfDays: numberOfDays
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
