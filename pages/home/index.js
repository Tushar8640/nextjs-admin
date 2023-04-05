import Product from "@/components/Home/Product";
import axios from "axios";
import React from "react";

// fetch product on server side
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(`https://dummyjson.com/products`);
//   console.log(res);
  const data = res?.data?.products;

  // Pass data to the page via props
  return { props: { data } };
}
const Home = ({data}) => {
    
//   const res = axios
//     .get(`https://fakestoreapi.com/products`)
//     .then((data) => console.log(data));
//   console.log(res);

  return <div><Product product={data}/></div>;
};

export default Home;
