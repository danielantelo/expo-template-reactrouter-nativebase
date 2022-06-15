import { extendTheme } from 'native-base';

import { Select } from './components/Select';

export const nativeBaseTheme = extendTheme({
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 28,
  },
  components: {
    Select,
  },
});
