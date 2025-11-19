import { useEffect, useRef, useState } from 'react';

export default function useScrollFadeIn(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
        triggerOnce = false,
    } = options;

    useEffect(() => {
        const element = elementRef.current;
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
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [elementRef, isVisible];
}

