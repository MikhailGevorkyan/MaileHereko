import { Box, Grid } from '@mui/material';
import { useGetPage } from '../service/graphql/hooks';
import MediaCard from './MediaCard';
import LoadingCards from './LoadingCards';
import { FC } from 'react';

interface MediaListProps {
  type: string | undefined;
  search: string | undefined;
}

const MediaList: FC<MediaListProps> = ({ type, search }) => {
  const { data, loading, error } = useGetPage(type, search);

  if (error) return <h1>Error...</h1>;

  const media = data?.Page.media;

  return (
    <Box>
      <Grid container gap={'1.5rem'} justifyContent={'center'}>
        {loading ? (
          <LoadingCards count={50} />
        ) : (
          media?.map((anime) =>
            anime?.id &&
            anime?.coverImage?.extraLarge &&
            anime?.title?.english ? (
              <MediaCard
                key={anime.id}
                coverImage={anime.coverImage.extraLarge}
                title={anime.title.english}
                loading={loading}
              />
            ) : null,
          )
        )}
      </Grid>
    </Box>
  );
};

export default MediaList;
