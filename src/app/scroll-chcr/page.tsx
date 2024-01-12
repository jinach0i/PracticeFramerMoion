"use client"
import Character from './Character';
const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
export default function ScrollWordsMain() {
    return(
        <div>
            scroll을 사용하면 문자들의 투명도가 점점 진해집니다.
            <div style={{height:"100dvh"}}></div>
            <Character value={paragraph} />
            <div style={{height:"100dvh"}}></div>
        </div>
    )
};
