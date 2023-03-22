import { useEffect, useState } from 'react';

export default function useTouchDetect(): { isTouch: boolean } {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  return { isTouch };
}
