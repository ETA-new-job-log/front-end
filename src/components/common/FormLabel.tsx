import { ReactNode } from 'react';

interface FormLabelProps {
  id: string;
  label?: string;
  must?: boolean;
  message?: string;
  errorMessage?: string;
  children?: ReactNode;
}

const FormLabel = ({
  id,
  label,
  must = false,
  message,
  errorMessage,
  children,
}: FormLabelProps) => {
  return (
    <label htmlFor={id} className="flex flex-col gap-2 web:gap-4">
      {label && (
        <span className="text-black900 font-semibold w-max text-sm web:text-md">
          {label}
          {must && <span className="text-primary500"> *</span>}
          {message ? (
            <span className="text-black400 xs:-text-[10px] text-xxs web:text-xs font-normal pl-2">
              {message}
            </span>
          ) : errorMessage ? (
            <span className="text-primary500 xs:-text-[10px] text-xxs web:text-xs h-3 font-normal pl-2">
              {errorMessage}
            </span>
          ) : null}
        </span>
      )}
      {children}
    </label>
  );
};

export default FormLabel;
