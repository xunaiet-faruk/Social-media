import axios from "axios";

export const axiosPublic =axios.create({
    baseURL: 'http://localhost:5000'
})

const useaxios = () =>{
    return axiosPublic;
}

export default useaxios;