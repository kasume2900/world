import axios from "axios";
import { ALL_COUNTRY } from "./config";


const getCountrys = () => {
  axios.get(ALL_COUNTRY).then(res => console.log(res.data))
}