import { Box, Grid } from '@mui/material';
import { useGetPage } from '../service/graphql/hooks';
import MediaCard from './MediaCard';
import LoadingCards from './LoadingCards';
import { FC } from 'react';

interface MediaListProps {
  type: string | undefined;
  search: string | undefined;
  page: number;
}

const MediaList: FC<MediaListProps> = ({ type, search, page }) => {
  const { data, loading, error } = useGetPage(type, search, page);

  if (error) return <h1>Error...</h1>;

  const media = data?.Page.media;

  return (
    <Box>
      <Grid container gap={'1.5rem'} justifyContent={'center'}>
        {loading ? (
          <LoadingCards count={20} />
        ) : (
          media?.map((anime) =>
            anime?.id &&
            anime?.coverImage?.extraLarge &&
            anime?.title?.english ? (
              <MediaCard
                key={anime.id}
                id={anime.id}
                coverImage={anime.coverImage.extraLarge}
                title={anime.title.english}
                type={type}
              />
            ) : null,
          )
        )}
      </Grid>
    </Box>
  );
};

export default MediaList;
