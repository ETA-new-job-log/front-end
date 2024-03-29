'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentProps } from 'react';
import { DateFormatter, DayPicker } from 'react-day-picker';

function Calendar({
  className,
  classNames,
  ...props
}: ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      fixedWeeks
      showOutsideDays
      locale={ko}
      formatters={{ formatCaption }}
      className={cn('w-full', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'w-full flex justify-between items-center pl-1.5',
        caption_label: 'text-1 font-bold web:font-semibold',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 bg-transparent p-0 hover:opacity-100',
        ),
        nav_button_previous: 'mr-3',
        nav_button_next: 'ml-3',
        table: 'w-full',
        head_row: 'flex justify-between w-full',
        head_cell:
          'text-muted-foreground rounded-[9999px] w-7 web:w-9 font-normal text-0.85',
        row: 'flex justify-between w-full mt-1 web:mt-2',
        cell: 'rounded-[9999px] text-center text-1 web:text-0.85 p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-[999px] last:[&:has([aria-selected])]:rounded-[9999px] focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 web:p-3 font-medium aria-selected:opacity-100 rounded-[9999px]',
        ),
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-95',
        day_disabled: 'text-muted-foreground opacity-95',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: Calendar.LeftButton,
        IconRight: Calendar.RightButton,
      }}
      {...props}
    />
  );
}

const formatCaption: DateFormatter = (month, options) =>
  format(month, 'yyyy.MM', { locale: options?.locale });

const chevronStyle =
  'h-5 web:h-6 text-black-400 hover:text-black active:scale-110';

Calendar.LeftButton = () => <ChevronLeft className={`${chevronStyle}`} />;
Calendar.RightButton = () => <ChevronRight className={`${chevronStyle}`} />;

Calendar.displayName = 'Calendar';

export { Calendar };
