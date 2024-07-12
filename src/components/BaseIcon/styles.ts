import {StyleSheet} from 'react-native';
import {FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: wp(1),
  },
  titleStyle: {
    color: 'white',
    fontSize: FontSizes.FONT_12,
  },
});
