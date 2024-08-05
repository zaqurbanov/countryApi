import { getCountryDataByName } from "../requests/countryByName.js"
import { NAME_ENDPOINT } from "../urlHelper.js"
const container1 = document.querySelector('.container1');


const onload1 = async()=>{
    let urlParams = new URLSearchParams(window.location.search);
    const name=urlParams.get('name');
    console.log(window.location);
    const data = await getCountryDataByName(`${NAME_ENDPOINT}/${name}`)
    console.log(data[0]);
    createCountryByName(data[0])
    
}

const createCountryByName = (data)=>{

    container1.innerHTML = `
             <img src="${data.coatOfArms.png}" width="400" height="500" alt="">

            <ul>
                <li> population ${data.population}</li>
                <li>Region ${data.region}</li>
                <li></li>
            </ul>
    
    `


}



document.addEventListener('DOMContentLoaded',onload1)
