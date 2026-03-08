'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
    startVisible?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollAnimationOptions = {}
) {
    const { threshold = 0.01, rootMargin = '0px 0px -50px 0px', triggerOnce = true, startVisible = false } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(startVisible);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

export function useCountUp(
    end: number,
    duration: number = 2000,
    start: number = 0
) {
    const [count, setCount] = useState(start);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(start + (end - start) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return { count, startAnimation };
}
