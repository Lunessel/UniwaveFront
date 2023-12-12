import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const specialityService = {
    getSpecialitiesData:(name_of_spec) =>  axiosService.get(`${urls.branches}?name_of_spec=${name_of_spec}`)
        .then(value => value.data)
}