import {
  useCallback,
  useEffect,
  useState,
  type RefObject,
} from 'react';

/**
 * Custom hook using the IntersectionObserver API to track which
 * passed-in element has the highest intersection with the `root`
 * element (defaults to the browser viewport).
 *
 * @param elemNameRefMap - Map from element names to refs
 * @param options - Options to pass into the IntersectionObserver
 *
 * @returns String name of the element with the highest intersection
 * with the `root`, or null if no elements intersect
 */
const useIntersectedElem = ({
  elemNameRefMap,
  options = {
    root: null, // browser viewport
    threshold: 0.3,
  },
}: {
  elemNameRefMap: Record<
    string,
    RefObject<HTMLElement | null>
  >;
  options?: IntersectionObserverInit;
}) => {
  const [maxIntersection, setMaxIntersection] =
    useState<IntersectionObserverEntry | null>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // there are probably better ways to determine the max
      // intersection, but so far I think `intersectionRect.height`
      // has been alright
      const max = entries
        .filter(entry => entry.isIntersecting)
        .sort(
          (a, b) =>
            b.intersectionRect.height
            - a.intersectionRect.height
        );

      if (max.length) {
        setMaxIntersection(max[0]);
      }
    },
    [setMaxIntersection]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      callback,
      options
    );

    const refs = Object.values(elemNameRefMap);

    // observe all given element refs
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elemNameRefMap, options]);

  return {
    name: maxIntersection?.target.id,
  };
};

export default useIntersectedElem;
