import {StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.SECONDARY_TEXT,
    elevation: 5,
    zIndex: 9999999999,
    position: 'absolute',
    right: wp(5),
    bottom: wp(5),
    padding: wp(4),
    borderRadius: wp(8),
  },
});
