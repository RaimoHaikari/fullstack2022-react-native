import { useDebouncedCallback } from 'use-debounce';
import { Searchbar } from 'react-native-paper';

const SearchBarContainer = ({searchStr, searchSrtHandler}) => {

  const DELAY = 50;

  const debounced = useDebouncedCallback(
    (value) => {
      searchSrtHandler(value)
    },
    DELAY
  )

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(query) => debounced(query)}
      value={searchStr}
    />
  );
};

export default SearchBarContainer;