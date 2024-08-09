import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
      onChange={searchHandle}
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
