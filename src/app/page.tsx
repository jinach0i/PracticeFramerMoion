"use client";
import Link from "next/link";
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
            <div className="drawer-content flex flex-col items-center justify-center">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button"
              >
                구경하기
              </label>
            </div>
          </div>
        </div>
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <a>Scroll+Txt</a>
                <ul>
                  <li>
                    <Link href="/scroll-chcr">문자 단위로 opacity나타나기</Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/scroll-txt">문장 단위로 opacity나타나기</Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/scroll-words">
                      단어 단위로 opacity나타나기
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
