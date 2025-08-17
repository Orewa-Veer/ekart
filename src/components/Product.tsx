import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
interface Props {
  products: { id: number; productName: string; image: string; price: number }[];
}

const Product = ({ products }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-5 gap-3 p-3">
      {products.map((p) => (
        <div key={p.id} className="max-w-60 border rounded-lg overflow-hidden">
          <img src={p.image} alt={p.productName} className="w-full bg-cover" />
          <div className=" mx-2">
            <h2 className="  mt-2 text-lg font-semibold">{p.productName}</h2>
            <p className="my-1">Rs:{p.price}/-</p>
            <button
              onClick={(e) => dispatch(addItem(p))}
              className=" my-1  bg-blue-500 text-white rounded px-3 py-0.5"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
