import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link to="/" style={{color: "#fff", textDecoration:"none"}}>로고</Link>
        {/* 로고 누르면 홈으로 이동 */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
           <Link to="/login" style={{color: "#fff", textDecoration:"none"}}>로그인</Link>
           <Link to="/signup" style={{color: "#fff", textDecoration:"none"}}>회원가입</Link>
        </div>
      </header>

      <Outlet />

      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          // 아래 css 추가
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}