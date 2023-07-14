import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../index";

export default function Product() {

  const [selected, setSelected] = useState("");
  const { id } = useParams();
  const products = useSelector((state) => state.products)
  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch();

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
            .filter((product)=>product.id === Number(id))
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
                  <button onClick={()=>{
                    dispatch(addToCart(product))
                  }}>장바구니에 담기</button>
                </div>
              )
          })
          }
        </div>
        <h2>장바구니</h2>
        <div>
          {cart.map((product)=>{
            return (
              <div style={{border: "1px solid black",}}>
                <h3>{product.name}</h3>
                <h3>가격: {product.price}원</h3>
                <h3>좋아요: {product.likes}개</h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}