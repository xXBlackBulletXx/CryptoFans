import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../theme'
import I18nProvider from 'next-translate/I18nProvider'
import namespaces from '../locales'
import AuthProvider from '../contexts/Auth/AuthProvider'

export const decorators = [
  (Story, { args: { language, logged } }) => {
    return (
      <ThemeProvider theme={theme}>
        <I18nProvider namespaces={namespaces[language]} lang={language}>
          <CssBaseline />
          <AuthProvider logged={logged}>
            <Story />
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    )
  }
]

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  argTypes: {
    language: {
      control: {
        type: 'select',
      },
      options: ['en', 'it'],
      defaultValue: 'en'
    },
    logged: {
      control: {
        type: 'boolean',
      },
      defaultValue: false
    }
  }
}
