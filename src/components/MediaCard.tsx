import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import type { FC } from 'react';

const MediaCard: FC<{
  coverImage?: string;
  title: string;
  loading: boolean;
}> = ({ coverImage, title }) => {
  return (
    <Grid
      item
      border={'1px solid rgba(0,0,0.14'}
      lg={2.5}
      sx={{ borderRadius: 2, width: { xs: '19.5rem', sm: '15rem' } }}
    >
      <Card
        sx={{
          maxWidth: '17.625rem',
          maxHeight: '30rem',
          bgcolor: 'rgba(32, 40, 62, 0.5)',
          padding: '8px',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={coverImage}
            alt="green iguana"
            sx={{
              borderRadius: '12px',
            }}
          />

          <CardContent>
            <Typography sx={{ fontWeight: 600, lineHeight: '1.5rem' }}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MediaCard;