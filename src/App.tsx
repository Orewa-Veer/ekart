import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  return (
    <>
      <Cart />
      <Product products={products} />
    </>
  );
}

export default App;
