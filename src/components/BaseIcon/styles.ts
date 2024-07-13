import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: wp(1),
  },
  titleStyle: {
    color: AppColors.SECONDARY_TEXT,
    fontSize: FontSizes.FONT_13,
  },
});
