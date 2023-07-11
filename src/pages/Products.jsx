import React from "react";
import { Link } from "react-router-dom";

export default function Products({products}) {
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
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