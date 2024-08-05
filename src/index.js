import createCountry from "./creators/createCountries.js";
import { getCountriesData } from "./requests/countriesRequest.js"

const onload = async ()=>{
 const AllCountriesData = await getCountriesData();

createCountry(AllCountriesData)


}


document.addEventListener('DOMContentLoaded',onload)