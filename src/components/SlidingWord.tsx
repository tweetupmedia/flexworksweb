import React, { useState, useEffect } from 'react';

interface SlidingWordProps {
  words: string[];
  intervalMs?: number;
  highlightClassName?: string;
  className?: string;
  prefix?: string;
}

export const SlidingWord: React.FC<SlidingWordProps> = ({
  words,
  intervalMs = 2400,
  highlightClassName = 'text-[#5450EB] dark:text-indigo-400 font-semibold',
  className = '',
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!words || words.length <= 1) return;

    const timer = setInterval(() => {
      setCurrIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % words.length;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [words, intervalMs]);

  useEffect(() => {
    if (prevIndex !== null) {
      const resetTimeout = setTimeout(() => {
        setPrevIndex(null);
      }, 550);
      return () => clearTimeout(resetTimeout);
    }
  }, [prevIndex, currIndex]);

  return (
    <span
      className={`inline-block relative overflow-hidden align-baseline transition-[width] duration-300 ease-out ${className}`}
    >
      {/* Invisible placeholder sized dynamically as per the active word with identical typography and right padding */}
      <span
        className={`invisible select-none opacity-0 pointer-events-none whitespace-nowrap inline-block pr-3.5 ${highlightClassName}`}
        aria-hidden="true"
      >
        {words[currIndex]}
      </span>

      {/* Exiting word (slides down and out) */}
      {prevIndex !== null && (
        <span
          key={`prev-${prevIndex}-${currIndex}`}
          className={`absolute inset-0 flex items-center justify-start whitespace-nowrap pr-3.5 ${highlightClassName} animate-slide-down-out select-none`}
        >
          {words[prevIndex]}
        </span>
      )}

      {/* Entering or active word (slides down into place) */}
      <span
        key={`curr-${currIndex}`}
        className={`absolute inset-0 flex items-center justify-start whitespace-nowrap pr-3.5 ${highlightClassName} ${
          prevIndex !== null ? 'animate-slide-down-in' : ''
        } select-none`}
      >
        {words[currIndex]}
      </span>
    </span>
  );
};
