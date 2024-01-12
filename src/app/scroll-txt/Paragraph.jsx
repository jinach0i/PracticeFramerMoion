import React, { useEffect, useRef } from 'react';
import styles from './page.module.scss';
import { motion, useScroll } from 'framer-motion';

export default function Paragraph({value}) {
    const el=useRef(null);
    const {scrollYProgress}=useScroll({
        target:el,
        // intersection 발발전에 화면 아래서부터 10% 정도의 padding을 준 것과 같은 효과를 내는 offset x,화면 위에서부터 25% 정도의 지점에서 완전히 진해지게:
        offset:['start 0.9','start 0.25']
    })
    useEffect(() => {
        scrollYProgress.on('change',e=>console.log(e))
    }, []);
    return(
        // scrollYProgress를 알아서 숫자로 인식하게 하기 위한 tag:
        <motion.p
            ref={el}
            className={styles.paragraph}
            // opacity=scrollYProgress:
            style={{opacity:scrollYProgress}}
        >
            {value}
        </motion.p>
    )
};
