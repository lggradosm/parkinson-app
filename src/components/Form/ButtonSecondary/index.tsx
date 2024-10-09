import { Text, TouchableOpacity } from "react-native";
import styles from "./ButtonSecondary.styles";
type Props = {
  onPressHandler: () => void;
  title: string;
  disabled?: boolean;
};

export default function ButtonSecondary({
  onPressHandler,
  title,
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      disabled={disabled}
      onPress={onPressHandler}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.textButton,
          disabled ? styles.textDisabled : styles.textEnabled,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
