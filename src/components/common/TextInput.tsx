import { InputHTMLAttributes, forwardRef } from 'react';
import FormLabel from './FormLabel';
import { FormIdType } from '@/model/form';
import useFocus from '@/hook/useFocus';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: FormIdType;
  must?: boolean;
  label?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, must, label, ...rest }, ref) => {
    const { isFocus, onFocus, onBlur } = useFocus();
    //TODO: 포커싱됐을때 보더 ${isFocus ? 'border-primary500' : 'border-black100'}

    return (
      <FormLabel id={id} label={label} must={must}>
        <span className="h-full">
          <input
            id={id}
            className={`w-full font-medium text-black900 bg-primary-bg border border-primary300 rounded-small text-xs web:text-md placeholder:text-black300 placeholder:text-xxs web:placeholder:text-sm placeholder:font-medium p-1.5 web:p-[0.8rem]`}
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
          />
        </span>
      </FormLabel>
    );
  },
);

export default TextInput;
