import Icon from '@/assets/Icon';
import { convertDateFormat } from '@/service/date';
import { formPlaceholderStyle, formTextStyle } from './Form';

interface DateInputProps {
  date: string;
  isFocus: boolean;
  isSelected: boolean;
}

const DateInput = ({ date, isFocus, isSelected }: DateInputProps) => {
  return (
    <span
      className={`flex h-full w-full items-center justify-between rounded-small border-1 pr-3 ${isFocus || isSelected ? 'border-primary-300 ' : 'border-black-100'} ${isSelected ? 'bg-primary-light-50' : ''}`}
    >
      <span
        className={`px-[0.8rem] py-2 ${isSelected ? formTextStyle : `${formPlaceholderStyle} text-0.95`}`}
      >
        {convertDateFormat(date)}
      </span>
      <Icon
        name="calendar"
        className={`h-4 w-4 web:h-5 web:w-5 ${
          isSelected ? 'stroke-black-900' : 'stroke-black-300'
        }`}
      />
    </span>
  );
};

export default DateInput;
