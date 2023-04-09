import {useState, useEffect} from "react";

export const useElementSize = () => {
  const [ref, setRef] = useState(null);
  const [elementSize, setElementSize] = useState({width: 0, height: 0});

  useEffect(() => {
    if (!ref) {
      return;
    }
    
    const onResize = () => {
      const elementRect = ref.getBoundingClientRect();
      setElementSize({width: elementRect.width, height: elementRect.height});
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  useEffect(() => {
    if (!ref) {
      return;
    }
    const elementRect = ref.getBoundingClientRect();
    setElementSize({width: elementRect.width, height: elementRect.height});
  }, [ref]);

  return [setRef, elementSize];
};
