import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from 'redux/filterSlice';
// import { searchFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import { Search } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = newSymbol => {
    dispatch(searchFilter(newSymbol));
  };

  return (
    <Search>
      <input
        type="text"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Search..."
      />
    </Search>
  );
};
