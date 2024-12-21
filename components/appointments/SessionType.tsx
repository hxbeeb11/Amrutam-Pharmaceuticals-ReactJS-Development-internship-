import * as React from 'react';
import { SessionTypeProps } from './types';

export const SessionType: React.FC<SessionTypeProps> = ({ type, duration, isSelected, icon }) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className={`flex flex-col px-8 py-4 rounded-xl border border-solid ${
        isSelected
          ? 'bg-green-50 border-green-800 border-opacity-50'
          : 'bg-white border-neutral-200'
      } w-[172px] max-md:px-5`}
      aria-pressed={isSelected}
    >
      <div className="flex gap-2 items-center self-start">
        <div className={`text-lg tracking-wide text-center font-[350] ${
          isSelected ? 'text-green-800' : 'text-stone-900'
        }`}>
          {type}
        </div>
        {icon && icon}
      </div>
      <div className="mt-1 text-base tracking-wide text-center text-zinc-600">
        {duration}
      </div>
    </div>
  );
};