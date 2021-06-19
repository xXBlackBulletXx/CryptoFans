import React from 'react';
import HeaderComponent from '../components/Header/Header';

export default {
  title: 'Header',
  component: HeaderComponent,
  argTypes: {},
  args: {}
};

//👇 We create a “template” of how args map to rendering
const HeaderStory = (args) => <HeaderComponent {...args} />;

//👇 Each story then reuses that template
export const Header = HeaderStory.bind({});