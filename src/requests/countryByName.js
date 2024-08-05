import ApiRequiest from "./baseRequest.js";


const _service = new ApiRequiest();



export const getCountryDataByName = async (endpoint)=>{

    const response = await _service.get(endpoint)
    return await response.json();


}
