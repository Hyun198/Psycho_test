"use client"; // 클라이언트 컴포넌트로 지정
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function RevealSection({ children, className, animationOptions }) {
    useEffect(() => {
        const scrollRevealInstance = ScrollReveal();
        scrollRevealInstance.reveal(`.${className}`, animationOptions);

        return () => {
            scrollRevealInstance.destroy();
        };
    }, [className, animationOptions]);

    return <div className={className}>{children}</div>;
}