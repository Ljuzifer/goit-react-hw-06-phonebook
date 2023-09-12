import { Search } from './Filter.styled';

export const Filter = ({ nameFilter, onChange }) => {
  return (
    <Search>
      <input
        type="text"
        value={nameFilter}
        onChange={e => onChange(e.target.value)}
        placeholder='Search...'
      />
    </Search>
  );
};
