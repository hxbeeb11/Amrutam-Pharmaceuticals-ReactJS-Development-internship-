import * as React from 'react';
import { SessionType } from './SessionType';
import { DateSlot } from './DateSlot';
import { TimeSlot } from './TimeSlot';
import Image from 'next/image';

export const AppointmentScheduler: React.FC = () => {
  const morningSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM",
    "10:15 AM", "10:45 AM", "11:00 AM"
  ];

  const eveningSlots = [
    "04:00 PM", "04:15 PM", "04:30 PM",
    "04:45 PM", "05:15 PM"
  ];

  const dateSlots = [
    { date: "Mon, 10 Oct", slots: 10, status: 'available' },
    { date: "Tue, 11 Oct", slots: 2, status: 'limited' },
    { date: "Wed, 12 Oct", slots: 5, status: 'warning' }
  ] as const;

  return (
    <div className="flex overflow-hidden flex-col px-5 pt-36 pb-11 bg-white border border-gray-200 border-solid max-w-[584px] rounded-[29px] max-md:pt-24 max-md:pr-5">
      <div className="flex flex-wrap gap-5 self-start ml-3.5 text-xl font-bold tracking-wide text-center text-black max-md:max-w-full">
        <div className="flex-auto">Select your mode of session</div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc87837cf878b85fcf509fbba5ecd7b58df9db8fbf133c06ff50a7d16cb72009?placeholderIfAbsent=true&apiKey=9f8d3eddea6843c08da1ff2798f188da"
          alt=""
          className="object-contain my-auto w-full aspect-[250]"
        />
      </div>
      
      <div className="flex flex-wrap gap-6 items-start mt-11 max-md:mt-10 max-md:max-w-full">
        <SessionType type="In-Clinic" duration="45 Mins" />
        <SessionType 
          type="Video" 
          duration="45 Mins" 
          isSelected 
          icon={<div className="flex w-5 h-5 bg-green-800 rounded-full min-h-[20px]" />}
        />
        <SessionType type="Chat" duration="10 Mins" />
      </div>

      <div className="flex flex-wrap gap-7 self-end mt-10 max-md:mr-0.5">
        <div className="grow my-auto text-xl font-bold tracking-wide text-center text-black">
          Pick a <span className="lowercase">Time slot</span>
        </div>
        <div className="flex flex-auto gap-2.5">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b6afed8fcc6472f6427b6476ac0f2da3386614974abc18db36106bb9e415ba?placeholderIfAbsent=true&apiKey=9f8d3eddea6843c08da1ff2798f188da"
            alt=""
            className="object-contain grow shrink-0 my-auto aspect-[333.33] basis-0 w-fit"
          />
          <div className="flex flex-col">
            <div className="flex w-11 h-11 bg-white rounded-full border border-solid border-zinc-500 min-h-[43px]" />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col justify-center px-8 py-6 mt-5 ml-2.5 w-full text-base text-center bg-white rounded-3xl border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 items-center max-md:max-w-full">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9478eec83d4221f4d91d5b78d782796962e113474a70733951b64a7201d374a9?placeholderIfAbsent=true&apiKey=9f8d3eddea6843c08da1ff2798f188da"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <div className="flex gap-2.5 self-stretch my-auto rounded-xl min-w-[240px] w-[389px]">
            {dateSlots.map((slot, index) => (
              <DateSlot key={index} {...slot} />
            ))}
          </div>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63cb9cca0ca44336285c8d4571141a4f07c85774f7945ee84906a66ddf1ba30?placeholderIfAbsent=true&apiKey=9f8d3eddea6843c08da1ff2798f188da"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </div>

      <div className="flex flex-col self-center mt-9 w-full tracking-wide text-center max-w-[508px] max-md:max-w-full">
        <div className="self-start text-lg font-bold text-black">Morning</div>
        <div className="flex flex-wrap gap-3.5 items-start mt-3.5 w-full text-base text-neutral-900 max-md:max-w-full">
          {morningSlots.map((time, index) => (
            <TimeSlot key={index} time={time} isSelected={time === "11:00 AM"} />
          ))}
        </div>
      </div>

      <div className="flex flex-col self-center mt-8 w-full tracking-wide text-center max-w-[508px] max-md:max-w-full">
        <div className="self-start text-lg font-bold text-black">Evening</div>
        <div className="flex flex-wrap gap-3.5 items-start mt-4 w-full text-base text-neutral-900 max-md:max-w-full">
          {eveningSlots.map((time, index) => (
            <TimeSlot key={index} time={time} />
          ))}
        </div>
      </div>

      <button className="overflow-hidden gap-2.5 self-center py-5 pr-32 pl-32 mt-10 w-full text-xl font-medium text-white bg-green-800 rounded-lg max-w-[476px] min-h-[60px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Make an appointment
      </button>
    </div>
  );
};