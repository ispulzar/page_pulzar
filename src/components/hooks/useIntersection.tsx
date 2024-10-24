import { useEffect, useState, useRef, RefObject } from "react";

interface IntersectionOptions {
  threshold: number;
  root?: Element | null;
  rootMargin?: string;
}

function useIntersection(
  options: IntersectionOptions
): [boolean, RefObject<HTMLDivElement>] {
  // Cambiar Element a HTMLDivElement
  const myRef = useRef<HTMLDivElement | null>(null); // Especificar el tipo correcto
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
