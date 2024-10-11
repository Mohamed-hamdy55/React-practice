import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axiosInstance from "../axiosConfig/axioxConfig";
import { useSelector } from "react-redux";
import Spinner from "../Redux/spinner";

export default function Products() {
  const [products, setProducts] = useState([]);

  const isLoading = useSelector((state)=>state.loading.isLoading)

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((response) => response.data)
      .then((data) => setProducts(data.products));
  }, []);
  if(!isLoading){
    return (
        <div className=" p-3 container-fluid d-flex flex-wrap gap-3 justify-content-center" >
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  images={product.images}
                  description={product.description}
                  brand={product.brand}
                  price={product.price}
                  category={product.category}
                />
              </div>
            );
          })}
        </div>
    );
  }else{
    return <Spinner/>
  }
}
