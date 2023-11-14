import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, isLoading ,isError] = customReactQuery('/api/products')

  if(isError) {
    return <h1>Something went wrong</h1>
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Excellent api handling in React JS</h1>
      <h2>No. of Products are : {products.length}</h2>
    </>
  );
}

export default App;


// custom hook

const customReactQuery = (apiPath) => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        setIsError(false)
        const response = await axios.get(apiPath);
        console.log(response);
        setProducts(response?.data);
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        setIsLoading(false)
      }
    })();
  }, []);
  return [products, isLoading ,isError]
}