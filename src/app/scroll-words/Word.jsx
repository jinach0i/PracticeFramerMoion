import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const el = useRef(null);
  const { scrollYProgress } = useScroll({
    target: el,
    // intersection 발발전에 화면 아래서부터 10% 정도의 padding을 준 것과 같은 효과를 내는 offset x,화면 위에서부터 25% 정도의 지점에서 완전히 진해지게:
    offset: ["start 0.9", "start 0.25"],
  });
  // 문장을 글자로 쪼개서 words라는 변수에 담아:
  const words = value.split(" ");
  return (
    // scrollYProgress를 알아서 숫자로 인식하게 하기 위한 tag:
    <p ref={el} className={styles.paragraph}>
      {words.map((word, i) => {
        // scrollYProgress를 수치화하는 계산:
        const start = i / words.length;
        const end = start + 1 / words.length;
        console.log([start, end]);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
const Word = ({ children, range, progress }) => {
  // scroll의 progress에 따라 하나 하나 단어에 ani가 되야함->이거 gsap이 잘 하지만 framer motion은 수학을 좀 해야ㅎㅎ=
  //ie)0.04~0.08인거, ,opacity는 0~1이어야 함:
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
        <span className={styles.shadow}></span>
      <motion.span className={styles.word} style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
