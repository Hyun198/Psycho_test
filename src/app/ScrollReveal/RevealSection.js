'use client';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function RevealSection({ children, animationOptions, className }) {
    useEffect(() => {
        if (typeof window !== "undefined") {  // 클라이언트 사이드에서만 실행
            ScrollReveal().reveal(`.${className}`, {
                ...animationOptions,
            });
        }
    }, [animationOptions, className]);

    return <div className={className}>{children}</div>;
}