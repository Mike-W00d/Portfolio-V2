import { RefObject, useCallback, useEffect, useState } from 'react';

export default function useScroll(
  threshold: number,
  containerRef?: RefObject<HTMLElement | null>,
) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    const scrollY = containerRef?.current
      ? containerRef.current.scrollTop
      : window.scrollY;
    setScrolled(scrollY > threshold);
  }, [threshold, containerRef]);

  useEffect(() => {
    const target = containerRef?.current ?? window;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, [onScroll, containerRef]);

  // also check on first load
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}