export interface TimeSlotProps {
    time: string;
    isSelected?: boolean;
  }
  
  export interface SessionTypeProps {
    type: string;
    duration: string;
    isSelected?: boolean;
    icon?: React.ReactNode;
  }
  
  export interface DateSlotProps {
    date: string;
    slots: number;
    status: 'available' | 'limited' | 'warning';
  }