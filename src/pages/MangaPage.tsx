import { Button, Container, Stack, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import SearchFilter from '../components/SearchFilter';
import MediaList from '../components/MediaList';

const MangaPage: FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Stack mt={'5rem'} mb={'1.5rem'}>
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: 'rgba(190, 183, 251, 1)',
            lineHeight: '1rem',
          }}
        >
          MaileHereko
        </Typography>
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
          Manga
        </Typography>
      </Stack>
      <SearchFilter setSearch={setSearch} />
      <Typography
        sx={{ mt: '3rem', mb: '1.5rem', color: 'rgba(118, 126, 148, 1)' }}
      >
        120 items
      </Typography>
      <MediaList page={page} search={search} type={'MANGA'} />
      <Stack direction={'row'} justifyContent={'center'} m={'2rem auto 3rem'}>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Stack>
    </Container>
  );
};

export default MangaPage;
