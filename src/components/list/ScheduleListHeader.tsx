import SubScheduleTitle from './SubScheduleTitle';
import { useCheckDispatch, useCheckState } from '@/context/CheckProvider';
import { useState } from 'react';
import Alert, { alertTypes } from '../common/Alert';
import { useToast } from '@/components/ui/use-toast';
import CheckButton from '@/components/list/CheckButton';
import DeleteButtons from './DeleteButtons';
import ListEditButtons from './ListEditButtons';
import { TOAST_MESSAGE } from '@/constants/toast';
import useSession from '@/hook/useSession';

interface ScheduleListHeaderProps {
  count?: number;
  isEdit: boolean;
  onEditClick: () => void;
  onCheckToggle: () => void;
  onDelete: (checkedIds: string[], token: string) => void;
  onCheckAll: () => void;
}

const ScheduleListHeader = ({
  count,
  isEdit,
  onEditClick,
  onCheckToggle,
  onDelete,
  onCheckAll,
}: ScheduleListHeaderProps) => {
  const { toast } = useToast();
  const { token } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string>();
  const { allChecked, checkedIds } = useCheckState();
  const { onUnCheckAll } = useCheckDispatch();

  const openMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  const handleDeleteAll = () => {
    setMessage('전체 일정을');
    onCheckAll();
    openMenu();
  };

  const handleDelete = () => {
    if (checkedIds.length === 0) return;
    if (checkedIds.length === count && checkedIds.length !== 1) {
      setMessage('일정을 모두');
    } else setMessage('선택한 일정을');
    openMenu();
  };

  const handleDeleteConfirm = () => {
    if (!token || !checkedIds.length) return;
    onDelete(checkedIds, token);
    deleteToast();
    handleCloseMenu();
    onUnCheckAll();
  };

  const deleteToast = () =>
    toast({
      description: TOAST_MESSAGE.DELETE,
    });

  const handleComplete = () => {
    onUnCheckAll();
    onEditClick();
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex flex-col bg-white">
        <div className="sticky top-0 z-20 flex justify-between bg-white px-[22px] pb-2 pt-[2rem] web:px-[28px]">
          <SubScheduleTitle label={'전체'} count={token ? count : 0} />
          <ListEditButtons
            isEdit={isEdit}
            onEditClick={onEditClick}
            onEditComplete={handleComplete}
          />
        </div>
        <div
          className={`sticky top-0 flex transform items-end justify-between px-[22px] pb-1.5 transition-all duration-300 ease-linear web:px-[28px] web:pb-3 ${
            isEdit ? 'translate-y-0' : 'h-0 -translate-y-24 opacity-0'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <CheckButton all checked={allChecked} onClick={onCheckToggle} />
            <span className="text-sm font-bold text-black900 xs:text-xxs">
              전체 선택
            </span>
          </div>
          <DeleteButtons
            onDeleteAll={handleDeleteAll}
            onDelete={handleDelete}
          />
        </div>
      </header>
      {isOpen && (
        <Alert
          message={`${message} ${alertTypes.DELETE}할까요?`}
          type={[
            {
              value: alertTypes.CANCEL,
              onClick: handleCloseMenu,
            },
            {
              value: alertTypes.DELETE,
              onClick: handleDeleteConfirm,
            },
          ]}
          onClose={handleCloseMenu}
        />
      )}
    </>
  );
};

export default ScheduleListHeader;
