"use client"
import Paragraph from './Paragraph'
const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
export default function ScrollTxtMain() {
    return(
        <div>
            scroll을 사용하면 글의 투명도가 바뀝니다
            <div style={{height:"100dvh"}}></div>
            <Paragraph value={paragraph}/>
            <div style={{height:"100dvh"}}></div>
            
        </div>
    )
};
