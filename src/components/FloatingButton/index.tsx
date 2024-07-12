import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {FontSizes} from '../../utils';
import {styles} from './styles';

interface FloatingButoonProps {
  icon: string;
}

const FloatingButoon = (props: FloatingButoonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* menu icon */}
      <Icon name={props?.icon} size={FontSizes.FONT_22} />
    </TouchableOpacity>
  );
};

export default FloatingButoon;
