import axios from "axios"
import { baseUrl } from "../constants/baseUrl"
import { goToFeed } from "../router/Coordinator"

export const signup = (body, history) => {

    axios
        .post(`${baseUrl}/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
        }).catch(error => {
            console.log(error.message)
        })
}
