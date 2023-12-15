import Button from '../common/Button';

interface ListEditButtonsProps {
  isEdit: boolean;
  onEditClick: () => void;
  onEditComplete: () => void;
}

const ListEditButtons = ({
  isEdit,
  onEditClick,
  onEditComplete,
}: ListEditButtonsProps) => {
  return (
    <>
      {isEdit ? (
        <Button
          size="sm"
          label="완료"
          active
          color="secondary"
          onClick={onEditComplete}
        />
      ) : (
        <Button
          size="sm"
          label="편집"
          active
          color="secondary"
          onClick={onEditClick}
        />
      )}
    </>
  );
};

export default ListEditButtons;
