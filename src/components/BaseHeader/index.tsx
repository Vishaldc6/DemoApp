import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AppColors, FontSizes, wp} from '../../utils';
import {styles} from './styles';

interface BaseHeaderProps {
  containerStyle?: ViewStyle;
  leftIcon?: string;
  leftIconOnPress?: () => void;
  rightIcon?: string;
  rightIconOnPress?: () => void;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}
const BaseHeader = (props: BaseHeaderProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        {paddingTop: top + wp(3)},
        styles.container,
        props.containerStyle,
      ]}>
      {props?.leftComponent ?? (
        <Icon name={props?.leftIcon} color={AppColors.SECONDARY_TEXT} size={FontSizes.FONT_30} />
      )}
      {props?.rightComponent ?? (
        <Icon
          name={props?.rightIcon}
          color={AppColors.SECONDARY_TEXT}
          size={FontSizes.FONT_30}
        />
      )}
    </View>
  );
};

export default BaseHeader;
