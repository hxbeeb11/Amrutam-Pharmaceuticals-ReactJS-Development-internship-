import * as React from 'react';
import { DateSlotProps } from './types';

export const DateSlot: React.FC<DateSlotProps> = ({ date, slots, status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-zinc-500';
      case 'limited':
        return 'text-red-500';
      case 'warning':
        return 'text-amber-400';
      default:
        return 'text-zinc-500';
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className={`flex flex-col justify-center items-center px-3 py-4 rounded-xl border border-solid min-h-[80px] ${
        status === 'available'
          ? 'bg-green-50 border-green-800'
          : 'bg-white border-neutral-200'
      }`}
    >
      <div className={status === 'available' ? 'font-semibold tracking-wide text-green-800' : 'tracking-wide text-neutral-900'}>
        {date}
      </div>
      <div className={`mt-2 font-bold ${getStatusColor(status)}`}>
        {slots} slots
      </div>
    </div>
  );
};