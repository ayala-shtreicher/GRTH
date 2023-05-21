const Set_Country = 'setCountry'
const Set_Countries = 'setCountries'

export const setCountry = (newCountry) => ({
    type: Set_Country,
    payload: newCountry
})
export const setCountries = (countries) => ({
    type: Set_Countries,
    payload: { countries }
})