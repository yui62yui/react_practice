import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {

  const [ products, setProducts ] = useState([
    {
      id: 1,
      name: "멋진 바지",
      price: 20000,
      option: [28, 30, 32],
      likes: 100,
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: 10000,
      option: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: 3,
      name: "멋진 신발",
      price: 30000,
      option: [230, 240, 250, 260, 270],
      likes: 300,
    }
  ]);

  const [selected, setSelected] = useState("");

  const { id } = useParams();

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품 {id}
            {/* 파라미터(/뒤의 숫자)에 따라 상품 id가 변경된다. */}
          </div>
          
          {products
            .filter((product)=>product.id == id)
            .map((product)=>{
              return (
                <div key={product.id}>
                  <h3>가격: {product.price}</h3>
                  <h3>좋아요: {product.likes}</h3>
                  <h3>구매옵션</h3>
                  <select
                    value={selected}
                    style={{
                      width: "100px"
                    }}
                    onChange={(e)=>{
                      setSelected(e.target.value)
                    }}
                  >
                    {product.option.map((option, index)=>(
                        <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <p>구매옵션: {selected}</p>
                </div>
              )
          })
          }

        </div>
      </div>
    </>
  );
}