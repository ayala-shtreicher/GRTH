import React from "react";
import { useSelector } from "react-redux";
import * as actions from './actions'

export default function Country() {
    const countries = useSelector(state => actions.setCountries(state.countriesList))


    return (
        <ul>
            {countries.payload.countries.map(c =>
                <li>{c.name.common}</li>
            )}
        </ul>
    )
}