import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import {styles} from './styles';
import {FontSizes} from '../../utils';

interface BaseIconProps {
  icon: string;
  iconTitle: string;
  iconColor?: string;
  iconSize?: number;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const BaseIcon = (props: BaseIconProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Icon
        name={props.icon}
        color={props.iconColor ?? 'white'}
        size={props.iconSize ?? FontSizes.FONT_26}
      />
      <Text style={[styles.titleStyle, props.titleStyle]}>
        {props.iconTitle}
      </Text>
    </View>
  );
};

export default BaseIcon;
