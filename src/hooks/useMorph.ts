import { animate, MotionValue, useMotionValue } from 'framer-motion';
import { interpolate } from 'flubber';
import { useEffect } from 'react';

export const useMorph = (
  d: string,
  config: Parameters<typeof animate>[2] = {}
): MotionValue<string> => {
  const value = useMotionValue<string>(d);

  useEffect(() => {
    const interpolator = interpolate(value.get(), d);

    animate(0, 1, {
      ...config,
      onUpdate: progress => value.set(interpolator(progress)),
    });
  }, [config, d, value]);

  return value;
};
