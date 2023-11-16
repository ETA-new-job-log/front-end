import { InputHTMLAttributes, forwardRef } from 'react';
import FormLabel from './FormLabel';
import { FormIdType } from '@/model/form';
import useFocus from '@/hook/useFocus';
import Icon from '@/assets/Icon';
import ResetIcon from '@/assets/ResetIcon';

interface TextInputWithResetProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: FormIdType;
  must?: boolean;
  label?: string;
  onReset?: () => void;
}

const TextInputWithReset = forwardRef<
  HTMLInputElement,
  TextInputWithResetProps
>(({ id, must, label, type = 'text', onReset, ...rest }, ref) => {
  const { isFocus, onFocus, onBlur } = useFocus();

  return (
    <FormLabel id={id} label={label} must={must}>
      {onReset && (
        <span className="relative">
          <input
            id={id}
            className={`w-full h-10 web:h-12 font-medium text-black900 bg-primary-bg border-[0.8px] border-primary300 rounded-small text-xs web:text-sm placeholder:text-black300 placeholder:text-xs web:placeholder:text-sm placeholder:font-medium py-2 pl-[0.8rem] pr-10`}
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
          />
          {!!rest.value && (
            <button
              type="button"
              onClick={onReset}
              className="absolute right-3 h-10 web:h-12"
            >
              <ResetIcon />
            </button>
          )}
        </span>
      )}
    </FormLabel>
  );
});

export default TextInputWithReset;
