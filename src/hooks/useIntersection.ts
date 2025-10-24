import { useEffect } from 'react';

export const useIntersection = (
  ref: React.RefObject<HTMLElement>,
  selector: string,
  handler: (entry: IntersectionObserverEntry, idx: number) => void,
  options: IntersectionObserverInit
) => {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    if (ref.current && typeof IntersectionObserver === 'function') {
      const handleIntersect = (idx: number) => (entries: IntersectionObserverEntry[]) => {
        handler(entries[0], idx);
      };

      const elements = ref.current.querySelectorAll(selector);
      console.log('Found elements:', elements.length, selector);
      
      elements.forEach((node, idx) => {
        const observer = new IntersectionObserver(
          handleIntersect(idx),
          options
        );
        observer.observe(node);
        observers.push(observer);
      });

      return () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
      };
    }
    return () => {};
  }, [ref, selector, handler, options]);
};