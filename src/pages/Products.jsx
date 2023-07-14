import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, sortByPrice } from "../index";

export default function Products() {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button onClick={()=>{
          dispatch(sortByPrice())
        }}>
          가격순으로 정렬해랏</button>
          <button onClick={()=>{
          dispatch(reset())
        }}>정렬 리셋</button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
        {products.map((product)=>{
          return(
            <Link to={`/products/${product.id}`} key={product.id}>
            {/* 각각의 product로 이동 */}
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          )
        })}
        </div>
      </div>
    </>
  );
}