import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAnime } from '../../service/graphql/hooks';
import LoadingCards from '../../components/LoadingCards';
import { Box, Container, Stack, Typography } from '@mui/material';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const DetailedAnimePage: FC = () => {
  const params = useParams();

  const { data, loading, error } = useGetAnime(params.id!);

  if (loading) return <LoadingCards count={20} />;

  if (error) return <h1>{error.message}</h1>;

  if (!data || !data.Media) {
    return <Typography>No data found</Typography>;
  }

  const anime = data.Media;

  return (
    <Container sx={{ mb: '10rem' }}>
      <Box
        sx={{
          position: 'relative',
          mt: '2.5rem',
          width: '75rem',
          mb: '9.5rem',
        }}
      >
        <img
          width={'100%'}
          src={anime.bannerImage!}
          alt="Banner"
          style={{ borderRadius: '2.5rem' }}
        />
        <Stack
          sx={{
            position: 'absolute',
            top: '75%',
            left: '7%',
            bgcolor: 'rgba(32, 40, 62, 0.8)',
            width: '30rem',
            height: '7rem',
            borderRadius: '1.5rem',
            justifyContent: 'center',
            pl: '2.5rem',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'rgba(190, 183, 251, 1)',
              mb: '0.5rem',
            }}
          >
            MaileHereko / Anime
          </Typography>
          <Typography
            sx={{ fontSize: '2rem', fontWeight: 600, lineHeight: '2.5rem' }}
          >
            {anime.title.english ? anime.title?.english : anime.title?.romaji}
          </Typography>
        </Stack>
      </Box>
      <Stack direction={'row'} gap={'5rem'} sx={{ justifyContent: 'center' }}>
        <Box>
          <img
            src={anime.coverImage?.extraLarge}
            alt="Cover image"
            style={{ width: '30rem', height: '45rem', borderRadius: '1.5rem' }}
          />
        </Box>
        <Stack gap={'1.5rem'}>
          <Typography sx={{ width: '30rem', color: 'rgba(142, 149, 169, 1)' }}>
            {anime.description}
          </Typography>
          <Stack
            direction={'row'}
            sx={{
              bgcolor: 'rgba(0, 0, 0, 0.65)',
              borderRadius: '0.5rem',
              width: '3.7rem',
              height: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 173, 73, 1)',
            }}
          >
            <StarOutlineOutlinedIcon sx={{ fontSize: '1.1rem' }} />
            <Typography color={'rgba(255, 173, 73, 1)'} fontSize={'1rem'}>
              {anime.averageScore! / 10}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={'12rem'}>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>Type</Typography>
              <Typography fontSize={'1.3rem'}>{anime.type}</Typography>
            </Stack>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>Status</Typography>
              <Typography fontSize={'1.3rem'}>{anime.status}</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'12rem'}>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>
                First air date
              </Typography>
              <Typography fontSize={'1.3rem'}>
                {`${anime.startDate?.year}-${anime.startDate?.month}-${anime.startDate?.day}`}
              </Typography>
            </Stack>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>
                Last air date
              </Typography>
              <Typography
                fontSize={'1.3rem'}
              >{`${anime.endDate?.year}-${anime.endDate?.month}-${anime.endDate?.day}`}</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'12rem'}>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>
                Episode runtime
              </Typography>
              <Typography fontSize={'1.3rem'}>{anime.duration} min</Typography>
            </Stack>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>
                No. of episodes
              </Typography>
              <Typography fontSize={'1.3rem'}>{anime.episodes}</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography color={'rgba(118, 126, 148, 1)'}>Genres</Typography>
            <Typography fontSize={'1.3rem'}>
              {anime.genres?.join(', ')}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default DetailedAnimePage;