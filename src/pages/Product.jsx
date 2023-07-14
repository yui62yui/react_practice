import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAmount, addToCart, deleteFromCart, minusAmount } from "../index";

export default function Product() {

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);
  
  const { id } = useParams();
  const products = useSelector((state) => state.products)
  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch();

  const addNumber = () => {
    if (selectedAmount !== 0 ) {
      return setSelectedAmount(selectedAmount + 1)
    } else {
      return alert("구매옵션을 먼저 선택하세요!")
    }
 }
  const minusNumber = () => {
    if (selectedAmount <= 1) {
      return alert("구매 개수는 1보다 작을 수 없습니다!")
    } else {
      return setSelectedAmount(selectedAmount - 1)
    }
  }

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
            .map((product, index)=>{
              return (
                <div key={product.id}>
                  <h3>가격: {product.price}</h3>
                  <h3>좋아요: {product.likes}</h3>
                  <h3>구매옵션</h3>
                  <select
                    value={selectedOption}
                    style={{
                      width: "100px"
                    }}
                    onChange={(e)=>{
                      alert("옵션이 변경되었습니다!")
                      setSelectedAmount(1)
                      // 다른 옵션을 눌렀을 때 개수1로 초기화 시키기 위해 직접 1을 값으로 넣음
                      setSelectedOption(e.target.value);
                      console.log(product.price)
                    }}
                  >
                    <option key={index} value={""}>선택하세요</option>
                    {product.option.map((option, index)=>(
                        <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <p>구매옵션: {selectedOption}</p>
                  <p>개수: {selectedAmount}
                    <button onClick={()=>{addNumber()}}>+</button>
                    <button onClick={()=>{minusNumber()}}>-</button>
                  </p>
                  <p>총 금액: </p>
                  <button onClick={()=>{
                    if (selectedAmount > 0 ) {
                      return dispatch(addToCart({...product, amount: selectedAmount, amountPrice: selectedAmount * product.price}))
                    } else {
                      return alert("구매 옵션을 먼저 선택하세요!")
                    }
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
              <div style={{border: "1px solid black",}} key={product.id}>
                <h3>{product.name}</h3>
                <h4>옵션: {selectedOption}</h4>
                <h3>가격: {product.price}원</h3>
                <h3>좋아요: {product.likes}개</h3>
                <h3>개수:
                <button onClick={() => {dispatch(minusAmount(product))}}>-</button>
                  <span>{product.amount}</span>
                <button onClick={()=>{dispatch(addAmount(product))}}>+</button>
                </h3>
                <h3>총 금액: {product.amountPrice}원</h3>
                <button onClick={()=>dispatch(deleteFromCart(product))
                  }>장바구니에서 제거하기</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}