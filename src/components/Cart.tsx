import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
const Cart = () => {
  const items = useSelector(getItemsSelector);

  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="flex justify-center bg-green-200 py-3 text-xl mb-3">
      <div>
        Total Items {items.length} : {total}
      </div>
    </div>
  );
};

export default Cart;
