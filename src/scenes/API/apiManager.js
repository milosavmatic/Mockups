import axios from 'axios'


const baseUrl = `https://api.kadporastembicu.dev/`
const product = 'v1/products'
const templates = 'v1/templates'


 const fetchProduct = callBack => {
    axios
    .get(baseUrl + product)
    .then(function(response) {
        console.log(response.data)
        callBack(response.data)
    })
}

const fetchTemplates = callBack => {
    axios
    .get(baseUrl + templates)
    .then(function(response) {
        console.log(response.data)
        callBack(response.data)
    })
}


 export { fetchProduct, fetchTemplates}