import * as React from 'react';
import { TimeSlotProps } from './types';

export const TimeSlot: React.FC<TimeSlotProps> = ({ time, isSelected }) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className={`overflow-hidden grow shrink gap-2 self-stretch px-3.5 py-6 rounded-3xl border border-gray-200 border-solid min-h-[67px] w-[88px] ${
        isSelected ? 'text-sm text-white bg-green-800' : 'bg-white text-base text-neutral-900'
      }`}
      aria-pressed={isSelected}
    >
      {time}
    </div>
  );
};