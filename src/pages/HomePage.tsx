import {
  Button,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState, type FC } from 'react';
import SearchFilter from '../components/SearchFilter';
import MediaList from '../components/MediaList';

const HomePage: FC = () => {
  const [mediaType, setMediaType] = useState<string | null>('');
  const [search, setSearch] = useState('');

  const handleMediaType = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null && newAlignment !== mediaType)
      setMediaType(newAlignment);
  };

  return (
    <Container>
      <Stack mt={'5rem'} mb={'1.5rem'}>
        <Typography
          component="h1"
          sx={{
            color: 'rgba(235, 238, 245, 1)',
            fontSize: '4rem',
            fontWeight: 600,
            lineHeight: '5rem',
            mb: '1rem',
          }}
        >
          MaileHereko
        </Typography>
        <Typography
          sx={{
            color: 'rgba(142, 149, 169, 1)',
            maxWidth: '36.75rem',
            lineHeight: '1.5rem',
          }}
        >
          List of anime and manga, I, Pramod Poudel have watched and read till
          date. Explore what I have watched and also feel free to make a
          suggestion. 😉
        </Typography>
      </Stack>
      <SearchFilter setSearch={setSearch} />
      <ToggleButtonGroup
        value={mediaType}
        exclusive
        onChange={handleMediaType}
        aria-label="Platform"
        sx={{ display: 'block', mt: '5rem', mb: '2rem' }}
      >
        <ToggleButton value="">All</ToggleButton>
        <ToggleButton value="Anime">Anime</ToggleButton>
        <ToggleButton value="Manga">Manga</ToggleButton>
      </ToggleButtonGroup>
      <Typography
        variant="h4"
        sx={{
          fontSize: '2rem',
          color: 'rgba(118, 126, 148, 1)',
          fontWeight: 600,
          lineHeight: '3rem',
          mb: '1.5rem',
        }}
      >
        {!mediaType ? 'All' : mediaType}
      </Typography>
      <MediaList search={search} type={mediaType?.toUpperCase()} />
      <Stack direction={'row'} justifyContent={'center'} m={'2rem auto 3rem'}>
        <Button>Prev</Button>
        <Button>Next</Button>
      </Stack>
    </Container>
  );
};

export default HomePage;
