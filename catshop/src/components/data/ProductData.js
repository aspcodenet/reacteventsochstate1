const url = 'https://fakestoreapi.com/products';
import axios from 'axios'

export const fetchProducts = async () => {
    let json = await axios.get(url)
    return json.data
}