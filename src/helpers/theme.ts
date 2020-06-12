import { get } from 'lodash';

const theme = {
  primary: '#07090A ',
  secondary: '#DDD',
  stroke: '#2f373df2',
  white: '#FFF',
};

export const getColor = (color: string) : string => get(theme, color, theme.primary);

export default theme;
