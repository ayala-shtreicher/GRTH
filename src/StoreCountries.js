import { produce } from 'immer';
import { createStore } from 'redux'
import * as actions from './actions'

const initialState = {
    countriesList: [],
    currenCountry: ""
}

export const countryReducer = produce((state, action) => {
    switch (action.type) {
        case actions.setCountry:
            const newState = [{ ...state }, action.payload]
            return newState;
        case actions.setCountries: {
            const newState = [{ ...state }, action.payload]
            return newState;
        }
    }
}, initialState)

export const store = createStore(countryReducer);