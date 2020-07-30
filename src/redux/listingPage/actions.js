import {
    SELECTED_FILTERS,
    ADD_ALL_HOTELS,
    GET_HOTELS_REQUEST,
    GET_HOTELS_SUCCESS,
    GET_HOTELS_FAILURE,
    GOT_HOTEL_ENTITY
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
  
export const getHotelEntityPage = id => (dispatch) => {
    console.log('called id' + id)
return axios
    .get("https://873e14df80f1.ngrok.io/getproperty/" + id)
    .then(res => {
        console.log(res)
        return res.data.property
    })
    .then(res => dispatch(currentHotelEntityPage(res)))
    .catch((err) => console.log(err))
};
  