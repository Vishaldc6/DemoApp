import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';// import Icon from '@expo/vector-icons/Feather';
import Icon from 'react-native-vector-icons/Feather';

import {FontSizes} from '../../utils';
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
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props?.leftComponent ?? (
        <Icon name={props?.leftIcon} color={'white'} size={FontSizes.FONT_30} />
      )}
      {props?.rightComponent ?? (
        <Icon
          name={props?.rightIcon}
          color={'white'}
          size={FontSizes.FONT_30}
        />
      )}
    </View>
  );
};

export default BaseHeader;
