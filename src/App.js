import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions'
import Functions from './Functions';
import Country from './Country';

function App() {

  // const [countries,setCountries]=useState([]);

  const dispach = useDispatch();


  // async function getCountries() {
  //  const countries= (await axios.get("https://restcountries.com/v3.1/all")).data;
  //  console.log(countries);
  //  setCountries(countries);
  // }

  // async function getForecast() {
  //   return await axios.get(``)
  // }
  const countries = useSelector(state => state.countriesList)
  useEffect(() => {
    get();
    async function get() {
      await axios.get("https://restcountries.com/v3.1/all").then(
        data => {
          dispach(actions.setCountries(data?.data))
          console.log("data:", data?.data)
        }
      ).catch(
        err => console.log(err)
      )
    }

  }, []);

  return (
    <>
   <Functions/>
   <Country/>
   </>
  );
}

export default App;
