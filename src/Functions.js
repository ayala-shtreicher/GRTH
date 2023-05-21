import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from './actions'

export default function Functions() {

    const [country, setCountry] = useState("");
    const dispach = useDispatch();
    const countries = useSelector(state => actions.setCountries(state.countriesList))

    function sortDesc() {
      dispach(actions.setCountries(countries.payload.countries.sort()))
      console.log(countries)
    }

    function sortAsc() {
        dispach(actions.setCountries(countries.payload.countries.sort()))
    }
    function filterCountry() {
        console.log(country)
        dispach(actions.setCountries(countries.payload.countries.filter(country)))
    }

    return (
        <>
            <input placeholder="filter" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={filterCountry}>OK</button>
            <button onClick={sortDesc}>Sort desc</button>
            <button onClick={sortAsc}>Sort asc</button>
        </>
    )
}