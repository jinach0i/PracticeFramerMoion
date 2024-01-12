import Link from "next/link";
import { SiHomeadvisor } from "react-icons/si";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">최혜진의 연습 보관소</a>
      </div>
      <div className="navbar-end">
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
          >
             <li>
                <Link href="/scroll-chcr">문자 단위로 opacity나타나기</Link>
              </li>
              <hr />
              <li>
                <Link href="/scroll-txt">문장 단위로 opacity나타나기</Link>
              </li>
              <hr />
              <li>
                <Link href="/scroll-words">단어 단위로 opacity나타나기</Link>
              </li>
              <hr />
              <li>
                <Link href="/scroll-chcr">문자 단위로 opacity나타나기</Link>
              </li>
              <hr />
              <li>
                <Link href="/scroll-chcr">문자 단위로 opacity나타나기</Link>
              </li>
              
          </ul>
        </div>
      </div>
    </div>
  );
}
