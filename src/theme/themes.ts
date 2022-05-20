import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { Themes } from './types';

const sharedTheme = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      primary: {
        main: '#ec4141',
      },
      secondary: {
        main: '#fbd9d9',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      primary: {
        main: '#222225',
      },
      secondary: {
        main: '#adafb2',
      },
    },
  }),
};

export default themes;
