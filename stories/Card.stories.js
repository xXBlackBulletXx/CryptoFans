import { Box, Grid } from '@material-ui/core';
import React from 'react';
import CardComponent from '../components/Card/Card';

export default {
  title: 'Card',
  component: CardComponent,
  args: {
    imageUrl: 'https://picsum.photos/400/400/?blur=4',
    hashtags: ['feet', 'boh']
  }
};

//👇 We create a “template” of how args map to rendering
const CardStory = (args) => (
  <Box m={4}>
    <Grid item sm={3}>
      <CardComponent {...args} />
    </Grid>
  </Box>
);

//👇 Each story then reuses that template
export const Card = CardStory.bind({});