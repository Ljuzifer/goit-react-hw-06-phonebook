import { HiMicrophone } from 'react-icons/hi';

export const ContactItem = ({ details: { name, number, id }, onDelete }) => {
  return (
    <>
      <HiMicrophone />
      <span>{name}</span>
      <div>
        <span>{number} </span>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};
