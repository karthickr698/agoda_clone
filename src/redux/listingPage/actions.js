import {
    SELECTED_FILTERS,
    ADD_ALL_HOTELS,
    GET_HOTELS_REQUEST,
    GET_HOTELS_SUCCESS,
    GET_HOTELS_FAILURE,
    GOT_HOTEL_ENTITY,
    SET_NUMBER_OF_PEOPLE,
    SENDING_BILL_DATA_REQUEST,
    SENDING_BILL_DATA_SUCCESS,
    SENDING_BILL_DATA_FAILURE,
    SET_NUMBER_OF_DAYS
} from "./actionTypes";
import axios from 'axios'

export const updateTheFilters = (payload) => ({
    type: SELECTED_FILTERS,
    payload
})

export const addAllHotels = (payload) => ({
    type: ADD_ALL_HOTELS,
    payload
})

export const setNumberOfPeople = payload => ({
    type: SET_NUMBER_OF_PEOPLE,
    payload
})

export const getHotelsRequest = (payload) => ({
    type: GET_HOTELS_REQUEST,
    payload
})

export const getHotelsSuccess = (payload) => ({
    type: GET_HOTELS_SUCCESS,
    payload
})

export const getHotelsFailure = (payload) => ({
    type: GET_HOTELS_FAILURE,
    payload
})

export const getHotels = (url) => dispatch => {
    dispatch(getHotelsRequest())
    return axios
        .get(url)
        .then(res => res.data.property)
        .then(hotels => {
            dispatch(addAllHotels(hotels))
            dispatch(getHotelsSuccess)
        })
        .catch(err => dispatch(getHotelsFailure))
}

export const currentHotelEntityPage = (payload) => ({
    type: GOT_HOTEL_ENTITY,
    payload
})

export const setNumberOfDays = payload => ({
    type: SET_NUMBER_OF_DAYS,
    payload
})

export const getHotelEntityPage = id => (dispatch) => {
    console.log('called id' + id)
    return axios
        .get("http://d5018f16a5e7.ngrok.io/getproperty/" + id)
        .then(res => {
            console.log(res)
            return res.data.property
        })
        .then(res => dispatch(currentHotelEntityPage(res)))
        .catch((err) => console.log(err))
};

export const sendingBillDataRequest = () => ({
    type: SENDING_BILL_DATA_REQUEST
});

export const sendingBillDataSuccess = payload => ({
    type: SENDING_BILL_DATA_SUCCESS,
    payload
});

export const sendingBillDataFailure = payload => ({
    type: SENDING_BILL_DATA_FAILURE,
    error: payload
});

export const sendBillData = payload => dispatch => {
    return axios
        .post("http://d5018f16a5e7.ngrok.io/orders", {
            email: payload.email,
            amount: payload.amount,
            currency: payload.currency,
            receipt: payload.receipt
        })
        .then(res => {
            dispatch(sendingBillDataSuccess(res.data.id));
        })
        .catch((err) => dispatch(sendingBillDataFailure(err)));
};
