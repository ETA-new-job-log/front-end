import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useFocus from '@/hook/useFocus';
import useMediaQuery from '@/hook/useMediaQuery';
import useScrollPointer from '@/hook/useScrollPointer';
import useToggle from '@/hook/useToggle';
import { formatDateForCalendar } from '@/service/date';
import { format } from 'date-fns';
import { X } from 'lucide-react';
import { useNavigation } from 'react-day-picker';
import DateInput from './DateInput';
import TimePicker from './TimePicker';

interface PickerProps {
  time: string;
  date: string;
  selectedDate?: Date;
  onDate: (date?: Date) => void;
  onTime: (time: string) => void;
}

interface DateTimePickerProps {
  date?: string;
  onChange: (date: string) => void;
}

const DESKTOP_MEDIAQUERY = '(min-width: 500px)';

const DateTimePicker = ({ date: inputDate, onChange }: DateTimePickerProps) => {
  const isDesktop = useMediaQuery(DESKTOP_MEDIAQUERY);

  const currentDate = inputDate
    ? inputDate
    : `${formatDateForCalendar()}T00:00:00.000Z`;
  const [date, time] = currentDate.split('T');
  const hours24 = time.slice(0, 5);
  const selectedDate = inputDate ? new Date(inputDate) : undefined;

  const handleCalendarSelect = (value?: Date) => {
    if (!value) return;
    const date = formatDateForCalendar(value);
    if (!date) return;
    const fullDate = `${date}T${hours24}:00.000Z`;
    onChange(fullDate);
  };

  const handleTimeChange = (value: string) => {
    const fullDate = `${date}T${value}:00.000Z`;
    onChange(fullDate);
  };

  return (
    <>
      {isDesktop ? (
        <DateTimePicker.Desktop
          selectedDate={selectedDate}
          date={date}
          time={hours24}
          onDate={handleCalendarSelect}
          onTime={handleTimeChange}
        />
      ) : (
        <DateTimePicker.Mobile
          selectedDate={selectedDate}
          date={date}
          time={hours24}
          onDate={handleCalendarSelect}
          onTime={handleTimeChange}
        />
      )}
    </>
  );
};

DateTimePicker.Desktop = ({
  selectedDate,
  time,
  date,
  onTime,
  onDate,
}: PickerProps) => {
  const { isFocus, onBlur, onFocus } = useFocus();
  const { pointer, toggleScrollPointer } = useScrollPointer();
  // TODO: 자동닫힘기능 추가

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="date">
        <AccordionTrigger
          onClick={toggleScrollPointer}
          onBlurCapture={onBlur}
          onFocus={onFocus}
          className="flex gap-3"
        >
          <DateInput
            isFocus={isFocus}
            isSelected={!!selectedDate}
            date={date}
          />
          <TimePicker
            isSelect={!!selectedDate}
            time={time}
            onTime={onTime}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </AccordionTrigger>
        <AccordionContent>
          <Calendar
            className="p-5"
            mode="single"
            selected={selectedDate}
            onSelect={onDate}
          />
        </AccordionContent>
      </AccordionItem>
      <div ref={pointer} />
    </Accordion>
  );
};

DateTimePicker.Mobile = ({
  date,
  time,
  selectedDate,
  onDate,
  onTime,
}: PickerProps) => {
  const { isFocus, onBlur, onFocus } = useFocus();
  const { isOpen, onToggle, onClose } = useToggle();

  return (
    <div className="grid grid-cols-2 gap-3">
      <Sheet open={isOpen}>
        <SheetTrigger
          onClick={onToggle}
          onBlurCapture={onBlur}
          onFocus={onFocus}
        >
          <DateInput
            isFocus={isFocus}
            isSelected={!!selectedDate}
            date={date}
          />
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="rounded-t-3xl border-none pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 outline-none"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(value) => {
              onDate(value);
              onClose();
            }}
            className="p-4 pt-2"
            components={{
              Caption: ({ displayMonth }) => {
                const { goToMonth, nextMonth, previousMonth } = useNavigation();
                return (
                  <>
                    <button
                      className="absolute right-4 top-4 p-2"
                      onClick={onClose}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </button>
                    <div className="grid grid-cols-[minmax(4.5rem,auto)_1fr] gap-2">
                      <h1 className="pl-2 text-1 font-bold text-black-900">
                        {format(displayMonth, 'yyyy.MM')}
                      </h1>
                      <div className="flex gap-3">
                        <button
                          aria-label="previous month move button"
                          disabled={!previousMonth}
                          onClick={() =>
                            previousMonth && goToMonth(previousMonth)
                          }
                        >
                          <Calendar.LeftButton />
                        </button>
                        <button
                          aria-label="next month move button"
                          disabled={!nextMonth}
                          onClick={() => nextMonth && goToMonth(nextMonth)}
                        >
                          <Calendar.RightButton />
                        </button>
                      </div>
                    </div>
                  </>
                );
              },
            }}
          />
        </SheetContent>
      </Sheet>
      <TimePicker isSelect={!!selectedDate} time={time} onTime={onTime} />
    </div>
  );
};

export default DateTimePicker;
