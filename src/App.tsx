import "./App.css";
import Product from "./components/Product";
import products from "./products.json";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Cart />
      <Product products={products} />
    </>
  );
}

export default App;
