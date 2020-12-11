import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToFeedPage, goToAddAdressPage } from "../router/Coordinator";

export const signup = (body, history) => {
  axios
    .post(`${baseUrl}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToAddAdressPage(history);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
