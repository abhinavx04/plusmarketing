"use client";

import { useEffect, useState, RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const { once = false, threshold = 0, rootMargin = "0px" } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);

        if (once && isIntersecting && observer && element) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, once, threshold, rootMargin]);

  return inView;
}