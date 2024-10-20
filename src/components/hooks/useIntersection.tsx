import { useEffect, useState, useRef } from "react";

interface IntersectionOptions {
  threshold: number;
  root?: Element | null;
  rootMargin?: string;
}
function useIntersection(
  options: IntersectionOptions
): [boolean, Ref<Element>] {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const elemento = myRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    if (elemento) {
      observer.observe(elemento);
    }
    return () => {
      if (elemento) {
        observer.unobserve(elemento);
      }
    };
  }, [options]);
  return [isVisible, myRef];
}

export default useIntersection;
