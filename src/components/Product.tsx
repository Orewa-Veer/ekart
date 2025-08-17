import React from "react";
interface Props {
  products: { id: number; productName: string; image: string; price: number }[];
}

const Product = ({ products }: Props) => {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id} className="max-w-20 max-h-40">
          <img src={p.image} alt={p.productName} />
          <h2>{p.productName}</h2>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
