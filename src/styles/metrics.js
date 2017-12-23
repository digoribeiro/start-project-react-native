import { Platform } from 'react-native';

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20, backgroundColor: 'red' },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
  tabBarHeight: 50,
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
};
