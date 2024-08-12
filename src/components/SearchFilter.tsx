import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '../service/graphql/hooks';
import { useEffect, useState } from 'react';

interface SearchFilterProps {
  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  setSearch: (value: string) => void;
}

const SearchFilter = ({
  xsWidth,
  smWidth,
  mdWidth,
  setSearch,
}: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <TextField
      placeholder="Search Anime or Manga"
      sx={{
        width: {
          xs: xsWidth,
          sm: smWidth,
          md: mdWidth,
          maxWidth: '21.5rem',
          fontSize: '0.825rem',
        },
      }}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchFilter;
