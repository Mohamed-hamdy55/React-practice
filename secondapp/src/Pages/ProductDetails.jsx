import { useEffect, useState } from "react";
import {
  useParams,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "./ProductCard";
import axiosInstance from "../axiosConfig/axioxConfig";
import { useSelector } from "react-redux";
import Spinner from "../Redux/spinner";

export default function ProductDetails(props) {

  const urlParams = useParams();
  const matchObject = useRouteMatch();
  // console.log(matchObject);
  const retrieveParams = ()=>{
    return(
      <div>
      <h1 style={{ fontSize: 50 }}>productDetails</h1>
      
      <h4>for product with id: {props.match.params.id} </h4>{" "}
      {/* not used in v6+ for router*/}

      <h4>for product with id: {urlParams.id} , using usePrams()</h4>{" "}
      {/* same like 'props.match.params.id' */}
    </div>
    );
  }

  const [productDetails,setProductDetails] = useState({});
  const isLoading = useSelector((state)=>state.loading.isLoading)

  // in each call i call all the url but i can use axios for base url
  useEffect(()=>{
    axiosInstance.get(`/products/${urlParams.id}`)
          .then((response) => setProductDetails(response.data))
  },[urlParams.id])

  if (!isLoading  && productDetails.title) {
    return (
      <ProductCard
      id={productDetails.id}
      title={productDetails.title}
      images={productDetails.images}
      description={productDetails.description}
      brand={productDetails.brand}
      price={productDetails.price}
      category={productDetails.category}
      />
    );
  }else{
    return <Spinner/>
  }
  
}
