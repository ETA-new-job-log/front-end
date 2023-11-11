import Icon from '@/assets/Icon';
import Badge from '../common/Badge';
import BackButton from './BackButton';
import NavBar from '../common/NavBar';
import DetailMoreMenu from '../detail/DetailMoreMenu';
import { getFormattedDate } from '@/service/date';
import { getBadgeByStep } from '@/service/schedule';

interface DetailNavBarProps {
  id: string;
  title: string;
  step: string;
  date: string;
}

const DetailNavBar = ({ id, title, step, date }: DetailNavBarProps) => {
  const { fullDate, day } = getFormattedDate(date);
  const bagdeName = getBadgeByStep(step);

  return (
    <div className="sticky top-0 bg-white">
      <NavBar
        leftSection={<BackButton />}
        rightSection={<DetailMoreMenu scheduleId={id} />}
      />
      <div className="flex flex-col gap-2 pb-4 web:pb-[34px] border-b border-black100 mx-[22px] web:mx-[28px]">
        <div className="flex gap-3 items-center">
          <h1 className="text-black900 font-bold text-md web:text-xl">
            {title}
          </h1>
          {bagdeName && <Badge label={bagdeName} />}
        </div>
        <span className="text-black600 font-medium flex gap-2 items-center text-xxs web:text-sm">
          <Icon
            name="calendar"
            className="w-3 h-3 web:w-4 web:h-4 stroke-black600"
          />
          {fullDate}.{day}
        </span>
      </div>
    </div>
  );
};

export default DetailNavBar;
