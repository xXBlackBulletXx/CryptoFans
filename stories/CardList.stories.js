import { Box } from '@material-ui/core';
import React from 'react';
import CardListComponent from '../components/Card/CardList';

export default {
  title: 'Card List',
  component: CardListComponent,
  args: {
    cards: [
      {
        imageUrl: 'https://picsum.photos/400/400/?blur=4',
        hashtags: ['feet', 'boh'],
        biddable: false,
      },
      {
        imageUrl: 'https://picsum.photos/500/400/?blur=4',
        hashtags: ['other', 'curvy'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/200/400/?blur=4',
        hashtags: ['feet', 'boh'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/600/400/?blur=4',
        hashtags: ['other', 'curvy'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/400/300/?blur=4',
        hashtags: ['feet', 'boh'],
        biddable: false,
      },
      {
        imageUrl: 'https://picsum.photos/500/600/?blur=4',
        hashtags: ['other', 'curvy'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/400/400/?blur=4',
        hashtags: ['feet', 'boh'],
        biddable: false,
      },
      {
        imageUrl: 'https://picsum.photos/500/400/?blur=4',
        hashtags: ['other', 'curvy'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/200/400/?blur=4',
        hashtags: ['feet', 'boh'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/600/400/?blur=4',
        hashtags: ['other', 'curvy'],
        biddable: true,
      },
      {
        imageUrl: 'https://picsum.photos/400/300/?blur=4',
        hashtags: ['feet', 'boh'],
        biddable: false,
      },
      {
        imageUrl: 'https://picsum.photos/500/600/?blur=4',
        hashtags: ['other', 'curvy'],
        biddable: true,
      },
    ]
  }
};

const CardListStory = (args) => (
  <Box p={4}>
    <CardListComponent {...args} />
  </Box>
)

export const CardList = CardListStory.bind({})