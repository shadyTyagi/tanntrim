import { useState, useEffect } from "react";
import Header from "./component/Header";
import Product from "./component/Product";
import "./App.css";

function App() {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://admin.tomedes.com/api/v1/get-reviews?page=1"
    );
    const data = await response.json();
    setProductData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Product />
    </div>
  );
}

export default App;
