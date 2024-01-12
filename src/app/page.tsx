"use client"
import React from "react";

export default function Home() {
  return (
    <div id="wrap" className="h-screen" data-theme="cupcake">
      <div
        className="hero h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">환영합니다</h1>
            <p className="mb-5">
             Framer Motion을 연습한 것을 기록 보관해둔 저장소입니다.
            </p>
            <button className="btn btn-primary">목록</button>
          </div>
        </div>
      </div>
    </div>
  );
}
