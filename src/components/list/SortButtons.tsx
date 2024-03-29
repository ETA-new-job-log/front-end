import Icon from '@/assets/Icon';
import { memo } from 'react';
import { SortTypes } from './FilterList';

const sortLabel: Record<SortTypes, string> = {
  latest: '최신순',
  createdAt: '등록순',
};

interface SortButtonsProps {
  current: SortTypes;
  onSort: (sort: SortTypes) => void;
}

const SortButtons = ({ current, onSort }: SortButtonsProps) => {
  return (
    <div className="flex gap-3">
      {Object.keys(sortLabel).map((key) => {
        const label = key as SortTypes;
        const isCurrent = current === label;
        return (
          <button
            id={`sort_${label}`}
            key={label}
            className="flex items-center justify-center gap-1"
            onClick={() => onSort(label)}
          >
            <Icon
              name="ellipse"
              className={`${isCurrent ? 'fill-primary-500' : 'fill-black-600'}`}
            />
            <span
              className={`${
                isCurrent ? 'text-primary-500' : 'text-black-600'
              } text-0.85 font-semibold`}
            >
              {sortLabel[label]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default memo(SortButtons);
