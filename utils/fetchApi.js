import axios from "axios";

export const baseUrl ="https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b994f13f28msh9872a8954a79016p1d52c1jsn4419586c7b12'
          }

    });

    return data;
}