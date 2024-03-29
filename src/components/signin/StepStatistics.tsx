import Icon from '@/assets/Icon';
import { STEP_STATISTICS } from '@/constants/form';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

export type StatisticsType =
  | 'documentAssignment'
  | 'personalityWritten'
  | 'interview'
  | 'etc';

export type StatisticsProps = Record<StatisticsType, number>;

interface StatisticsSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statisticsVariants> {
  statistics: StatisticsProps;
}

const StepStatistics = forwardRef<HTMLDivElement, StatisticsSectionProps>(
  ({ statistics, variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(statisticsVariants({ variant }), className)}
        {...props}
      >
        {STEP_STATISTICS.map(({ name, type }) => (
          <div key={name} className={cn(typeBoxVariants({ variant }))}>
            {variant === 'colorful' && (
              <Icon name="tag" className={`${eventStyle[type]} w-4`} />
            )}
            <p className={cn(countVariants({ variant }))}>
              {statistics?.[type] ?? 0}
            </p>
            <p className={cn(textVariants({ variant }))}>{name}</p>
          </div>
        ))}
      </div>
    );
  },
);

const statisticsVariants = cva('grid', {
  variants: {
    variant: {
      default:
        'grid-cols-4 divide-x-1 rounded-xl divide-black-100 border border-black-100 text-center py-5 bg-white',
      colorful:
        'grid-cols-2 rounded-xl py-4 web:py-6 min-w-max xs:min-w-0 h-max bg-body w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const typeBoxVariants = cva('', {
  variants: {
    variant: {
      default: 'flex flex-col gap-1 web:gap-3',
      colorful:
        'grid grid-cols-[auto_1fr_auto] gap-2 xs:gap-0.5 items-center px-4 xs:px-2 web:px-6 odd:border-r border-black-100 h-6 web:h-8',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const countVariants = cva(
  'text-[1rem] xs:text-[0.8rem] font-bold text-black-800',
  {
    variants: {
      variant: {
        default: 'h-5',
        colorful: 'order-1 min-w-[1rem] text-center',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const textVariants = cva('text-[0.9rem] xs:text-[0.8rem] whitespace-nowrap', {
  variants: {
    variant: {
      default: 'text-black-600',
      colorful: 'text-black-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const eventStyle = {
  documentAssignment: 'fill-orange-100',
  personalityWritten: 'fill-blue-200',
  interview: 'fill-mint-100',
  etc: 'fill-purple-100',
};

export default StepStatistics;
