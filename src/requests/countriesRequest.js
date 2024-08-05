
import ApiRequiest from "./baseRequest.js";
import { ALL_ENDPOINT } from "../urlHelper.js";

const _service = new ApiRequiest();

export const getCountriesData = async ()=>{
    const response = await _service.get(ALL_ENDPOINT);
    return await response.json()
}