import { Box } from '@material-ui/core';
import React from 'react';
import AuthLoginComponent from '../components/Auth/Auth.login'

export default {
  title: 'Auth',
  component: AuthLoginComponent,
  args: {}
};

const AuthStory = (args) => (
  <Box p={4}>
    <AuthLoginComponent {...args} />
  </Box>
)

export const AuthLogin = AuthStory.bind({})