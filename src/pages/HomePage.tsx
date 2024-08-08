import { Container, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import SearchFilter from '../components/SearchFilter';

const HomePage: FC = () => {
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
      <SearchFilter />
    </Container>
  );
};

export default HomePage;
