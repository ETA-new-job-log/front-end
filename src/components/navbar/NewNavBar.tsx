import NavBar from '../common/NavBar';
import BackButton from './BackButton';
import SubmitButton from './SubmitButton';

interface NewNavBarProps {
  hasOrigin: boolean;
  isValid: boolean;
}

const NewNavBar = ({ hasOrigin, isValid }: NewNavBarProps) => {
  return (
    <div className="sticky top-0 z-20 h-full w-full bg-white pt-safe-top">
      <NavBar
        label={hasOrigin ? '일정수정' : '일정등록'}
        leftSection={<BackButton />}
        rightSection={
          <SubmitButton label={hasOrigin ? '수정' : '저장'} active={isValid} />
        }
      />
    </div>
  );
};

export default NewNavBar;
