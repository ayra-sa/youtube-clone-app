import axios from "axios";

const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c98b26d66amsh21729a1837b2cb1p1950a2jsn627c742faec3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${baseUrl}/${url}`, options)

    return data
}