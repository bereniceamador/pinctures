import axios from 'axios'

const  searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=hiYGcNzMaVX3ccMD4tuUV1BzMLso6ku9Q8IbDW93a68'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response)

    return response.data.results
}

export default searchImage
