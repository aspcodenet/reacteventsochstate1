import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from './data/ProductData' 
import {useState,useEffect} from 'react'



export const SingleProduct = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({})
  useEffect(() =>{
    const fetchData = async()=>{
      const result = await fetchSingleProduct(id)
      setProduct(result)
    }
    fetchData()
  }, []) // [] = en gång när asidan laddas



  return (
    <>
    <h1>{product.title}</h1>
    <div className="productgallery_card">
        <div className="productgallery_card_container">
            <img src={product.image} alt="cookies" className="hero-image"/>
            <div className="information">

                <div className="store">{product.category}</div>

                <a href="#" className="storebutton">Purchase Product</a>

            </div>
        </div>
    </div>
    </>
  )
}