import {useState, useEffect} from "react";

const getRectObject = domRect => {
  return ["width", "height", "x", "y"].reduce((v1, v2) => {
    v1[v2] = domRect[v2];
    return v1;
  }, {});
};

const nullRect = {width: 0, height: 0, x: 0, y: 0};

export const useElementSize = () => {
  const [ref, setRef] = useState(null);
  const [elementRect, setElementRect] = useState(nullRect);

  useEffect(() => {
    if (!ref) {
      return;
    }
    
    const onResize = () => {
      const clientRect = ref.getBoundingClientRect();
      setElementRect(getRectObject(clientRect));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  useEffect(() => {
    if (!ref) {
      setElementRect(nullRect);
      return;
    }
    const clientRect = ref.getBoundingClientRect();
    setElementRect(getRectObject(clientRect));
  }, [ref]);

  return [setRef, elementRect, ref];
};
