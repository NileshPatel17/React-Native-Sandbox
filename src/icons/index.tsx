import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle> | undefined;
  containerstyle?: StyleProp<ViewStyle> | undefined;
};

export const EntypoIcon = ({size, name, color, style, containerstyle}: IconProps) => (
  <View style={containerstyle}>
    <Entypo
      size={size ?? 24}
      name={name}
      color={color ?? '#36303F'}
      style={style}
    />
  </View>
);
export const FeatherIcon = ({size, name, color, style, containerstyle}: IconProps) => (
  <View style={containerstyle}>
    <Feather
      size={size ?? 24}
      name={name}
      color={color ?? '#36303F'}
      style={style}
    />
  </View>
);

type IconButtonType = IconProps & {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const EntypoIconButton = (props: IconButtonType) => {
  const {containerStyle, onPress, ...iconProps} = props;
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <FeatherIcon {...iconProps} />
    </TouchableOpacity>
  );
};