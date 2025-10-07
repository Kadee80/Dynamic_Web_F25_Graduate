// base URL : https://api.unsplash.com/
// endpoint/route : /search/photos

import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID H_gGPsCXWmrK_GvUdMvpBGXWic8_8dBm1-axJTCfK5s',
    },
    params: {
      // make the search term a parameter
      query: term,
    },
  })

  // console.log(response.data.results)
  return response.data.results
}

export default searchImages
