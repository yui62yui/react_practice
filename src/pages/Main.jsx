import React from "react";
import { Link, useNavigate } from "react-router-dom";
// 위 파일들은 import 필수
import { useSelector } from "react-redux";

export default function Main() {
    const navigate = useNavigate();
    const products = useSelector((state) => state.products)

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={()=>{
                alert("이동하실?")
                navigate("/products")
                // h2 태그 클릭시 alert을 보이게 한 뒤, /products로 이동하는 코드
            }}
          >🔥 여름 추천템 🔥</h2>
            <Link to="/Products">더보기</Link>
            {/* a 태그 대신 해서 Link 태그 삽입 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >

           {products.map((product)=>{
              return (
                <div key={product.id}
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              )
            })}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}