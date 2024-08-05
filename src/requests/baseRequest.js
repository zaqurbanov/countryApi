import { config } from "../config.js";


export default class ApiRequiest {
    async get(endpoint){
        return await fetch(`${config.baseUrl}${endpoint}`)
    }
}