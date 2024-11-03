'use client';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function RevealSection({ children, animationOptions, className }) {
    useEffect(() => {
        ScrollReveal().reveal(`.${className}`, {
            ...animationOptions,
        });
    }, [animationOptions, className]);

    return <div className={className}>{children}</div>;
}