import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const palette = {
  primary: {
    main: '#556cd6',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: red.A400,
  },
  background: {
    default: '#fff',
  },
  common: {
    lightGray: '#E5E5E5',
    silverFox: '#c8c8c8',
    grayson: '#757575',
    ultralightGray: '#fbfbfb'
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  props: {
    MuiContainer: {
      maxWidth: 'xl',
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiPaper: {
      root: {
        width: '100%',
        height: '100%'
      },
      elevation1: {
        boxShadow: '0px 10px 20px rgb(0 0 0 / 5%)'
      },
      elevation2: {
        boxShadow: '0px 10px 20px rgb(0 0 0 / 10%)'
      },
      elevation3: {
        boxShadow: '0px 10px 20px rgb(0 0 0 / 15%)'
      },
      elevation4: {
        boxShadow: '0px 10px 20px rgb(0 0 0 / 20%)'
      },
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '-apple-system',
      'Roobert-SemiBold',
      'Roobert-Medium',
    ].join(',')
  },
  palette,
  shadows: [
    'none',
    '0px 10px 20px rgb(0 0 0 / 5%)',
    '0px 10px 20px rgb(0 0 0 / 10%)',
    '0px 10px 20px rgb(0 0 0 / 15%)',
    '0px 10px 20px rgb(0 0 0 / 20%)',
    '0px 10px 20px rgb(0 0 0 / 25%)',
    '0px 10px 20px rgb(0 0 0 / 30%)',
    '0px 10px 20px rgb(0 0 0 / 35%)',
    '0px 10px 20px rgb(0 0 0 / 40%)',
    '0px 10px 20px rgb(0 0 0 / 45%)',
    '0px 10px 20px rgb(0 0 0 / 50%)',
    '0px 10px 20px rgb(0 0 0 / 55%)',
    '0px 10px 20px rgb(0 0 0 / 60%)',
  ],
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
      xxl: 1920
    }
  }
});

export default responsiveFontSizes(theme);