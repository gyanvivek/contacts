import { useRef, useState, useEffect, MutableRefObject } from 'react';

export default function useHover<T extends HTMLElement = HTMLElement>(): [
  MutableRefObject<T>?,
  boolean?,
] {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<T>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current],
  );
  return [ref as MutableRefObject<T>, !!value];
}
