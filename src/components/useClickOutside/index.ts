import { RefObject, useEffect } from 'react';

interface UseClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: (e?: Event) => void;
}

export const useClickOutside = ({ ref, handler }: UseClickOutsideProps) => {
  const listener = (e: Event) => {
    if (!ref.current || ref.current.contains(e.target as Node)) return;

    handler(e);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('selectstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('selectstart', listener);
    };
  }, [ref, handler]);
};
